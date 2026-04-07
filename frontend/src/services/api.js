// API service for connecting to Django backend
const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:8000/api';

export const api = {
  // Items endpoints
  async getItems(filters = {}) {
    const queryParams = new URLSearchParams(filters).toString();
    const response = await fetch(`${API_BASE_URL}/items/?${queryParams}`);
    return response.json();
  },

  async getItemById(id) {
    const response = await fetch(`${API_BASE_URL}/items/${id}/`);
    return response.json();
  },

  async reportLostItem(data) {
    const response = await fetch(`${API_BASE_URL}/lost-items/`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    return response.json();
  },

  async reportFoundItem(data) {
    const response = await fetch(`${API_BASE_URL}/found-items/`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    return response.json();
  },

  // User endpoints
  async getProfile() {
    const token = localStorage.getItem('access_token');
    const response = await fetch(`${API_BASE_URL}/user/profile/`, {
      headers: { 'Authorization': `Bearer ${token}` },
    });
    return response.json();
  },

  // Recent activity
  async getRecentActivity(limit = 6) {
    const response = await fetch(`${API_BASE_URL}/items/recent/?limit=${limit}`);
    return response.json();
  },
};

export default api;