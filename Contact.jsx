import './Contact.css'

export default function Contact() {
  const contactInfo = [
    { label: 'Email', value: 'palakvc013@gmail.com', link: 'mailto:palakvc013@gmail.com', icon: '✉️' },
    { label: 'Phone', value: '+91 9977440013', link: 'tel:+919977440013', icon: '📱' },
    { label: 'LinkedIn', value: 'palak-choudhary', link: 'https://linkedin.com/in/palak-choudhary-576305339', icon: '💼' }
  ]

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const name = formData.get('name')
    const msg = formData.get('message')
    window.open(`mailto:palakvc013@gmail.com?subject=Portfolio Contact from ${name}&body=${msg}`)
    e.target.reset()
  }

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Let's Talk</span>
          <h2 className="section-title">Get In Touch</h2>
        </div>

        <div className="contact__grid">
          <div className="contact__info">
            <h3 className="contact__subtitle">Contact Information</h3>
            <p className="contact__text">
              I'm looking for opportunities to grow, contribute to a team, and gain practical experience. Feel free to reach out!
            </p>

            <div className="contact__methods">
              {contactInfo.map(info => (
                <a key={info.label} href={info.link} target={info.link.startsWith('http') ? "_blank" : "_self"} rel="noreferrer" className="card method-card">
                  <div className="method-icon">{info.icon}</div>
                  <div className="method-details">
                    <span className="method-label">{info.label}</span>
                    <span className="method-value">{info.value}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="contact__form-wrapper card">
            <h3 className="contact__subtitle">Send a Message</h3>
            <form className="contact__form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Name</label>
                <input type="text" name="name" required placeholder="John Doe" />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input type="email" name="email" required placeholder="john@example.com" />
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea name="message" required rows="5" placeholder="How can we collaborate?"></textarea>
              </div>
              <button type="submit" className="btn-primary w-full">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
