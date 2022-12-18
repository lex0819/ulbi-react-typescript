import React from 'react';
import Card, { CardVariant } from './components/Card';

const App = () => {
  return (
    <div>
      <Card
        variant={CardVariant.Ellips}
        width="300px"
        height="200px"
        padding="20px"
      >
        <div>Hey, gays!</div>
        <button>Click me</button>
      </Card>
    </div>
  );
};

export default App;
