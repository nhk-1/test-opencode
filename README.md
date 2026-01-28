# Site Vitrine Moderne

Un site web vitrine moderne et responsive créé avec HTML5, CSS3 et JavaScript vanilla.

## 🚀 Fonctionnalités

- **Design Moderne**: Interface épurée avec des animations fluides
- **Responsive Design**: Optimisé pour desktop, tablette et mobile
- **Navigation Intuitive**: Menu fixe avec scroll doux
- **Sections Complètes**: 
  - Hero section avec appel à l'action
  - Services présentés en grille
  - Portfolio de projets
  - Formulaire de contact fonctionnel
- **Animations**: Effets de scroll et transitions CSS
- **Accessibilité**: Structure sémantique HTML5

## 📁 Structure du Projet

```
├── index.html          # Page principale
├── css/
│   └── style.css       # Feuille de style principale
├── js/
│   └── script.js       # Fonctionnalités JavaScript
├── assets/
│   └── images/         # Images et ressources
├── README.md           # Documentation du projet
└── .gitignore          # Fichiers ignorés par Git
```

## 🛠 Technologies Utilisées

- **HTML5**: Structure sémantique moderne
- **CSS3**: 
  - Flexbox et Grid Layout
  - Variables CSS
  - Animations et transitions
  - Media queries pour le responsive design
- **JavaScript Vanilla**: 
  - DOM manipulation
  - Gestion des événements
  - API Intersection Observer
  - Validation de formulaire

## 🎨 Caractéristiques du Design

- **Palette de couleurs**: Design moderne avec bleu principal et dégradés
- **Typographie**: Police Inter de Google Fonts
- **Icônes**: Émojis pour les services (remplaçables par des icônes SVG)
- **Effets visuels**: 
  - Blur sur le header au scroll
  - Animations fade-in au défilement
  - Effets hover sur les cartes
  - Transitions fluides

## 📱 Responsive Breakpoints

- **Desktop**: > 768px
- **Tablette**: 768px - 480px
- **Mobile**: < 480px

## 🚀 Comment utiliser

1. Clonez ce repository
2. Ouvrez `index.html` dans votre navigateur
3. Ou servez le projet avec un serveur local :
   ```bash
   # Avec Python
   python -m http.server 8000
   
   # Avec Node.js (si installé)
   npx serve .
   ```

## ⚡ Personnalisation

### Modifier les couleurs
Éditez les variables CSS dans `css/style.css` :
```css
:root {
    --primary-color: #2563eb;
    --secondary-color: #1e40af;
    /* ... */
}
```

### Ajouter des services
Modifiez la section services dans `index.html` et le CSS correspondant.

### Personnaliser les animations
Les animations sont définies dans `css/style.css` et gérées via `js/script.js`.

## 📞 Contact

Le formulaire de contact est fonctionnel côté client. Pour le rendre pleinement opérationnel, vous devez :
1. Ajouter un backend (Node.js, PHP, etc.)
2. Configurer l'envoi d'emails
3. Ajouter une protection contre le spam

## 🤝 Contribuer

1. Fork ce repository
2. Créez une branche feature (`git checkout -b feature/nouvelle-fonctionnalite`)
3. Committez vos modifications (`git commit -am 'Ajout d'une nouvelle fonctionnalité'`)
4. Push vers la branche (`git push origin feature/nouvelle-fonctionnalite`)
5. Créez une Pull Request

## 📄 License

Ce projet est sous licence MIT. Voir le fichier LICENSE pour plus de détails.

---

**Créé avec ❤️ par MonEntreprise**