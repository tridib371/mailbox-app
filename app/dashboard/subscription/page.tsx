"use client";
import { useState } from "react";
import { Check, CreditCard, Calendar, Zap } from "lucide-react";

const plans = [
  { name:"Basic", price:9.99, features:["1 mailbox","10 scans/mo","30-day storage","Email support"] },
  { name:"Advanced", price:24.99, features:["3 mailboxes","50 scans/mo","90-day storage","Mail forwarding","Priority support"], current:true },
  { name:"Pro", price:49.99, features:["Unlimited mailboxes","Unlimited scans","1-year storage","Unlimited forwarding","Shredding","API access","Dedicated manager"] },
];

const invoices = [
  { id:"INV-0045", date:"May 1, 2025", amount:"$24.99", status:"Paid" },
  { id:"INV-0038", date:"Apr 1, 2025", amount:"$24.99", status:"Paid" },
  { id:"INV-0031", date:"Mar 1, 2025", amount:"$24.99", status:"Paid" },
];

export default function SubscriptionPage() {
  const [selected, setSelected] = useState("Advanced");
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-extrabold mb-2">Subscription</h1>
      <p className="mb-8" style={{color:'var(--muted)'}}>Manage your plan and billing.</p>
      <div className="card mb-8" style={{background:'linear-gradient(135deg,rgba(108,99,255,0.15),rgba(167,139,250,0.08))'}}>
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <p className="text-xs mb-1" style={{color:'var(--muted)'}}>Current Plan</p>
            <h2 className="text-2xl font-extrabold">Advanced Plan</h2>
            <div className="flex items-center gap-4 mt-2 text-sm" style={{color:'var(--muted)'}}>
              <span className="flex items-center gap-1"><Calendar size={14}/> Renews Jun 1, 2025</span>
              <span className="flex items-center gap-1"><CreditCard size={14}/> Visa ****4242</span>
            </div>
          </div>
          <div className="text-right">
            <p className="text-3xl font-extrabold">$24.99<span className="text-sm font-normal" style={{color:'var(--muted)'}}>/mo</span></p>
            <button className="btn-outline text-sm mt-2">Manage Billing</button>
          </div>
        </div>
      </div>
      <h2 className="font-bold text-xl mb-4">Change Plan</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {plans.map(p=>(
          <div key={p.name} onClick={()=>setSelected(p.name)} className="card cursor-pointer transition-all" style={selected===p.name ? {borderColor:'var(--accent)', boxShadow:'0 0 20px rgba(108,99,255,0.2)'} : {}}>
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-bold">{p.name}</h3>
              {p.current && <span className="text-xs px-2 py-0.5 rounded-full" style={{background:'rgba(108,99,255,0.2)', color:'var(--accent)'}}>Current</span>}
            </div>
            <p className="text-2xl font-extrabold mb-4">${p.price}<span className="text-sm font-normal" style={{color:'var(--muted)'}}>/mo</span></p>
            <ul className="space-y-2 text-sm">
              {p.features.map(f=><li key={f} className="flex items-center gap-2"><Check size={13} style={{color:'var(--accent)'}}/>{f}</li>)}
            </ul>
          </div>
        ))}
      </div>
      {selected !== "Advanced" && (
        <div className="flex justify-end mb-8">
          <button className="btn-primary flex items-center gap-2"><Zap size={16}/>Switch to {selected}</button>
        </div>
      )}
      <h2 className="font-bold text-xl mb-4">Billing History</h2>
      <div className="card">
        <table className="w-full text-sm">
          <thead><tr style={{color:'var(--muted)', borderBottom:'1px solid var(--border)'}}>
            <th className="text-left pb-3">Invoice</th><th className="text-left pb-3">Date</th><th className="text-left pb-3">Amount</th><th className="text-left pb-3">Status</th><th className="pb-3"/>
          </tr></thead>
          <tbody>
            {invoices.map(inv=>(
              <tr key={inv.id} style={{borderBottom:'1px solid var(--border)'}}>
                <td className="py-3 font-mono text-xs">{inv.id}</td>
                <td className="py-3" style={{color:'var(--muted)'}}>{inv.date}</td>
                <td className="py-3 font-semibold">{inv.amount}</td>
                <td className="py-3"><span className="text-xs px-2 py-1 rounded-full" style={{background:'rgba(16,185,129,0.15)', color:'#34d399'}}>{inv.status}</span></td>
                <td className="py-3 text-right"><button className="text-xs" style={{color:'var(--accent)'}}>Download</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
