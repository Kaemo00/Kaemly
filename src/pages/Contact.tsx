import { Helmet } from 'react-helmet-async';

export const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact | Kaemly Morisseau</title>
        <meta
          name="description"
          content="Contactez-moi pour discuter de vos projets - Kaemly Morisseau, Développeur Web IA"
        />
      </Helmet>

      <main className="min-h-screen pt-24 pb-16">
        <div className="container">
          <h1 className="text-3xl font-bold mb-8">Contact</h1>
          {/* ContactForm component will be added here */}
        </div>
      </main>
    </>
  );
};
