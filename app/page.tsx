"use client";

import Image from "next/image";
import Chat from "./components/Chat";

export default function Home() {
  return (
    <main className="App">
      <div className="container">
        <div className="logoBox">
          <Image
            src="/logo.png"
            alt="SuperViral.ai logo"
            width="320"
            height="120"
          />
          <p>
            A safe AI chat platform designed for neurodivergent or introverted individuals who enjoy coding but find social interactions challenging.<br />
            Feel free to ask for assistance or describe an image you'd like me to generate.
          </p>
        </div>
        <Chat />
      </div>
    </main>
  );
}

