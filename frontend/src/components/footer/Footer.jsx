import './Footer.css';

export default function Footer() {
    return (
      <footer className="footer">
        <div className="footer-column">
          <h4>About Code4Life</h4>
          <ul>
            <li><a href="/about">Who We Are</a></li>
            <li><a href="/careers">Careers</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </div>
  
        <div className="footer-column">
          <h4>Support</h4>
          <ul>
            <li><a href="/help">Help Center</a></li>
            <li><a href="/privacy">Privacy Policy</a></li>
            <li><a href="/terms">Terms of Service</a></li>
          </ul>
        </div>
  
        <div className="footer-column">
          <h4>Community</h4>
          <ul>
            <li><a href="/groups">Groups</a></li>
            <li><a href="/events">Events</a></li>
            <li><a href="/projects">Open Source Projects</a></li>
          </ul>
        </div>
  
        {/* <div className="footer-column">
          <h4>Follow Us</h4>
          <div className="footer-socials">
            <a href="https://facebook.com" aria-label="Facebook"><FaFacebook /></a>
            <a href="https://twitter.com" aria-label="Twitter"><FaTwitter /></a>
            <a href="https://linkedin.com" aria-label="LinkedIn"><FaLinkedin /></a>
            <a href="https://github.com" aria-label="Github"><FaGithub /></a>
          </div>
        </div> */}
      </footer>
    );
  }
  