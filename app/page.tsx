import  React from "react";
import Link from "next/link";
import "./styles.css";

export default function Page() {
  return (
    <div className="main">
      Hello, Player!
      <Link href="/mainScreen">Iniciar Juego</Link>
    </div>
  );
}
