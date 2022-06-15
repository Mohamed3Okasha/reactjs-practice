# Practicing React JS

This project is a parctice of the free course on [ReactJS course on Mahratech](https://maharatech.gov.eg/course/view.php?id=790) 



## Running the app
1. Inside the CMD of the project directory run `npm i` to install all the dependencies.
2. Then run `npm start` to start the project, it may take a few minutes to load.


## Notes

- I used both Class & Functional Components with its life cycles when needed as a good guide to get expereince with booth and knowing about the hooks.

- The project is set to run on PORT 3003, you can change that at the package.json file. Open [http://localhost:3003](http://localhost:3003).

- There was small issues due to tiny changes in the syntax than the course working version and after some search I fixed it, so put in mind to check m code if you got stuck while following the course (old) syntax.

- Additionally, I  attached a db.json file that I used as a local database via a local server created by [json-server](https://github.com/typicode/json-server) that you can install as follows:
	* In the CMD of main directory of your project, run `npm i -g json-server`
	* In same CMD run, `json-server --watch ./DB/db.json`
	* It will run on PORT 3000 by default [http://localhost:3000/products](http://localhost:3000/products).
	

- The project is running on React v17.0.2 but it works fine with v18 by using ReactDom.createRoot() instead of ReactDOM.render(), it will be something like the following(index.js file):
	* `const container = 	document.querySelector('#root');
	  const root = ReactDOM.createRoot(container);
	  root.render( <App />);
	  `

