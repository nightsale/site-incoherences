📌 Projet Propositions

Ce projet est une plateforme permettant aux utilisateurs de soumettre des propositions selon plusieurs thèmes et de les afficher sur des pages dédiées.

⚡ Prérequis

Avant d'installer et d'exécuter le projet, assurez-vous d'avoir :

Windows/Linux/macOS installé

Node.js ≥ 18.0.0 (Télécharger ici)

MySQL ou PostgreSQL installé et configuré

Un éditeur de code (VS Code recommandé)

🚀 Installation et Lancement

📌 1. Installation de la base de données

a) Avec MySQL

mysql -u root -p < database/schema.sql

b) Avec PostgreSQL

createdb propositions_db
psql -d propositions_db -f database/schema.sql

📌 2. Configuration des variables d'environnement

Dans le dossier backend, créez un fichier .env :

touch backend/.env

Ajoutez les informations suivantes dans .env :
```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=VotreMotDePasseIci
DB_NAME=propositions_db
```
📌 3. Installation du backend

cd backend
npm install
node server.js

📌 4. Lancement du frontend

Ouvrez le fichier frontend/index.html dans un navigateur.

Testez l’envoi d’une proposition via le formulaire du popup (modal Bootstrap).

Accédez aux pages des thèmes (theme1.html, theme2.html, etc.) pour voir les propositions soumises.

🔧 Fonctionnalités

✅ Soumission de propositions avec choix du thème.

✅ Stockage des propositions dans une base de données.

✅ Affichage dynamique des propositions selon les thèmes.

✅ Interface responsive grâce à Bootstrap.

🛠 Technologies utilisées

Backend : Node.js, Express, MySQL/PostgreSQL

Frontend : HTML, CSS, Bootstrap, JavaScript

Base de données : MySQL ou PostgreSQL

📌 Dépannage (FAQ)

❓ Problème : Error: Cannot find module 'express'

cd backend
npm install

❓ Problème : Error: Cannot connect to database

mysql -u root -p -h localhost
psql -U postgres -h localhost

📌 Améliorations futures

🔹 Ajout d’un système de modération des propositions.

🔹 Ajout d’un système d’authentification utilisateur.

🔹 Amélioration du design et des animations.
