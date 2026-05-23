"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Mail, CreditCard, UserCircle, LogOut, Menu, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  { href:"/dashboard", label:"Dashboard", icon:LayoutDashboard },
  { href:"/dashboard/mail", label:"My Mail", icon:Mail },
  { href:"/dashboard/subscription", label:"Subscription", icon:CreditCard },
  { href:"/dashboard/profile", label:"Profile", icon:UserCircle },
];

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const Sidebar = () => (
    <aside style={{background:'var(--bg2)', borderRight:'1px solid var(--border)', width:'240px', minHeight:'100vh', padding:'1.5rem 1rem', display:'flex', flexDirection:'column', gap:'0.5rem'}}>
      <Link href="/" className="flex items-center gap-2 font-bold text-lg px-3 mb-6">
        <Mail size={20} style={{color:'var(--accent)'}}/> Mail<span style={{color:'var(--accent)'}}>Vault</span>
      </Link>
      {navItems.map(({href,label,icon:Icon})=>{
        const active = pathname === href;
        return (
          <Link key={href} href={href} onClick={()=>setSidebarOpen(false)} style={{display:'flex', alignItems:'center', gap:'0.75rem', padding:'0.6rem 0.75rem', borderRadius:'8px', fontSize:'0.875rem', fontWeight: active ? '600':'400', background: active ? 'rgba(108,99,255,0.2)':'transparent', color: active ? 'white': 'var(--muted)', transition:'all 0.2s'}}>
            <Icon size={18} style={{color: active ? 'var(--accent)':'inherit'}}/>{label}
          </Link>
        );
      })}
      <div style={{marginTop:'auto'}}>
        <Link href="/login" style={{display:'flex', alignItems:'center', gap:'0.75rem', padding:'0.6rem 0.75rem', borderRadius:'8px', fontSize:'0.875rem', color:'var(--muted)'}}>
          <LogOut size={18}/> Sign Out
        </Link>
      </div>
    </aside>
  );
  return (
    <div style={{display:'flex', minHeight:'100vh'}}>
      <div className="hidden md:block"><Sidebar/></div>
      {sidebarOpen && (
        <div className="md:hidden fixed inset-0 z-50 flex">
          <div className="flex-1 bg-black/60" onClick={()=>setSidebarOpen(false)}/>
          <div className="absolute left-0 top-0 h-full"><Sidebar/></div>
        </div>
      )}
      <div style={{flex:1, display:'flex', flexDirection:'column'}}>
        <header className="md:hidden flex items-center justify-between px-4 py-3" style={{borderBottom:'1px solid var(--border)', background:'var(--bg2)'}}>
          <span className="font-bold">MailVault</span>
          <button onClick={()=>setSidebarOpen(!sidebarOpen)}><Menu size={22}/></button>
        </header>
        <main style={{flex:1, padding:'2rem 1.5rem', background:'var(--bg)'}}>{children}</main>
      </div>
    </div>
  );
}
