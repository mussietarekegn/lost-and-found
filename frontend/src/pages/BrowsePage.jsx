import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../services/api';

const BrowsePage = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    status: 'all',
    category: '',
    location: '',
    dateFrom: '',
    dateTo: '',
    search: ''
  });
  const [totalItems, setTotalItems] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  useEffect(() => {
    fetchItems();
  }, [filters, currentPage]);

  const fetchItems = async () => {
    setLoading(true);
    try {
      const queryParams = {
        ...filters,
        page: currentPage,
        page_size: itemsPerPage
      };
      const data = await api.getItems(queryParams);
      setItems(data.results || data);
      setTotalItems(data.count || data.length || 248);
    } catch (error) {
      // Mock data with AASTU campus context
      setItems([
        { id: 1, title: 'BMW Car Keys - Silver Keychain', type: 'found', category: 'Accessories', location: 'AASTU Main Gate, Security Office', date: '2025-10-12', description: 'Car keys found near the main entrance security checkpoint' },
        { id: 2, title: 'Dell XPS Laptop', type: 'lost', category: 'Electronics', location: 'Main Library, first Floor ', date: '2025-10-14', description: 'Black Dell XPS laptop with AASTU Engineering stickers' },
        { id: 3, title: 'Student ID Card - SW Dept', type: 'found', category: 'Documents', location: 'Cafeteria, Near the central', date: '2025-10-15', description: 'AASTU ID card for Software Engineering student' },
        { id: 4, title: 'Blue Leather Wallet', type: 'found', category: 'Accessories', location: 'Building 58, Room 3001', date: '2025-10-11', description: 'Blue leather wallet containing student ID and ATM card' },
        { id: 5, title: 'Scientific Calculator', type: 'lost', category: 'Electronics', location: 'old graduation hall', date: '2025-10-10', description: 'Casio fx-991ES calculator lost during math exam' },
        { id: 6, title: 'Hydro Flask Water Bottle', type: 'found', category: 'Accessories', location: 'Gymnasium, Men\'s Locker Room', date: '2025-10-09', description: 'Black Hydro Flask water bottle with AASTU sticker' },
      ]);
      setTotalItems(6);
    } finally {
      setLoading(false);
    }
  };

  const handleFilterChange = (name, value) => {
    setFilters({ ...filters, [name]: value });
    setCurrentPage(1);
  };

  const totalPages = Math.ceil(totalItems / itemsPerPage);

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f9fafb' }}>
      {/* Navigation */}
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
              <Link to="/home" style={{ textDecoration: 'none', color: '#4b5563' }}>Home</Link>
              <Link to="/browse" style={{ textDecoration: 'none', color: '#7C3AED', fontWeight: 'bold' }}>Browse</Link>
              <Link to="/report-lost" style={{ textDecoration: 'none', color: '#4b5563' }}>Report Lost</Link>
              <Link to="/report-found" style={{ textDecoration: 'none', color: '#4b5563' }}>Report Found</Link>
              <Link to="/messages" style={{ textDecoration: 'none', color: '#4b5563' }}>Messages</Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="container" style={{ display: 'flex', gap: '2rem', padding: '2rem 0', flexWrap: 'wrap' }}>
        {/* Sidebar - Filters */}
        <div style={{ width: '280px', flexShrink: 0 }}>
          <div style={{ background: 'white', borderRadius: '1rem', padding: '1.5rem', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1rem' }}>Refine Search</h2>
            
            {/* Search */}
            <div style={{ marginBottom: '1.5rem' }}>
              <input
                type="text"
                placeholder="🔍 Search items on campus..."
                value={filters.search}
                onChange={(e) => handleFilterChange('search', e.target.value)}
                style={{ width: '100%', padding: '0.5rem 0.75rem', border: '1px solid #e5e7eb', borderRadius: '0.5rem', outline: 'none' }}
              />
            </div>

            {/* STATUS */}
            <div style={{ marginBottom: '1.5rem' }}>
              <h3 style={{ fontWeight: 'bold', marginBottom: '0.5rem', fontSize: '0.875rem' }}>STATUS</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem' }}>
                  <input type="radio" name="status" value="all" checked={filters.status === 'all'} onChange={() => handleFilterChange('status', 'all')} /> All Items
                </label>
                <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem' }}>
                  <input type="radio" name="status" value="lost" checked={filters.status === 'lost'} onChange={() => handleFilterChange('status', 'lost')} /> Lost on Campus
                </label>
                <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem' }}>
                  <input type="radio" name="status" value="found" checked={filters.status === 'found'} onChange={() => handleFilterChange('status', 'found')} /> Found on Campus
                </label>
              </div>
            </div>

            {/* CATEGORY */}
            <div style={{ marginBottom: '1.5rem' }}>
              <h3 style={{ fontWeight: 'bold', marginBottom: '0.5rem', fontSize: '0.875rem' }}>CATEGORY</h3>
              <select
                value={filters.category}
                onChange={(e) => handleFilterChange('category', e.target.value)}
                style={{ width: '100%', padding: '0.5rem', border: '1px solid #e5e7eb', borderRadius: '0.5rem', fontSize: '0.875rem' }}
              >
                <option value="">All Categories</option>
                <option value="electronics">Electronics (Laptops, Phones, Calculators)</option>
                <option value="accessories">Accessories (Keys, Bags, Water Bottles)</option>
                <option value="documents">Documents (ID Cards, Wallets)</option>
                <option value="books">Books & Stationery</option>
              </select>
            </div>

            {/* LOCATION */}
            <div style={{ marginBottom: '1.5rem' }}>
              <h3 style={{ fontWeight: 'bold', marginBottom: '0.5rem', fontSize: '0.875rem' }}>CAMPUS LOCATION</h3>
              <input
                type="text"
                placeholder="Building, Library, Cafeteria..."
                value={filters.location}
                onChange={(e) => handleFilterChange('location', e.target.value)}
                style={{ width: '100%', padding: '0.5rem', border: '1px solid #e5e7eb', borderRadius: '0.5rem', fontSize: '0.875rem', marginBottom: '0.5rem' }}
              />
            </div>

            {/* DATE RANGE */}
            <div style={{ marginBottom: '1.5rem' }}>
              <h3 style={{ fontWeight: 'bold', marginBottom: '0.5rem', fontSize: '0.875rem' }}>DATE RANGE</h3>
              <input
                type="date"
                value={filters.dateFrom}
                onChange={(e) => handleFilterChange('dateFrom', e.target.value)}
                style={{ width: '100%', padding: '0.5rem', border: '1px solid #e5e7eb', borderRadius: '0.5rem', fontSize: '0.875rem', marginBottom: '0.5rem' }}
              />
              <span style={{ fontSize: '0.75rem', color: '#9ca3af' }}>to</span>
              <input
                type="date"
                value={filters.dateTo}
                onChange={(e) => handleFilterChange('dateTo', e.target.value)}
                style={{ width: '100%', padding: '0.5rem', border: '1px solid #e5e7eb', borderRadius: '0.5rem', fontSize: '0.875rem', marginTop: '0.5rem' }}
              />
            </div>

            <button
              onClick={fetchItems}
              style={{ width: '100%', backgroundColor: '#7C3AED', color: 'white', padding: '0.75rem', borderRadius: '0.5rem', border: 'none', fontWeight: 'bold', cursor: 'pointer', fontSize: '0.875rem' }}
            >
              APPLY FILTERS
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div style={{ flex: '1' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>AASTU CAMPUS FINDINGS</h2>
            <p style={{ color: '#6b7280', fontSize: '0.875rem' }}>Showing {totalItems} items reported in the last 30 days on campus</p>
          </div>

          {loading ? (
            <div style={{ textAlign: 'center', padding: '3rem' }}>Loading...</div>
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.5rem' }}>
              {items.map((item) => (
                <Link to={`/item/${item.id}`} key={item.id} style={{ textDecoration: 'none', color: 'inherit' }}>
                  <div style={{
                    backgroundColor: 'white',
                    borderRadius: '0.75rem',
                    overflow: 'hidden',
                    boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
                    transition: 'transform 0.2s',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-4px)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'} >
                    <div style={{ padding: '1rem' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                        <span style={{ fontSize: '0.7rem', fontWeight: 'bold', color: item.type === 'lost' ? '#ef4444' : '#16a34a' }}>
                          {item.type === 'lost' ? 'LOST ON CAMPUS' : 'FOUND ON CAMPUS'}
                        </span>
                        <span style={{ fontSize: '0.7rem', color: '#9ca3af' }}>{item.category?.toUpperCase() || 'MISC'}</span>
                      </div>
                      <h3 style={{ fontWeight: 'bold', fontSize: '1rem', marginBottom: '0.25rem' }}>{item.title}</h3>
                      <p style={{ color: '#6b7280', fontSize: '0.75rem', marginBottom: '0.5rem', lineHeight: '1.4' }}>{item.description}</p>
                      <div style={{ display: 'flex', gap: '0.75rem', fontSize: '0.65rem', color: '#9ca3af' }}>
                        <span>📍 {item.location}</span>
                        <span>📅 {item.date}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', marginTop: '2rem' }}>
              <button onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))} disabled={currentPage === 1}>Previous</button>
              {[...Array(totalPages)].map((_, i) => (
                <button key={i} onClick={() => setCurrentPage(i+1)} style={{ backgroundColor: currentPage === i+1 ? '#16a34a' : 'white', color: currentPage === i+1 ? 'white' : '#4b5563' }}>{i+1}</button>
              ))}
              <button onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))} disabled={currentPage === totalPages}>Next</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BrowsePage;