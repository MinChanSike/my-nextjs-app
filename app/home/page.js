"use client";
import React from "react";

export default function Home() {
  const [time, setTime] = React.useState(new Date());

  React.useEffect(() => {
    console.log("setInterval");
    // const interval = setInterval(() => setTime(new Date()), 1000);
    // return () => {
    //   console.log("clearInterval");
    //   clearInterval(interval);
    // };
  }, []);

  return (
    <div>
      <h1>This is under HOME url</h1>
      {/* {time && <pre>{time.toISOString()}</pre>} */}
    </div>
  );
}
