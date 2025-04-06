// pages/index.tsx
import React from 'react';
import Header from '@/components/Header';
const HomePage = () => {
  return (

    <><Header /><div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-4">Welcome to MyApp</h1>
      <p className="text-lg text-gray-700">
        This is the homepage of your app.
      </p>
    </div></>
  );
};

export default HomePage;
