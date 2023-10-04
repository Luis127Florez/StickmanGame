import  React from "react";
import Link from "next/link";
import '../styles/globals.css'

export default function Page() {
  return (
    <div className="main">
      Hello, Player!
      <Link href="/mainScreen">Start game</Link>
    </div>
  );
}
