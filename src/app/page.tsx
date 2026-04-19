const steps = [
  {
    title: "Install OpenClaw the right way",
    body: "Follow a clean Mac setup path without bouncing between confusing tutorials, half-explained commands, and technical rabbit holes.",
  },
  {
    title: "Set up an assistant that actually helps",
    body: "Use the HerClaw templates to create an assistant for writing, business, research, content, or life admin instead of starting from a blank page.",
  },
  {
    title: "Turn it into real leverage",
    body: "Move from 'I installed it' to 'this saves me time and helps me make progress' with memory, structure, and beginner-safe automations.",
  },
];

const proof = [
  "You stop feeling like AI tools were designed for someone more technical than you.",
  "You get one clear path instead of scattered advice from 12 different sources.",
  "You leave with a working assistant, not just more bookmarks and unfinished setup steps.",
];

const objections = [
  {
    q: "What if I’m not technical?",
    a: "That is exactly who this is for. HerClaw is designed for beginners, non-technical women, and founders who want practical leverage without developer-level friction.",
  },
  {
    q: "What if I’ve already tried and gotten stuck?",
    a: "Then you need a better system, not more random advice. The Starter Kit is built to remove confusion and get you to one real first win.",
  },
  {
    q: "What if I don’t want to spend hours tinkering?",
    a: "Good. This is not for endless tweaking. It is for getting OpenClaw working quickly, clearly, and in a way that serves your actual goals.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f5f5f7] text-[#1d1d1f]">
      <section className="sticky top-0 z-20 border-b border-black/6 bg-white/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-8 lg:px-10">
          <div className="text-xl font-semibold tracking-[-0.03em]">HerClaw</div>
          <a
            href="#buy"
            className="rounded-full bg-[#0071e3] px-5 py-2.5 text-sm font-medium text-white transition hover:bg-[#0077ed]"
          >
            Get the Starter Kit
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20 pt-18 text-center sm:px-8 sm:pb-28 sm:pt-24 lg:px-10 lg:pb-32 lg:pt-28">
        <p className="text-sm font-medium text-[#6e6e73]">A beginner-clear OpenClaw system for women</p>
        <h1 className="mx-auto mt-4 max-w-5xl text-5xl font-semibold tracking-[-0.05em] sm:text-6xl lg:text-7xl">
          Build an AI assistant that actually helps you make money online.
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-xl leading-8 text-[#6e6e73] sm:text-2xl">
          HerClaw is for beginner women, non-technical women, and women founders who want to install OpenClaw, use it confidently, and turn it into real leverage for work, content, and business.
        </p>
        <div className="mt-10 flex justify-center">
          <a
            href="#buy"
            className="rounded-full bg-[#0071e3] px-8 py-4 text-base font-medium text-white transition hover:bg-[#0077ed]"
          >
            Get the Starter Kit for $39
          </a>
        </div>
        <div className="mt-14 overflow-hidden rounded-[2.25rem] bg-[radial-gradient(circle_at_top,#ffffff, #ececf1)] px-6 py-10 shadow-[0_40px_120px_rgba(0,0,0,0.10)] sm:px-10 sm:py-14">
          <div className="mx-auto max-w-4xl rounded-[2rem] bg-[#090909] px-7 py-9 text-left text-white sm:px-10 sm:py-12">
            <p className="text-sm uppercase tracking-[0.16em] text-white/50">HerClaw Starter Kit</p>
            <div className="mt-5 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <div className="text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">$39</div>
                <p className="mt-4 max-w-2xl text-lg leading-8 text-white/70">
                  A premium starter system that helps you install OpenClaw, set it up properly, and turn it into something useful instead of overwhelming.
                </p>
              </div>
              <a
                href="#buy"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-medium text-[#090909]"
              >
                Buy now
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-5xl px-6 text-center sm:px-8 lg:px-10">
          <p className="text-sm font-medium text-[#6e6e73]">The frustration</p>
          <h2 className="mt-3 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
            You know AI could help you. But OpenClaw still feels confusing, technical, and out of reach.
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-xl leading-8 text-[#6e6e73]">
            Most guides assume you already think like a developer. Most tutorials are fragmented. Most setups stop at “installed” instead of helping you create something that genuinely supports your work and income.
          </p>
          <div className="mt-10">
            <a href="#buy" className="text-base font-medium text-[#0071e3] transition hover:text-[#0077ed]">
              Get the Starter Kit &gt;
            </a>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24 lg:py-28">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:px-10">
          <div>
            <p className="text-sm font-medium text-[#6e6e73]">The transformation</p>
            <h2 className="mt-3 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
              Instead of feeling behind, you start using AI like a calm advantage.
            </h2>
          </div>
          <div className="grid gap-4">
            {proof.map((item) => (
              <div key={item} className="rounded-[1.75rem] bg-white p-7 shadow-[0_16px_50px_rgba(0,0,0,0.06)] ring-1 ring-black/5">
                <p className="text-xl leading-8 tracking-[-0.02em] text-[#1d1d1f]">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0b0b0b] py-20 text-white sm:py-24 lg:py-28">
        <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-medium text-white/55">The solution</p>
            <h2 className="mt-3 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
              The HerClaw Starter Kit gives you the fastest clean path from confusion to capability.
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-xl leading-8 text-white/70">
              You get the install guide, setup walkthrough, memory structure, assistant templates, starter automations, and beginner-safe security guidance in one system.
            </p>
          </div>
          <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {[
              "Step-by-step Mac install guide",
              "Telegram setup walkthrough",
              "Identity and memory system setup",
              "Five ready-to-use templates",
              "Starter automations",
              "Troubleshooting and next steps",
            ].map((item) => (
              <div key={item} className="rounded-[1.75rem] bg-white/6 p-7 ring-1 ring-white/10 backdrop-blur-sm">
                <p className="text-xl font-medium tracking-[-0.02em] text-white">{item}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <a
              href="#buy"
              className="inline-flex rounded-full bg-[#0071e3] px-8 py-4 text-base font-medium text-white transition hover:bg-[#0077ed]"
            >
              Get the Starter Kit
            </a>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-medium text-[#6e6e73]">How it works</p>
            <h2 className="mt-3 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
              A simple 3-step system.
            </h2>
          </div>
          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {steps.map((step, index) => (
              <div key={step.title} className="rounded-[1.9rem] bg-white p-8 shadow-[0_16px_50px_rgba(0,0,0,0.06)] ring-1 ring-black/5">
                <div className="text-sm font-medium text-[#6e6e73]">0{index + 1}</div>
                <h3 className="mt-4 text-2xl font-semibold tracking-[-0.03em]">{step.title}</h3>
                <p className="mt-4 text-lg leading-8 text-[#6e6e73]">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-5xl px-6 sm:px-8 lg:px-10">
          <div className="text-center">
            <p className="text-sm font-medium text-[#6e6e73]">Believable proof</p>
            <h2 className="mt-3 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
              This is for women who want clarity, speed, and a real first result.
            </h2>
          </div>
          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {[
              "You do not need to be technical to get value from OpenClaw if the setup is explained clearly.",
              "You do not need to automate everything. You need one assistant that starts helping this week.",
              "You do not need more AI hype. You need a system that reduces friction and creates momentum.",
            ].map((item) => (
              <div key={item} className="rounded-[1.75rem] bg-[#f5f5f7] p-7 ring-1 ring-black/5">
                <p className="text-lg leading-8 text-[#1d1d1f]">{item}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <a href="#buy" className="text-base font-medium text-[#0071e3] transition hover:text-[#0077ed]">
              Start with the Starter Kit &gt;
            </a>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-5xl px-6 sm:px-8 lg:px-10">
          <div className="text-center">
            <p className="text-sm font-medium text-[#6e6e73]">Objection handling</p>
            <h2 className="mt-3 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
              If you’re hesitant, that’s normal.
            </h2>
          </div>
          <div className="mt-14 grid gap-5">
            {objections.map((item) => (
              <div key={item.q} className="rounded-[1.75rem] bg-white p-8 shadow-[0_16px_50px_rgba(0,0,0,0.06)] ring-1 ring-black/5">
                <h3 className="text-2xl font-semibold tracking-[-0.03em]">{item.q}</h3>
                <p className="mt-4 text-lg leading-8 text-[#6e6e73]">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="free" className="bg-[#0b0b0b] py-20 text-white sm:py-24 lg:py-28">
        <div className="mx-auto max-w-5xl px-6 text-center sm:px-8 lg:px-10">
          <p className="text-sm font-medium text-white/55">Low-risk first step</p>
          <h2 className="mt-3 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
            Get the free checklist first.
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-xl leading-8 text-white/70">
            Start with “7 Beginner Mistakes to Avoid When Setting Up OpenClaw” if you want a lighter first step before buying.
          </p>
          <form className="mx-auto mt-10 flex max-w-2xl flex-col gap-4 sm:flex-row">
            <input
              type="email"
              placeholder="Enter your email"
              className="min-w-0 flex-1 rounded-full border border-white/12 bg-white/8 px-6 py-4 text-white placeholder:text-white/35 outline-none"
            />
            <button
              type="submit"
              className="rounded-full bg-[#0071e3] px-7 py-4 text-base font-medium text-white transition hover:bg-[#0077ed]"
            >
              Get the checklist
            </button>
          </form>
        </div>
      </section>

      <section id="buy" className="mx-auto max-w-5xl px-6 py-20 text-center sm:px-8 lg:px-10 lg:py-28">
        <p className="text-sm font-medium text-[#6e6e73]">Strong call to action</p>
        <h2 className="mt-3 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
          Start with the HerClaw Starter Kit.
        </h2>
        <p className="mx-auto mt-6 max-w-3xl text-xl leading-8 text-[#6e6e73]">
          If you want the fastest path from confusion to a useful OpenClaw assistant, start here.
        </p>
        <div className="mt-8 text-5xl font-semibold tracking-[-0.05em] sm:text-6xl">$39</div>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="/checkout"
            className="inline-flex min-w-[240px] items-center justify-center rounded-full bg-[#0071e3] px-8 py-4 text-base font-medium text-white transition hover:bg-[#0077ed]"
          >
            Buy the Starter Kit
          </a>
          <a
            href="#free"
            className="inline-flex min-w-[240px] items-center justify-center rounded-full px-8 py-4 text-base font-medium text-[#0071e3] transition hover:text-[#0077ed]"
          >
            Try the free checklist first &gt;
          </a>
        </div>
        <p className="mt-6 text-sm text-[#6e6e73]">Clean, simple, beginner-clear. Stripe checkout can be connected next.</p>
      </section>
    </main>
  );
}
