import Link from "next/link";

export const MainView = () => {
  return (
    <div className="main">
      Hello, Player!
      <Link href="/mainScreen">Start game</Link>
    </div>
  );
};
