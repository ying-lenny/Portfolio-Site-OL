import PersonalTEMP from './PersonalTEMP.png';
import Calculator from './Calculator.png';
import Egeplast from './EgeplastTEMP.png'
import PortFoliGo from './PortFoliGoTEMP.png'
import EOTM from './EOTMTEMP.png'

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
		description: "Brief overview of the calculator goes here",
		images: [
			PersonalTEMP,
			Calculator
		]
	},
	{
		id: 1,
		title: 'Rock, Paper, Scissors!',
		description: "Brief overview of Rock, Paper, Scissors goes here",
		images: [
			PersonalTEMP
		]
	},
	{
		id: 2,
		title: 'TicTacToe',
		description: "Brief overview of TicTacToe goes here",
		images: [
			PersonalTEMP
		]
	},
	{
		id: 3,
		title: 'Etch-a-sketch',
		description: "Brief overview of Etch-a-Sketch goes here",
		images: [
			PersonalTEMP
		]
	}
]

export { big_projects, small_projects }