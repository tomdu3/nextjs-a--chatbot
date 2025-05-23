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
            Safe AI Chat site for neurodivergent, or introverted person who
            likes to code, but has difficulties with social interactions. Ask me what you need help with or describe an image you wish me to create.
          </p>
        </div>
        <Chat />
      </div>
    </main>
  );
}

