---
title: Traitements périodiques
section: 3
subsection : 8
updated: 2020-12-09
description : Traitements périodiques
published: true
---
Les traitements périodiques vont **chercher** des données à certains endroits, les **transforment** et les **publient** sur la plateforme.

Les traitements périodiques se différencient des connecteurs de catalogues sur plusieurs points :
* Un traitement est limité à un ensemble réduit de sources en entrée et en sortie. Typiquement il peut récupérer des données à un endroit, et des métadonnées à un autre, et déverser les données dans une source de la plateforme.
* Les fréquences de collecte peuvent être plus élevées : on peut collecter les données avec quelques secondes d’intervalle, ce qui est adapté à la publication des **données IOT**.

<p>
</p>

Les traitements périodiques se configurent en renseignant le type de source (Données IOT, fichiers issus de facturation, …), le jeu de données correspondant dans la plateforme et la fréquence de collecte.

![Collecteurs](./images/functional-presentation/collecteurs.jpg)


Il est également possible d’avoir l’**état de réussite** du dernier traitement pour chaque collecteur, ainsi que d’accéder à des logs détaillés des dernières collectes de données. Les traitements périodiques peuvent aussi être utilisés pour des mises à jour tous les jours, toutes les semaines, etc..

Il est possible de rajouter de **nouveaux traitements périodiques** en suivant les instructions dans [cette section](./interoperate/collectors).
