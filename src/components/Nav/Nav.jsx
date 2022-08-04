import React, { useState, useEffect } from 'react';
import './Nav.scss';

function Nav() {
  const [show, setHandleShow] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        setHandleShow(true);
      } else setHandleShow(false);
    });
    return () => {
      window.removeEventListener('scroll', null);
    };
  }, []);
  return (
    <div className={`nav ${show && 'nav_black'}`}>
      {/* className={`row_poster ${isLargeRow && 'row_posterLarge'}`} */}
      <img
        className="nav_logo"
        src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg"
        alt="netflix_logo"
      />
      <img
        className="nav_avater"
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117
        "
        alt="hulu_logo"
      />
    </div>
  );
}

export default Nav;
