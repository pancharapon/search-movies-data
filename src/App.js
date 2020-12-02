import React from 'react';
import MovieApp from './containers/MovieApp';
import Layout from './hoc/layout/layout';

function App() {
  return (
    <Layout>
      <MovieApp />
    </Layout>
  );
}

export default App;
