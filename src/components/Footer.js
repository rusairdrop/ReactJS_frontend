import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__copyright">
        <div>Copyright &copy; 2021. Made with &#10084; by Galyshev.pro</div>
      </div>
      
      <div className="footer__social">
        <a target="_blank" rel="noreferrer" href="https://t.me" className="footer__social-link">Telegram</a>
        <a target="_blank" rel="noreferrer" href="https://twitter.com" className="footer__social-link">Twitter</a>
        <a target="_blank" rel="noreferrer" href="https://medium.com" className="footer__social-link">Medium</a>
        <a target="_blank" rel="noreferrer" href="https://github.com/" className="footer__social-link">GitHub</a>
      </div>
    </footer>
  );
};

export default Footer;