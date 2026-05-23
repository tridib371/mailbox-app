import Link from "next/link";
import { Mail, Package, Clock, TrendingUp, ArrowRight, CheckCircle, AlertCircle } from "lucide-react";

const recentMails = [
  { id:1, from:"Chase Bank", subject:"Statement Ready - Account ****4521", time:"2h ago", read:false, type:"finance" },
  { id:2, from:"Amazon", subject:"Your package has been delivered", time:"5h ago", read:false, type:"package" },
  { id:3, from:"IRS", subject:"2024 Tax Refund Processing", time:"1d ago", read:true, type:"government" },
  { id:4, from:"Blue Cross", subject:"Explanation of Benefits - March 2025", time:"2d ago", read:true, type:"health" },
];

export default function DashboardPage() {
  const stats = [
    { label:"Total Mail", value:"142", icon:Mail, change:"+12 this month" },
    { label:"Packages", value:"8", icon:Package, change:"3 pending" },
    { label:"Awaiting Action", value:"5", icon:Clock, change:"2 urgent" },
    { label:"Storage Used", value:"68%", icon:TrendingUp, change:"of 10GB" },
  ];
  return (
    <div className="max-w-5xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-extrabold mb-1">Good morning, John 👋</h1>
        <p style={{color:'var(--muted)'}}>You have 5 items awaiting your action.</p>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map(({label,value,icon:Icon,change})=>(
          <div key={label} className="card">
            <div className="flex items-center justify-between mb-3">
              <p className="text-xs" style={{color:'var(--muted)'}}>{label}</p>
              <Icon size={16} style={{color:'var(--accent)'}}/>
            </div>
            <p className="text-2xl font-extrabold mb-1">{value}</p>
            <p className="text-xs" style={{color:'var(--muted)'}}>{change}</p>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 card">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-bold">Recent Mail</h2>
            <Link href="/dashboard/mail" className="text-xs flex items-center gap-1" style={{color:'var(--accent)'}}>View all <ArrowRight size={12}/></Link>
          </div>
          <div className="space-y-3">
            {recentMails.map(m=>(
              <div key={m.id} className="flex items-center gap-3 p-3 rounded-lg" style={{background:'var(--bg)', border:'1px solid var(--border)'}}>
                <div className="w-2 h-2 rounded-full flex-shrink-0" style={{background: m.read ? 'var(--border)':'var(--accent)'}}/>
                <div className="flex-1 min-w-0">
                  <p className={`text-sm truncate ${!m.read ? 'font-semibold':''}`}>{m.subject}</p>
                  <p className="text-xs truncate" style={{color:'var(--muted)'}}>{m.from}</p>
                </div>
                <p className="text-xs flex-shrink-0" style={{color:'var(--muted)'}}>{m.time}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="card">
          <h2 className="font-bold mb-4">Quick Actions</h2>
          <div className="space-y-3">
            {[
              {label:"View All Mail", href:"/dashboard/mail", icon:Mail},
              {label:"Manage Subscription", href:"/dashboard/subscription", icon:TrendingUp},
              {label:"Update Profile", href:"/dashboard/profile", icon:CheckCircle},
            ].map(({label,href,icon:Icon})=>(
              <Link key={label} href={href} className="flex items-center gap-3 p-3 rounded-lg" style={{background:'var(--bg)', border:'1px solid var(--border)'}}>
                <Icon size={16} style={{color:'var(--accent)'}}/><span className="text-sm">{label}</span><ArrowRight size={14} className="ml-auto" style={{color:'var(--muted)'}}/>
              </Link>
            ))}
          </div>
          <div className="mt-6 p-3 rounded-lg" style={{background:'rgba(108,99,255,0.1)', border:'1px solid rgba(108,99,255,0.3)'}}>
            <div className="flex items-start gap-2">
              <AlertCircle size={16} style={{color:'var(--accent)', flexShrink:0, marginTop:'2px'}}/>
              <p className="text-xs" style={{color:'var(--accent2)'}}>Your Advanced plan renews in <strong>8 days</strong>. <Link href="/dashboard/subscription" className="underline">Manage</Link></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
