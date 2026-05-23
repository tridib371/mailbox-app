import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { MapPin, Package, Scan, Send, ArrowRight } from "lucide-react";

const steps = [
  { icon: MapPin, step:"01", title:"Choose Your Address", desc:"Select a professional mailing address from our premium locations across the US and internationally." },
  { icon: Package, step:"02", title:"Receive Your Mail", desc:"Your physical mail and packages are delivered to our secure facility under your name." },
  { icon: Scan, step:"03", title:"We Scan & Notify", desc:"Our team scans your mail and sends high-resolution images directly to your dashboard within hours." },
  { icon: Send, step:"04", title:"Act On Your Mail", desc:"View, forward, shred, or archive from anywhere in the world — right from your phone or browser." },
];

const faqs = [
  { q:"How quickly is my mail scanned?", a:"Most mail is scanned within 4 business hours of receipt. Pro plan subscribers get same-day scanning." },
  { q:"Can I receive packages?", a:"Yes! We accept packages from all major carriers including USPS, UPS, FedEx, and DHL." },
  { q:"Is my mail secure?", a:"Absolutely. Our facilities are monitored 24/7 and all data is encrypted with AES-256." },
  { q:"Can I forward mail to my home?", a:"Yes, we offer physical forwarding to any address worldwide. Forwarding fees apply based on your plan." },
];

export default function HowItWorksPage() {
  return (
    <div style={{minHeight:'100vh'}}>
      <Navbar />
      <section className="pt-36 pb-20 px-6 max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold mb-4">How MailVault Works</h1>
          <p style={{color:'var(--muted)'}}>Four simple steps to manage your mail from anywhere.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {steps.map(({icon:Icon,step,title,desc},i)=>(
            <div key={step} className="card relative">
              <div className="text-5xl font-extrabold mb-4 opacity-10">{step}</div>
              <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4" style={{background:'rgba(108,99,255,0.2)'}}>
                <Icon size={20} style={{color:'var(--accent)'}}/>
              </div>
              <h3 className="font-bold mb-2">{title}</h3>
              <p className="text-sm" style={{color:'var(--muted)'}}>{desc}</p>
              {i < steps.length-1 && <ArrowRight size={20} className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 z-10" style={{color:'var(--accent)'}}/>}
            </div>
          ))}
        </div>
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map(({q,a})=>(
              <div key={q} className="card">
                <h3 className="font-semibold mb-2">{q}</h3>
                <p className="text-sm" style={{color:'var(--muted)'}}>{a}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="text-center mt-16">
          <Link href="/signup" className="btn-primary px-10 py-3 text-base">Start Your Free Trial</Link>
        </div>
      </section>
      <Footer />
    </div>
  );
}
