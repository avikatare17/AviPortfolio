import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:8080';

function App() {
  const [items, setItems] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('');

  useEffect(() => {
    fetchItems();
    checkHealth();
  }, []);

  const checkHealth = async () => {
    try {
      const response = await axios.get(`${API_URL}/api/health`);
      setStatus(response.data.status);
    } catch (err) {
      setError('Unable to connect to API');
      setStatus('unhealthy');
    }
  };

  const fetchItems = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${API_URL}/api/items`);
      setItems(response.data);
      setError(null);
    } catch (err) {
      setError('Failed to fetch items');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim() || !description.trim()) {
      setError('Please fill in all fields');
      return;
    }

    try {
      setLoading(true);
      const response = await axios.post(`${API_URL}/api/items`, {
        title: title.trim(),
        description: description.trim(),
      });
      setItems([...items, response.data]);
      setTitle('');
      setDescription('');
      setError(null);
    } catch (err) {
      setError('Failed to create item');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      setLoading(true);
      await axios.delete(`${API_URL}/api/items/${id}`);
      setItems(items.filter(item => item.id !== id));
      setError(null);
    } catch (err) {
      setError('Failed to delete item');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <div className="container">
        <header className="header">
          <h1>Portfolio Application</h1>
          <div className="status">
            <span className={`status-badge ${status}`}>
              API Status: {status || 'checking...'}
            </span>
          </div>
        </header>

        {error && (
          <div className="error-message">
            {error}
          </div>
        )}

        <div className="content">
          <div className="form-section">
            <h2>Add New Item</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="title">Title</label>
                <input
                  type="text"
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Enter title"
                  disabled={loading}
                />
              </div>
              <div className="form-group">
                <label htmlFor="description">Description</label>
                <textarea
                  id="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Enter description"
                  rows="4"
                  disabled={loading}
                />
              </div>
              <button type="submit" disabled={loading} className="submit-btn">
                {loading ? 'Adding...' : 'Add Item'}
              </button>
            </form>
          </div>

          <div className="items-section">
            <h2>Items ({items.length})</h2>
            {loading && items.length === 0 ? (
              <div className="loading">Loading...</div>
            ) : items.length === 0 ? (
              <div className="empty-state">No items yet. Add one above!</div>
            ) : (
              <div className="items-list">
                {items.map((item) => (
                  <div key={item.id} className="item-card">
                    <div className="item-content">
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                    </div>
                    <button
                      onClick={() => handleDelete(item.id)}
                      disabled={loading}
                      className="delete-btn"
                    >
                      Delete
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

