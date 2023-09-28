import React, { useState, useEffect } from 'react';

function UniversityList() {
  const [universities, setUniversities] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUniversities = async () => {
      try {
        const response = await fetch('http://universities.hipolabs.com/search?country=INdia');
        const data = await response.json();
        setUniversities(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching universities:', error);
      }
    };

    fetchUniversities();
  }, []);

  return (
    <div>
      <h2>List of Universities in India</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {universities.map((university, index) => (
            <li key={index}>{university.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default UniversityList;