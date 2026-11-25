"use client";

import { useMemo, useState } from "react";
import { Crown, Sparkles, ShieldCheck, CircleHelp, Menu, X, Coins, Play, Gift, Trophy, Gamepad2, ChevronRight, Star, Zap } from "lucide-react";

const games = [
  { id: "royal-reels", name: "Royal Reels", category: "Slots", tag: "FEATURED", art: "🎰", tone: "from-amber-500/30 to-orange-950/70", description: "A bright, classic reel-room demo." },
  { id: "neon-nights", name: "Neon Nights", category: "Slots", tag: "POPULAR", art: "🌃", tone: "from-fuchsia-500/30 to-indigo-950/80", description: "A neon-inspired reel experience." },
  { id: "lucky-lantern", name: "Lucky Lantern", category: "Arcade", tag: "NEW", art: "🏮", tone: "from-rose-500/30 to-red-950/80", description: "A playful arcade-style demo." },
  { id: "golden-vault", name: "Golden Vault", category: "Table", tag: "TABLE", art: "💎", tone: "from-yellow-500/30 to-emerald-950/80", description: "A vault-themed table demo." },
  { id: "cosmic-cascade", name: "Cosmic Cascade", category: "Arcade", tag: "ARCADE", art: "🌌", tone: "from-cyan-500/30 to-blue-950/80", description: "A cosmic casual-game concept." },
  { id: "crown-club", name: "Crown Club", category: "Table", tag: "TABLE", art: "♠️", tone: "from-violet-500/30 to-purple-950/80", description: "A refined card-room concept." }
];

type Game = typeof games[number];

