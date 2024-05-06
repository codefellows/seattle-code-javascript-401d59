import React from 'react';

export type Link = {
  href: string;
  src: string;
}

// Props => reusable pieces of code, properties, values passes between components.
export interface HeaderProps {
  title: string;
  links: Array<Link>
}

function Header(props: HeaderProps): React.ReactElement {
  return (
    <header id="header-container">
      <h1>{props.title}</h1>
      {props.links.map((link) => {
        return (
          <a href={link.href} target="_blank">
            <img src={link.src} className="logo" alt="Vite logo" />
          </a>
        )
      })}
    </header>
  )
}

export default Header;
