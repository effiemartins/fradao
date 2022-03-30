import Link from "next/link";
import React, { useState, useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { useTheme } from "next-themes";
import Nav from "./nav";

const navItems: { label: string; page?: string; link?: string }[] = [
  { label: "About", page: "/" },
];

//todo: update this image and try to make it dynamic for twitter shares
const ogImageUrl = "https://notion-blog.now.sh/og-image.png";

const Header = ({ titlePre = "" }) => {
  const { pathname } = useRouter();

  const { theme } = useTheme();

  // Sticky Menu Hook and className const
  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  });

  //scrool to top when clicking h1
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const isSticky = (e) => {
    const header = document.querySelector(".header");
    const scrollTop = window.scrollY;
    scrollTop >= 32
      ? header.classList.add("is-sticky")
      : header.classList.remove("is-sticky");
  };

  return (
    <header className={"header"}>
      <Head>
        <title>{titlePre ? `${titlePre} |` : ""} The FraDAO </title>
        <meta name="description" content="The FraDAO — an awesome guild" />
        <meta name="og:title" content="Welcome to the FraDAO" />
        <meta property="og:image" content={ogImageUrl} />
      </Head>

      <h1
        id="start"
        onClick={() => scrollToTop()}
        className={pathname === "/#start" ? "active" : undefined}
      >
        <Link href="/">
          <a>
            <img src="/avatar.png" className={"logo"} />
          </a>
        </Link>
      </h1>

      <Nav />
    </header>
  );
};

export default Header;
