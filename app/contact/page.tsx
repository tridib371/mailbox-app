"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <div style={{ minHeight: '100vh' }}>
      <Navbar />
      <section className="pt-36 pb-20 px-6 max-w-5xl mx-auto">
        <h1 className="text-5xl font-extrabold mb-4">Get In Touch</h1>
        <p className="mb-14" style={{ color: 'var(--muted)' }}>We&apos;re here to help. Reach out any time.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <div className="space-y-6 mb-10">
              {[
                { icon: Mail, label: "Email", val: "support@mailvault.io" },
                { icon: Phone, label: "Phone", val: "+1 (800) 555-0198" },
                { icon: MapPin, label: "Address", val: "123 Business Ave, NY 10001" },
              ].map(({ icon: Icon, label, val }) => (
                <div key={label} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: 'rgba(108,99,255,0.2)' }}>
                    <Icon size={18} style={{ color: 'var(--accent)' }} />
                  </div>
                  <div>
                    <p className="text-xs" style={{ color: 'var(--muted)' }}>{label}</p>
                    <p className="font-medium">{val}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="card">
            {sent ? (
              <div className="text-center py-8">
                <Send size={40} style={{ color: 'var(--accent)', margin: '0 auto 1rem' }} />
                <h3 className="font-bold text-xl mb-2">Message Sent!</h3>
                <p style={{ color: 'var(--muted)' }}>We&apos;ll get back to you within 2 hours.</p>
              </div>
            ) : (
              <div className="space-y-4">
                <h2 className="font-bold text-xl mb-2">Send a Message</h2>
                <div className="grid grid-cols-2 gap-4">
                  <div><label className="text-xs mb-1 block" style={{ color: 'var(--muted)' }}>First Name</label><input className="input-field" placeholder="John" /></div>
                  <div><label className="text-xs mb-1 block" style={{ color: 'var(--muted)' }}>Last Name</label><input className="input-field" placeholder="Doe" /></div>
                </div>
                <div><label className="text-xs mb-1 block" style={{ color: 'var(--muted)' }}>Email</label><input className="input-field" type="email" placeholder="john@example.com" /></div>
                <div><label className="text-xs mb-1 block" style={{ color: 'var(--muted)' }}>Subject</label><input className="input-field" placeholder="How can we help?" /></div>
                <div><label className="text-xs mb-1 block" style={{ color: 'var(--muted)' }}>Message</label><textarea className="input-field" rows={4} placeholder="Your message..." /></div>
                <button className="btn-primary w-full" onClick={() => setSent(true)}>Send Message</button>
              </div>
            )}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
