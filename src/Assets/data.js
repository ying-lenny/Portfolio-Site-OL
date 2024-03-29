import images from './images';

let big_projects = [
	{
		id: 0,
		title: 'PortFoliGo',
		description: "JavaScript Final year project using the MERN stack",
		image: images.bigProjects.PortFoliGo[0],
		gallery: [
			images.bigProjects.PortFoliGo[0],
		]
	},
	{
		id: 1,
		title: 'Egeplast Ireland',
		description: "Irish-based welding equipment supplier",
		image: images.bigProjects.egeplast[0],
		gallery: [
			images.bigProjects.egeplast[1],
			images.bigProjects.egeplast[2],
			images.bigProjects.egeplast[3],
			images.bigProjects.egeplast[4],
		]
	},
	{
		id: 2,
		title: 'Employee of The Month',
		description: "PSX-styled survival horror experience",
		image: images.bigProjects.EOTM[0],
		gallery: [
			images.bigProjects.EOTM[0],
		]
	}
]

let small_projects = [
	{
		id: 0,
		title: 'Calculator',
		description: 
			`An online calculator with basic arithmetic operations built 
			using HTML5, CSS3 and JS ES6 features.`,
		images: [
			images.personalProjects.calculator[0],
			images.personalProjects.calculator[1],
		],
		links: [
			"https://github.com/ying-lenny/calculator",
			"https://ying-lenny.github.io/calculator/",
		]
	},
	{
		id: 1,
		title: 'Find-A-Place',
		description: 
			`Find-A-Place is a fullstack Web App that has search functionality \
			for Countries via a name search bar, which returns various pieces \
			of informationsuch as their capital, populcation, and currency. \n
			The frontend was made using React JS, and the backend consists of \
			Node and Express connecting to the Countries REST API.
			`,
		images: [
			images.personalProjects.findAPlace[0],
			images.personalProjects.findAPlace[1],
		],
		links: [

		]
	},
	{
		id: 2,
		title: 'TicTacToe',
		description: "Brief overview of TicTacToe goes here",
		images: [
			images.personalProjects.temp[0],
			images.personalProjects.temp[0],
		],
		links: [
			"https://github.com/ying-lenny/calculator",
			"https://ying-lenny.github.io/calculator/",
		]
	},
	{
		id: 3,
		title: 'Etch-a-sketch',
		description: "Brief overview of Etch-a-Sketch goes here",
		images: [
			images.personalProjects.temp[0],
			images.personalProjects.temp[0],
		],
		links: [
			"https://github.com/ying-lenny/calculator",
			"https://ying-lenny.github.io/calculator/",
		]
	}
]

export { big_projects, small_projects }