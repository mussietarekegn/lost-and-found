import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div>
      {/* Navigation - Exact Figma Style */}
      <nav className="navbar">
        <div className="container">
          <div className="flex-between" style={{ padding: '1rem 0' }}>
            <div className="flex" style={{ alignItems: 'center', gap: '0.5rem' }}>
              {/* Heart Logo from Figma */}
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 21.35L10.55 20.03C5.4 15.36 2 12.27 2 8.5 2 5.41 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.08C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.41 22 8.5c0 3.77-3.4 6.86-8.55 11.54L12 21.35Z" fill="#7C3AED"/>
              </svg>
              <span className="font-serif" style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--primary)' }}>AASTU ReclaimIt</span>
            </div>
            
            <div className="flex" style={{ gap: '2rem', display: 'none', alignItems: 'center' }}>
              <a href="#" style={{ textDecoration: 'none', color: 'var(--gray-600)' }}>Find Items</a>
              <a href="#" style={{ textDecoration: 'none', color: 'var(--gray-600)' }}>Report Lost</a>
              <a href="#" style={{ textDecoration: 'none', color: 'var(--gray-600)' }}>Community</a>
              <a href="#" style={{ textDecoration: 'none', color: 'var(--gray-600)' }}>Success Stories</a>
            </div>
            
            <div className="flex" style={{ gap: '1rem', alignItems: 'center' }}>
              <Link to="/login" style={{ textDecoration: 'none', color: 'var(--gray-600)' }}>Log In</Link>
              <Link to="/signup" className="btn-primary">Join Now</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - Stats Left, Large Square Images Right (Figma Style) */}
      <section className="hero">
        <div className="container">
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '4rem',
            flexWrap: 'wrap'
          }}>
            {/* Left Side - Description, Search Bar, and Stats */}
            <div style={{ flex: '1', minWidth: '350px' }}>
              <h1 className="font-serif" style={{ fontSize: '3.5rem', fontWeight: 'bold', marginBottom: '1.5rem', lineHeight: '1.2' }}>
                Recovery through <span className="text-primary">Community.</span>
              </h1>
              <p style={{ fontSize: '1.125rem', color: 'var(--gray-600)', marginBottom: '2rem', lineHeight: '1.6' }}>
                The stress of losing something ends here. AASTU ReclaimIt combines high-end matching technology 
                with our vetted university community to bring what matters home.
              </p>
              <div style={{ position: 'relative', marginBottom: '2rem' }}>
                <input 
                  type="text" 
                  placeholder="Search for a lost item (e.g. Blue Backpack)"
                  style={{
                    width: '100%',
                    padding: '1rem 1.5rem',
                    paddingRight: '8rem',
                    borderRadius: '9999px',
                    border: '1px solid var(--gray-200)',
                    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
                    fontSize: '1rem'
                  }}
                />
                <button className="btn-primary" style={{ position: 'absolute', right: '0.5rem', top: '0.5rem' }}>
                  Search
                </button>
              </div>
              
              {/* Stats Cards - On the Left side */}
              <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
                <div style={{ 
                  background: 'var(--primary-50)', 
                  borderRadius: '0.75rem', 
                  padding: '1rem',
                  flex: '1',
                  textAlign: 'center'
                }}>
                  <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--primary)' }}>342+</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--gray-600)' }}>Items Found This Week</div>
                </div>
                <div style={{ 
                  background: 'var(--primary-50)', 
                  borderRadius: '0.75rem', 
                  padding: '1rem',
                  flex: '1',
                  textAlign: 'center'
                }}>
                  <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--primary)' }}>85%</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--gray-600)' }}>Success Rate</div>
                </div>
              </div>
            </div>

            {/* Right Side - 4 Large Images in SQUARE GRID (2x2) - HUGE SIZE, CLOSER TOGETHER */}
            <div style={{ flex: '1', minWidth: '450px' }}>
              <div style={{ 
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '0.5rem',
                justifyItems: 'center',
                alignItems: 'center',
                maxWidth: '450px',
                margin: '0 auto'
              }}>
                {/* Laptop - Top Left with Hover Effect */}
                <div 
                  className="image-hover"
                  style={{ 
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '100%',
                    transition: 'transform 0.3s ease',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-8px) scale(1.05)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0) scale(1)'}
                >
                  <img 
                    src="/assets/images/laptop.jpg" 
                    alt="Laptop"
                    style={{ width: '200px', height: '200px', objectFit: 'contain' }}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.style.display = 'none';
                      e.target.parentElement.innerHTML = '<span style="font-size: 8rem;">💻</span>';
                    }}
                  />
                </div>
                
                {/* Glasses - Top Right with Hover Effect */}
                <div 
                  className="image-hover"
                  style={{ 
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '100%',
                    transition: 'transform 0.3s ease',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-8px) scale(1.05)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0) scale(1)'}
                >
                  <img 
                    src="/assets/images/glasses.jpg" 
                    alt="Glasses"
                    style={{ width: '200px', height: '200px', objectFit: 'contain' }}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.style.display = 'none';
                      e.target.parentElement.innerHTML = '<span style="font-size: 8rem;">👓</span>';
                    }}
                  />
                </div>
                
                {/* Keys - Bottom Left with Hover Effect */}
                <div 
                  className="image-hover"
                  style={{ 
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '100%',
                    transition: 'transform 0.3s ease',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-8px) scale(1.05)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0) scale(1)'}
                >
                  <img 
                    src="/assets/images/keys.jpg" 
                    alt="Keys"
                    style={{ width: '200px', height: '200px', objectFit: 'contain' }}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.style.display = 'none';
                      e.target.parentElement.innerHTML = '<span style="font-size: 8rem;">🔑</span>';
                    }}
                  />
                </div>
                
                {/* Bags - Bottom Right with Hover Effect */}
                <div 
                  className="image-hover"
                  style={{ 
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '100%',
                    transition: 'transform 0.3s ease',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-8px) scale(1.05)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0) scale(1)'}
                >
                  <img 
                    src="/assets/images/bags.jpg" 
                    alt="Bags"
                    style={{ width: '200px', height: '200px', objectFit: 'contain' }}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.style.display = 'none';
                      e.target.parentElement.innerHTML = '<span style="font-size: 8rem;">🎒</span>';
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
           
      {/* Features Section - Horizontal Cards */}
      <section style={{ padding: '5rem 0' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: '3rem' }}>
            <h2 className="font-serif" style={{ fontSize: '2.25rem', fontWeight: 'bold', marginBottom: '1rem' }}>Designed for Peace of Mind</h2>
            <p style={{ color: 'var(--gray-500)', maxWidth: '600px', margin: '0 auto' }}>
              Every feature is built with one goal in mind — helping you recover what matters most.
            </p>
          </div>
          
          <div style={{ 
            display: 'flex', 
            gap: '2rem', 
            justifyContent: 'center',
            flexWrap: 'wrap',
            flexDirection: 'row'
          }}>
            <div className="feature-card" style={{ flex: '1', minWidth: '250px', maxWidth: '350px' }}>
              <div className="flex-center" style={{ background: 'var(--primary-50)', width: '4rem', height: '4rem', borderRadius: '9999px', margin: '0 auto 1rem auto' }}>
                <span style={{ fontSize: '1.5rem' }}>⚡</span>
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.75rem' }}>Smart Matching</h3>
              <p style={{ color: 'var(--gray-500)' }}>Our empathetic Algorithm scans descriptions and imagery to find subtle connections across the platform.</p>
            </div>
            
            <div className="feature-card" style={{ flex: '1', minWidth: '250px', maxWidth: '350px' }}>
              <div className="flex-center" style={{ background: 'var(--primary-50)', width: '4rem', height: '4rem', borderRadius: '9999px', margin: '0 auto 1rem auto' }}>
                <span style={{ fontSize: '1.5rem' }}>🛡️</span>
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.75rem' }}>Verified Community</h3>
              <p style={{ color: 'var(--gray-500)' }}>Only AASTU email addresses can join. Every member is verified through university credentials.</p>
            </div>
            
            <div className="feature-card" style={{ flex: '1', minWidth: '250px', maxWidth: '350px' }}>
              <div className="flex-center" style={{ background: 'var(--primary-50)', width: '4rem', height: '4rem', borderRadius: '9999px', margin: '0 auto 1rem auto' }}>
                <span style={{ fontSize: '1.5rem' }}>💬</span>
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.75rem' }}>Secure Messaging</h3>
              <p style={{ color: 'var(--gray-500)' }}>Connect with finders or owners instantly through our encrypted portal.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section style={{ padding: '5rem 0', background: 'var(--gray-50)' }}>
        <div className="container">
          <h2 className="font-serif text-center" style={{ fontSize: '2.25rem', fontWeight: 'bold', marginBottom: '3rem' }}>Your Path to Recovery</h2>
          <div className="grid-3">
            <div className="text-center">
              <div className="flex-center" style={{ background: 'var(--primary)', color: 'white', width: '3rem', height: '3rem', borderRadius: '9999px', margin: '0 auto 1rem auto', fontWeight: 'bold', fontSize: '1.25rem' }}>1</div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.75rem' }}>Report an Item</h3>
              <p style={{ color: 'var(--gray-500)' }}>Upload a photo and details of what you lost or found at AASTU.</p>
            </div>
            <div className="text-center">
              <div className="flex-center" style={{ background: 'var(--primary)', color: 'white', width: '3rem', height: '3rem', borderRadius: '9999px', margin: '0 auto 1rem auto', fontWeight: 'bold', fontSize: '1.25rem' }}>2</div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.75rem' }}>AI Smart Match</h3>
              <p style={{ color: 'var(--gray-500)' }}>We notify you the moment a potential match is found on campus.</p>
            </div>
            <div className="text-center">
              <div className="flex-center" style={{ background: 'var(--primary)', color: 'white', width: '3rem', height: '3rem', borderRadius: '9999px', margin: '0 auto 1rem auto', fontWeight: 'bold', fontSize: '1.25rem' }}>3</div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.75rem' }}>Safe Reconnection</h3>
              <p style={{ color: 'var(--gray-500)' }}>Chat securely and meet at designated AASTU campus locations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - AASTU Specific */}
      <section className="stats-section">
        <div className="container">
          <div className="grid-3 text-center">
            <div>
              <div style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>2,847+</div>
              <div style={{ color: 'rgba(255,255,255,0.8)' }}>Items Returned at AASTU</div>
            </div>
            <div>
              <div style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>89%</div>
              <div style={{ color: 'rgba(255,255,255,0.8)' }}>Success Rate</div>
            </div>
            <div>
              <div style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>5,200+</div>
              <div style={{ color: 'rgba(255,255,255,0.8)' }}>Active AASTU Users</div>
            </div>
          </div>
          
          {/* Testimonial */}
          <div style={{ maxWidth: '600px', margin: '3rem auto 0', textAlign: 'center' }}>
            <div style={{ background: 'rgba(255,255,255,0.1)', borderRadius: '1rem', padding: '2rem' }}>
              <p style={{ fontSize: '1.125rem', fontStyle: 'italic', marginBottom: '1rem' }}>
                "Never thought I'd see my laptop again. AASTU ReclaimIt didn't just find my item; 
                they restored my faith in our university community."
              </p>
              <p style={{ fontWeight: '600' }}>— Mekdes T., Electrical Engineering Student</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ padding: '5rem 0' }}>
        <div className="container text-center">
          <h2 className="font-serif" style={{ fontSize: '2.25rem', fontWeight: 'bold', marginBottom: '1rem' }}>Ready to bring it home?</h2>
          <p style={{ fontSize: '1.125rem', color: 'var(--gray-500)', marginBottom: '2rem' }}>
            Join thousands of AASTU students and staff using ReclaimIt today.
          </p>
          <div className="flex-center" style={{ gap: '1rem' }}>
            <Link to="/signup" className="btn-primary" style={{ padding: '0.875rem 2rem' }}>Get Started for Free</Link>
            <Link to="/login" className="btn-outline" style={{ padding: '0.875rem 2rem', textDecoration: 'none' }}>Browse Items</Link>
          </div>
          <p style={{ fontSize: '0.875rem', color: 'var(--gray-400)', marginTop: '1.5rem' }}>✓ AASTU Email Required for Verification</p>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: 'var(--gray-900)', color: 'white', padding: '3rem 0' }}>
        <div className="container">
          <div className="flex-between" style={{ flexWrap: 'wrap', gap: '1rem' }}>
            <div className="flex" style={{ alignItems: 'center', gap: '0.5rem' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 21.35L10.55 20.03C5.4 15.36 2 12.27 2 8.5 2 5.41 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.08C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.41 22 8.5c0 3.77-3.4 6.86-8.55 11.54L12 21.35Z" fill="#7C3AED"/>
              </svg>
              <span className="font-serif" style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>AASTU ReclaimIt</span>
            </div>
            <p style={{ color: 'var(--gray-400)' }}>© 2026 AASTU ReclaimIt. Built with empathy for the AASTU community.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;