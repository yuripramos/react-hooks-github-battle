import React, { useContext } from 'react';
import { themeContext } from '../../contexts/theme';

type cardType = {
  header: string;
  subheader?: string;
  avatar: string;
  href: string;
  name: string;
  children: React.ReactNode;
};

const Card = ({ header, subheader, avatar, href, name, children }: cardType) => {
  const theme = useContext(themeContext);
  return (
    <div className={`card bg-${theme}`}>
      <h4 className="header-lg center-text">{header}</h4>
      <img className="avatar" src={avatar} alt={`Avatar for ${name}`} />
      {subheader && <h4 className="center-text">{subheader}</h4>}
      <h2 className="center-text">
        <a className="link" href={href}>
          {name}
        </a>
      </h2>
      {children}
    </div>
  );
};

export default Card;
