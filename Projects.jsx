import './Projects.css'

export default function Projects() {
  const projects = [
    {
      title: 'BeatFlow - Neon Music Player',
      type: 'Client-Side Application',
      description: 'A responsive, feature-rich music player built purely on the front-end. It demonstrates mastery of the HTML5 Audio API to control playback, dynamically manages the song queue, and incorporates advanced features like a functional seeking Progress Bar, Volume Control, and a persistent History Log using Local Storage for a modern user experience.',
      tech: ['HTML5', 'CSS3 (Neon Theme)', 'Vanilla JavaScript (ES6+)', 'Audio API', 'Local Storage'],
      featured: true
    }
  ]

  return (
    <section id="projects" className="projects section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">What I've built</span>
          <h2 className="section-title">Featured Projects</h2>
        </div>

        <div className="projects__list">
          {projects.map((project, idx) => (
            <div key={idx} className="card project-card">
              <div className="project-card__content">
                <div className="project-card__header">
                  {project.featured && <span className="project-badge">Featured Project</span>}
                  <h3 className="project-title">{project.title}</h3>
                  <span className="project-type">{project.type}</span>
                </div>
                
                <p className="project-desc">{project.description}</p>
                
                <div className="project-tech">
                  <strong>Tools & Technologies:</strong>
                  <div className="tech-tags">
                    {project.tech.map(t => <span key={t} className="tech-tag">{t}</span>)}
                  </div>
                </div>
              </div>
              <div className="project-card__visual">
                <div className="mockup-window">
                  <div className="mockup-header">
                    <span></span><span></span><span></span>
                  </div>
                  <div className="mockup-body">
                    <div className="neon-circle"></div>
                    <div className="neon-bar"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
