import {
  FaBriefcase,
  FaGithub,
  FaLinkedinIn,
  FaMedium,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

import FooterCSS from './footer.module.css';

export const Footer = () => (
  <footer className={`${FooterCSS["lg2__footer"]} tui__flex--col-align-center`}>
    <ul>
      <li className="footerLink">
        <Link to="https://github.com/SJTGSHIVAM">
          <FaGithub />
        </Link>
      </li>
      <li className="footerLink">
        <Link to="https://sjtgshivam.medium.com">
          <FaMedium />
        </Link>
      </li>
      <li className="footerLink">
        <Link to="https://www.linkedin.com/in/shivam-pandey-766524161">
          <FaLinkedinIn />
        </Link>
      </li>
      <li className="footerLink">
        <Link to="https://sjtgshivam.netlify.app/">
          <FaBriefcase />
        </Link>
      </li>
    </ul>
    <div className="legacyText">© 2021 | Shivam Pandey</div>
  </footer>
);
