# Appartement - Application 1

## Lancement de l'environnement de dev
On va utiliser un environnement de développement avec create-react-app

https://github.com/facebook/create-react-app

```
npx create-react-app my-app
cd my-app
npm start
```
- On installe le projet avec `npx create-react-app my-app`
- On se mets dans la racine du dossier créé, puis on lance le serv avec `npm start`


index.js -> là où on a notre reactDOM render
app.js -> Composant fonctionnel


## Préparation des fichiers

On suppr certains fichiers qui ne nous seront pas utiles, on laisse app.js, index.css, index.js.
on ne laisse que ça dans index.js et App.js :

> `src/index.js`

```
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(
	<App />,
	document.getElementById('root')
);
```

> `src/App.js`

```
const App = () => (
	<div>Hello</div>
)

export default App
```

## Présentation de l'exercice

Le but sera de créer un liste d'appartement avec un filtre dispo/ indispo et une barre de recherche
on peut mettre les appartements en favoris, et tri par note
On peut déjà isoler plusieurs éléments qui peuvent être réutilisés dans un autre projet / une autre page

- Header (avec fonction recherche inclue)
- Fonction recherche
- Bouton "ShowAll"
- Component (card appartement)

### Étape 1 - Composant Appartement
On va créer et utiliser un composant Appartement qui aura pour props :
- une dispo (oui / non)
- une image
- un nom
- un prix (nombre)
- une note (nombre)

On devra pouvoir réutiliser et afficher plusieurs fois le composant Appartement avec des paramètres différents.

Réfléchir : est-ce que ce composant va gérer un état ou afficher des valeurs statiques ?
Besoin de faire un class component ou pas ?


### Correction Étape 1

1. On crée le composant Appartement, dans un nouveau fichier : `Appartement.js`  

	> `src/Appartement.js`  

	Il s'agit d'un composant d'affichage, pas besoin de gérer l'état, juste une arrow function.
	```
	const Appartement = () => (
		<div>
			<img url="" />
			<h2>Large Architect flat - Hypercentral</h2>
		<p> $45 per night</p>
		<p> 4 </p>
		</div>
	)
	```
	On n'oublie pas l'export

	```export default Appartement```
	
2. On importe le composant qu'on viens de créer dans const App :

	> `src/App.js`  

	```
	import Appartement from './Appartement'
	
	const App = () => (
		<div>
			<Appartement />
		</div>
	)
	```

3. On veut utiliser des props afin d'afficher des appartements différents.
	> `src/App.js`  
	
	À l'intérieur de chaque `<Appartement />`, on insert les paramètres de ces appartements :

	```
	const App = () => (
		<div>
			<Appartement 
				isAvailable={true}
				name="Large Architect flat - Hypercentral 70m2"
				image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.e-architect.co.uk%2Fimages%2Fjpgs%2Fsydney%2Falpha-apartments-lewisham-t090613-4.jpg&f=1&nofb=1"
				price={45}
				note={4}
			/>
			<Appartement 
				isAvailable={false}
				name="Appartement Paris 16 bis"
				image="https://www.10surdix.com/wp-content/uploads/2020/10/renovation-appartement-paris-2.jpg"
				price={55}
				note={5}
			/>
			<Appartement 
				isAvailable={true}
				name="Appartement - Paris 13 - Paralell"
				image="https://parallel.fr/wp-content/uploads/2018/03/Appartement_Paris13-4-1030x687.jpg"
				price={35}
				note={3}
			/>
			<Appartement 
				isAvailable={false}
				name="Appartement 80 m² sous les toits - Paris 11e"
				image="www.vend-appartement-paris.fr/wp-content/uploads/2018/06/vend-appartement-paris-11e-actia-conseil-titon-s%C3%A9jour.jpg"
				price={30}
				note={4}
			/>
		</div>
	)
	```

	> `src/Appartement.js`
	
	On met à jour notre composant Appartement

	```	
	const Appartement = ({name, image, price, note, isAvailable}) => (
		<div>
			<img alt={"Image de " + name} src="{image}" />
			<h2>{name}</h2>
			<p> ${price} per night</p>
			<p> {note} </p>
		</div>
	)
	```

4. Il nous manque la gestion de la disponibilité.

	On a un booléen (true / false), donc on va utiliser une ternaire.

	> `src/Appartement.js`
	
	On crée un svg dans le h2

	```			
	<svg width="20" height="20">
		<circle cy="10" cx="10" r="10" fill="red"></circle>
	</svg>
	```

	Là, ça affiche un cercle rouge par défaut. Pour que ça prenne en compte le booléen, on fait une ternaire dans `fill` avec `isAvailable` :

	fill={isAvailable ? "green" : "red"}


5. Dernière chose à faire, gérer le nb d'étoiles (au lieu du chiffre de la note)

	Le plus simple, c'est d'utiliser un Array() que l'on met dans le p note

	> `src/Appartement.js`
	
	```
	<p> {new Array(note).fill('⭐')} </p>
	```


### Étape 2 - Composants Header et SearchBar
Créer deux nouveaux composants : un composant Header et SearchBar, puis les afficher dans notre composant App

Le composant SearchBar est inclu dans header

### Correction Étape 2

