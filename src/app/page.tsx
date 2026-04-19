const howItWorks = [
  {
    step: "Step 1",
    title: "Install OpenClaw with a simple guided setup",
  },
  {
    step: "Step 2",
    title: "Customize your AI assistant for content, work, or business",
  },
  {
    step: "Step 3",
    title: "Use your assistant daily to automate tasks and create income opportunities",
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

const soundsLikeYou = [
  "You keep hearing about AI… but don’t know where to start",
  "Everything feels too technical or confusing",
  "You’ve tried tools but nothing actually sticks",
  "You want to make money online but don’t have a clear system",
];

const productBullets = [
  "Set up your own AI assistant",
  "Use it for content, business, and income",
  "Automate tasks that normally take hours",
  "Actually turn AI into leverage (not just entertainment)",
];

const outcomes = [
  "A working AI assistant customized to you",
  "A repeatable system for content or income",
  "Confidence using AI tools daily",
  "A clear path to monetizing your skills online",
];

const testimonials = [
  {
    quote: "I was completely overwhelmed by AI tools before this. HerClaw made it actually click for me.",
    name: "Early User",
  },
  {
    quote: "I finally feel like I understand how to use AI in a practical way.",
    name: "Beta Tester",
  },
  {
    quote: "This made OpenClaw feel less intimidating and much more useful for real work.",
    name: "Starter Kit User",
  },
];

const valueStack = [
  "Step-by-step setup walkthrough ($49 value)",
  "AI assistant customization guide ($39 value)",
  "Content + income use cases ($29 value)",
  "Beginner AI workflows ($39 value)",
  "Templates and systems ($29 value)",
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
          Turn AI into your personal income assistant — even if you’re not tech-savvy.
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-xl leading-8 text-[#6e6e73] sm:text-2xl">
          Build a simple AI system that helps you create content, automate tasks, and start making money online — without coding, overwhelm, or guesswork.
        </p>
        <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-[#6e6e73] sm:text-lg">
          Designed for women who feel stuck, overwhelmed by tech, or unsure how to actually use AI to improve their life and income.
        </p>
        <div className="mt-10 flex justify-center">
          <a
            href="#buy"
            className="rounded-full bg-[#0071e3] px-8 py-4 text-base font-medium text-white transition hover:bg-[#0077ed]"
          >
            Get the HerClaw Starter Kit — $39
          </a>
        </div>
        <div className="mt-4 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm text-[#6e6e73]">
          <span>Beginner-friendly</span>
          <span>Step-by-step system</span>
          <span>No coding required</span>
        </div>
        <div className="mt-14 overflow-hidden rounded-[2.25rem] bg-[radial-gradient(circle_at_top,#ffffff,#ececf1)] px-6 py-10 shadow-[0_40px_120px_rgba(0,0,0,0.10)] sm:px-10 sm:py-14">
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
        <div className="mx-auto max-w-5xl px-6 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-medium text-[#6e6e73]">How HerClaw Works</p>
            <h2 className="mt-3 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
              A simple path from AI overwhelm to daily use.
            </h2>
          </div>
          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {howItWorks.map((item) => (
              <div key={item.title} className="rounded-[1.75rem] bg-[#f5f5f7] p-8 ring-1 ring-black/5">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-white text-sm font-semibold text-[#1d1d1f] shadow-[0_8px_24px_rgba(0,0,0,0.06)]">
                  {item.step.replace("Step ", "")}
                </div>
                <h3 className="text-2xl font-semibold tracking-[-0.03em]">{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-5xl px-6 sm:px-8 lg:px-10">
          <div className="text-center">
            <p className="text-sm font-medium text-[#6e6e73]">Does this sound like you?</p>
            <h2 className="mt-3 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
              You’re interested in AI, but still stuck at the starting line.
            </h2>
          </div>
          <div className="mt-12 grid gap-4">
            {soundsLikeYou.map((item) => (
              <div key={item} className="rounded-[1.75rem] bg-[#f5f5f7] p-7 ring-1 ring-black/5">
                <p className="text-xl leading-8 tracking-[-0.02em] text-[#1d1d1f]">{item}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-xl font-medium tracking-[-0.02em] text-[#1d1d1f]">
            That’s exactly why HerClaw exists.
          </p>
          <div className="mt-8 text-center">
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
            <p className="text-sm font-medium text-white/55">What is HerClaw?</p>
            <h2 className="mt-3 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
              A beginner-first system for turning AI into real leverage.
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-xl leading-8 text-white/70">
              HerClaw is a beginner-first system that shows you exactly how to:
            </p>
          </div>
          <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {productBullets.map((item) => (
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
        <div className="mx-auto max-w-5xl px-6 sm:px-8 lg:px-10">
          <div className="text-center">
            <p className="text-sm font-medium text-[#6e6e73]">Women are already using HerClaw to simplify AI</p>
            <h2 className="mt-3 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
              Practical. Clear. Much less overwhelming.
            </h2>
          </div>
          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {testimonials.map((item) => (
              <div key={item.quote} className="rounded-[1.75rem] bg-white p-8 shadow-[0_16px_50px_rgba(0,0,0,0.06)] ring-1 ring-black/5">
                <p className="text-lg leading-8 text-[#1d1d1f]">“{item.quote}”</p>
                <p className="mt-5 text-sm font-medium text-[#6e6e73]">— {item.name}</p>
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

      <section className="bg-white py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-5xl px-6 sm:px-8 lg:px-10">
          <div className="text-center">
            <p className="text-sm font-medium text-[#6e6e73]">What’s inside the Starter Kit</p>
            <h2 className="mt-3 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
              More value than a simple guide.
            </h2>
          </div>
          <div className="mt-14 rounded-[2rem] bg-[#f5f5f7] p-8 ring-1 ring-black/5 sm:p-10">
            <div className="grid gap-4">
              {valueStack.map((item) => (
                <div key={item} className="rounded-[1.25rem] bg-white px-5 py-4 shadow-[0_10px_30px_rgba(0,0,0,0.04)]">
                  <p className="text-lg leading-8 text-[#1d1d1f]">{item}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-col gap-3 border-t border-black/8 pt-8 text-center sm:flex-row sm:items-end sm:justify-center sm:gap-8">
              <div>
                <p className="text-sm text-[#6e6e73]">Total value</p>
                <p className="text-3xl font-semibold tracking-[-0.03em]">$185+</p>
              </div>
              <div>
                <p className="text-sm text-[#6e6e73]">Today</p>
                <p className="text-4xl font-semibold tracking-[-0.04em] text-[#1d1d1f]">$39</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-5xl px-6 sm:px-8 lg:px-10">
          <div className="text-center">
            <p className="text-sm font-medium text-[#6e6e73]">What you’ll walk away with</p>
            <h2 className="mt-3 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
              Clear outcomes, not vague inspiration.
            </h2>
          </div>
          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {outcomes.map((item) => (
              <div key={item} className="rounded-[1.75rem] bg-[#f5f5f7] p-7 ring-1 ring-black/5">
                <p className="text-xl leading-8 tracking-[-0.02em] text-[#1d1d1f]">{item}</p>
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
          <p className="text-sm font-medium text-white/55">Not ready to buy yet?</p>
          <h2 className="mt-3 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
            Download the free AI Starter Checklist.
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-xl leading-8 text-white/70">
            Get the free AI Starter Checklist and learn how to set up your first assistant step-by-step.
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
              Download Free Checklist
            </button>
          </form>
        </div>
      </section>

      <section id="buy" className="mx-auto max-w-5xl px-6 py-20 text-center sm:px-8 lg:px-10 lg:py-28">
        <p className="text-sm font-medium text-[#6e6e73]">Start building your AI advantage today</p>
        <h2 className="mt-3 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
          You don’t need to be technical. You just need a clear system.
        </h2>
        <p className="mx-auto mt-6 max-w-3xl text-xl leading-8 text-[#6e6e73]">
          If you want the fastest path from AI overwhelm to a useful personal income assistant, start here.
        </p>
        <div className="mt-8 text-5xl font-semibold tracking-[-0.05em] sm:text-6xl">$39</div>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="/checkout"
            className="inline-flex min-w-[240px] items-center justify-center rounded-full bg-[#0071e3] px-8 py-4 text-base font-medium text-white transition hover:bg-[#0077ed]"
          >
            Get the Starter Kit — $39
          </a>
          <a
            href="#free"
            className="inline-flex min-w-[240px] items-center justify-center rounded-full px-8 py-4 text-base font-medium text-[#0071e3] transition hover:text-[#0077ed]"
          >
            Download Free Checklist
          </a>
        </div>
        <p className="mt-4 text-sm text-[#6e6e73]">Early access pricing — may increase soon</p>
      </section>
    </main>
  );
}
