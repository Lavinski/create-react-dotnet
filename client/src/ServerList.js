import React from 'react';
import useFetch from 'fetch-suspense';

function ServerList() {
  const ourList = useFetch('http://localhost:5000/api', { method: 'GET', mode: 'cors', headers: {'Content-Type': 'application/json'} });
  return (
    <ul>
      {ourList.map((listItem, i) => (
        <li key={i}>{listItem}</li>
      ))}
    </ul>
  );
}

export default ServerList;
