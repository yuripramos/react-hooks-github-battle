import React, { useState, useEffect } from 'react';

const Loading = ({ text = 'Loading', speed = 300 }: { text: string; speed?: number }) => {
  const [content, setContent] = useState(text);
  useEffect(() => {
    const id = window.setInterval(() => {
      setContent((content) => {
        return content === `${text}...` ? text : `${content}.`;
      });
    }, speed);

    return () => window.clearInterval(id);
  }, [text, speed]);
  return (
    <div className="ring">
      {content}
      <span></span>
    </div>
  );
};

export default Loading;
