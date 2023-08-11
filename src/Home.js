import React, { useState, useEffect } from "react";

const Home = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000); // Update every second

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <h2>Home Page</h2>
      <p>This is the Homepage showing nothing but the</p>
      <h2>Current Time: {currentTime.toLocaleTimeString()}</h2>
    </div>
  );
};

export default Home;
