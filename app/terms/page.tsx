import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const sections = [
  { title:"1. Acceptance of Terms", body:"By accessing MailVault, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree, please do not use our services." },
  { title:"2. Description of Service", body:"MailVault provides virtual mailbox services including mail scanning, forwarding, storage, and related services. We reserve the right to modify or discontinue any service at any time." },
  { title:"3. User Accounts", body:"You are responsible for maintaining the confidentiality of your account credentials. You agree to accept responsibility for all activities that occur under your account. Notify us immediately of any unauthorized use." },
  { title:"4. Payment & Billing", body:"Subscription fees are billed in advance on a monthly or annual basis. Refunds are issued at our discretion. You authorize us to charge your payment method for all applicable fees." },
  { title:"5. Privacy & Data", body:"We collect and use your data as described in our Privacy Policy. By using MailVault, you consent to such collection and use. We do not sell your personal data to third parties." },
  { title:"6. Prohibited Uses", body:"You may not use MailVault for illegal activities, spam, fraud, or any purpose that violates applicable law. We reserve the right to terminate accounts that violate these terms." },
  { title:"7. Limitation of Liability", body:"MailVault shall not be liable for any indirect, incidental, special, or consequential damages. Our total liability shall not exceed the amount you paid in the 12 months preceding the claim." },
  { title:"8. Changes to Terms", body:"We may update these terms at any time. Continued use of the service after changes constitutes acceptance of the new terms. We will notify you of significant changes via email." },
];

export default function TermsPage() {
  return (
    <div style={{minHeight:'100vh'}}>
      <Navbar />
      <section className="pt-36 pb-20 px-6 max-w-3xl mx-auto">
        <h1 className="text-4xl font-extrabold mb-3">Terms of Service</h1>
        <p className="text-sm mb-12" style={{color:'var(--muted)'}}>Last updated: January 1, 2025</p>
        <div className="space-y-8">
          {sections.map(s=>(
            <div key={s.title} className="card">
              <h2 className="font-bold text-lg mb-2">{s.title}</h2>
              <p style={{color:'var(--muted)', lineHeight:'1.7'}}>{s.body}</p>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}
