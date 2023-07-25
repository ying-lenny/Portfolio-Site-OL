import PersonalTEMP from './PersonalTEMP.png';
import CalculatorIcon from './CalculatorIcon.png';
import CalculatorFull from './CalculatorFull.png';
import Egeplast from './EgeplastCard.png'
import PortFoliGo from './PortFoliGoCard.png'
import EOTM from './EOTMCard.png'

let big_projects = [
	{
		id: 0,
		title: 'PortFoliGo',
		description: "JavaScript Final year project using the MERN stack",
		image: PortFoliGo
	},
	{
		id: 1,
		title: 'Egeplast Ireland',
		description: "Irish-based welding equipment supplier",
		image: Egeplast
	},
	{
		id: 2,
		title: 'Employee of The Month',
		description: "PSX-styled survival horror experience",
		image: EOTM
	}
]

let small_projects = [
	{
		id: 0,
		title: 'Calculator',
		description: "An online calculator with basic arithmetic operations built using HTML5, CSS3 and JS ES6 features.",
		images: [
			CalculatorIcon,
			CalculatorFull
		],
		links: [
			"https://github.com/ying-lenny/calculator",
			"https://ying-lenny.github.io/calculator/",
		]
	},
	{
		id: 1,
		title: 'Rock, Paper, Scissors!',
		description: "Brief overview of Rock, Paper, Scissors goes here",
		images: [
			PersonalTEMP,
			PersonalTEMP
		],
		links: [

		]
	},
	{
		id: 2,
		title: 'TicTacToe',
		description: "Brief overview of TicTacToe goes here",
		images: [
			PersonalTEMP,
			PersonalTEMP
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
			PersonalTEMP,
			PersonalTEMP
		],
		links: [
			"https://github.com/ying-lenny/calculator",
			"https://ying-lenny.github.io/calculator/",
		]
	}
]

export { big_projects, small_projects }