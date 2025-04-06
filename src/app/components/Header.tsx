// components/Header.tsx
import Link from 'next/link'

export default function Header() {
  return (
    <header className="w-full py-6 flex justify-center items-center bg-white">
      <nav className="flex items-center gap-10 text-[#2f2f2f] text-sm font-light tracking-widest">
        <Link href="/">
          HOME
        </Link>
        <Link href="#">SERVICES</Link>
        <h1 className="text-4xl font-light italic mx-8" style={{ fontFamily: `'Great Vibes', cursive` }}>
          Tanishq Jha
        </h1>
        <Link href="/about">ABOUT</Link>
        <Link href="#">CONTACT</Link>
      </nav>
    </header>
  )
}
