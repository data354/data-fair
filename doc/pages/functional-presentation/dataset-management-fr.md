---
title: Gestion des jeux de données
section: 3
subsection : 2
updated: 2020-12-09
description : Gestion des jeux de données
published: false
---

Les jeux de données sont représentés sous formes de fiches sur la plateforme. Une fiche possède un titre et des informations relatives aux données. Les informations comprennent le nom du fichier, sa taille, le nombre de lignes et les thématiques des données. L'icône du propriétaire des données et l’état de publication sont aussi disponibles sur chaque fiche.

![Fiche d'un jeu de données](./images/functional-presentation/jeu-2.jpg)

### Types de données

Il existe plusieurs types de jeux de données sur la plateforme, les fichiers, les jeux de données incrémentaux, les jeux de données virtuels.

* Les **jeux de données fichiers** correspondent à des données sous format tabulaire ou cartographique chargés sur la plateforme. Plusieurs formats de fichiers sont supportés tels que le CSV, TSV, XLS, TXT,GeoJson, KML, ESRI Shapefile, …

* Les **jeux de données incrémentaux** sont des données stockées en base et sont plutôt adaptés à des données qui évoluent régulièrement. Ils sont mis à jour par API et sont bien adaptés pour des données IOT par exemple.

* Les **jeux de données virtuels** correspondent à des vues d’un ou plusieurs jeux de données. Ils permettent d’avoir un contrôle d’accès plus poussé. Ils peuvent par exemple servir à créer une vue publique, restreinte à certaines lignes et certaines colonnes, d’un jeu de données plus complet qui reste privé.

### Ajout d’un jeu de données
Il est possible d'importer différentes sources de données sur Data Fair. On peut déjà importer des fichiers directement depuis son ordinateur. Il sera bientôt possible d'importer des données depuis des sources externes comme Airtable ou Google drive.

Une fois les données chargées, elles sont converties dans un format plus standard en interne, puis analysées automatiquement pour déterminer le schéma du jeu de données. Les données sont ensuite indexées puis éventuellement enrichies avec d'autres données externes. Des derniers traitements sont effectués pour calculer des propriétés liées aux données (cardinalités des champs, bornes géographiques, ...) puis le jeu de données est disponible pour pouvoir être édité ou utilisé.

Après cette étape, les données sont consultables à minima dans un tableau et sont triables et filtrable. Si les concepts de **Latitude** et **Longitude** sont renseignés dans le schéma, les données sont aussi consultable dans une carte. Si elles ont un concept **Images**, une galerie est générée.

### Edition d’un jeu de données

La page d’édition d’un jeu de données permet de travailler la présentation et la réutilisabilité de ce jeu. Cette page permet de modifier le titre du jeu de données, mettre à jour les données, compléter le schéma des données, sémantiser les données pour qu'elles soient réutilisables dans des visualisations ou pour pouvoir être enrichies via des services complémentaires.

#### Schéma des données

La page d'édition d'un jeu de données permet, entre autres, de renseigner les concepts dans la section **Schéma des données**.  
Les concepts sont des notions connues pour la plateforme. Ils permettent d'**augmenter la réutilisabilité** de vos données et de faire le lien entre vos données et les fonctionnalités de la plateforme.

![Schéma d'un jeu de données](./images/functional-presentation/schema.jpg)


A l’aide des concepts, vous pouvez par exemple **enrichir vos données** pour leur donner encore plus de valeur ou bien projeter vos données sur une carte.
Un concept est unique à une colonne d'un jeu de données. Vous ne pouvez pas avoir deux colonnes différentes avec le même concept pour un jeu de données.

Les concepts sont nécessaires à la représentation de certaines visualisations. Par exemple, vos données ne pourront pas être projetées sur une carte si vous n'avez pas associé les concepts **Latitude** et **Longitude** aux colonnes qui contiennent les valeurs latitude et longitude.

Dans la section des **Schéma de données**, on peut renseigner des libellés sur chacun des champs. Ces libellés sont utilisés dans la vue tableau et dans les différentes visualisations du jeu de données.

#### Enrichissement des données

Il est possible d'enrichir vos données avec des données issues de l'open data telles que la base **SIRENE**, le **cadastre**, les **données INSEE et la BAN**.  
* La base SIRENE rassemble les informations économiques et juridiques de plus de 28 Millions d'établissements d'entreprises, dont plus de 11 Millions actifs.
* Le cadastre permet d'avoir accès aux différentes informations concernant les parcelles. Vous pouvez notamment géocoder des codes parcelles ou encore obtenir les surfaces de vos parcelles.
* Les données INSEE permettent de récupérer diverses informations sur les divisions administrative (communes, départements, régions)
* La BAN est la Base d'Adresse Nationale. Elle permet de géolocaliser des adresses ou de trouver des adresses à partir de coordonnées.

En fonction des données que vous possédez, vous pouvez choisir l'enrichissement qui vous convient et ainsi donner plus de valeur à vos données.

#### Permissions de partage de données

Un administrateur peut contrôler finement les permissions d’**accès aux données**. En fonction du rôle attribué à un utilisateur, celui-ci à le droit d'accéder, de lire ou/et de modifier le contenu de la source.

![Persmissions d'un jeu de données](./images/functional-presentation/permissions.jpg)

On peut ainsi donner le rôle d’**user** à un groupe de personnes et définir s’ils peuvent accéder et lire une ressource de la plateforme.

Il est aussi possible de gérer les permissions plus finement et de donner les droits à un seul ou plusieurs utilisateurs. La liste des personnes ayant des permissions sur un jeu de données est disponible dans la page d’édition de ce jeu.

#### Journal du jeu de données

Le journal d’un jeu de données permet de vérifier l’**historique des modifications** sur le jeu de données.

![Journal d'un jeu de données](./images/functional-presentation/journal.jpg)

Le journal permet la **traçabilité** des modifications des jeux de données, des paramètres et des habilitations.

#### Pièces jointes

Il est possible d’associer des pièces jointes à chaque ligne d’un jeu de données. Cela se fait en associant une archive au format zip qui contient les fichiers à associer. Il faut aussi qu’il y ait dans le jeu de données une colonne contenant les noms des fichiers à associer à chaque ligne. Deux types de fichiers peuvent être liés aux lignes : des images (png, jpg, …) ou des documents (pdf, docx, xlsx, …). Dans le cas des documents, ils sont indexés **fulltext** par la plateforme et les recherches tiennent compte du contenu de ces documents.

Les pièces jointes peuvent aussi être directement attachées à un jeu de données. On peut par exemple ajouter des fichiers de documentation ou des métadonnées riches.
