import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const SignupPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    studentId: '',
    department: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.email.includes('@aastu.edu.et') ) {
      setError('Please use your AASTU email address (@aastu.edu.et)');
      return;
    }
    
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords don't match");
      return;
    }
    
    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }

    setSuccess(true);
    setTimeout(() => {
      navigate('/login');
    }, 2000);
  };

  if (success) {
    return (
      <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #F5F3FF 0%, #FFFFFF 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ background: 'white', borderRadius: '1rem', padding: '2rem', maxWidth: '450px', textAlign: 'center', boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)' }}>
          <div style={{ width: '4rem', height: '4rem', background: '#D1FAE5', borderRadius: '9999px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem' }}>
            <span style={{ fontSize: '2rem' }}>✅</span>
          </div>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>Verification Email Sent!</h2>
          <p style={{ color: '#6B7280', marginBottom: '1.5rem' }}>Please check your AASTU email to verify your account.</p>
          <Link to="/login" style={{ color: '#7C3AED', textDecoration: 'none' }}>Go to Login →</Link>
        </div>
      </div>
    );
  }

  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      {/* LEFT PANEL - EXACT MATCH TO FIGMA */}
      <div style={{ 
        flex: 1, 
        background: 'linear-gradient(135deg, #7C3AED 0%, #6D28D9 100%)',
        color: 'white',
        padding: '3rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
      }}>
        {/* Heart Icon at Top */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 21.35L10.55 20.03C5.4 15.36 2 12.27 2 8.5 2 5.41 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.08C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.41 22 8.5c0 3.77-3.4 6.86-8.55 11.54L12 21.35Z" fill="white"/>
          </svg>
          <span style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.5rem', fontWeight: 'bold' }}>AASTU ReclaimIt</span>
        </div>
        
        {/* Center Content */}
        <div style={{ maxWidth: '400px', margin: '0 auto' }}>
          <div style={{ maxWidth: '400px', margin: '0 auto' }}>
          <h2 className="font-serif" style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>Join Our Community</h2>
          <p style={{ fontSize: '1.125rem', lineHeight: '1.6', opacity: '0.9' }}>
            Become part of AASTU's official lost and found network. Help your fellow eagles 
            reclaim what matters most.
          </p>
          
          <div style={{ marginTop: '3rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <div className="flex" style={{ alignItems: 'center', gap: '0.75rem' }}>
              <div style={{ width: '0.5rem', height: '0.5rem', background: '#A78BFA', borderRadius: '9999px' }}></div>
              <span>✓ Verified AASTU student/staff community</span>
            </div>
            <div className="flex" style={{ alignItems: 'center', gap: '0.75rem' }}>
              <div style={{ width: '0.5rem', height: '0.5rem', background: '#A78BFA', borderRadius: '9999px' }}></div>
              <span>✓ Smart AI matching technology</span>
            </div>
            <div className="flex" style={{ alignItems: 'center', gap: '0.75rem' }}>
              <div style={{ width: '0.5rem', height: '0.5rem', background: '#A78BFA', borderRadius: '9999px' }}></div>
              <span>✓ 100% free for AASTU members</span>
            </div>
          </div>
        </div>
          
          {/* Avatar Circles */}
          <div style={{ display: 'flex', marginTop: '3rem', alignItems: 'center', gap: '1rem' }}>
            <div style={{ display: 'flex', marginLeft: '-0.5rem' }}>
              {[1, 2, 3, 4].map((i) => (
                <div key={i} style={{ width: '2.5rem', height: '2.5rem', borderRadius: '9999px', background: 'rgba(255,255,255,0.2)', border: '2px solid white', marginLeft: '-0.5rem' }}></div>
              ))}
            </div>
            <div>
              <div style={{ fontWeight: 'bold' }}>JOIN 5K+ MEMBERS</div>
              <div style={{ fontSize: '0.75rem', opacity: '0.8' }}>Already helping each other</div>
            </div>
          </div>
        </div>
        
        {/* Footer */}
        <div style={{ fontSize: '0.75rem', opacity: '0.7' }}>
          © 2026 AASTU ReclaimIt. Reconnecting stories.
        </div>
      </div>

      {/* RIGHT PANEL - SIGNUP FORM */}
      <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem', background: 'white' }}>
        <div style={{ maxWidth: '450px', width: '100%' }}>
          {/* Tabs */}
          <div style={{ display: 'flex', gap: '2rem', borderBottom: '1px solid #E5E7EB', marginBottom: '2rem' }}>
            <Link to="/login" style={{ color: '#9CA3AF', paddingBottom: '0.75rem', fontWeight: '600', textDecoration: 'none' }}>Login</Link>
            <button style={{ color: '#7C3AED', borderBottom: '2px solid #7C3AED', paddingBottom: '0.75rem', fontWeight: '600', background: 'none', border: 'none', cursor: 'pointer' }}>Sign Up</button>
          </div>

          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.5rem', marginBottom: '0.5rem' }}>Create an account</h3>
            <p style={{ fontSize: '0.875rem', color: '#6B7280' }}>Join our community of caring neighbors.</p>
          </div>

          {error && (
            <div style={{ background: '#FEE2E2', border: '1px solid #FECACA', color: '#DC2626', padding: '0.75rem', borderRadius: '0.5rem', marginBottom: '1.5rem', fontSize: '0.875rem' }}>
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            {/* FULL NAME */}
            <div style={{ marginBottom: '1rem' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', fontSize: '0.75rem', color: '#6B7280', letterSpacing: '0.5px' }}>FULL NAME</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                style={{ width: '100%', padding: '0.75rem 1rem', border: '1px solid #E5E7EB', borderRadius: '0.5rem', fontSize: '1rem' }}
                placeholder="Biruk Tadesse"
                required
              />
            </div>

            {/* AASTU EMAIL */}
            <div style={{ marginBottom: '1rem' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', fontSize: '0.75rem', color: '#6B7280', letterSpacing: '0.5px' }}>AASTU EMAIL ADDRESS</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                style={{ width: '100%', padding: '0.75rem 1rem', border: '1px solid #E5E7EB', borderRadius: '0.5rem', fontSize: '1rem' }}
                placeholder="student@aastu.edu.et"
                required
              />
              <p style={{ fontSize: '0.7rem', color: '#9CA3AF', marginTop: '0.25rem' }}>Only @aastu.edu.et  allowed</p>
            </div>

            {/* STUDENT ID & DEPARTMENT */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', fontSize: '0.75rem', color: '#6B7280', letterSpacing: '0.5px' }}>STUDENT ID (OPTIONAL)</label>
                <input
                  type="text"
                  name="studentId"
                  value={formData.studentId}
                  onChange={handleChange}
                  style={{ width: '100%', padding: '0.75rem 1rem', border: '1px solid #E5E7EB', borderRadius: '0.5rem', fontSize: '1rem' }}
                  placeholder="AASTU/1234/12"
                />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', fontSize: '0.75rem', color: '#6B7280', letterSpacing: '0.5px' }}>DEPARTMENT</label>
                <select
                  name="department"
                  value={formData.department}
                  onChange={handleChange}
                  style={{ width: '100%', padding: '0.75rem 1rem', border: '1px solid #E5E7EB', borderRadius: '0.5rem', fontSize: '1rem', background: 'white' }}
                >
                  <option value="">Select</option>
                  <option>Software engineering</option>
                  <option>Electrical engineering</option>
                  <option>Environmental engineering</option>
                  <option>Civil engineering</option>
                  <option>Electromechanical engineering</option>
                  <option>Mechanical engineering</option>
                  <option>Chemical engineering</option>
                  <option>Applied Science</option>
                </select>
              </div>
            </div>

            {/* PASSWORD */}
            <div style={{ marginBottom: '1rem' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', fontSize: '0.75rem', color: '#6B7280', letterSpacing: '0.5px' }}>PASSWORD</label>
              <div style={{ position: 'relative' }}>
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  style={{ width: '100%', padding: '0.75rem 1rem', border: '1px solid #E5E7EB', borderRadius: '0.5rem', fontSize: '1rem' }}
                  placeholder="********"
                  required
                />
              </div>
            </div>

            {/* CONFIRM PASSWORD */}
            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', fontSize: '0.75rem', color: '#6B7280', letterSpacing: '0.5px' }}>CONFIRM PASSWORD</label>
              <div style={{ position: 'relative' }}>
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  style={{ width: '100%', padding: '0.75rem 1rem', border: '1px solid #E5E7EB', borderRadius: '0.5rem', fontSize: '1rem' }}
                  placeholder="********"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  style={{ position: 'absolute', right: '0.75rem', top: '0.75rem', background: 'none', border: 'none', cursor: 'pointer', color: '#9CA3AF' }}
                >
                  {showPassword ? '🙈' : '👁️'}
                </button>
              </div>
            </div>

            <button type="submit" style={{ width: '100%', background: '#7C3AED', color: 'white', padding: '0.875rem', borderRadius: '0.5rem', fontWeight: '600', border: 'none', cursor: 'pointer' }}>
              Create free account
            </button>
          </form>

          <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
            <p style={{ fontSize: '0.875rem', color: '#4B5563' }}>
              Already have an account?{' '}
              <Link to="/login" style={{ color: '#7C3AED', textDecoration: 'none', fontWeight: '600' }}>Sign in</Link>
            </p>
          </div>

          {/* OR DIVIDER */}
          <div style={{ position: 'relative', margin: '2rem 0', textAlign: 'center' }}>
            <div style={{ position: 'absolute', inset: '0', display: 'flex', alignItems: 'center' }}>
              <div style={{ width: '100%', borderTop: '1px solid #E5E7EB' }}></div>
            </div>
            <div style={{ position: 'relative', display: 'flex', justifyContent: 'center', fontSize: '0.75rem' }}>
              <span style={{ padding: '0 1rem', background: 'white', color: '#9CA3AF' }}>OR CONTINUE WITH EMAIL</span>
            </div>
          </div>

          {/* Google Button */}
          <button 
  onClick={() => window.location.href = 'https://accounts.google.com/o/oauth2/v2/auth?' + new URLSearchParams({
    client_id: 'YOUR_GOOGLE_CLIENT_ID',
    redirect_uri: 'http://localhost:3000/auth/google/callback',
    response_type: 'code',
    scope: 'email profile',
    prompt: 'select_account'
  })}
  style={{ width: '100%', border: '1px solid var(--gray-200)', background: 'white', color: 'var(--gray-700)', padding: '0.75rem', borderRadius: '0.5rem', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}
>
  <span>📧</span>
  <span>Continue with AASTU Google Account</span>
</button>

          {/* Bottom Text */}
          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <p style={{ fontSize: '0.75rem', color: '#9CA3AF' }}>JOIN 5K+ MEMBERS</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;