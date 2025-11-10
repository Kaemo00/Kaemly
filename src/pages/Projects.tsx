import { Helmet } from 'react-helmet-async';
import { ProjectGrid } from '../components/ProjectGrid';

export const Projects = () => {
  return (
    <>
      <Helmet>
        <title>Projets | Kaemly Morisseau</title>
        <meta
          name="description"
          content="Découvrez mes projets en développement web et IA - Portfolio de Kaemly Morisseau"
        />
      </Helmet>

      <main className="min-h-screen pt-24 pb-16">
        <div className="container">
          <h1 className="text-3xl font-bold mb-8">Mes Projets</h1>
          <ProjectGrid />
        </div>
      </main>
    </>
  );
};
