import pageLinks from "../data/PageLinks";
import socialLinks from "../data/SocialLinks";

const Footer = () => {
  return (
    <footer className='section footer'>
      <ul className='footer-links'>
        {pageLinks.map((links) => {
          const { id, href, text } = links;
          return (
            <li key={id}>
              <a href={href} rel='noreferrer' className='footer-link'>
                {text}
              </a>
            </li>
          );
        })}

        <li>
          <a href='#featured' className='footer-link'>
            featured
          </a>
        </li>
      </ul>
      <ul className='footer-icons'>
        {socialLinks.map((links) => {
          const { id, href, icon } = links;
          return (
            <li key={id}>
              <a
                href={href}
                target='_blank'
                rel='noreferrer'
                className='footer-icon'
              >
                <i className={icon}></i>
              </a>
            </li>
          );
        })}
      </ul>
      <p className='copyright'>
        copyright &copy; Backroads travel tours company
        <span id='date'>{new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>
  );
};

export default Footer;
