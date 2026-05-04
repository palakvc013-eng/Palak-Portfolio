import './About.css'

export default function About() {
  const education = [
    {
      degree: 'B.Tech in Computer Engineering',
      school: 'R.C Patel Institute of Technology, Shirpur',
      date: 'Sept 2024',
      score: 'CGPA - 8.45',
      current: true
    },
    {
      degree: '12th (HSC)',
      school: 'Genius Public School, Niwali, M.P.',
      date: 'June 2024',
      score: '70%',
    },
    {
      degree: '10th (SSC)',
      school: 'Podar International School, Jalgaon',
      date: 'May 2022',
      score: '77.8%',
    }
  ]

  return (
    <section id="about" className="about section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Get to know me</span>
          <h2 className="section-title">About & Education</h2>
        </div>

        <div className="about__grid">
          <div className="about__content">
            <div className="card about__card">
              <h3 className="about__card-title">Introduction</h3>
              <p className="about__text">
                I'm a passionate and responsible second-year B.Tech Computer Engineering student at R. C. Patel Institute of Technology, with an excellent academic track record.
              </p>
              <p className="about__text">
                Currently, I'm exploring different areas of tech, solidifying my understanding of the basics, and eagerly improving my skills. I'm actively looking for opportunities to grow step-by-step, contribute to a team, and gain hands-on practical experience.
              </p>
            </div>
          </div>

          <div className="about__education">
            <h3 className="about__edu-title">Academic Journey</h3>
            <div className="edu-timeline">
              {education.map((edu, idx) => (
                <div key={idx} className="edu-item">
                  <div className={`edu-dot ${edu.current ? 'active' : ''}`}></div>
                  <div className="card edu-card">
                    <div className="edu-header">
                      <h4 className="edu-degree">{edu.degree}</h4>
                      <span className="edu-date">{edu.date}</span>
                    </div>
                    <p className="edu-school">{edu.school}</p>
                    <div className="edu-score">{edu.score}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
