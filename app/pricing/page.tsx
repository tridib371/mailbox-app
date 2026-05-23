import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Basic", price: 9.99, desc: "Perfect for individuals",
    features: ["1 mailbox address","10 scans/month","30-day storage","Email notifications","Basic support"],
    cta: "Start Basic", highlight: false,
  },
  {
    name: "Advanced", price: 24.99, desc: "Great for freelancers & small teams",
    features: ["3 mailbox addresses","50 scans/month","90-day storage","Priority scanning","Mail forwarding (2x/month)","Email & chat support"],
    cta: "Start Advanced", highlight: true,
  },
  {
    name: "Pro", price: 49.99, desc: "For businesses & power users",
    features: ["Unlimited addresses","Unlimited scans","1-year storage","Instant scanning","Unlimited forwarding","Shredding service","Dedicated account manager","API access"],
    cta: "Start Pro", highlight: false,
  },
];

export default function PricingPage() {
  return (
    <div style={{minHeight:'100vh'}}>
      <Navbar />
      <section className="pt-36 pb-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h1 className="text-5xl font-extrabold mb-4">Simple, Transparent Pricing</h1>
            <p style={{color:'var(--muted)'}}>Choose the plan that fits your needs. Upgrade or cancel anytime.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
            {plans.map(p=>(
              <div key={p.name} className="card relative" style={p.highlight ? {border:'1px solid var(--accent)', boxShadow:'0 0 30px rgba(108,99,255,0.2)'} : {}}>
                {p.highlight && <div className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-bold px-4 py-1 rounded-full" style={{background:'var(--accent)'}}>Most Popular</div>}
                <h2 className="text-2xl font-bold mb-1">{p.name}</h2>
                <p className="text-sm mb-4" style={{color:'var(--muted)'}}>{p.desc}</p>
                <div className="mb-6">
                  <span className="text-4xl font-extrabold">${p.price}</span>
                  <span style={{color:'var(--muted)'}}>/mo</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {p.features.map(f=>(
                    <li key={f} className="flex items-center gap-2 text-sm">
                      <Check size={15} style={{color:'var(--accent)', flexShrink:0}}/>{f}
                    </li>
                  ))}
                </ul>
                <Link href="/signup" className={p.highlight ? "btn-primary block text-center" : "btn-outline block text-center"}>{p.cta}</Link>
              </div>
            ))}
          </div>
          <p className="text-center mt-10 text-sm" style={{color:'var(--muted)'}}>All plans include a 14-day free trial. No credit card required.</p>
        </div>
      </section>
      <Footer />
    </div>
  );
}
