import React from 'react';

const LanguagesNav = ({
  selected,
  onUpdateLanguage,
}: {
  selected: string;
  onUpdateLanguage: (language: string) => void;
}) => {
  const languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'];

  return (
    <ul className="flex-center">
      {languages.map((language) => (
        <li key={language}>
          <button
            className="btn-clear nav-link"
            style={language === selected ? { color: 'rgb(187, 46, 31)' } : undefined}
            onClick={() => onUpdateLanguage(language)}
          >
            {language}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default LanguagesNav;
