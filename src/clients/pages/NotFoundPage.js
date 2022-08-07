import React from 'react';

const NotFoundPage = ({ staticContext = {} }) => {
  staticContext.notFound = true;
  return (
    <div>
      <h2>404</h2>
      <p>Page Not Found.</p>
    </div>
  );
};

export default {
  component: NotFoundPage,
};
