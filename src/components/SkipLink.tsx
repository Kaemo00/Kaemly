export default function SkipLink() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 z-[100] rounded-md bg-white/90 px-3 py-2 text-sm text-black shadow"
    >
      Aller au contenu
    </a>
  );
}
