import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../services/api';

const HomePage = () => {
  const [recentActivity, setRecentActivity] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchRecentActivity();
  }, []);

  const fetchRecentActivity = async () => {
    try {
      const data = await api.getRecentActivity(6);
      setRecentActivity(data);
    } catch (error) {
      // Mock data with AASTU campus context
      setRecentActivity([
        { id: 1, title: 'Laptop - Dell XPS', description: 'Lost in the Main Library, first floor near the Engineering lab. Black laptop with stickers.', type: 'lost', date: '2026-01-15' },
        { id: 2, title: 'Student ID Card - SW Dept', description: 'Found near the Cafeteria. AASTU ID card for Biruk Tadesse, Software Engineering department.', type: 'found', date: '2026-01-14' },
        { id: 3, title: 'Scientific Calculator', description: 'Lost in Building 57, Room 2001 during the morning lecture. Casio fx-991ES calculator.', type: 'lost', date: '2026-01-13' },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#ffffff' }}>
      {/* Navigation - Exact Figma Style */}
      <nav style={{ backgroundColor: 'white', borderBottom: '1px solid #e5e7eb', padding: '1rem 0', position: 'sticky', top: 0, zIndex: 50 }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 21.35L10.55 20.03C5.4 15.36 2 12.27 2 8.5 2 5.41 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.08C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.41 22 8.5c0 3.77-3.4 6.86-8.55 11.54L12 21.35Z" fill="#7C3AED"/>
              </svg>
              <span style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.5rem', fontWeight: 'bold', color: '#7C3AED' }}>AASTU ReclaimIt</span>
            </div>
            <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
              <Link to="/home" style={{ textDecoration: 'none', color: '#7C3AED' }}>Home</Link>
              <Link to="/browse" style={{ textDecoration: 'none', color: '#4b5563' }}>Browse</Link>
              <Link to="/report-lost" style={{ textDecoration: 'none', color: '#4b5563' }}>Report Lost</Link>
              <Link to="/report-found" style={{ textDecoration: 'none', color: '#4b5563' }}>Report Found</Link>
              <Link to="/messages" style={{ textDecoration: 'none', color: '#4b5563' }}>Messages</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - Exact Figma Design */}
      <section style={{ background: 'linear-gradient(135deg, #f0fdf4 0%, #ffffff 100%)', padding: '4rem 0' }}>
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: '3.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>
              Recovery through <span style={{ color: '#7C3AED' }}>community.</span>
            </h1>
            <p style={{ fontSize: '1.125rem', color: '#6b7280', marginBottom: '2rem', lineHeight: '1.6' }}>
              AASTU ReclaimIt turns chaotic loss into shared recovery on campus. Find what you've lost, 
              or help return what you've found in a serene, curated space for Addis Ababa Science and Technology University.
            </p>
            <div style={{ position: 'relative', maxWidth: '600px', margin: '0 auto' }}>
              <input
                type="text"
                placeholder="Search for a lost laptop, ID card, or backpack on AASTU campus..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{
                  width: '100%',
                  padding: '1rem 1.5rem',
                  paddingRight: '4rem',
                  borderRadius: '9999px',
                  border: '1px solid #e5e7eb',
                  boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)',
                  fontSize: '1rem',
                  outline: 'none'
                }}
              />
              <svg width="20" height="20" style={{ position: 'absolute', right: '1.5rem', top: '1rem', color: '#9ca3af' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Action Cards - I Lost Something / I Found Something */}
      <section style={{ padding: '3rem 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
            {/* I Lost Something Card */}
            <div style={{ textAlign: 'center', padding: '2rem' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🔍</div>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>I Lost Something</h2>
              <p style={{ color: '#6b7280', marginBottom: '1.5rem', lineHeight: '1.5' }}>
                Lost something on AASTU campus? Our community of students and staff is ready to help you recover your belongings. 
                Detailed reporting increases recovery rates by 60%.
              </p>
              <Link to="/report-lost" style={{ display: 'inline-block', backgroundColor: '#7C3AED', color: 'white', padding: '0.75rem 2rem', borderRadius: '9999px', textDecoration: 'none', fontWeight: '600', fontSize: '0.875rem' }}>
                Report a Lost Item
              </Link>
            </div>

            {/* I Found Something Card */}
            <div style={{ textAlign: 'center', padding: '2rem' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🤝</div>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>I Found Something</h2>
              <p style={{ color: '#6b7280', marginBottom: '1.5rem', lineHeight: '1.5' }}>
                Found a lost item on AASTU campus? Be a campus hero. Safely report items you've discovered 
                and help fellow eagles find their way back to their belongings.
              </p>
              <Link to="/report-found" style={{ display: 'inline-block', backgroundColor: '#7C3AED', color: 'white', padding: '0.75rem 2rem', borderRadius: '9999px', textDecoration: 'none', fontWeight: '600', fontSize: '0.875rem' }}>
                Report a Found Item
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Activity & Features - Exact Figma Layout */}
      <section style={{ padding: '3rem 0', backgroundColor: '#ffffff' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '3rem' }}>
            {/* Recent Activity Column */}
            <div>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>Recent Activity on AASTU Campus</h2>
              {loading ? (
                <p>Loading...</p>
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  {recentActivity.map((item) => (
                    <div key={item.id} style={{ paddingBottom: '1rem', borderBottom: '1px solid #f3f4f6' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                        <span style={{ fontSize: '1rem', fontWeight: 'bold', color: item.type === 'lost' ? '#ef4444' : '#7C3AED' }}>
                          {item.type === 'lost' ? '📦' : '🔍'}
                        </span>
                        <h3 style={{ fontWeight: 'bold', fontSize: '1rem' }}>{item.title}</h3>
                      </div>
                      <p style={{ color: '#6b7280', fontSize: '0.875rem', lineHeight: '1.5' }}>{item.description}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* How We Facilitate Recovery Column - Exact Figma */}
            <div>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>How AASTU ReclaimIt works</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {/* Secure Messaging */}
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                  </svg>
                  <div>
                    <h3 style={{ fontWeight: 'bold', marginBottom: '0.25rem' }}>Secure Messaging</h3>
                    <p style={{ color: '#6b7280', fontSize: '0.875rem', lineHeight: '1.5' }}>Communicate with fellow AASTU students through our encrypted platform without revealing personal phone numbers.</p>
                  </div>
                </div>
                {/* Campus Alerts */}
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="8" x2="12" y2="12"></line>
                    <line x1="12" y1="16" x2="12.01" y2="16"></line>
                  </svg>
                  <div>
                    <h3 style={{ fontWeight: 'bold', marginBottom: '0.25rem' }}>Campus Location Alerts</h3>
                    <p style={{ color: '#6b7280', fontSize: '0.875rem', lineHeight: '1.5' }}>Get notified instantly when an item matching your description is found within AASTU campus (Library, Cafeteria, Buildings, etc.).</p>
                  </div>
                </div>
                {/* AI Image Matching */}
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2">
                    <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"></rect>
                    <circle cx="8.5" cy="8.5" r="1.5"></circle>
                    <line x1="2" y1="16" x2="22" y2="16"></line>
                  </svg>
                  <div>
                    <h3 style={{ fontWeight: 'bold', marginBottom: '0.25rem' }}>AI Image Matching</h3>
                    <p style={{ color: '#6b7280', fontSize: '0.875rem', lineHeight: '1.5' }}>Our smart curator automatically scans thousands of campus reports to find visual matches for your lost items.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Exact Figma */}
      <footer style={{ backgroundColor: '#1f2937', color: 'white', padding: '2rem 0', textAlign: 'center' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 21.35L10.55 20.03C5.4 15.36 2 12.27 2 8.5 2 5.41 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.08C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.41 22 8.5c0 3.77-3.4 6.86-8.55 11.54L12 21.35Z" fill="#7C3AED"/>
              </svg>
              <span style={{ fontFamily: 'Playfair Display, serif', fontSize: '1rem', fontWeight: 'bold' }}>AASTU ReclaimIt</span>
            </div>
            <p style={{ color: '#9ca3af', fontSize: '0.75rem' }}>© 2026 AASTU ReclaimIt. Recover through community at Addis Ababa Science and Technology University.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;