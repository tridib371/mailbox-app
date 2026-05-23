import Link from "next/link";
import { Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer style={{borderTop:'1px solid var(--border)', background:'var(--bg2)'}}>
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center gap-2 font-bold text-lg mb-3">
            <Mail size={18} style={{color:'var(--accent)'}}/>
            <span>Mail<span style={{color:'var(--accent)'}}>Vault</span></span>
          </div>
          <p className="text-sm" style={{color:'var(--muted)'}}>Secure, professional mailbox services for individuals and businesses.</p>
        </div>
        <div>
          <p className="font-semibold mb-3 text-sm">Product</p>
          <div className="flex flex-col gap-2 text-sm" style={{color:'var(--muted)'}}>
            <Link href="/how-it-works" className="hover:text-white transition-colors">How It Works</Link>
            <Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link>
            <Link href="/dashboard" className="hover:text-white transition-colors">Dashboard</Link>
          </div>
        </div>
        <div>
          <p className="font-semibold mb-3 text-sm">Company</p>
          <div className="flex flex-col gap-2 text-sm" style={{color:'var(--muted)'}}>
            <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
          </div>
        </div>
        <div>
          <p className="font-semibold mb-3 text-sm">Account</p>
          <div className="flex flex-col gap-2 text-sm" style={{color:'var(--muted)'}}>
            <Link href="/signup" className="hover:text-white transition-colors">Sign Up</Link>
            <Link href="/login" className="hover:text-white transition-colors">Log In</Link>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-6 pb-6 text-sm" style={{color:'var(--muted)'}}>
        © {new Date().getFullYear()} MailVault. All rights reserved.
      </div>
    </footer>
  );
}
