import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer footer-center p-10 bg-neutral text-base-200 rounded">
      <nav className="grid grid-flow-col gap-4">
        <Link href="/" className="link link-hover">
          Home
        </Link>
        <Link href="/about" className="link link-hover">
          About
        </Link>
        <Link href="/blog" className="link link-hover">
          Blog
        </Link>
        <Link href="/services" className="link link-hover">
          Services
        </Link>
      </nav>
      <aside>
        <p>
          © {new Date().getFullYear()} 🍴 Foodie Recipe. All rights reserved.
        </p>
      </aside>
    </footer>
  );
}
