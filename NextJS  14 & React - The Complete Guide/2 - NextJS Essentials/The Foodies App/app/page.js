import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1 style={{ color: 'white', textAlign: 'center' }}>
        Time to get started!
      </h1>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: "center", gap: "2rem", color: 'white', fontSize: "24px" }}>
        <Link style={{ color: "white" }} href="/meals" >Meals</Link>
        <Link style={{ color: "white" }} href="/meals/share" >Share Meal</Link>
        <Link style={{ color: "white" }} href="/community" >Community</Link>
      </div>
    </main>
  );
}
