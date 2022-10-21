import { FaChevronRight as IconRight } from 'react-icons/fa';

import Link from 'next/link';

const NavBar = () => {
  return (
    <nav className="relative w-full p-6 flex justify-between items-center border-b border-gray-light">
      <span className="uppercase font-display text-[28px] tracking-[-1.05px]">
        The planets
      </span>

      <span className="flex flex-col gap-1">
        <div className="w-24 h-3 bg-white"></div>
        <div className="w-24 h-3 bg-white"></div>
        <div className="w-24 h-3 bg-white"></div>
      </span>

      <ul className="absolute w-full px-6 top-28 left-0 flex flex-col">
        <Link href="/mercury">
          <a className="py-5 flex justify-between items-center border-b border-gray-light">
            <div className="flex items-center gap-6">
              <div className="w-5 h-5 bg-[#def4fc] rounded-full"></div>
              <span className="uppercase font-bofy font-bold tracking-wide">Mercury</span>
            </div>

            <IconRight className="opacity-40" />
          </a>
        </Link>
      </ul>
    </nav>
  );
};

export default NavBar;
