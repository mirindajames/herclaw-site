export default function CheckoutPage() {
  return (
    <main className="min-h-screen bg-[#fbfbfd] px-6 py-20 text-[#1d1d1f] sm:px-8 lg:px-10">
      <div className="mx-auto max-w-3xl rounded-[2rem] bg-white p-10 text-center shadow-[0_24px_80px_rgba(0,0,0,0.08)] ring-1 ring-black/5">
        <p className="text-sm font-medium text-[#6e6e73]">HerClaw Starter Kit</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">Checkout coming next.</h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#6e6e73]">
          This placeholder page is here so the buy button works cleanly during preview. Stripe checkout can be connected in the next build step.
        </p>
        <div className="mt-10">
          <a href="/" className="inline-flex rounded-full bg-[#0071e3] px-8 py-4 text-base font-medium text-white transition hover:bg-[#0077ed]">
            Back to HerClaw
          </a>
        </div>
      </div>
    </main>
  );
}
