"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X, Mail } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-bold text-xl">
          <Mail size={22} style={{color:'var(--accent)'}} />
          <span>Mail<span style={{color:'var(--accent)'}}>Vault</span></span>
        </Link>
        <div className="hidden md:flex items-center gap-8 text-sm" style={{color:'var(--muted)'}}>
          <Link href="/how-it-works" className="hover:text-white transition-colors">How It Works</Link>
          <Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link>
          <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
        </div>
        <div className="hidden md:flex items-center gap-3">
          <Link href="/login" className="btn-outline text-sm">Log In</Link>
          <Link href="/signup" className="btn-primary text-sm">Get Started</Link>
        </div>
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X size={22}/> : <Menu size={22}/>}
        </button>
      </div>
      {open && (
        <div className="md:hidden px-6 pb-4 flex flex-col gap-4 text-sm" style={{color:'var(--muted)'}}>
          <Link href="/how-it-works" onClick={()=>setOpen(false)}>How It Works</Link>
          <Link href="/pricing" onClick={()=>setOpen(false)}>Pricing</Link>
          <Link href="/contact" onClick={()=>setOpen(false)}>Contact</Link>
          <Link href="/login" className="btn-outline text-center" onClick={()=>setOpen(false)}>Log In</Link>
          <Link href="/signup" className="btn-primary text-center" onClick={()=>setOpen(false)}>Get Started</Link>
        </div>
      )}
    </nav>
  );
}
