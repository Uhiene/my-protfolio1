// Inside./components/NavItem.tsx

import Link from 'next/link';

interface NavItemProps {
  text: string;
  href: string;
  active?: boolean; // Optional because it's not always necessary to know if a nav item is active
}

const NavItem: React.FC<NavItemProps> = ({ text, href, active = false }) => {
  return (
    <Link href={href} passHref>
      <li className={`nav__item style-none ${active? 'active' : ''}`}>{text}</li>
    </Link>
  );
};

export default NavItem;
