import PersonalTEMP from './PersonalTEMP.png';
import Calculator from './Calculator.png'

let big_projects = [
	{
		id: 12,
		hello: 'BigTest1'
	},
	{
		id: 13,
		hello: 'BigTest2'
	},
]

let small_projects = [
	{
		id: 0,
		title: 'Calculator',
		images: [
			PersonalTEMP,
			Calculator
		]
	},
	{
		id: 1,
		title: 'Rock, Paper, Scissors!',
		images: [
			PersonalTEMP
		]
	},
	{
		id: 2,
		title: 'TicTacToe',
		images: [
			PersonalTEMP
		]
	},
	{
		id: 3,
		title: 'Etch-a-sketch',
		images: [
			PersonalTEMP
		]
	}
]

export { big_projects, small_projects }