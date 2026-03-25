import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Current from './Current';

const navItems = {
  '/': { name: 'home' },
  '/about': { name: 'about' },
  '/experience': { name: 'experience' },
  '/works': { name: 'works' },
  '': { name: '·' },
  '/fieldnotes': { name: 'field notes' },
  '/friends': { name: 'friends' },
  '/uses': { name: 'uses' },
};

export function Navbar() {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <nav className='pt-5'>
      <div className='flex items-center justify-between'>
        <Link
          to='/'
          className='text-sm font-medium tracking-tight text-[#111111] hover:text-[#666666] transition-colors'
          onClick={() => setOpen(false)}
        >
          Andrew Whitely
        </Link>

        {/* Desktop nav */}
        <div className='hidden sm:flex gap-6'>
          {Object.entries(navItems).map(([path, { name }]) => (
            <Link
              key={path}
              to={path}
              className={
                `text-sm transition-colors ${
                  pathname === path
                    ? 'text-[#111111]'
                    : 'text-[#666666] hover:text-[#111111]'
                }` + (path === '' ? ' cursor-default pointer-events-none' : '')
              }
            >
              {name}
            </Link>
          ))}
        </div>

        {/* Mobile hamburger — lines animate into X */}
        <button
          className='sm:hidden flex flex-col justify-center gap-[5px] w-5 h-5 text-[#666666] hover:text-[#111111] transition-colors'
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          <span
            className='block h-px bg-current transition-all duration-300 origin-center'
            style={{
              transform: open ? 'translateY(6px) rotate(45deg)' : 'none',
            }}
          />
          <span
            className='block h-px bg-current transition-all duration-300'
            style={{
              opacity: open ? 0 : 1,
              transform: open ? 'scaleX(0)' : 'none',
            }}
          />
          <span
            className='block h-px bg-current transition-all duration-300 origin-center'
            style={{
              transform: open ? 'translateY(-6px) rotate(-45deg)' : 'none',
            }}
          />
        </button>
      </div>

      {/* Mobile menu — grid-rows trick for smooth height animation */}
      <div
        className='sm:hidden grid transition-[grid-template-rows] duration-300 ease-in-out'
        style={{ gridTemplateRows: open ? '1fr' : '0fr' }}
      >
        <div className='overflow-hidden'>
          <div className='mt-4 flex flex-col gap-4 border-t border-b border-[#e0e0e0] py-4'>
            {Object.entries(navItems)
              .filter(([path]) => path !== '')
              .map(([path, { name }]) => (
                <Link
                  key={path}
                  to={path}
                  onClick={() => setOpen(false)}
                  className={`text-sm transition-colors ${
                    pathname === path
                      ? 'text-[#111111]'
                      : 'text-[#666666] hover:text-[#111111]'
                  }`}
                >
                  {name}
                </Link>
              ))}
          </div>
        </div>
      </div>

      <Current />
      <div className='mt-4 pt-4  border-t border-[#e0e0e0]' />
    </nav>
  );
}
