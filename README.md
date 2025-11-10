# Kaemly - Portfolio

Portfolio professionnel présentant mes projets en développement web et IA.

## 🚀 Stack Technique

- React + TypeScript
- Vite
- Tailwind CSS
- React Router
- Framer Motion
- ESLint + Prettier

## 🛠 Installation

```bash
# Cloner le repo
git clone https://github.com/Kaemo00/Kaemly.git

# Installer les dépendances
npm install

# Lancer en développement
npm run dev
```

## 📦 Scripts

- `npm run dev` - Lance le serveur de développement
- `npm run build` - Build pour la production
- `npm run preview` - Preview de la build
- `npm run lint` - Vérifie le code avec ESLint
- `npm run format` - Formate le code avec Prettier
- `npm run deploy:gh` - Déploie sur GitHub Pages

## 📂 Structure du Projet

```
src/
├── components/        # Composants réutilisables
├── pages/            # Pages de l'application
├── data/             # Données des projets
├── assets/           # Images et ressources
├── styles/           # Styles globaux
└── utils/            # Fonctions utilitaires
```

## 🚀 Déploiement

### Déploiement sur GitHub Pages

1. Vérifiez que le champ `base` dans `vite.config.ts` est bien `/Kaemly/`.
2. Build le projet :
   ```bash
   npm run build
   ```
3. Déployez sur GitHub Pages :
   ```bash
   npm run deploy
   ```
4. Le site sera disponible sur https://kaemo00.github.io/Kaemly/

### Vercel

1. Connecter le repo GitHub à Vercel
2. Configuration automatique pour SPA
3. Les redirections sont gérées via `vercel.json`

## 🤝 Contribution

1. Fork le projet
2. Créer une branche (`git checkout -b feature/amelioration`)
3. Commit les changements (`git commit -m 'feat: nouvelle fonctionnalité'`)
4. Push sur la branche (`git push origin feature/amelioration`)
5. Ouvrir une Pull Request

## 📝 Convention de Commit

- `feat`: Nouvelle fonctionnalité
- `fix`: Correction de bug
- `style`: Changements de style
- `refactor`: Refactoring de code
- `perf`: Amélioration des performances
- `docs`: Documentation
- `test`: Ajout de tests
- `chore`: Tâches diverses

## 📄 Licence

MIT © [Kaemly Morisseau]
