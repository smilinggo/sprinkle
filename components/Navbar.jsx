import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/router';

const Navbar = () => {
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav
      className={`${
        router.pathname === '/' ? 'bg-white' : 'bg-pink'
      } shadow-lg`}
    >
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0">
              <Link href="/">
                <a
                  className={`${
                    router.pathname === '/'
                      ? 'text-gray-900'
                      : 'text-white'
                  } text-2xl font-bold`}
                >
                  My Bakery
                </a>
              </Link>
            </div>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                <Link href="/">
                  <a
                    className={`${
                      router.pathname === '/'
                        ? 'text-gray-900'
                        : 'text-gray-300 hover:text-white'
                    } px-3 py-2 rounded-md text-sm font-medium`}
                  >
                    Home
                  </a>
                </Link>
                <Link href="/about">
                  <a
                    className={`${
                      router.pathname === '/about'
                        ? 'text-gray-900'
                        : 'text-gray-300 hover:text-white'
                    } px-3 py-2 rounded-md text-sm font-medium`}
                  >
                    About Us
                  </a>
                </Link>
                <Link href="/flavors">
                  <a
                    className={`${
                      router.pathname === '/flavors'
                        ? 'text-gray-900'
                        : 'text-gray-300 hover:text-white'
                    } px-3 py-2 rounded-md text-sm font-medium`}
                  >
                    Flavors
                  </a>
                </Link>
                <Link href="/gallery">
                  <a
                    className={`${
                      router.pathname === '/gallery'
                        ? 'text-gray-900'
                        : 'text-gray-300 hover:text-white'
                    } px-3 py-2 rounded-md text-sm font-medium`}
                  >
                    Gallery
                  </a>
                </Link>
                <Link href="/testimonials">
                  <a
                    className={`${
                      router.pathname === '/testimonials'
                        ? 'text-gray-900'
                        : 'text-gray-300 hover:text-white'
                    } px-3 py-2 rounded-md text-sm font-medium`}
                  >
                    TASTEmonials
                  </a>
                </Link>
                <Link href="/order">
                  <a
                    className={`${
                      router.pathname === '/order'
                        ? 'text-gray-900'
                        : 'text-gray-300 hover:text-white'
                    } px-3 py-2 rounded-md text-sm font-medium`}
              >
                Order
              </a>
            </Link>
          </div>
        </div>
        <div className="flex-1 flex items-center justify-end">
          <div className="flex items-center">
            <button
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white sm:hidden"
              aria-expanded={isMobileMenuOpen}
              aria-label="Open mobile menu"
            >
              <svg
                className={`${
                  isMobileMenuOpen ? 'hidden' : 'block'
                } h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className={`${
                  isMobileMenuOpen ? 'block' : 'hidden'
                } h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div
    className={`${
      isMobileMenuOpen ? 'block' : 'hidden'
    } sm:hidden bg-gray-800`}
  >
    <div className="px-2 pt-2 pb-3 space-y-1">
      <Link href="/">
        <a
          className={`${
            router.pathname === '/'
              ? 'text-white'
              : 'text-gray-300 hover:text-white'
          } block px-3 py-2 rounded-md text-base font-medium`}
        >
          Home
        </a>
      </Link>
      <Link href="/about">
        <a
          className={`${
            router.pathname === '/about'
              ? 'text-white'
              : 'text-gray-300 hover:text-white'
          } block px-3 py-2 rounded-md text-base font-medium`}
        >
          About Us
        </a>
      </Link>
      <Link href="/flavors">
        <a
          className={`${
            router.pathname === '/flavors'
              ? 'text-white'
              : 'text-gray-300 hover:text-white'
          } block px-3 py-2 rounded-md text-base font-medium`}
        >
          Flavors
        </a>
      </Link>
      <Link href="/gallery">
        <a
          className={`${
            router.pathname === '/gallery'
              ? 'text-white'
              : 'text-gray-300 hover:text-white'
          } block px-3 py-2 rounded-md text-base font-medium`}
        >
          Gallery
        </a>
      </Link>
      <Link href="/testimonials">
        <a
          className={`${
            router.pathname === '/testimonials'
              ? 'text-white'
              : 'text-gray-300 hover:text-white'
          } block px-3 py-2 rounded-md text-base font-medium} > TASTEmonials </a> </Link> <Link href="/order"> <a className={${
router.pathname === '/order'
? 'text-white'
: 'text-gray-300 hover:text-white'
} block px-3 py-2 rounded-md text-base font-medium`}
>
Order
</a>
</Link>
</div>
</div>
</nav>
);
};

export default Navbar;






