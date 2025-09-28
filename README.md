# 🏗️ Gestionnaire de Chantier - Équipe 41

> **Système de gestion intégré pour l'équipe 41 d'Altrad Prezioso - Chasse sur Rhône**

[![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)](https://github.com/yazart69/MonProjetChantiers)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)
[![Status](https://img.shields.io/badge/status-production%20ready-brightgreen.svg)]()
[![Live Demo](https://img.shields.io/badge/Live%20Demo-GitHub%20Pages-blue.svg)](https://yazart69.github.io/MonProjetChantiers/)

## 📋 Table des Matières

- [🎯 Vue d'ensemble](#-vue-densemble)
- [✨ Fonctionnalités](#-fonctionnalités)
- [🚀 Installation](#-installation)
- [📱 Modules](#-modules)
- [🔄 Synchronisation](#-synchronisation)
- [🛠️ Utilisation](#️-utilisation)
- [📊 Captures d'écran](#-captures-décran)
- [🤝 Contribution](#-contribution)
- [📄 Licence](#-licence)

## 🎯 Vue d'ensemble

Le **Gestionnaire de Chantier** est une application web complète développée pour optimiser la gestion quotidienne de l'équipe 41 d'Altrad Prezioso. Il centralise toutes les informations essentielles : personnel, planning, pointage, affectations et matériaux.

### 🎨 Caractéristiques principales

- **Interface moderne** et intuitive
- **Synchronisation temps réel** entre tous les modules
- **Sauvegarde automatique** des données
- **Export/Import** complet des données
- **Responsive design** pour tous les appareils
- **Codes couleurs** pour une identification rapide

## ✨ Fonctionnalités

### 🔄 Synchronisation Centralisée
- **Mise à jour automatique** entre tous les modules
- **Ajout d'un membre** → Apparaît instantanément partout
- **Modification de statut** → Synchronisé en temps réel
- **Gestion des ODM** pour les employés Altrad autres

### 📊 Tableau de Bord
- **Vue d'ensemble** de l'activité
- **Statistiques en temps réel**
- **Alertes automatiques** (congés, formations, ODM)
- **État du personnel** centralisé

### 👥 Gestion d'Équipe
- **Fiches complètes** pour chaque membre
- **Gestion des compétences** et formations
- **Suivi des statuts** (disponible, congé, formation, maladie)
- **Codes couleurs** par type d'employé
- **Gestion des sous-traitants**

### ⏰ Pointage Hebdomadaire
- **Planning détaillé** par jour et par membre
- **Suivi des heures** (total, route, pistolet, sablage)
- **Gestion des chantiers** et affectations
- **Export HTML/JSON** pour reporting
- **Calculs automatiques** des totaux

### 📅 Planning & Affectations
- **Visualisation des ressources** par chantier
- **Planification des affectations**
- **Suivi de la progression** des projets
- **Gestion des disponibilités**

## 🚀 Installation

### Prérequis
- Navigateur web moderne (Chrome, Firefox, Safari, Edge)
- Serveur web local (optionnel pour le développement)

### Installation rapide

1. **Cloner le dépôt**
```bash
git clone https://github.com/yazart69/MonProjetChantiers.git
cd MonProjetChantiers
```

2. **Lancer un serveur local** (optionnel)
```bash
# Avec Python
python3 -m http.server 8000

# Avec Node.js
npx serve .

# Ou simplement ouvrir index.html dans le navigateur
```

3. **Accéder à l'application**
```
http://localhost:8000
```

## 📱 Modules

### 🏠 Tableau de Bord (`index.html`)
- **Vue d'ensemble** de l'activité
- **Statistiques globales** en temps réel
- **Alertes et notifications**
- **Accès rapide** aux autres modules

### 👥 Équipe (`equipe.html`)
- **Gestion complète** du personnel
- **Ajout/modification** des membres
- **Suivi des compétences** et formations
- **Gestion des ODM** pour Altrad autres
- **Codes couleurs** par type d'employé

### ⏰ Pointage (`pointage.html`)
- **Planning hebdomadaire** détaillé
- **Suivi des heures** par activité
- **Gestion des chantiers**
- **Export** pour reporting
- **Calculs automatiques**

### 📅 Planning (`planning.html`)
- **Visualisation** des chantiers
- **Gestion des ressources**
- **Planification** des affectations
- **Suivi de progression**

### 📋 Affectations (`planning_affectation.html`)
- **Planification détaillée** des affectations
- **Optimisation** des ressources
- **Suivi des disponibilités**
- **Gestion des contraintes**

### 🔧 Matériaux (`materiaux.html`)
- **Gestion de l'inventaire**
- **Suivi des commandes**
- **Planification des approvisionnements**

### 🗓️ Réunions (`reunion.html`)
- **Planification** des réunions
- **Suivi des points** d'équipe
- **Gestion des comptes-rendus**

## 🔄 Synchronisation

Le système utilise un **gestionnaire de synchronisation centralisé** (`data_sync.js`) qui assure :

### 🔄 Synchronisation automatique
- **Mise à jour en temps réel** entre tous les modules
- **Sauvegarde automatique** toutes les 5 minutes
- **Gestion des conflits** de données
- **Notifications** de synchronisation

### 💾 Gestion des données
- **localStorage** pour la persistance
- **Export/Import** complet des données
- **Sauvegarde de sécurité** automatique
- **Récupération** en cas d'erreur

### 🧪 Tests de synchronisation
Utilisez `test_synchronisation.html` pour :
- ✅ Vérifier le statut du système
- 👥 Tester l'ajout de membres
- 📊 Voir les statistiques en temps réel
- 🔄 Valider la synchronisation

## 🛠️ Utilisation

### 🚀 Première utilisation

1. **Ouvrir** `index.html` dans votre navigateur
2. **Explorer** le tableau de bord
3. **Ajouter** des membres dans le module Équipe
4. **Configurer** les chantiers dans Planning
5. **Commencer** le pointage hebdomadaire

### 📊 Workflow quotidien

1. **Tableau de bord** → Vérifier les alertes
2. **Équipe** → Mettre à jour les statuts
3. **Pointage** → Saisir les heures
4. **Planning** → Ajuster les affectations
5. **Export** → Générer les rapports

### 🔧 Fonctionnalités avancées

#### Codes couleurs par type d'employé
- 🔴 **Employés** - Rouge
- 🔵 **Intérimaires** - Bleu  
- 🟣 **Altrad autres** - Violet
- 🟡 **Sous-traitants** - Jaune

#### Gestion des ODM (Altrad autres)
- **Ordre de Mission** obligatoire
- **Dates de début/fin** configurables
- **Affectation chantier** automatique
- **Alertes** de fin d'ODM

## 📊 Captures d'écran

### Tableau de Bord
![Tableau de Bord](screenshots/dashboard.png)

### Gestion d'Équipe
![Gestion d'Équipe](screenshots/team.png)

### Pointage Hebdomadaire
![Pointage](screenshots/timesheet.png)

## 🧪 Tests

### Tests de synchronisation
```bash
# Ouvrir la page de test
http://localhost:8000/test_synchronisation.html

# Vérifier le statut du système
# Tester l'ajout de membres
# Valider la synchronisation
```

### Tests manuels
1. **Ajouter un membre** dans Équipe
2. **Vérifier** qu'il apparaît dans Pointage
3. **Modifier un statut** et observer la synchronisation
4. **Exporter** les données et les réimporter

## 🚀 Déploiement

### Serveur web
```bash
# Copier les fichiers sur votre serveur
scp -r * user@server:/var/www/html/

# Ou utiliser un service comme Netlify, Vercel, GitHub Pages
```

### GitHub Pages
1. **Pousser** le code sur GitHub
2. **Activer** GitHub Pages dans les paramètres
3. **Sélectionner** la branche main
4. **Accéder** à votre site via `https://username.github.io/repository`

## 🤝 Contribution

### Comment contribuer

1. **Fork** le projet
2. **Créer** une branche feature (`git checkout -b feature/AmazingFeature`)
3. **Commit** vos changements (`git commit -m 'Add some AmazingFeature'`)
4. **Push** vers la branche (`git push origin feature/AmazingFeature`)
5. **Ouvrir** une Pull Request

### Standards de code

- **HTML5** sémantique
- **CSS3** moderne avec variables
- **JavaScript** ES6+
- **Commentaires** en français
- **Nommage** cohérent

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier [LICENSE](LICENSE) pour plus de détails.

## 👥 Équipe

- **Développeur Principal** : Ertugrul Yasar
- **Équipe** : Altrad Prezioso - Équipe 41
- **Localisation** : Chasse sur Rhône, France

## 📞 Support

Pour toute question ou problème :
- **Issues GitHub** : [Créer une issue](https://github.com/yazart69/MonProjetChantiers/issues)
- **Email** : ertugrul@altrad.fr
- **Documentation** : Voir les commentaires dans le code

---

<div align="center">

**🏗️ Gestionnaire de Chantier - Équipe 41**  
*Optimisez votre gestion de chantier avec notre solution intégrée*

[![GitHub](https://img.shields.io/badge/GitHub-Repository-black?style=for-the-badge&logo=github)](https://github.com/yazart69/MonProjetChantiers)
[![Demo](https://img.shields.io/badge/Demo-Live%20Site-blue?style=for-the-badge&logo=web)](https://yazart69.github.io/MonProjetChantiers/)

</div>
