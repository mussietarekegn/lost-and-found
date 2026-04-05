import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.includes('@aastu.edu.et')) {
    setError('Please use your AASTU email address (@aastu.edu.et)');
    return;
  }
    if (email && password) {
      localStorage.setItem('user', JSON.stringify({ email, name: 'AASTU Student' }));
      navigate('/dashboard');
    } else {
      setError('Invalid credentials');
    }
  };

  return (
    <div className="login-container">
      {/* Left Side panel */}
      <div className="login-left">
        <div className="flex" style={{ alignItems: 'center', gap: '0.5rem' }}>
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 21.35L10.55 20.03C5.4 15.36 2 12.27 2 8.5 2 5.41 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.08C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.41 22 8.5c0 3.77-3.4 6.86-8.55 11.54L12 21.35Z" fill="white"/>
          </svg>
          <span className="font-serif" style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>AASTU ReclaimIt</span>
        </div>
        
        <div style={{ maxWidth: '400px', margin: '0 auto' }}>
          <h2 className="font-serif" style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>The AASTU ReclaimIt</h2>
          <p style={{ fontSize: '1.125rem', lineHeight: '1.6', opacity: '0.9' }}>
            A curated AASTU community space dedicated to the restoration of lost stories 
            and cherished belongings.
          </p>
          
          <div className="flex" style={{ marginTop: '3rem', alignItems: 'center', gap: '1rem' }}>
            <div className="flex" style={{ marginLeft: '-0.5rem' }}>
              {[1, 2, 3, 4].map((i) => (
                <div key={i} style={{ width: '2.5rem', height: '2.5rem', borderRadius: '9999px', background: 'rgba(255,255,255,0.2)', border: '2px solid white', marginLeft: '-0.5rem' }}></div>
              ))}
            </div>
            <div>
              <div style={{ fontWeight: 'bold' }}>JOIN 5,000+ AASTU MEMBERS</div>
              <div style={{ fontSize: '0.75rem', opacity: '0.8' }}>Already helping each other</div>
            </div>
          </div>
        </div>
        
        <div style={{ fontSize: '0.75rem', opacity: '0.7' }}>
          © 2026 AASTU ReclaimIt. Reconnecting stories.
        </div>
      </div>

      {/* Right Side - Login Form (Exact Figma) */}
      <div className="login-right">
        <div className="login-card">
          {/* Tab Switcher - Exact Figma */}
          <div className="flex" style={{ gap: '2rem', borderBottom: '1px solid var(--gray-200)', marginBottom: '2rem' }}>
            <button className="tab-active">Login</button>
            <Link to="/signup" className="tab-inactive">Sign Up</Link>
          </div>

          <div className="text-center" style={{ marginBottom: '2rem' }}>
            <h3 className="font-serif" style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Welcome back</h3>
            <p style={{ fontSize: '0.875rem', color: 'var(--gray-500)' }}>
              Please enter your details to access the curator dashboard.
            </p>
          </div>

          {error && (
            <div style={{ background: '#FEE2E2', border: '1px solid #FECACA', color: '#DC2626', padding: '0.75rem', borderRadius: '0.5rem', marginBottom: '1.5rem', fontSize: '0.875rem' }}>
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: '1.5rem' }}>
              <label className="form-label">EMAIL ADDRESS</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-input"
                placeholder="student@aastu.edu.et"
                required
              />
              <p style={{ fontSize: '0.7rem', color: '#9CA3AF', marginTop: '0.25rem' }}>Only @aastu.edu.et  allowed</p>
            </div>

            <div style={{ marginBottom: '2rem' }}>
              <label className="form-label">PASSWORD</label>
              <div style={{ position: 'relative' }}>
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="form-input"
                  placeholder="********"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  style={{ position: 'absolute', right: '0.75rem', top: '0.75rem', background: 'none', border: 'none', cursor: 'pointer', color: 'var(--gray-400)' }}
                >
                  {showPassword ? '🙈' : '👁️'}
                </button>
              </div>
            </div>

            <button type="submit" className="btn-primary" style={{ width: '100%', padding: '0.875rem' }}>
              Sign in to your account
            </button>
          </form>

          <div className="text-center" style={{ marginTop: '1.5rem' }}>
            <p style={{ fontSize: '0.875rem', color: 'var(--gray-600)' }}>
              Don't have an account yet?{' '}
              <Link to="/signup" style={{ color: 'var(--primary)', textDecoration: 'none', fontWeight: '600' }}>
                Create an account
              </Link>
            </p>
          </div>

          {/* OR Divider - Exact Figma */}
          <div style={{ position: 'relative', margin: '2rem 0', textAlign: 'center' }}>
            <div style={{ position: 'absolute', inset: '0', display: 'flex', alignItems: 'center' }}>
              <div style={{ width: '100%', borderTop: '1px solid var(--gray-200)' }}></div>
            </div>
            <div style={{ position: 'relative', display: 'flex', justifyContent: 'center', fontSize: '0.75rem' }}>
              <span style={{ padding: '0 1rem', background: 'white', color: 'var(--gray-400)' }}>OR CONTINUE WITH EMAIL</span>
            </div>
          </div>

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
          <div className="text-center" style={{ marginTop: '2rem' }}>
            <p style={{ fontSize: '0.75rem', color: 'var(--gray-400)' }}>JOIN 5,000+ AASTU MEMBERS</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;