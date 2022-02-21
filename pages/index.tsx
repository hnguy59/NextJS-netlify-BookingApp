import Link from "next/link";

export default function Home() {
  return (
    <div className="home">
      I am home
      <Link href="/booking">
        <a>Book now!</a>
      </Link>
    </div>
  );
}
