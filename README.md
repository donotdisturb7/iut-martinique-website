# Site Web IUT Martinique - Demo

Application web institutionnelle moderne pour l'IUT de la Martinique, développée avec React, Vite et Tailwind CSS.

## 🚀 Technologies utilisées

- **React 18** - Framework JavaScript
- **Vite** - Build tool ultra-rapide
- **Tailwind CSS** - Framework CSS utilitaire
- **React Router** - Navigation
- **React i18next** - Internationalisation (FR/EN)
- **Framer Motion** - Animations fluides
- **Swiper** - Carrousels et sliders
- **React Icons** - Iconographie

## 📋 Prérequis

- Node.js 16+ et npm

## 🛠️ Installation

```bash
# Cloner le projet
cd /home/dnd/School/dev-web/iut-martinique

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

L'application sera accessible sur `http://localhost:5173`

## 📦 Scripts disponibles

```bash
# Développement
npm run dev

# Build de production
npm run build

# Preview du build
npm run preview

# Lint
npm run lint
```

## 📁 Structure du projet

```
src/
├── components/          # Composants réutilisables
│   ├── layout/         # Header, Footer, Layout
│   ├── ui/             # Boutons, Cards, Inputs
│   └── sections/       # Sections de pages
├── pages/              # Pages du site
├── data/               # Données statiques (JSON)
├── i18n/               # Traductions FR/EN
├── assets/             # Images, fonts
└── index.css           # Styles globaux
```

## 🎨 Fonctionnalités implémentées

### ✅ Composants UI
- Button (3 variants : primary, secondary, outline)
- Card avec hover effects
- Input et Textarea avec validation
- Badge pour tags/catégories
- Container responsive

### ✅ Layout
- Header sticky avec navigation
- Menu mobile responsive
- Footer complet (4 colonnes)
- Sélecteur de langue FR/EN

### ✅ Page d'accueil
- Hero section avec carrousel d'images
- Actualités (toutes les actualités)
- Portraits de la communauté IUT
- Partenaires

### ✅ Pages secondaires
- **Formations** : Listing avec filtres et recherche
- **Contact** : Formulaire avec validation front-end
- **L'IUT** : Présentation, mission, départements
- **Recherche, Entreprises, Vie étudiante** : Templates de base
- **404** : Page d'erreur personnalisée

### ✅ Fonctionnalités
- Multilingue FR/EN avec react-i18next
- Animations au scroll avec Framer Motion
- Routing complet avec React Router
- Scroll to top automatique
- Responsive mobile/tablet/desktop

## 🌐 Internationalisation

Le site est disponible en français et en anglais. Pour changer la langue, cliquez sur le sélecteur FR/EN dans le header.

Les traductions sont dans `src/i18n/fr.json` et `src/i18n/en.json`.

## 📊 Données statiques

Les données sont stockées dans des fichiers JSON :
- `src/data/formations.json` - Liste des 7 formations
- `src/data/news.json` - Actualités
- `src/data/portraits.json` - Portraits de la communauté (enseignants, étudiants, personnel)
- `src/data/partners.json` - Logos des partenaires

## 🎯 À développer (phase 2)

- Pages détaillées de formations
- Système de recherche global
- Backend pour les formulaires
- Intégration WordPress (CMS)
- Galerie photos avec lightbox
- Flux Instagram
- Système de filtres avancés
- Base de données pour offres de stage

## 📝 Notes importantes

- Les images utilisent des placeholders (Unsplash)
- Les formulaires ne sont pas connectés à un backend
- Certaines pages sont en version template de base
- Aucune donnée sensible n'est commitée

## 🎨 Personnalisation

### Couleurs

Les couleurs sont configurables dans `tailwind.config.js` :
- `primary` : Couleur principale (bleu)
- `secondary` : Couleur secondaire (violet)

### Breakpoints

- `xs`: 320px
- `sm`: 640px  
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1440px

## 📄 License

Projet académique - IUT de la Martinique © 2024

## 👥 Auteur

Développé dans le cadre d'un projet pour l'IUT de la Martinique - Université des Antilles
# iut-martinique-website
