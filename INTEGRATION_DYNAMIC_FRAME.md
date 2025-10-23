# Intégration du composant DynamicFrameLayout

## ✅ État de l'intégration

Le composant `DynamicFrameLayout` a été intégré avec succès dans la page Recherche avec les couleurs de l'IUT Martinique.

## 📦 Dépendances

- ✅ `framer-motion` : Déjà installé (v12.23.24)
- ✅ `react` : Déjà installé (v19.1.1)
- ✅ `tailwindcss` : Déjà installé (v4.1.15)

**Aucune installation supplémentaire nécessaire !**

## 📁 Fichiers créés/modifiés

### Nouveau fichier :
- `src/components/ui/DynamicFrameLayout.jsx` - Composant de grille interactive dynamique

### Fichier modifié :
- `src/pages/Recherche.jsx` - Intégration du composant dans la page Recherche

## 🎨 Adaptations effectuées

1. **Conversion TypeScript → JavaScript**
   - Le projet utilise JavaScript, le composant a été converti en JSX

2. **Adaptation Images/Vidéos**
   - Composant original utilisait des vidéos
   - Adapté pour utiliser des images Unsplash
   - Effet zoom au hover au lieu de lecture vidéo

3. **Couleurs IUT Martinique**
   - Badge principal : `#009dd7` (bleu IUT)
   - Badge hover : transition blanc → bleu IUT
   - Overlay gradient : noir avec transparence

4. **Contenu personnalisé**
   - 9 projets de recherche de l'IUT :
     - Intelligence Artificielle
     - Cybersécurité
     - Big Data
     - Développement Durable
     - Entrepreneuriat
     - Développement Web
     - IoT
     - Gestion de Projet
     - Projets Territoriaux

## 🎯 Fonctionnalités

### Grille 3x3 interactive
- **État normal** : Grille équilibrée 4fr/4fr/4fr
- **Au hover** : L'élément survolé s'agrandit (6fr), les autres se rétrécissent (3fr)
- **Animation fluide** : Transitions de 0.4s avec ease

### Effets visuels
- ✨ Zoom de l'image au hover (scale 1 → 1.1)
- 🎨 Badge qui change de couleur (blanc → bleu)
- 📊 Overlay gradient dynamique
- 🔄 Bordures arrondies et ombres

## 💻 Utilisation

```jsx
import { DynamicFrameLayout } from '../components/ui/DynamicFrameLayout';

const frames = [
  {
    id: 1,
    image: 'URL_IMAGE',
    title: 'Titre du projet',
    description: 'Description courte',
    defaultPos: { x: 0, y: 0, w: 4, h: 4 },
    isHovered: false,
  },
  // ... 8 autres frames pour remplir la grille 3x3
];

<DynamicFrameLayout 
  frames={frames} 
  className="w-full h-full" 
  hoverSize={6}  // Taille de la case au hover (6fr)
  gapSize={6}    // Espacement entre les cases (6px)
/>
```

## 📊 Structure de données

Chaque frame nécessite :

```javascript
{
  id: number,                    // ID unique
  image: string,                 // URL de l'image
  title: string,                 // Titre affiché
  description: string,           // Description courte
  defaultPos: {                  // Position dans la grille
    x: 0 | 4 | 8,               // Colonne (0=gauche, 4=centre, 8=droite)
    y: 0 | 4 | 8,               // Ligne (0=haut, 4=centre, 8=bas)
    w: 4,                        // Largeur (toujours 4)
    h: 4                         // Hauteur (toujours 4)
  },
  isHovered: boolean            // État hover initial (false)
}
```

## 🎬 Responsive

Le composant est responsive :
- Desktop : Grille 3x3 complète
- Tablette/Mobile : Le composant reste fonctionnel mais peut nécessiter un scroll

## 🚀 Améliorations possibles

1. **Version mobile** : Adapter la grille en 2x2 ou slider sur mobile
2. **Liens clickables** : Ajouter des liens vers des pages de détail
3. **Vidéos** : Réintégrer la lecture vidéo si des ressources vidéo sont disponibles
4. **Animation d'entrée** : Ajouter une animation au chargement de la page
5. **Filtres** : Permettre de filtrer les projets par catégorie

## 📝 Notes

- Les images Unsplash sont utilisées temporairement
- Remplacer par de vraies photos des projets de l'IUT quand disponibles
- Le composant est optimisé pour des grilles 3x3 (9 éléments)
- La couleur `#009dd7` est cohérente avec le reste du site

## ✨ Résultat

Page Recherche moderne et interactive qui présente les projets de recherche de manière visuellement attrayante, en accord avec le design général du site IUT Martinique.

