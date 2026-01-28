import { useState, useEffect } from 'react'
import Head from 'next/head'

export default function Portfolio() {
  const [navMenuActive, setNavMenuActive] = useState(false)
  const [lastScroll, setLastScroll] = useState(0)
  const [navbarClass, setNavbarClass] = useState('')

  useEffect(() => {
    // Typing effect for hero title
    const heroTitle = document.querySelector('.hero-title')
    if (heroTitle) {
      const originalText = 'Maxence Farhat'
      heroTitle.textContent = ''
      let charIndex = 0
      
      function typeWriter() {
        if (charIndex < originalText.length) {
          heroTitle.textContent += originalText.charAt(charIndex)
          charIndex++
          setTimeout(typeWriter, 100)
        }
      }
      
      setTimeout(typeWriter, 500)
    }

    // Scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('animated')
          }, index * 100)
        }
      })
    }, observerOptions)

    const animateElements = document.querySelectorAll('.timeline-item, .cert-card, .project-card')
    animateElements.forEach(el => {
      el.classList.add('animate-on-scroll')
      observer.observe(el)
    })

    // Parallax effect
    const handleScroll = () => {
      const scrolled = window.pageYOffset
      const heroVisual = document.querySelector('.hero-visual')
      
      if (heroVisual) {
        const parallax = scrolled * 0.5
        heroVisual.style.transform = `translateY(${parallax}px)`
      }

      // Navbar scroll effect
      if (scrolled <= 0) {
        setNavbarClass('')
        return
      }
      
      if (scrolled > lastScroll && !navbarClass.includes('scroll-down')) {
        setNavbarClass('scroll-down')
      } else if (scrolled < lastScroll && navbarClass.includes('scroll-down')) {
        setNavbarClass('scroll-up')
      }
      setLastScroll(scrolled)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      observer.disconnect()
    }
  }, [lastScroll, navbarClass])

  const toggleNavMenu = () => {
    setNavMenuActive(!navMenuActive)
  }

  const handleNavClick = () => {
    setNavMenuActive(false)
  }

  return (
    <>
      <Head>
        <title>Maxence Farhat - Portfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
      </Head>

      <nav className={`navbar ${navbarClass}`}>
        <div className="nav-container">
          <div className="nav-logo">MF</div>
          <ul className={`nav-menu ${navMenuActive ? 'active' : ''}`}>
            <li><a href="#accueil" onClick={handleNavClick}>Accueil</a></li>
            <li><a href="#etudes" onClick={handleNavClick}>Études</a></li>
            <li><a href="#certifications" onClick={handleNavClick}>Certifications</a></li>
            <li><a href="#projets" onClick={handleNavClick}>Projets</a></li>
            <li><a href="#contact" onClick={handleNavClick}>Contact</a></li>
          </ul>
          <div className="nav-toggle" onClick={toggleNavMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>

      <main>
        <section id="accueil" className="hero">
          <div className="hero-content">
            <div>
              <h1 className="hero-title">Maxence Farhat</h1>
              <p className="hero-subtitle">Développeur & Étudiant passionné</p>
              <div className="hero-buttons">
                <a href="#projets" className="btn btn-primary">Voir mes projets</a>
                <a href="#contact" className="btn btn-secondary">Me contacter</a>
              </div>
            </div>
            <div className="hero-visual">
              <div className="floating-shapes">
                <div className="shape shape-1"></div>
                <div className="shape shape-2"></div>
                <div className="shape shape-3"></div>
              </div>
            </div>
          </div>
        </section>

        <section id="etudes" className="section">
          <div className="container">
            <h2 className="section-title">Formation</h2>
            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-date">2022 - 2025</div>
                <div className="timeline-content">
                  <h3>Bachelor en Informatique</h3>
                  <p>École supérieure spécialisée en développement logiciel et intelligence artificielle</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-date">2020 - 2022</div>
                <div className="timeline-content">
                  <h3>Classes Préparatoires MPSI/MP</h3>
                  <p>Filière Mathématiques, Physique et Ingénierie</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-date">2020</div>
                <div className="timeline-content">
                  <h3>Baccalauréat Scientifique</h3>
                  <p>Mention Très Bien - Spécialité Mathématiques</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="certifications" className="section section-dark">
          <div className="container">
            <h2 className="section-title">Certifications</h2>
            <div className="certifications-grid">
              <div className="cert-card">
                <div className="cert-icon">🎯</div>
                <h3>Google Cloud Associate</h3>
                <p>Cloud Architecture et Services Google</p>
                <span className="cert-date">2024</span>
              </div>
              <div className="cert-card">
                <div className="cert-icon">🔒</div>
                <h3>AWS Certified Developer</h3>
                <p>Développement et déploiement sur AWS</p>
                <span className="cert-date">2023</span>
              </div>
              <div className="cert-card">
                <div className="cert-icon">📱</div>
                <h3>React Native Specialist</h3>
                <p>Développement d'applications mobiles cross-platform</p>
                <span className="cert-date">2023</span>
              </div>
              <div className="cert-card">
                <div className="cert-icon">🤖</div>
                <h3>Machine Learning Foundations</h3>
                <p>Algorithmes et implémentation ML</p>
                <span className="cert-date">2022</span>
              </div>
            </div>
          </div>
        </section>

        <section id="projets" className="section">
          <div className="container">
            <h2 className="section-title">Projets Réalisés</h2>
            <div className="projects-grid">
              <div className="project-card">
                <div className="project-image"></div>
                <div className="project-content">
                  <h3>Application de E-Learning</h3>
                  <p>Plateforme interactive pour l'éducation en ligne avec React et Node.js</p>
                  <div className="project-tech">
                    <span>React</span>
                    <span>Node.js</span>
                    <span>MongoDB</span>
                  </div>
                </div>
              </div>
              <div className="project-card">
                <div className="project-image"></div>
                <div className="project-content">
                  <h3>Dashboard Analytics</h3>
                  <p>Interface de visualisation de données en temps réel pour entreprises</p>
                  <div className="project-tech">
                    <span>Vue.js</span>
                    <span>D3.js</span>
                    <span>Python</span>
                  </div>
                </div>
              </div>
              <div className="project-card">
                <div className="project-image"></div>
                <div className="project-content">
                  <h3>Mobile Banking App</h3>
                  <p>Application bancaire mobile avec authentification sécurisée</p>
                  <div className="project-tech">
                    <span>React Native</span>
                    <span>TypeScript</span>
                    <span>AWS</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="section section-dark">
          <div className="container">
            <h2 className="section-title">Contact</h2>
            <div className="contact-content">
              <p>Intéressé par une collaboration ou simplement échanger ?</p>
              <div className="contact-buttons">
                <a href="mailto:maxence.farhat@example.com" className="btn btn-primary">m'envoyer un email</a>
                <a href="https://linkedin.com/in/maxencefarhat" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">LinkedIn</a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Maxence Farhat. Tous droits réservés.</p>
        </div>
      </footer>

      <style jsx global>{`
        .navbar.scroll-down {
          transform: translateY(-100%);
        }
        .navbar.scroll-up {
          transform: translateY(0);
        }
      `}</style>
    </>
  )
}