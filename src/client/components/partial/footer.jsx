import React from 'react';

export default () => (
  <footer className="footer bg-dark fixed-bottom">
    <div className="container">
      <span className="text-light">
        &copy; {(new Date()).getFullYear()} Computational Chemistry Team - Eli Lilly
      </span>
    </div>
  </footer>
);
