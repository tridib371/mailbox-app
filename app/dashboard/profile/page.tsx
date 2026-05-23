"use client";
import { useState } from "react";
import { User, Bell, Shield, Key, Camera, CheckCircle } from "lucide-react";

export default function ProfilePage() {
  const [saved, setSaved] = useState(false);
  const [notifications, setNotifications] = useState({ email:true, sms:false, push:true, weekly:true });
  const toggle = (k: keyof typeof notifications) => setNotifications(p=>({...p,[k]:!p[k]}));
  const Toggle = ({on, onToggle}: {on:boolean, onToggle:()=>void}) => (
    <button onClick={onToggle} style={{width:'40px', height:'22px', borderRadius:'11px', background: on ? 'var(--accent)':'var(--border)', position:'relative', transition:'background 0.2s', flexShrink:0}}>
      <span style={{position:'absolute', top:'3px', left: on ? '21px':'3px', width:'16px', height:'16px', borderRadius:'50%', background:'white', transition:'left 0.2s'}}/>
    </button>
  );
  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-extrabold mb-8">Profile Settings</h1>
      {/* Avatar */}
      <div className="card mb-6">
        <h2 className="font-bold mb-4 flex items-center gap-2"><User size={16} style={{color:'var(--accent)'}}/>Personal Information</h2>
        <div className="flex items-center gap-4 mb-6">
          <div className="relative">
            <div className="w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold" style={{background:'linear-gradient(135deg,#6c63ff,#a78bfa)'}}>JD</div>
            <button className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full flex items-center justify-center" style={{background:'var(--surface)', border:'1px solid var(--border)'}}>
              <Camera size={12}/>
            </button>
          </div>
          <div>
            <p className="font-semibold">John Doe</p>
            <p className="text-sm" style={{color:'var(--muted)'}}>Advanced Plan · Member since Jan 2025</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div><label className="text-xs mb-1 block" style={{color:'var(--muted)'}}>First Name</label><input className="input-field" defaultValue="John"/></div>
          <div><label className="text-xs mb-1 block" style={{color:'var(--muted)'}}>Last Name</label><input className="input-field" defaultValue="Doe"/></div>
          <div className="md:col-span-2"><label className="text-xs mb-1 block" style={{color:'var(--muted)'}}>Email</label><input className="input-field" defaultValue="john.doe@example.com"/></div>
          <div><label className="text-xs mb-1 block" style={{color:'var(--muted)'}}>Phone</label><input className="input-field" defaultValue="+1 (555) 012-3456"/></div>
          <div><label className="text-xs mb-1 block" style={{color:'var(--muted)'}}>Company (optional)</label><input className="input-field" placeholder="Your company"/></div>
        </div>
        <button className="btn-primary mt-4" onClick={()=>{setSaved(true); setTimeout(()=>setSaved(false),2500);}}>
          {saved ? <span className="flex items-center gap-2"><CheckCircle size={15}/>Saved!</span> : "Save Changes"}
        </button>
      </div>
      {/* Notifications */}
      <div className="card mb-6">
        <h2 className="font-bold mb-4 flex items-center gap-2"><Bell size={16} style={{color:'var(--accent)'}}/>Notifications</h2>
        <div className="space-y-4">
          {([
            {key:'email', label:"Email Notifications", desc:"Get notified via email for new mail"},
            {key:'sms', label:"SMS Alerts", desc:"Receive text messages for urgent items"},
            {key:'push', label:"Push Notifications", desc:"Browser push notifications"},
            {key:'weekly', label:"Weekly Digest", desc:"Weekly summary of your mail activity"},
          ] as const).map(({key,label,desc})=>(
            <div key={key} className="flex items-center justify-between">
              <div><p className="text-sm font-medium">{label}</p><p className="text-xs" style={{color:'var(--muted)'}}>{desc}</p></div>
              <Toggle on={notifications[key]} onToggle={()=>toggle(key)}/>
            </div>
          ))}
        </div>
      </div>
      {/* Security */}
      <div className="card mb-6">
        <h2 className="font-bold mb-4 flex items-center gap-2"><Shield size={16} style={{color:'var(--accent)'}}/>Security</h2>
        <div className="space-y-3">
          <div><label className="text-xs mb-1 block" style={{color:'var(--muted)'}}>Current Password</label><input className="input-field" type="password" placeholder="••••••••"/></div>
          <div><label className="text-xs mb-1 block" style={{color:'var(--muted)'}}>New Password</label><input className="input-field" type="password" placeholder="Min. 8 characters"/></div>
          <div><label className="text-xs mb-1 block" style={{color:'var(--muted)'}}>Confirm New Password</label><input className="input-field" type="password" placeholder="Repeat new password"/></div>
          <button className="btn-outline flex items-center gap-2 text-sm"><Key size={14}/>Update Password</button>
        </div>
      </div>
      {/* Danger */}
      <div className="card" style={{borderColor:'rgba(239,68,68,0.3)'}}>
        <h2 className="font-bold mb-2 text-red-400">Danger Zone</h2>
        <p className="text-sm mb-4" style={{color:'var(--muted)'}}>Once you delete your account, there is no going back. Please be certain.</p>
        <button className="text-sm px-4 py-2 rounded-lg" style={{background:'rgba(239,68,68,0.15)', border:'1px solid rgba(239,68,68,0.3)', color:'#f87171'}}>Delete Account</button>
      </div>
    </div>
  );
}
