"use client";
import Link from "next/link";
import { Mail, Eye, EyeOff } from "lucide-react";
import { useState } from "react";

export default function SignupPage() {
  const [show, setShow] = useState(false);
  return (
    <div className="min-h-screen flex items-center justify-center px-4" style={{background:'var(--bg)'}}>
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2 font-bold text-xl mb-6">
            <Mail size={22} style={{color:'var(--accent)'}}/>
            <span>Mail<span style={{color:'var(--accent)'}}>Vault</span></span>
          </Link>
          <h1 className="text-3xl font-extrabold">Create your account</h1>
          <p className="mt-2 text-sm" style={{color:'var(--muted)'}}>Start your 14-day free trial today</p>
        </div>
        <div className="card space-y-5">
          <div className="grid grid-cols-2 gap-4">
            <div><label className="text-xs mb-1 block" style={{color:'var(--muted)'}}>First Name</label><input className="input-field" placeholder="John"/></div>
            <div><label className="text-xs mb-1 block" style={{color:'var(--muted)'}}>Last Name</label><input className="input-field" placeholder="Doe"/></div>
          </div>
          <div><label className="text-xs mb-1 block" style={{color:'var(--muted)'}}>Email</label><input className="input-field" type="email" placeholder="john@example.com"/></div>
          <div>
            <label className="text-xs mb-1 block" style={{color:'var(--muted)'}}>Password</label>
            <div className="relative">
              <input className="input-field pr-10" type={show?"text":"password"} placeholder="Min. 8 characters"/>
              <button className="absolute right-3 top-1/2 -translate-y-1/2" onClick={()=>setShow(!show)}>
                {show ? <EyeOff size={16} style={{color:'var(--muted)'}}/> : <Eye size={16} style={{color:'var(--muted)'}}/> }
              </button>
            </div>
          </div>
          <div className="flex items-start gap-2 text-sm" style={{color:'var(--muted)'}}>
            <input type="checkbox" className="mt-0.5"/>
            <span>I agree to the <Link href="/terms" className="underline" style={{color:'var(--accent)'}}>Terms of Service</Link> and <Link href="/privacy-policy" className="underline" style={{color:'var(--accent)'}}>Privacy Policy</Link></span>
          </div>
          <Link href="/dashboard" className="btn-primary block text-center">Create Account</Link>
          <p className="text-center text-sm" style={{color:'var(--muted)'}}>Already have an account? <Link href="/login" style={{color:'var(--accent)'}}>Log in</Link></p>
        </div>
      </div>
    </div>
  );
}
