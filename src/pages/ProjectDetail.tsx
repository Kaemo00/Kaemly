import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';

export const ProjectDetail = () => {
  const { slug } = useParams();

  return (
    <>
      <Helmet>
        <title>Projet | Kaemly Morisseau</title>
        <meta
          name="description"
          content="Détails du projet et cahier des charges - Portfolio de Kaemly Morisseau"
        />
      </Helmet>

      <main className="min-h-screen pt-24 pb-16">
        <div className="container">
          <h1 className="text-3xl font-bold mb-8">Détails du projet {slug}</h1>
          {/* ProjectDetails component will be added here */}
        </div>
      </main>
    </>
  );
};
