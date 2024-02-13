import React, { useState } from 'react';

const UrlForm = ({ onSubmit }) => {
  const [url, setUrl] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
   try {
    const response = await fetch(url);
    const data = await response.json();
    onSubmit(data);
   } catch (error) {
    console.error('Error fetching data:', error);
   }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Enter URL:
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default UrlForm;
