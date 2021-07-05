import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div>
    <h1>Homepage</h1>
    <div>
      <Link
        to="/test"
        role="button"
      >Test</Link>
    </div>
  </div>
);

export default Home;
