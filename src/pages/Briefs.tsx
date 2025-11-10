import { projects } from '@/data/projects';

export default function BriefsPage() {
  return (
    <section className="space-y-8">
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold">Cahiers des charges</h1>
        <p className="text-white/80">Résumé par projet + lien vers le document complet (MD/PDF).</p>
      </header>

      <ul className="grid gap-6 md:grid-cols-2">
        {projects.map((p) => (
          <li
            key={p.slug}
            id={p.slug}
            className="rounded-xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition"
          >
            <div className="mb-2 flex items-center justify-between">
              <h2 className="text-xl font-medium">{p.title}</h2>
              <span className="rounded-full bg-white/10 px-3 py-1 text-xs">
                {p.status || 'WIP'}
              </span>
            </div>

            <p className="mb-4 text-white/80">{p.pitch}</p>

            <ul className="mb-4 list-disc pl-5 text-sm text-white/70 space-y-1">
              {p.brief?.goals?.slice(0, 3).map((goal, i) => (
                <li key={i}>{goal}</li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-3">
              <a
                href={`/projects/${p.slug}`}
                className="rounded bg-blue-600 px-3 py-1 text-sm hover:bg-blue-700"
              >
                Voir projet
              </a>
              <a
                href={`/briefs/${p.slug}.md`}
                className="rounded bg-white/20 px-3 py-1 text-sm hover:bg-white/30"
              >
                Voir cahier complet
              </a>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
