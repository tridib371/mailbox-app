"use client";
import Link from "next/link";
import { Mail, ArrowLeft } from "lucide-react";
import { useState } from "react";

export default function ForgotPasswordPage() {
  const [sent, setSent] = useState(false);
  return (
    <div className="min-h-screen flex items-center justify-center px-4" style={{background:'var(--bg)'}}>
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2 font-bold text-xl mb-6">
            <Mail size={22} style={{color:'var(--accent)'}}/>
            <span>Mail<span style={{color:'var(--accent)'}}>Vault</span></span>
          </Link>
          <h1 className="text-3xl font-extrabold">{sent ? "Check your email" : "Reset password"}</h1>
          <p className="mt-2 text-sm" style={{color:'var(--muted)'}}>
            {sent ? "We sent a reset link to your email address." : "Enter your email and we'll send you a reset link."}
          </p>
        </div>
        <div className="card">
          {sent ? (
            <div className="text-center space-y-4">
              <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto" style={{background:'rgba(108,99,255,0.2)'}}>
                <Mail size={24} style={{color:'var(--accent)'}}/>
              </div>
              <p className="text-sm" style={{color:'var(--muted)'}}>Didn&apos;t receive the email? Check your spam folder or try again.</p>
              <button className="btn-outline w-full" onClick={()=>setSent(false)}>Try Again</button>
              <Link href="/login" className="block text-sm text-center" style={{color:'var(--accent)'}}>Back to Login</Link>
            </div>
          ) : (
            <div className="space-y-5">
              <div><label className="text-xs mb-1 block" style={{color:'var(--muted)'}}>Email Address</label><input className="input-field" type="email" placeholder="john@example.com"/></div>
              <button className="btn-primary w-full" onClick={()=>setSent(true)}>Send Reset Link</button>
              <Link href="/login" className="flex items-center justify-center gap-2 text-sm" style={{color:'var(--muted)'}}>
                <ArrowLeft size={14}/> Back to Login
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
