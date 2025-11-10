import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import SkipLink from './components/SkipLink';
import { Home } from './pages/Home';
import { Projects } from './pages/Projects';
import { ProjectDetail } from './pages/ProjectDetail';
import { Contact } from './pages/Contact';
import BriefsPage from './pages/Briefs';

function App() {
  return (
    <div className="min-h-dvh bg-gradient-to-br from-[#133c86] to-[#1d4ed8] text-white">
      <SkipLink />
      <Navbar />
      <main
        id="main-content"
        tabIndex={-1}
        className="mx-auto w-full max-w-6xl px-4 py-10 focus:outline-none"
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/project/:slug" element={<ProjectDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/briefs" element={<BriefsPage />} />
        </Routes>
      </main>
      {/* Footer à ajouter plus tard */}
    </div>
  );
}

export default App;
