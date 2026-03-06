import { useState, useEffect } from 'react'

const greetings = [
  { text: 'С 8 Марта!', lang: 'Russian' },
  { text: 'Selamat Hari Perempuan!', lang: 'Indonesian' },
  { text: 'გილოცავთ ქალთა საერთაშორისო დღეს!', lang: 'Georgian' },
  { text: 'Շնորհավոր Կանանց միջազգային օրը!', lang: 'Armenian' },
]

const mathSymbols = ['π', '∑', '∞', '∫', 'Δ', '√', 'θ', 'λ', 'Ω', '≈']

const floatingSymbols = mathSymbols.map((sym, i) => ({
  sym,
  top: `${8 + ((i * 37) % 80)}%`,
  left: `${5 + ((i * 23) % 90)}%`,
  size: i % 3 === 0 ? 'text-5xl' : i % 3 === 1 ? 'text-3xl' : 'text-6xl',
  anim: i % 2 === 0 ? 'animate-pulse' : 'animate-bounce',
  delay: `${(i * 0.4).toFixed(1)}s`,
}))

const NTFY_TOPIC = 'arina-card-8march-irazkisra'

function notifyVisit() {
  // if (localStorage.getItem('card-visit-notified')) return
  fetch(`https://ntfy.sh/${NTFY_TOPIC}`, {
    method: 'GET',
    headers: {
      Title: '🌷 Arina opened your card!',
      Priority: 'high',
      Tags: 'tulip,tada',
    },
    body: 'Arina just opened the 8th March greeting card 🎉',
  })
    .then(() => localStorage.setItem('card-visit-notified', '1'))
    .catch(() => {/* silent fail */})
}



const TG = 'irazkisra'

type TicketStatus = 'pending' | 'accepted' | 'rejected'

function buildTelegramUrl(text: string) {
  return `tg://resolve?domain=${TG}&text=${encodeURIComponent(text)}`
}

function Ticket() {
  const [status, setStatus] = useState<TicketStatus>('pending')

  const handleResponse = (accepted: boolean) => {
    const msg = accepted
      ? '✅ Arina ACCEPTED the ticket to Vyborg Old Town & Castle! 🏰🎉 See you after Moscow!'
      : '❌ Arina REJECTED the ticket to Vyborg Old Town & Castle 😢 Maybe next time...'
    window.location.href = buildTelegramUrl(msg)
    setStatus(accepted ? 'accepted' : 'rejected')
  }

  return (
    <div
      className="mt-4 border-2 border-dashed border-orange-300 rounded-2xl bg-white/30 backdrop-blur-lg p-5 shadow-inner w-full max-w-sm mx-auto"
      style={{ animation: 'fadeIn 0.5s ease-in-out' }}
    >
      <div className="text-center mb-3">
        <span className="text-2xl">🎟️</span>
        <p className="font-bold text-orange-700 text-base uppercase tracking-widest mt-1">
          Official Ticket for an Adventure
        </p>
      </div>
      <div className="border-t border-dashed border-orange-200 my-3" />
      <div className="space-y-2 text-sm text-orange-900">
        <div className="flex justify-between gap-2">
          <span className="font-semibold uppercase tracking-wide text-orange-500 shrink-0">Destination</span>
          <span className="font-medium text-right">Vyborg Old Town &amp; Castle</span>
        </div>
        <div className="flex justify-between gap-2">
          <span className="font-semibold uppercase tracking-wide text-orange-500 shrink-0">Status</span>
          <span className="font-medium text-right">Valid as soon as you get back to Saint Petersburg!</span>
        </div>
      </div>
      <div className="border-t border-dashed border-orange-200 my-3" />

      {status === 'pending' && (
        <div className="flex gap-3">
          <button
            onClick={() => handleResponse(true)}
            className="flex-1 bg-emerald-400 hover:bg-emerald-500 active:scale-95 transition-all text-white font-bold py-2.5 rounded-xl text-sm shadow-md"
          >
            ✅ Accept
          </button>
          <button
            onClick={() => handleResponse(false)}
            className="flex-1 bg-rose-400 hover:bg-rose-500 active:scale-95 transition-all text-white font-bold py-2.5 rounded-xl text-sm shadow-md"
          >
            ❌ Reject
          </button>
        </div>
      )}
      {status === 'accepted' && (
        <p className="text-center text-emerald-600 font-bold text-sm">🎉 Yay! See you in Vyborg! Response sent via Telegram.</p>
      )}
      {status === 'rejected' && (
        <p className="text-center text-rose-500 font-bold text-sm">😢 Maybe next time... Response sent via Telegram.</p>
      )}

      <p className="text-center text-xs text-orange-400 tracking-widest mt-3">✦ NON-TRANSFERABLE ✦</p>
    </div>
  )
}

