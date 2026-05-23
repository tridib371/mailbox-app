import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Shield, Zap, Globe, Mail, Star, ArrowRight, CheckCircle } from "lucide-react";

export default function HomePage() {
  const features = [
    { icon: Shield, title: "Bank-Grade Security", desc: "End-to-end encryption keeps your mail safe always." },
    { icon: Zap, title: "Instant Notifications", desc: "Get notified the moment new mail arrives at your box." },
    { icon: Globe, title: "Virtual Address", desc: "Professional address in premium locations worldwide." },
    { icon: Mail, title: "Smart Scanning", desc: "High-res scans delivered to your inbox in minutes." },
  ];
  const testimonials = [
    { name: "Aisha Rahman", role: "Freelance Designer", text: "MailVault transformed how I handle client correspondence. Professional and seamless.", stars: 5 },
    { name: "James Okafor", role: "Startup Founder", text: "Our remote team needs a real address. MailVault delivers perfectly every time.", stars: 5 },
    { name: "Sofia Lenz", role: "Digital Nomad", text: "Travel anywhere and never miss important mail. Absolute game changer.", stars: 5 },
  ];
  return (
    <div style={{minHeight:'100vh'}}>
      <Navbar />
      {/* Hero */}
      <section className="pt-40 pb-24 px-6 text-center max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm mb-6" style={{background:'rgba(108,99,255,0.15)', border:'1px solid rgba(108,99,255,0.3)', color:'var(--accent2)'}}>
          <Zap size={14}/> Now with AI-powered mail sorting
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
          Your Mail.<br/>
          <span style={{background:'linear-gradient(135deg,#6c63ff,#a78bfa)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent'}}>Always Secure.</span>
        </h1>
        <p className="text-lg md:text-xl mb-10" style={{color:'var(--muted)', maxWidth:'560px', margin:'0 auto 2.5rem'}}>
          A professional virtual mailbox service — scan, forward, shred, or store your physical mail digitally from anywhere in the world.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/signup" className="btn-primary text-base px-8 py-3">Start Free Trial <ArrowRight size={16} className="inline ml-1"/></Link>
          <Link href="/how-it-works" className="btn-outline text-base px-8 py-3">See How It Works</Link>
        </div>
        <div className="mt-12 flex justify-center gap-8 text-sm" style={{color:'var(--muted)'}}>
          {["No credit card required","Cancel anytime","24/7 support"].map(t=>(
            <span key={t} className="flex items-center gap-1.5"><CheckCircle size={14} style={{color:'var(--accent)'}}/>{t}</span>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Everything you need to manage mail</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({icon:Icon, title, desc})=>(
            <div key={title} className="card hover:border-purple-500 transition-colors duration-300">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4" style={{background:'rgba(108,99,255,0.2)'}}>
                <Icon size={20} style={{color:'var(--accent)'}}/>
              </div>
              <h3 className="font-semibold mb-2">{title}</h3>
              <p className="text-sm" style={{color:'var(--muted)'}}>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-6" style={{background:'var(--bg2)'}}>
        <div className="max-w-4xl mx-auto grid grid-cols-3 gap-8 text-center">
          {[["50K+","Active Users"],["99.9%","Uptime SLA"],["180+","Countries"]]
            .map(([n,l])=>(<div key={l}><div className="text-4xl font-extrabold mb-1" style={{color:'var(--accent)'}}>{n}</div><div className="text-sm" style={{color:'var(--muted)'}}>{l}</div></div>))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Loved by thousands</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map(({name,role,text,stars})=>(
            <div key={name} className="card">
              <div className="flex gap-1 mb-4">{Array(stars).fill(0).map((_,i)=><Star key={i} size={14} fill="#6c63ff" style={{color:'var(--accent)'}}/>)}</div>
              <p className="text-sm mb-4" style={{color:'var(--muted)'}}>&ldquo;{text}&rdquo;</p>
              <p className="font-semibold text-sm">{name}</p>
              <p className="text-xs" style={{color:'var(--muted)'}}>{role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 text-center">
        <div className="max-w-2xl mx-auto card" style={{background:'linear-gradient(135deg,rgba(108,99,255,0.2),rgba(167,139,250,0.1))'}}>
          <h2 className="text-3xl font-bold mb-4">Ready to get your virtual mailbox?</h2>
          <p className="mb-8" style={{color:'var(--muted)'}}>Join 50,000+ users who manage their mail smarter.</p>
          <Link href="/signup" className="btn-primary px-10 py-3 text-base">Get Started Free</Link>
        </div>
      </section>
      <Footer />
    </div>
  );
}
