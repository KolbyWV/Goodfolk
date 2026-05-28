import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white px-6 py-10">
      <div className="mx-auto flex min-h-[calc(100vh-5rem)] max-w-5xl flex-col justify-between">
        <section className="py-16">
          <p className="mb-3 font-medium text-amber-300">
            Goodfolk Digital
          </p>

          <h1 className="max-w-3xl text-5xl font-bold tracking-tight md:text-7xl">
            Small, sharp digital tools for good folks.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
            Goodfolk Digital is a small software workshop building useful web
            tools, workflow helpers, and lightweight automation projects.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="https://tools.goodfolkdigital.com"
              className="rounded-xl bg-amber-300 px-6 py-3 text-center font-semibold text-slate-950 transition hover:bg-amber-200"
            >
              Open Goodfolk Toolbox
            </a>

            <a
              href="mailto:hello@goodfolkdigital.com"
              className="rounded-xl border border-slate-700 px-6 py-3 text-center font-semibold text-zinc-200 transition hover:bg-slate-900"
            >
              Contact
            </a>
          </div>
        </section>

        <section className="grid gap-5 pb-16 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <p className="mb-2 text-sm font-medium text-amber-300">
              Current Project
            </p>

            <h2 className="text-2xl font-semibold">
              Goodfolk Toolbox
            </h2>

            <p className="mt-3 text-zinc-400">
              A growing collection of free browser-based utilities for office
              work and camping planning.
            </p>

            <Link
              href="https://tools.goodfolkdigital.com"
              className="mt-5 inline-block text-sm font-semibold text-amber-300 hover:text-amber-200"
            >
              Visit toolbox →
            </Link>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <p className="mb-2 text-sm font-medium text-amber-300">
              Coming Soon
            </p>

            <h2 className="text-2xl font-semibold">
              Workflow Automations
            </h2>

            <p className="mt-3 text-zinc-400">
              Lightweight systems for recurring tasks, data cleanup, reporting,
              and small business operations.
            </p>
          </div>
        </section>

        <footer className="border-t border-slate-800 py-6 text-sm text-zinc-500">
          © {new Date().getFullYear()} Goodfolk Digital. Built for good folks.
        </footer>
      </div>
    </main>
  );
}