function App() {
  const [greetingIndex, setGreetingIndex] = useState(0)
  const [visible, setVisible] = useState(true)
  const [ticketRevealed, setTicketRevealed] = useState(false)

  useEffect(() => {
    notifyVisit()
    const interval = setInterval(() => {
      setVisible(false)
      setTimeout(() => {
        setGreetingIndex((prev) => (prev + 1) % greetings.length)
        setVisible(true)
      }, 400)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4 py-10"
      style={{ background: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 40%, #ffd1d1 70%, #ffe4e1 100%)' }}
    >
      {/* Glassmorphism depth blobs */}
      <div
        className="absolute pointer-events-none rounded-full"
        style={{ top: '-100px', left: '-100px', width: '380px', height: '380px', background: 'radial-gradient(circle, rgba(251,146,60,0.55), transparent 70%)', filter: 'blur(60px)' }}
      />
      <div
        className="absolute pointer-events-none rounded-full"
        style={{ bottom: '-80px', right: '-80px', width: '420px', height: '420px', background: 'radial-gradient(circle, rgba(244,114,182,0.45), transparent 70%)', filter: 'blur(60px)' }}
      />
      <div
        className="absolute pointer-events-none rounded-full"
        style={{ top: '40%', left: '10%', width: '260px', height: '260px', background: 'radial-gradient(circle, rgba(252,211,77,0.4), transparent 70%)', filter: 'blur(50px)' }}
      />
      <div
        className="absolute pointer-events-none rounded-full"
        style={{ top: '20%', right: '5%', width: '200px', height: '200px', background: 'radial-gradient(circle, rgba(248,113,113,0.35), transparent 70%)', filter: 'blur(45px)' }}
      />

      {/* Floating math symbols */}
      {floatingSymbols.map((s, i) => (
        <span
          key={i}
          className={`pointer-events-none select-none absolute font-serif text-white/25 ${s.size} ${s.anim}`}
          style={{ top: s.top, left: s.left, animationDelay: s.delay }}
        >
          {s.sym}
        </span>
      ))}

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center w-full max-w-md">

        {/* Cycling greeting */}
        <div className="h-16 flex items-center justify-center mb-1">
          <h1
            className={`text-3xl sm:text-4xl font-extrabold text-white text-center transition-opacity duration-300 drop-shadow-lg ${visible ? 'opacity-100' : 'opacity-0'}`}
            style={{ textShadow: '0 2px 12px rgba(234,88,12,0.5)' }}
          >
            {greetings[greetingIndex].text}
          </h1>
        </div>

        {/* Subheader */}
        <p className="font-serif text-xl sm:text-2xl italic text-white/90 mb-6 text-center drop-shadow-md">
          Для Арины Лотошвили
        </p>

        {/* Glassmorphism card */}
        <div
          className="rounded-3xl p-6 sm:p-8 w-full"
          style={{
            background: 'rgba(255, 255, 255, 0.18)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.35)',
            boxShadow: '0 8px 32px rgba(234, 88, 12, 0.15), inset 0 1px 0 rgba(255,255,255,0.4)',
          }}
        >
          {/* Tulip decoration */}
          <div className="flex justify-center gap-3 mb-4 text-3xl">
            <span>🌷</span><span>🌸</span><span>🌷</span>
          </div>

          <p className="text-base sm:text-lg text-orange-950/90 leading-relaxed text-center mb-6 font-medium">
            Wishing you an amazing holiday and a safe trip to Moscow with your family! Take a well-deserved break from the math equations today.
          </p>

          {/* Ticket button / revealed ticket */}
          {!ticketRevealed ? (
            <button
              onClick={() => setTicketRevealed(true)}
              className="w-full animate-pulse bg-orange-400 hover:bg-orange-500 active:scale-95 transition-all text-white font-bold py-3 px-6 rounded-2xl shadow-lg text-base tracking-wide"
              style={{ boxShadow: '0 4px 20px rgba(234,88,12,0.4)' }}
            >
              Tap for a post-Moscow surprise 🎁
            </button>
          ) : (
            <Ticket />
          )}
        </div>
      </div>

      {/* Footer */}
      <p className="absolute bottom-4 text-xs text-white/50 tracking-wide text-center w-full drop-shadow-sm">
        From your Indonesian friend 🇮🇩
      </p>
    </div>
  )
}

export default App