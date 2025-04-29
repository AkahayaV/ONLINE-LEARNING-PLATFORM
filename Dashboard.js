import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Dashboard() {
  const [userData, setUserData] = useState(null);
  
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      axios.get('http://localhost:5000/user/1', {
        headers: { Authorization: `Bearer ${token}` }
      })
      .then(response => setUserData(response.data))
      .catch(error => console.error('Error fetching user data:', error));
    }
  }, []);

  return (
    <div>
      {userData ? (
        <div>
          <h2>Welcome, {userData.username}</h2>
          <div>Your progress:</div>
          {/* Render user's lessons progress */}
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}

export default Dashboard;
