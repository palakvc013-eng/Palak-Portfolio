import './Hero.css'

export default function Hero() {
  return (
    <section id="hero" className="hero section">
      <div className="container hero__inner">
        <div className="hero__content">
          <div className="hero__badge">
            <span className="hero__badge-dot"></span>
            Available for Opportunities
          </div>
          
          <h1 className="hero__title">
            Hi, I'm <span className="gradient-text">Palak Choudhary</span>
          </h1>
          
          <p className="hero__subtitle">
            Computer Engineering student passionate about software development, exploring new technologies, and building meaningful digital experiences.
          </p>

          <div className="hero__actions">
            <a href="#projects" className="btn-primary">View My Work</a>
            <a href="https://linkedin.com/in/palak-choudhary-576305339" target="_blank" rel="noopener noreferrer" className="btn-secondary">
              Connect on LinkedIn
            </a>
          </div>

          <div className="hero__stats">
            <div className="hero__stat">
              <span className="hero__stat-num">1500+</span>
              <span className="hero__stat-label">Codechef Problems</span>
            </div>
            <div className="hero__stat-divider"></div>
            <div className="hero__stat">
              <span className="hero__stat-num">8.45</span>
              <span className="hero__stat-label">B.Tech CGPA</span>
            </div>
            <div className="hero__stat-divider"></div>
            <div className="hero__stat">
              <span className="hero__stat-num">2nd</span>
              <span className="hero__stat-label">Year Student</span>
            </div>
          </div>
        </div>

        <div className="hero__visual">
          <div className="hero__image-wrapper">
            <div className="hero__image-bg"></div>
            <img 
              src="https://api.dicebear.com/7.x/notionists/svg?seed=Palak&backgroundColor=eff6ff" 
              alt="Palak Choudhary" 
              className="hero__image"
            />
            
            {/* Floating Elements */}
            <div className="hero__float-card float-1">
              💻 <span>Computer Engineer</span>
            </div>
            <div className="hero__float-card float-2">
              ⚡ <span>Problem Solver</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