1. Création de Header
	> `src/Header.js`

	Composant fonctionnel qui affichera Header
	```
	const Header = () => (
		<header>
			<h1>AirBnB</h1>
		</header>
	)
	
	export default Header
	```
	
	> `src/App.js`
	
	On importe Header
	
	```
	import Header from './Header'
	
	const App = () => (
		<div>
			<Header />
			<…>
	```
	
2. Création et inclusion de SearchBar

	On crée SearchBar
	
	> `src/SearchBar.js`
	
	```
	const SearchBar = () => (
		<div class="search">
			<form action="">
			  <input type="text" placeholder="Search.." name="search" />
			  <button type="submit">🔍</button>
			</form>
		</div>
	)

	export default SearchBar
	```
	
	On ajoute SearchBar à Header (et pas dans App)

	> `src/Header.js`
	
	Ajout de 
	
	```import SearchBar from './SearchBar'```
	
	puis on l'inclus dans `<header>`
	
	```
	const Header = () => (
		<header>
			<h1>AirBnB</h1>
			<SearchBar />
		</header>
	)
	```

### Étape 3 - Mapper Appartement

Une dernière chose à faire, au niveau des composant App, d'un point de vue conception, faire des c/c d'appartement, c'est pas le top.

On imagine que les données viennent d'une API / un tableau d'objet qui nous retourne les appartements.

On viens donc stocker dans un tableau les données des appartements, puis les mapper Appartement en plaçant les bonnes props.

exemple :
```
const appartements = [
{
	isAvailable : true,
	name : …
}
]
```

### Correction Étape 3
1. On construit notre tableau qui contiendra les données dans App, en créant une constante `appartements`

	> `src/App.js`

	```
	const appartements = [
		{
			id: 0,
			isAvailable: true,
			name: "Large Architect flat - Hypercentral 70m2",
			image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.e-architect.co.uk%2Fimages%2Fjpgs%2Fsydney%2Falpha-apartments-lewisham-t090613-4.jpg&f=1&nofb=1",
			price: 45,
			note: 4,
		},
		{
			id: 1,
			isAvailable: false,
			name: "Appartement Paris 16 bis",
			image: "https://www.10surdix.com/wp-content/uploads/2020/10/renovation-appartement-paris-2.jpg",
			price: 55,
			note: 5,
		},
		{
			id: 2,
			isAvailable: true,
			name: "Appartement - Paris 13 - Paralell",
			image: "https://parallel.fr/wp-content/uploads/2018/03/Appartement_Paris13-4-1030x687.jpg",
			price: 35,
			note: 3,
		},
		{
			id: 3,
			isAvailable: false,
			name: "Appartement 80 m² sous les toits - Paris 11e",
			image: "www.vend-appartement-paris.fr/wp-content/uploads/2018/06/vend-appartement-paris-11e-actia-conseil-titon-s%C3%A9jour.jpg",
			price: 30,
			note: 4,
		}
	]
	```

2. Ensuite, dans `const App` :
	
	- On supprime les données dans `<Appartement />` et les duplicats
	- Pour chaque appartement, on va mapper les valeurs de la table, avec map
	
	> Note : j'ai modifié un peu la structure et le css d'App et de Appartements, c'est normal si ça diffère un peu des précédentes étapes  
	
	```
	const App = () => (
	<div>
		<Header />
		<main class="container">
			{appartement.map(appartement => <Appartement />)}
		</main>
	</div>
	)
	```
	
	- Mais de cette manière, il faudrait déclarer tous les paramètres à la main :

	```
	const App = () => (
		<div>
			<Header />
			<main class="container">

				{appartements.map(
					appartement => 
						<Appartement 
							id={appartement.id}
							isAvailable={appartement.isAvailable}
							name={appartement.name}
							image={appartement.image}
							price={appartement.price}
							note={appartement.note}
						/>
				)}
			</main>
		</div>
	)
	```
	
	La solution, c'est d'utiliser spread (`...`)

3. On spread appartements dans `<Appartement />`
	
	```
	{appartements.map(
		appartement => <Appartement {...appartement}/>
	)}
	```
	en condensé :  
	```{appartements.map(appartement => <Appartement {...appartement}/>)}```

4. Il manque une dernière chose : message d'erreur en console , tous les enfants d'une liste doivent avoir une prop key unique

	- On associe donc key à id : 

	```{appartement.map(appartement => <Appartement key={appartement.id} {...appartement}/>)}```

	- On peut aussi régler le problème en rennomant directement `id` par `key` dans `appartements`, et le spread operator fait le reste :

	```
	{
		key: 0,
		isAvailable: true,
		name: "Large Architect flat - Hypercentral 70m2",
		image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.e-architect.co.uk%2Fimages%2Fjpgs%2Fsydney%2Falpha-apartments-lewisham-t090613-4.jpg&f=1&nofb=1",
		price: 45,
		note: 4,
	}
	```


## Material UI

Il est possible d'utiliser une librairie externe (framework) avec React pour rendre le tout plus joli / lisible sans coder le css (basiquement, Boostrap pour du React)

npm install @material-ui/core
npm install @material-ui/icons

ensuite on ajoute le link dans `public/index.html`

```
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
```

Voir la doc : https://material-ui.com/ 
