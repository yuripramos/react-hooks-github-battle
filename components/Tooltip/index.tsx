import React, { CSSProperties, ReactNode } from 'react';
import useHover from '../../hooks/useHover';

const styles = {
  container: {
    position: 'relative',
    display: 'flex',
  },
  tooltip: {
    boxSizing: 'border-box',
    position: 'absolute',
    width: '160px',
    bottom: '100%',
    left: '50%',
    marginLeft: '-80px',
    borderRadius: '3px',
    backgroundColor: 'hsla(0, 0%, 20%, 0.9)',
    padding: '7px',
    marginBottom: '5px',
    color: '#fff',
    textAlign: 'center',
    fontSize: '14px',
  },
};

const Tooltip = ({ text, children }: { text: string; children: ReactNode }) => {
  const [hovering, attrs] = useHover();
  return (
    <div style={styles.container as CSSProperties} {...attrs}>
      {hovering === true && <div style={styles.tooltip as CSSProperties}>{text}</div>}
      {children}
    </div>
  );
};

export default React.memo(Tooltip);
