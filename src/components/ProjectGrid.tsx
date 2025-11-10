import { projects } from '../data/projects';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export const ProjectGrid = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project) => (
        <motion.div
          key={project.id}
          className="relative group rounded-lg shadow-md bg-primary/90 overflow-hidden border border-neonPink"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.22 }}
        >
          <img
            src={project.images.cover}
            alt={`Couverture ${project.title}`}
            className="w-full h-48 object-cover"
            loading="lazy"
          />
          <div className="p-4">
            <h2
              className="text-xl font-semibold mb-2 text-neonPink"
              style={{ textShadow: '0 0 8px #FF2EF5' }}
            >
              {project.title}
            </h2>
            <p className="text-neonBlue mb-2" style={{ textShadow: '0 0 4px #00F0FF' }}>
              {project.pitch}
            </p>
            <div className="flex flex-wrap gap-2 mb-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 text-xs bg-neonPurple text-white rounded shadow"
                  style={{ textShadow: '0 0 4px #A259FF' }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          {/* Overlay au hover/focus */}
          <div
            className="absolute inset-0 bg-gradient-to-br from-neonPink via-primary to-neonBlue text-white flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-200 z-10"
            tabIndex={0}
            aria-label={`Cahier des charges ${project.title}`}
          >
            <ul
              className="mb-4 text-sm max-w-xs text-neonYellow"
              style={{ textShadow: '0 0 6px #F5FF2E' }}
            >
              <li>
                <strong>Problème:</strong> {project.brief.problem}
              </li>
              {project.brief.goals.slice(0, 2).map((goal, i) => (
                <li key={i}>
                  <strong>Objectif:</strong> {goal}
                </li>
              ))}
              {project.brief.users.slice(0, 1).map((user, i) => (
                <li key={i}>
                  <strong>Users:</strong> {user}
                </li>
              ))}
              {project.brief.arch.slice(0, 1).map((arch, i) => (
                <li key={i}>
                  <strong>Arch:</strong> {arch}
                </li>
              ))}
              {project.brief.kpi.slice(0, 1).map((kpi, i) => (
                <li key={i}>
                  <strong>KPI:</strong> {kpi}
                </li>
              ))}
            </ul>
            <div className="flex gap-2">
              <Link to={`/project/${project.slug}`} className="btn-primary">
                Voir le projet
              </Link>
              <a href={project.links.brief} className="btn" download>
                Voir le cahier
              </a>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};
