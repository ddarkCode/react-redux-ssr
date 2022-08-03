import React from 'react';

const HomePage = () => {
  return (
    <div>
      <div>React Home Page</div>
      <button onClick={() => console.log('Hellooooooo There !')}>
        Press Me
      </button>
    </div>
  );
};

export default {
  component: HomePage,
};
