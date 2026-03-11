import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full border-b bg-white">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
        <h1 className="font-bold text-lg">
          Markaz Ahlil Athar
        </h1>

        <div className="flex gap-6">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/teachers">Teachers</Link>
          <Link href="/admission">Admission</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </nav>
  );
}