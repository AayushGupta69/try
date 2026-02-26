import { socialLinks } from "@/constants";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="flex flex-col justify-center">
          <p>Terms & Conditions</p>
        </div>
        <div className="socials">
          {socialLinks.map((socialLink, index) => (
            <div key={index} className="icon">
              <a
                href={socialLink.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <socialLink.icon className="inline-block" />
              </a>
            </div>
          ))}
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end">
            © {new Date().getFullYear()} Aayush Gupta. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
