import './Footer.css'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          <div className="footer__brand">
            <a href="#hero" className="footer__logo">
              <span className="footer__logo-icon">✨</span>
              Palak Choudhary
            </a>
            <p className="footer__tagline">
              Computer Engineering Student<br/>
              R.C Patel Institute of Technology
            </p>
          </div>

          <div className="footer__links">
            <h4 className="footer__title">Quick Links</h4>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
          </div>

          <div className="footer__socials">
            <h4 className="footer__title">Connect</h4>
            <a href="https://linkedin.com/in/palak-choudhary-576305339" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="mailto:palakvc013@gmail.com">Email</a>
          </div>
        </div>

        <div className="footer__bottom">
          <p>&copy; {currentYear} Palak Vijay Choudhary. All rights reserved.</p>
          <p>Built with React & Vite</p>
        </div>
      </div>
    </footer>
  )
}
