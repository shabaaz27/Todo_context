import React from 'react';
import Navigation from './src/Navigation';
import {BlogProvider} from './src/context/BlogContext';

const App = () => {
  return (
    <BlogProvider>
      <Navigation />
    </BlogProvider>
  );
};

export default App;
