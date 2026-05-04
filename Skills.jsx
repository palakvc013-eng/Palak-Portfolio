import './Skills.css'

export default function Skills() {
  const skillGroups = [
    {
      title: 'Programming Languages',
      icon: '💻',
      skills: ['Core Java', 'C', 'Python', 'SQL']
    },
    {
      title: 'Coursework',
      icon: '📚',
      skills: ['Operating System', 'DBMS', 'Data Structures', 'Computer Networking']
    },
    {
      title: 'Tools & Technologies',
      icon: '🛠️',
      skills: ['Android Studio', 'Visual Studio Code', 'Git', 'GitHub']
    }
  ]

  const achievements = [
    'Solved 1500+ problems on Codechef',
    'Participated in Hackathon (Codecrade 3.0, SIH)',
    'Participated in DSA Olympiad',
    'Completed Online & Offline Courses and Workshops'
  ]

  return (
    <section id="skills" className="skills section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Capabilities</span>
          <h2 className="section-title">Skills & Achievements</h2>
        </div>

        <div className="skills__grid">
          <div className="skills__col">
            <h3 className="skills__subtitle">Technical Arsenal</h3>
            <div className="skills__groups">
              {skillGroups.map((group, idx) => (
                <div key={idx} className="card skill-group">
                  <div className="skill-group__header">
                    <span className="skill-icon">{group.icon}</span>
                    <h4 className="skill-title">{group.title}</h4>
                  </div>
                  <div className="skill-list">
                    {group.skills.map(skill => (
                      <span key={skill} className="skill-badge">{skill}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="skills__col">
            <h3 className="skills__subtitle">Milestones & Achievements</h3>
            <div className="card achievements-card">
              <div className="achievements-list">
                {achievements.map((ach, idx) => (
                  <div key={idx} className="achievement-item">
                    <div className="achievement-icon">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                      </svg>
                    </div>
                    <p>{ach}</p>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Decorative block */}
            <div className="skills__decorative card">
              <div className="deco-icon">🏆</div>
              <div className="deco-text">
                <strong>Always Learning</strong>
                <span>Continuously exploring new technologies</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
