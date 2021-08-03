import React from 'react'
import ErrorBoundary from './ErrorBoudary';
import User from './User';

function App() {
  const user={
    id:1,
    username:'ktmihs'
  }
  return (
    <ErrorBoundary>
      <User/>
    </ErrorBoundary>
    
  );
}

export default App;
