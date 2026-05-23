import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const sections = [
  { title:"Information We Collect", body:"We collect information you provide directly (name, email, address), usage data, and technical data like IP address, browser type, and device information to improve our services." },
  { title:"How We Use Your Information", body:"We use your information to provide and improve services, process payments, send notifications, provide customer support, and comply with legal obligations." },
  { title:"Information Sharing", body:"We do not sell or rent your personal information. We may share data with trusted service providers who assist in operating our platform, subject to strict confidentiality agreements." },
  { title:"Data Security", body:"We implement industry-standard encryption and security measures to protect your data. While no system is 100% secure, we continually update our security practices." },
  { title:"Your Rights", body:"You have the right to access, correct, or delete your personal data. You may also opt out of marketing communications. Contact us at privacy@mailvault.io to exercise these rights." },
  { title:"Cookies", body:"We use cookies to enhance your experience, analyze site traffic, and personalize content. You can control cookie preferences through your browser settings." },
  { title:"Contact Us", body:"For privacy-related questions, contact our Privacy Team at privacy@mailvault.io or write to us at 123 Business Ave, New York, NY 10001." },
];

export default function PrivacyPage() {
  return (
    <div style={{minHeight:'100vh'}}>
      <Navbar />
      <section className="pt-36 pb-20 px-6 max-w-3xl mx-auto">
        <h1 className="text-4xl font-extrabold mb-3">Privacy Policy</h1>
        <p className="text-sm mb-12" style={{color:'var(--muted)'}}>Last updated: January 1, 2025</p>
        <p className="mb-8" style={{color:'var(--muted)', lineHeight:'1.7'}}>At MailVault, we take your privacy seriously. This policy explains how we collect, use, and protect your personal information when you use our services.</p>
        <div className="space-y-6">
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
