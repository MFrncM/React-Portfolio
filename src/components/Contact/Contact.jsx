import { useState } from 'react'
import { SITE } from '../../utils/constants'
import styles from './Contact.module.css'

const INITIAL_FORM = { name: '', email: '', subject: '', message: '' }

export default function Contact() {
  const [form, setForm] = useState(INITIAL_FORM)
  const [status, setStatus] = useState('idle') // 'idle' | 'sending' | 'success' | 'error'
  const [errorMsg, setErrorMsg] = useState('')

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    setErrorMsg('')

    try {
      // POST to your existing PHP mailer endpoint
      // Update the path below to match your actual PHP mailer file
      const res = await fetch('/mailer.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      if (!res.ok) throw new Error(`Server error: ${res.status}`)

      setStatus('success')
      setForm(INITIAL_FORM)

      // Reset to idle after 5 seconds
      setTimeout(() => setStatus('idle'), 5000)
    } catch (err) {
      setStatus('error')
      setErrorMsg('Something went wrong. Please try emailing directly.')
      setTimeout(() => setStatus('idle'), 5000)
    }
  }

  const contactItems = [
    {
      icon: 'fas fa-envelope',
      label: 'Email',
      value: SITE.email,
      href: `mailto:${SITE.email}`,
    },
    {
      icon: 'fas fa-phone',
      label: 'Phone',
      value: SITE.phone,
      href: `tel:${SITE.phone}`,
    },
    {
      icon: 'fas fa-map-marker-alt',
      label: 'Location',
      value: SITE.location,
      href: null,
    },
  ]

  const socialLinks = [
    { icon: 'fab fa-linkedin', href: SITE.linkedin, label: 'LinkedIn' },
    { icon: 'fab fa-github',   href: SITE.github,   label: 'GitHub' },
    { icon: 'fab fa-twitter',  href: SITE.twitter,  label: 'Twitter' },
  ].filter(s => s.href) // Only render links that have a URL set

  return (
    <section className={styles.contact} id="contact">
      <div className="container">

        <div className="section-header reveal">
          <span className="section-label">Contact</span>
          <h2 className="section-title">Let's Work Together</h2>
        </div>

        <div className={styles.grid}>

          {/* Left — info */}
          <div className={`${styles.info} reveal reveal-delay-1`}>
            <p className={styles.intro}>
              Have a project in mind or want to talk about an opportunity?
              My inbox is open — I'll get back to you as soon as I can.
            </p>

            <div className={styles.contactItems}>
              {contactItems.map(item => (
                <div key={item.label} className={styles.contactItem}>
                  <div className={styles.iconWrap}>
                    <i className={item.icon} />
                  </div>
                  <div>
                    <span className={styles.contactLabel}>{item.label}</span>
                    {item.href ? (
                      <a href={item.href} className={styles.contactValue}>
                        {item.value}
                      </a>
                    ) : (
                      <p className={styles.contactValue}>{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social links — only renders if URLs are set in constants.js */}
            {socialLinks.length > 0 && (
              <div className={styles.socials}>
                {socialLinks.map(s => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialLink}
                    aria-label={s.label}
                  >
                    <i className={s.icon} />
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Right — form */}
          <div className={`${styles.formWrap} reveal reveal-delay-2`}>
            <form className={styles.form} onSubmit={handleSubmit} noValidate>

              <div className={styles.row}>
                <div className={styles.field}>
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    disabled={status === 'sending'}
                  />
                </div>
                <div className={styles.field}>
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                    disabled={status === 'sending'}
                  />
                </div>
              </div>

              <div className={styles.field}>
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="What's this about?"
                  required
                  disabled={status === 'sending'}
                />
              </div>

              <div className={styles.field}>
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Tell me more..."
                  required
                  disabled={status === 'sending'}
                />
              </div>

              {/* Status messages */}
              {status === 'success' && (
                <div className={`${styles.statusMsg} ${styles.success}`}>
                  <i className="fas fa-check-circle" />
                  Message sent! I'll get back to you soon.
                </div>
              )}
              {status === 'error' && (
                <div className={`${styles.statusMsg} ${styles.error}`}>
                  <i className="fas fa-exclamation-circle" />
                  {errorMsg}
                </div>
              )}

              <button
                type="submit"
                className={`btn btn-primary ${styles.submitBtn}`}
                disabled={status === 'sending'}
              >
                {status === 'sending' ? (
                  <><i className="fas fa-spinner fa-spin" /> Sending...</>
                ) : (
                  <><i className="fas fa-paper-plane" /> Send Message</>
                )}
              </button>

            </form>
          </div>

        </div>
      </div>
    </section>
  )
}
