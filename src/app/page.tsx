const features = [
  "Step-by-step Mac install walkthrough",
  "Telegram setup and first working assistant",
  "Memory system and identity file setup",
  "Safe permissions and security basics",
  "Five starter workspace templates",
  "Starter automations and common fixes",
];

const whoItsFor = [
  "Absolute beginners who want a clear path in",
  "Non-technical women who want a useful AI assistant",
  "Founders, writers, and creators who want leverage",
];

const templates = [
  "Research assistant",
  "Business assistant",
  "Writing assistant",
  "Life admin assistant",
  "Content assistant",
];

export default function Home() {
  return (
    <main className="min-h-screen">
      <section className="mx-auto flex max-w-7xl flex-col px-6 pb-20 pt-6 sm:px-8 lg:px-10">
        <div className="mb-12 flex items-center justify-between gap-4">
          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--muted)]">HerClaw</div>
            <div className="mt-2 text-sm text-[var(--muted)]">Founded by Miranda, guided by Juniper</div>
          </div>
          <a
            href="#buy"
            className="rounded-full border border-[var(--border)] bg-white/80 px-5 py-3 text-sm font-semibold text-[var(--foreground)] shadow-[var(--shadow)] backdrop-blur"
          >
            Get the starter kit
          </a>
        </div>

        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <div className="inline-flex rounded-full border border-[var(--border)] bg-white/70 px-4 py-2 text-xs font-medium text-[var(--muted)] backdrop-blur">
              OpenClaw, made clear for women
            </div>
            <h1 className="mt-6 max-w-3xl text-5xl font-semibold leading-tight tracking-tight sm:text-6xl">
              Build your own AI assistant with OpenClaw, without the chaos.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--muted)] sm:text-xl">
              HerClaw helps women install, personalize, and actually use OpenClaw with a premium,
              beginner-clear starter kit designed for real work, real writing, and real life.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="#buy"
                className="rounded-full bg-[var(--foreground)] px-7 py-4 text-center text-sm font-semibold text-white"
              >
                Buy the HerClaw Starter Kit, $39
              </a>
              <a
                href="#free"
                className="rounded-full border border-[var(--border)] bg-white/80 px-7 py-4 text-center text-sm font-semibold text-[var(--foreground)]"
              >
                Get the free beginner checklist
              </a>
            </div>
            <div className="mt-6 text-sm text-[var(--muted)]">
              Includes guide, templates, setup system, starter automations, and troubleshooting help.
            </div>
          </div>

          <div className="rounded-[2rem] border border-[var(--border)] bg-[var(--card)] p-6 shadow-[var(--shadow)] backdrop-blur sm:p-8">
            <div className="rounded-[1.5rem] bg-[#1f1722] p-6 text-white">
              <div className="text-sm uppercase tracking-[0.22em] text-white/60">HerClaw Starter Kit</div>
              <div className="mt-4 text-4xl font-semibold">$39</div>
              <p className="mt-4 text-sm leading-7 text-white/70">
                A fast, calm path to your first useful OpenClaw setup, with premium guidance and no technical posturing.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-white/85">
                {features.map((feature) => (
                  <li key={feature} className="flex gap-3">
                    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[#c084fc]" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-8 sm:px-8 lg:px-10">
        <div className="grid gap-6 rounded-[2rem] border border-[var(--border)] bg-white/70 p-8 shadow-[var(--shadow)] backdrop-blur lg:grid-cols-3">
          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--muted)]">The problem</div>
            <h2 className="mt-4 text-2xl font-semibold">Most OpenClaw tutorials are powerful, but not actually beginner-safe.</h2>
          </div>
          <div className="text-[var(--muted)] leading-8">
            They are often too fragmented, too technical, too optimized for people who already live in dev tools, and too weak on the part that matters most: building something you will actually use.
          </div>
          <div className="text-[var(--muted)] leading-8">
            HerClaw gives you a cleaner setup path, a stronger starting system, and practical templates designed for real outcomes instead of endless tinkering.
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--muted)]">What’s inside</div>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight">Everything you need to get to a real first win.</h2>
            <p className="mt-4 max-w-xl text-lg leading-8 text-[var(--muted)]">
              The Starter Kit is designed to help you move from setup anxiety to a functioning assistant you can actually trust and build with.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {features.map((feature) => (
              <div key={feature} className="rounded-[1.5rem] border border-[var(--border)] bg-white/80 p-5 shadow-sm">
                <div className="text-base font-medium">{feature}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-8 sm:px-8 lg:px-10">
        <div className="grid gap-8 rounded-[2rem] border border-[var(--border)] bg-[var(--accent-soft)]/70 p-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--muted)]">Starter templates</div>
            <h2 className="mt-4 text-3xl font-semibold">Five done-for-you assistant setups to make OpenClaw immediately useful.</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {templates.map((template) => (
              <div key={template} className="rounded-[1.25rem] bg-white/90 p-5 text-base font-medium shadow-sm">
                {template}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--muted)]">Who it’s for</div>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight">Built for women who want leverage, not another technical rabbit hole.</h2>
          </div>
          <div className="space-y-4">
            {whoItsFor.map((item) => (
              <div key={item} className="rounded-[1.5rem] border border-[var(--border)] bg-white/80 p-6 text-lg leading-8 text-[var(--foreground)]">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="free" className="mx-auto max-w-7xl px-6 py-8 sm:px-8 lg:px-10">
        <div className="rounded-[2rem] border border-[var(--border)] bg-[#241a28] p-8 text-white shadow-[var(--shadow)] sm:p-10">
          <div className="max-w-3xl">
            <div className="text-sm font-semibold uppercase tracking-[0.22em] text-white/60">Free lead magnet</div>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight">Get the free checklist: 7 beginner mistakes to avoid when setting up OpenClaw.</h2>
            <p className="mt-4 text-lg leading-8 text-white/70">
              Join the HerClaw list for beginner-clear guidance, launch updates, and practical AI leverage ideas for women building with OpenClaw.
            </p>
          </div>
          <form className="mt-8 flex flex-col gap-4 sm:max-w-xl sm:flex-row">
            <input
              type="email"
              placeholder="Enter your email"
              className="min-w-0 flex-1 rounded-full border border-white/10 bg-white/10 px-5 py-4 text-white placeholder:text-white/40 outline-none"
            />
            <button
              type="submit"
              className="rounded-full bg-white px-6 py-4 text-sm font-semibold text-[#241a28]"
            >
              Get the checklist
            </button>
          </form>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10">
        <div className="grid gap-10 rounded-[2rem] border border-[var(--border)] bg-white/70 p-8 shadow-[var(--shadow)] lg:grid-cols-[1fr_0.9fr]">
          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--muted)]">Founder</div>
            <h2 className="mt-4 text-3xl font-semibold">Built by Miranda, with Juniper as your AI guide.</h2>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-[var(--muted)]">
              HerClaw is designed to make OpenClaw feel more usable, more strategic, and more human. The goal is not to overwhelm you with tooling. It is to help you build a calm, capable assistant that creates real leverage in your work and life.
            </p>
          </div>
          <div className="rounded-[1.5rem] border border-[var(--border)] bg-[var(--background)] p-6">
            <div className="text-sm uppercase tracking-[0.22em] text-[var(--muted)]">HerClaw philosophy</div>
            <ul className="mt-5 space-y-4 text-[var(--foreground)]">
              <li>Clear over flashy</li>
              <li>Practical over performative</li>
              <li>Premium, but beginner-safe</li>
              <li>Designed for women who want real leverage</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="buy" className="mx-auto max-w-5xl px-6 pb-24 pt-8 text-center sm:px-8 lg:px-10">
        <div className="rounded-[2.25rem] border border-[var(--border)] bg-white/80 p-8 shadow-[var(--shadow)] backdrop-blur sm:p-12">
          <div className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--muted)]">Launch offer</div>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">Start with the HerClaw Starter Kit.</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-[var(--muted)]">
            A premium, beginner-clear OpenClaw setup kit with guide, templates, practical system files, and your first real path to daily AI leverage.
          </p>
          <div className="mt-8 text-5xl font-semibold">$39</div>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <a href="#" className="rounded-full bg-[var(--foreground)] px-8 py-4 text-sm font-semibold text-white">
              Buy now
            </a>
            <a href="#free" className="rounded-full border border-[var(--border)] px-8 py-4 text-sm font-semibold text-[var(--foreground)]">
              Get the free checklist first
            </a>
          </div>
          <p className="mt-5 text-sm text-[var(--muted)]">Checkout and delivery wiring can be connected to Stripe in the next step.</p>
        </div>
      </section>
    </main>
  );
}
