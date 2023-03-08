"use client"; 

import { Typography } from "@mui/material";

export default function Home() {
  return (
    <main>
      <div className="home-title">
        <Typography className="name">Gregory Hue</Typography>
        <Typography className="sub-title">IT Engineer</Typography>
      </div>
      <div className="home-text">
        <Typography className="text">{"text"}</Typography>
      </div>
    </main>
  );
}
