"use client";
import Link from "next/link";
import { Mail, Eye, EyeOff } from "lucide-react";
import { useState } from "react";

export default function LoginPage() {
  const [show, setShow] = useState(false);
  return (
    <div className="min-h-screen flex items-center justify-center px-4" style={{background:'var(--bg)'}}>
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2 font-bold text-xl mb-6">
            <Mail size={22} style={{color:'var(--accent)'}}/>
            <span>Mail<span style={{color:'var(--accent)'}}>Vault</span></span>
          </Link>
          <h1 className="text-3xl font-extrabold">Welcome back</h1>
          <p className="mt-2 text-sm" style={{color:'var(--muted)'}}>Sign in to your MailVault account</p>
        </div>
        <div className="card space-y-5">
          <div><label className="text-xs mb-1 block" style={{color:'var(--muted)'}}>Email</label><input className="input-field" type="email" placeholder="john@example.com"/></div>
          <div>
            <div className="flex justify-between items-center mb-1">
              <label className="text-xs" style={{color:'var(--muted)'}}>Password</label>
              <Link href="/forgot-password" className="text-xs" style={{color:'var(--accent)'}}>Forgot password?</Link>
            </div>
            <div className="relative">
              <input className="input-field pr-10" type={show?"text":"password"} placeholder="Your password"/>
              <button className="absolute right-3 top-1/2 -translate-y-1/2" onClick={()=>setShow(!show)}>
                {show ? <EyeOff size={16} style={{color:'var(--muted)'}}/> : <Eye size={16} style={{color:'var(--muted)'}}/>}
              </button>
            </div>
          </div>
          <Link href="/dashboard" className="btn-primary block text-center">Sign In</Link>
          <p className="text-center text-sm" style={{color:'var(--muted)'}}>Don&apos;t have an account? <Link href="/signup" style={{color:'var(--accent)'}}>Sign up free</Link></p>
        </div>
      </div>
    </div>
  );
}
