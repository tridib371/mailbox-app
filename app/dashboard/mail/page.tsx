"use client";
import { useState } from "react";
import { Search, Filter, Eye, Forward, Trash2, Archive, Download, X, Building, User, FileText } from "lucide-react";

const mails = [
  { id:1, from:"Chase Bank", subject:"Statement Ready - Account ****4521", preview:"Your monthly statement for account ending 4521 is now available. Log in to view.", date:"May 22, 2025", read:false, tag:"Finance", pages:2 },
  { id:2, from:"Amazon", subject:"Package Delivered – Order #112-4891-2341", preview:"Your package has been delivered to your mailbox address. Tracking shows delivery at 2:14 PM.", date:"May 22, 2025", read:false, tag:"Package", pages:1 },
  { id:3, from:"Internal Revenue Service", subject:"2024 Tax Refund – Processing Update", preview:"We are processing your 2024 tax return. Your refund of $1,240 is expected within 21 days.", date:"May 21, 2025", read:true, tag:"Government", pages:4 },
  { id:4, from:"Blue Cross Blue Shield", subject:"Explanation of Benefits – March 2025", preview:"Attached is your Explanation of Benefits statement for services rendered in March 2025.", date:"May 20, 2025", read:true, tag:"Health", pages:3 },
  { id:5, from:"Landlord Office", subject:"Lease Renewal Notice – Unit 4B", preview:"Your lease is set to expire on July 31, 2025. Please review the enclosed renewal terms.", date:"May 19, 2025", read:true, tag:"Legal", pages:6 },
  { id:6, from:"Verizon", subject:"Bill Ready: $89.00 due June 5", preview:"Your Verizon wireless bill for May is ready. Total amount due: $89.00. Due date: June 5.", date:"May 18, 2025", read:true, tag:"Utility", pages:1 },
];

const tagColors: Record<string, string> = {
  Finance:"rgba(108,99,255,0.2)", Package:"rgba(16,185,129,0.2)", Government:"rgba(245,158,11,0.2)",
  Health:"rgba(239,68,68,0.2)", Legal:"rgba(59,130,246,0.2)", Utility:"rgba(107,114,128,0.2)",
};

export default function MailPage() {
  const [selected, setSelected] = useState<typeof mails[0]|null>(null);
  const [search, setSearch] = useState("");
  const filtered = mails.filter(m => m.subject.toLowerCase().includes(search.toLowerCase()) || m.from.toLowerCase().includes(search.toLowerCase()));
  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-3xl font-extrabold mb-6">My Mail</h1>
      <div className="flex gap-4 mb-6">
        <div className="relative flex-1">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2" style={{color:'var(--muted)'}}/>
          <input className="input-field pl-9" placeholder="Search mail..." value={search} onChange={e=>setSearch(e.target.value)}/>
        </div>
        <button className="btn-outline flex items-center gap-2 text-sm px-4"><Filter size={15}/>Filter</button>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-3">
          {filtered.map(m=>(
            <div key={m.id} onClick={()=>setSelected(m)} className="card cursor-pointer hover:border-purple-500 transition-all duration-200" style={selected?.id===m.id ? {borderColor:'var(--accent)'}:{}}>
              <div className="flex items-start justify-between gap-2 mb-2">
                <div className="flex items-center gap-2 min-w-0">
                  <div className="w-2 h-2 rounded-full flex-shrink-0" style={{background: m.read?'transparent':'var(--accent)', border: m.read ? '1px solid var(--border)' : 'none'}}/>
                  <p className={`text-sm truncate ${!m.read?'font-bold':''}`}>{m.from}</p>
                </div>
                <span className="text-xs px-2 py-0.5 rounded-full flex-shrink-0" style={{background: tagColors[m.tag]||'var(--border)'}}>{m.tag}</span>
              </div>
              <p className={`text-sm mb-1 truncate ${!m.read?'font-semibold':''}`}>{m.subject}</p>
              <p className="text-xs truncate" style={{color:'var(--muted)'}}>{m.preview}</p>
              <p className="text-xs mt-2" style={{color:'var(--muted)'}}>{m.date} · {m.pages} page{m.pages>1?'s':''}</p>
            </div>
          ))}
        </div>
        <div className="card sticky top-8 h-fit">
          {selected ? (
            <div>
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p className="font-bold text-lg">{selected.subject}</p>
                  <p className="text-sm" style={{color:'var(--muted)'}}>{selected.from} · {selected.date}</p>
                </div>
                <button onClick={()=>setSelected(null)}><X size={18} style={{color:'var(--muted)'}}/></button>
              </div>
              <div className="rounded-lg p-4 mb-4" style={{background:'var(--bg)', border:'1px solid var(--border)'}}>
                <div className="aspect-[3/4] rounded flex items-center justify-center mb-3" style={{background:'var(--bg2)', border:'1px solid var(--border)'}}>
                  <div className="text-center">
                    <FileText size={48} style={{color:'var(--border)', margin:'0 auto 0.5rem'}}/>
                    <p className="text-xs" style={{color:'var(--muted)'}}>Mail Preview</p>
                    <p className="text-xs" style={{color:'var(--muted)'}}>{selected.pages} page{selected.pages>1?'s':''} scanned</p>
                  </div>
                </div>
                <p className="text-sm" style={{color:'var(--muted)', lineHeight:'1.7'}}>{selected.preview}</p>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {[
                  {icon:Eye, label:"View Full"},
                  {icon:Forward, label:"Forward"},
                  {icon:Download, label:"Download"},
                  {icon:Archive, label:"Archive"},
                ].map(({icon:Icon, label})=>(
                  <button key={label} className="btn-outline flex items-center justify-center gap-2 text-sm py-2 px-3">
                    <Icon size={14}/>{label}
                  </button>
                ))}
                <button className="col-span-2 flex items-center justify-center gap-2 text-sm py-2 px-3 rounded-lg" style={{background:'rgba(239,68,68,0.15)', border:'1px solid rgba(239,68,68,0.3)', color:'#f87171'}}>
                  <Trash2 size={14}/>Request Shred
                </button>
              </div>
            </div>
          ) : (
            <div className="text-center py-16">
              <FileText size={40} style={{color:'var(--border)', margin:'0 auto 1rem'}}/>
              <p style={{color:'var(--muted)'}}>Select a mail item to preview</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