export default function Home() {
  const [tab, setTab] = useState("All Games");
  const [selected, setSelected] = useState<Game | null>(null);
  const [credits, setCredits] = useState(25000);
  const [spinning, setSpinning] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [notice, setNotice] = useState("Demo mode · Credits have no cash value and cannot be redeemed.");

  const filtered = useMemo(() => tab === "All Games" ? games : games.filter(g => g.category === tab), [tab]);

  function playDemo() {
    if (spinning) return;
    setSpinning(true);
    setNotice("Demo game running — no purchase, wager, prize, or redemption.");
    window.setTimeout(() => {
      const award = Math.floor(Math.random() * 350) + 50;
      setCredits(v => v + award);
      setSpinning(false);
      setNotice(`Demo round complete: +${award.toLocaleString()} practice credits. No monetary value.`);
    }, 900);
  }

  return (
    <main className="min-h-screen">
      <div className="border-b border-white/10 bg-[#0d1424]/90">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 text-xs text-slate-400">
          <div className="flex items-center gap-2"><ShieldCheck size={14} className="text-emerald-400" /> DEMONSTRATION PLATFORM <span className="hidden sm:inline">· No real-money play</span></div>
          <div className="hidden sm:block">18+ concept preview · Jurisdiction review required before any regulated launch</div>
          <button onClick={() => setNotice("This prototype is for product demonstration only.")} className="flex items-center gap-1 hover:text-white"><CircleHelp size={14}/> Help</button>
        </div>
      </div>

      <header className="sticky top-0 z-30 border-b border-white/10 bg-[#090D18]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
          <a href="#" className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-amber-200 to-amber-600 text-[#17120a] shadow-glow"><Crown size={22}/></div>
            <div><div className="text-lg font-black tracking-[.18em]">ROYALE</div><div className="-mt-1 text-[9px] tracking-[.35em] text-amber-300">PLAY THE EXPERIENCE</div></div>
          </a>
          <nav className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
            <a href="#lobby" className="hover:text-amber-300">Games</a><a href="#rewards" className="hover:text-amber-300">Promotions</a><a href="#about" className="hover:text-amber-300">About</a>
          </nav>
          <div className="hidden items-center gap-3 sm:flex">
            <div className="rounded-xl border border-amber-300/20 bg-amber-300/5 px-3 py-2 text-sm"><span className="text-amber-300">◆</span> {credits.toLocaleString()} <span className="text-slate-500">demo</span></div>
            <button onClick={() => setNotice("Account registration will be added after secure authentication is implemented.")} className="rounded-xl bg-amber-300 px-5 py-2.5 text-sm font-bold text-slate-950 hover:bg-amber-200">Sign in</button>
          </div>
          <button className="md:hidden" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">{mobileOpen ? <X/> : <Menu/>}</button>
        </div>
        {mobileOpen && <div className="border-t border-white/10 px-4 py-4 md:hidden"><div className="flex flex-col gap-4 text-sm"><a href="#lobby" onClick={()=>setMobileOpen(false)}>Games</a><a href="#rewards" onClick={()=>setMobileOpen(false)}>Promotions</a><button onClick={()=>setNotice("Account registration is not enabled in this prototype.")}>Sign in</button></div></div>}
      </header>

      <section className="mx-auto grid max-w-7xl gap-10 px-4 pb-16 pt-14 md:grid-cols-[1.1fr_.9fr] md:items-center md:pt-24">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber-300/20 bg-amber-300/5 px-4 py-2 text-xs font-semibold tracking-wider text-amber-200"><Sparkles size={14}/> THE NEXT CHAPTER OF PLAY</div>
          <h1 className="max-w-2xl text-5xl font-black leading-[1.04] tracking-tight sm:text-6xl lg:text-7xl">Make every<br/><span className="bg-gradient-to-r from-amber-100 via-amber-300 to-orange-400 bg-clip-text text-transparent">moment</span> a royal one.</h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-400">Explore a polished world of casual games, bold visuals, and a player-first experience. Welcome to the Project Royale prototype.</p>
          <div className="mt-8 flex flex-wrap gap-3"><a href="#lobby" className="inline-flex items-center gap-2 rounded-xl bg-amber-300 px-6 py-3.5 font-bold text-slate-950 hover:bg-amber-200">Explore games <ChevronRight size={18}/></a><a href="#about" className="rounded-xl border border-white/15 px-6 py-3.5 font-semibold text-white hover:border-amber-300/50">Discover Royale</a></div>
          <div className="mt-10 flex flex-wrap gap-6 text-xs text-slate-500"><span className="flex items-center gap-2"><ShieldCheck size={15} className="text-emerald-400"/> Demo-only experience</span><span className="flex items-center gap-2"><Zap size={15} className="text-amber-300"/> Instant-play concepts</span></div>
        </div>
        <div className="relative mx-auto w-full max-w-xl">
          <div className="absolute -inset-8 rounded-full bg-amber-500/10 blur-3xl"/>
          <div className="relative overflow-hidden rounded-[2rem] border border-amber-200/20 bg-gradient-to-br from-[#26344d] via-[#151d31] to-[#0b1020] p-6 shadow-2xl">
            <div className="flex items-center justify-between"><span className="text-xs font-bold tracking-[.25em] text-amber-200">ROYAL COLLECTION</span><span className="rounded-full border border-emerald-300/20 bg-emerald-300/10 px-3 py-1 text-[10px] text-emerald-300">DEMO</span></div>
            <div className="my-8 grid grid-cols-3 gap-3">
              {["👑","💎","♠️","🎰","✨","🏆","🍀","🃏","🌟"].map((v,i)=><div key={i} className={`grid aspect-square place-items-center rounded-2xl border border-white/10 bg-gradient-to-br ${i%2===0?"from-amber-300/20 to-amber-900/20":"from-indigo-300/10 to-slate-900/50"} text-4xl shadow-inner`}>{v}</div>)}
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/20 p-4"><div className="flex items-center justify-between"><div><div className="text-xs text-slate-400">YOUR DEMO BALANCE</div><div className="mt-1 text-3xl font-black text-amber-200">{credits.toLocaleString()} <span className="text-sm font-medium text-slate-400">credits</span></div></div><Coins className="text-amber-300" size={30}/></div><div className="mt-4 h-1.5 overflow-hidden rounded-full bg-white/10"><div className="h-full w-2/3 rounded-full bg-gradient-to-r from-amber-500 to-yellow-200"/></div></div>
            <p className="mt-3 text-center text-[10px] text-slate-500">Illustrative demo credits · No cash value</p>
          </div>
        </div>
      </section>

      <section id="lobby" className="border-y border-white/5 bg-[#0d1422]/70 py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4"><div><div className="text-xs font-bold tracking-[.25em] text-amber-300">FIND YOUR NEXT FAVORITE</div><h2 className="mt-2 text-3xl font-black sm:text-4xl">Explore the lobby</h2><p className="mt-2 text-sm text-slate-400">A collection of original game concepts in demonstration mode.</p></div><div className="flex items-center gap-2 text-sm text-slate-400"><Gamepad2 size={17}/> {filtered.length} experiences</div></div>
          <div className="mb-7 flex flex-wrap gap-2">{["All Games","Slots","Arcade","Table"].map(t=><button key={t} onClick={()=>setTab(t)} className={`rounded-full px-5 py-2.5 text-sm font-semibold ${tab===t?"bg-amber-300 text-slate-950":"border border-white/10 bg-white/[.03] text-slate-300 hover:border-amber-300/40"}`}>{t}</button>)}</div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map(g=><button key={g.id} onClick={()=>setSelected(g)} className="group overflow-hidden rounded-2xl border border-white/10 bg-[#131c2e] text-left hover:-translate-y-1 hover:border-amber-300/40">
              <div className={`relative grid h-48 place-items-center bg-gradient-to-br ${g.tone}`}><span className="text-7xl drop-shadow-2xl transition-transform group-hover:scale-110">{g.art}</span><span className="absolute left-4 top-4 rounded-md border border-white/15 bg-black/30 px-2 py-1 text-[9px] font-bold tracking-widest text-amber-100">{g.tag}</span><span className="absolute bottom-4 right-4 grid h-10 w-10 place-items-center rounded-full bg-amber-300 text-slate-950"><Play size={17} fill="currentColor"/></span></div>
              <div className="p-5"><div className="flex items-center justify-between"><h3 className="text-lg font-bold">{g.name}</h3><span className="text-[10px] uppercase tracking-widest text-slate-500">{g.category}</span></div><p className="mt-2 text-sm text-slate-400">{g.description}</p></div>
            </button>)}
          </div>
        </div>
      </section>

      <section id="rewards" className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid gap-5 md:grid-cols-3">
          {[{icon:<Gift/>,title:"Promotions framework",desc:"A place for future operator-approved offers and campaign messaging."},{icon:<Trophy/>,title:"Player milestones",desc:"Explore progress concepts, achievements, and friendly challenges."},{icon:<Star/>,title:"Player-first design",desc:"Clear account information and transparent product experiences."}].map((x,i)=><div key={i} className="rounded-2xl border border-white/10 bg-white/[.03] p-6"><div className="mb-5 grid h-11 w-11 place-items-center rounded-xl bg-amber-300/10 text-amber-300">{x.icon}</div><h3 className="font-bold">{x.title}</h3><p className="mt-2 text-sm leading-6 text-slate-400">{x.desc}</p></div>)}
        </div>
      </section>

      <section id="about" className="border-t border-white/10 bg-[#0d1422] py-14">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 md:grid-cols-[1fr_auto] md:items-center"><div><div className="text-xs font-bold tracking-[.25em] text-amber-300">BUILT FOR WHAT'S NEXT</div><h2 className="mt-3 text-3xl font-black">A platform with room to grow.</h2><p className="mt-3 max-w-2xl text-sm leading-7 text-slate-400">Project Royale is an early product prototype. Any future regulated gaming functionality will require appropriate licensing, independent testing, jurisdiction controls, and approved partners.</p></div><div className="rounded-2xl border border-amber-300/20 bg-amber-300/5 p-5"><div className="text-sm font-bold text-amber-200">Prototype status</div><div className="mt-2 text-xs text-slate-400">No deposits · No cash wagers · No withdrawals</div></div></div>
      </section>

      <footer className="border-t border-white/10 px-4 py-8 text-center text-xs text-slate-600"><div className="font-bold tracking-[.25em] text-slate-400">PROJECT ROYALE</div><p className="mt-3">© 2026 Project Royale · Prototype experience only</p><p className="mt-2">Demo credits have no monetary value and cannot be redeemed.</p></footer>

      {notice && <div className="fixed bottom-4 left-1/2 z-40 w-[calc(100%-2rem)] max-w-xl -translate-x-1/2 rounded-xl border border-white/10 bg-[#182236] px-4 py-3 text-center text-xs text-slate-300 shadow-2xl">{notice}<button onClick={()=>setNotice("")} className="ml-3 text-amber-300">Dismiss</button></div>}

      {selected && <div className="fixed inset-0 z-50 grid place-items-center bg-black/75 p-4 backdrop-blur-sm" role="dialog" aria-modal="true" aria-label={`${selected.name} demo`}>
        <div className="w-full max-w-md rounded-3xl border border-amber-200/20 bg-[#111a2b] p-6 shadow-2xl">
          <div className="flex items-start justify-between"><div><div className="text-xs font-bold tracking-widest text-amber-300">DEMO EXPERIENCE</div><h3 className="mt-2 text-2xl font-black">{selected.name}</h3></div><button onClick={()=>setSelected(null)} className="rounded-lg p-2 text-slate-400 hover:bg-white/10" aria-label="Close"><X/></button></div>
          <div className={`my-6 grid h-48 place-items-center rounded-2xl bg-gradient-to-br ${selected.tone} text-8xl`}>{selected.art}</div>
          <p className="text-sm leading-6 text-slate-400">{selected.description} This local demo awards practice credits only. There are no purchases, wagers, prizes, or redemption.</p>
          <div className="mt-5 flex items-center justify-between rounded-xl bg-black/20 p-4"><span className="text-xs text-slate-400">Practice balance</span><strong className="text-amber-200">{credits.toLocaleString()}</strong></div>
          <button disabled={spinning} onClick={playDemo} className="mt-4 w-full rounded-xl bg-amber-300 py-3.5 font-bold text-slate-950 disabled:opacity-60">{spinning ? "Playing demo…" : "Play free demo round"}</button>
          <p className="mt-3 text-center text-[10px] text-slate-500">Practice credits only · No cash value</p>
        </div>
      </div>}
    </main>
  );
}
