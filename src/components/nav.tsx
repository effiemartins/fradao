import Link from "next/link";

import { useRouter } from "next/router";
import { useTheme } from "next-themes";

import ThemeToggle from "./themetoggle";
import ReactTooltip from "react-tooltip";
import { FiCoffee, FiHome } from "react-icons/fi";

const navItems: { label: string; page?: string; link?: string }[] = [
  { label: "About", page: "/about" },
  { label: "Home", page: "/" },
];

const Nav = ({ titlePre = "" }) => {
  const { pathname } = useRouter();
  const { theme } = useTheme();

  return (
    <div className="nav">
      <ul>
        {navItems.map(({ label, page, link }) => (
          <li
            className={pathname === page ? "hidden nav-list-item" : undefined}
            key={label}
          >
            <Link href={page}>
              <a>{label}</a>
            </Link>
          </li>
        ))}
        <li>
          <a href="https://www.mintbase.io/store/techne.mintbase1.near/mint">
            Mintbase
          </a>
        </li>
        <li>
          <a href="https://gov.near.org/search?q=fradao">Near Forum</a>
        </li>
        <li>
          <ThemeToggle />
        </li>
      </ul>
    </div>
  );
};

export default Nav;
