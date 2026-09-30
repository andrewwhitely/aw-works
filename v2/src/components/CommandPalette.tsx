import { useEffect, useMemo, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getCmdItems, type CmdItem } from '../lib/cmdItems';

export interface CommandPaletteHandle {
  open: () => void;
}

interface Props {
  registerOpen: (fn: () => void) => void;
}

function cmdMatches(item: CmdItem, filter: string): boolean {
  const q = filter.toLowerCase();
  if (!q) return true;
  if (item.label.toLowerCase().includes(q)) return true;
  if ((item.href || '').toLowerCase().includes(q)) return true;
  if ((item.key || '').toLowerCase().includes(q)) return true;
  return false;
}

export default function CommandPalette({ registerOpen }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [filter, setFilter] = useState('');
  const [activeIdx, setActiveIdx] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const items = useMemo(() => getCmdItems(), []);

  const filtered = useMemo(() => {
    if (!filter) return items;
    const matched = items.filter((i) => cmdMatches(i, filter));
    const include = new Set<string>();
    matched.forEach((item) => {
      include.add(item.href);
      if (item.parent) include.add(item.parent);
      items.forEach((child) => {
        if (child.parent === item.href) include.add(child.href);
      });
    });
    return items.filter((i) => include.has(i.href));
  }, [items, filter]);

  function open() {
    setFilter('');
    setActiveIdx(0);
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  }

  useEffect(() => {
    registerOpen(open);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (isOpen) inputRef.current?.focus();
  }, [isOpen]);

  function goTo(item: CmdItem) {
    close();
    if (item.external || /^https?:/.test(item.href)) {
      window.open(item.href, '_blank');
    } else if (item.href.startsWith('/#')) {
      navigate(item.href.slice(1));
    } else {
      navigate(item.href);
    }
  }

  useEffect(() => {
    function onKeydown(e: KeyboardEvent) {
      if (isOpen) {
        if (e.key === 'Escape') {
          close();
        } else if (e.key === 'ArrowDown') {
          e.preventDefault();
          setActiveIdx((i) => Math.min(i + 1, filtered.length - 1));
        } else if (e.key === 'ArrowUp') {
          e.preventDefault();
          setActiveIdx((i) => Math.max(i - 1, 0));
        } else if (e.key === 'Enter') {
          if (filtered[activeIdx]) goTo(filtered[activeIdx]);
        }
      } else {
        const target = document.activeElement;
        if (e.key === 'k' && target?.tagName !== 'INPUT') {
          e.preventDefault();
          open();
        }
      }
    }
    document.addEventListener('keydown', onKeydown);
    return () => document.removeEventListener('keydown', onKeydown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen, filtered, activeIdx]);

  return (
    <div
      id='cmd-overlay'
      className={isOpen ? 'open' : ''}
      onClick={(e) => {
        if (e.target === e.currentTarget) close();
      }}
    >
      <div id='cmd-box'>
        <div id='cmd-input-wrap'>
          <span className='ps1'>~ » $</span>
          <input
            id='cmd-input'
            ref={inputRef}
            type='text'
            placeholder='jump to...'
            autoComplete='off'
            spellCheck={false}
            value={filter}
            onChange={(e) => {
              setFilter(e.target.value);
              setActiveIdx(0);
            }}
          />
        </div>
        <div id='cmd-results'>
          {filtered.map((item, idx) => (
            <div key={item.href + item.label}>
              {item.external && !filtered[idx - 1]?.external && <hr id="cmd-hr" />}
              <div
                className={
                  'cmd-item' +
                  (idx === activeIdx ? ' active' : '') +
                  (item.key === '·' ? ' nested' : '')
                }
                onMouseEnter={() => setActiveIdx(idx)}
                onClick={() => goTo(item)}
              >
                <span className="cmd-key">{item.key}</span>
                {item.label}
              </div>
            </div>
          ))}
        </div>
        <div id='cmd-hint'>
          ↑↓ navigate &nbsp;·&nbsp; enter select &nbsp;·&nbsp; esc close
          &nbsp;·&nbsp; press / to open
        </div>
      </div>
    </div>
  );
}
