import SkipLink from '@/components/SkipLink';
import { Navbar } from '@/components/Navbar';
// import Footer from "@/components/Footer"; // à ajouter plus tard

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-dvh bg-gradient-to-br from-[#133c86] to-[#1d4ed8] text-white">
      <SkipLink />
      <Navbar />
      <main
        id="main-content"
        tabIndex={-1}
        className="mx-auto w-full max-w-6xl px-4 py-10 focus:outline-none"
      >
        {children}
      </main>
      {/* <Footer /> */}
    </div>
  );
}
