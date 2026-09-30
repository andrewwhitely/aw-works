import { useState } from 'react';
import { createPortal } from 'react-dom';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../hooks/useTheme';

interface Props {
  onOpenCmd: () => void;
}

export default function Nav({ onOpenCmd }: Props) {
  const [open, setOpen] = useState(false);
  const { toggle, theme } = useTheme();
  const location = useLocation();

  function closeMenu() {
    setOpen(false);
  }

  const path = location.pathname.replace(/\/+$/, '');
  const isHomeActive = path === '';
  const isBlogActive = path.startsWith('/notes');
  const isWorksActive = path.startsWith('/works');
  const isPhotosActive = path.startsWith('/photos');
  // const isBookmarksActive = path.startsWith('/bookmarks');
  const isFriendsActive = path.startsWith('/friends');
  const isUsesActive = path.startsWith('/uses');
  const ua = navigator.userAgent;

  return (
    <nav>
      <div className='wrap'>
        <div className='nav-inner'>
          <Link to='/' className='nav-brand'>
            <span className='dim'>~/</span>andrewwhitely
          </Link>

          <button className='mobile-btn' onClick={() => setOpen((o) => !o)}>
            [menu]
          </button>

          <div className={'nav-links' + (open ? ' open' : '')}>
            <Link
              to='/'
              className={isHomeActive ? 'nav-active' : ''}
              onClick={closeMenu}
            >
              home
            </Link>
            <Link
              to='/notes'
              className={isBlogActive ? 'nav-active' : ''}
              onClick={closeMenu}
            >
              field notes
            </Link>
            <Link
              to='/works'
              className={isWorksActive ? 'nav-active' : ''}
              onClick={closeMenu}
            >
              works
            </Link>
            <Link
              to='/photos'
              className={isPhotosActive ? 'nav-active' : ''}
              onClick={closeMenu}
            >
              photos
            </Link>
            {/* <Link
              to='/bookmarks'
              className={isBookmarksActive ? 'nav-active' : ''}
              onClick={closeMenu}
            >
              bookmarks
            </Link> */}
            <Link
              to='/friends'
              className={isFriendsActive ? 'nav-active' : ''}
              onClick={closeMenu}
            >
              friends
            </Link>
            <Link
              to='/uses'
              className={isUsesActive ? 'nav-active' : ''}
              onClick={closeMenu}
            >
              uses
            </Link>
            <button
              className='theme-btn'
              style={{ marginRight: '0.25rem' }}
              onClick={onOpenCmd}
            >
              {ua.includes('Mac') ? '[cmd + k]' : ua.includes('Win') ? '[ctrl + k]' : '[menu]'}
            </button>
            <button className='theme-btn' onClick={toggle}>
              {theme === 'light' ? 'dark' : 'light'}
            </button>
          </div>
        </div>
      </div>
      {open && createPortal(
        <div className="nav-overlay open" onClick={closeMenu} />,
        document.body
      )}
    </nav>
  );
}
