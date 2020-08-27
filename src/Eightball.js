import React, { useState } from 'react';
import './Eightball.css';

function Eightball({ answers }) {
	const showAnswer = () => {
		const randChoice = Math.floor(Math.random() * answers.length);
		setAnswer(answers[randChoice]);
		answers[randChoice].color === 'green' && setGreen(green + 1);
		answers[randChoice].color === 'red' && setRed(red + 1);
		answers[randChoice].color === 'goldenrod' && setGoldenrod(goldenrod + 1);
	};

	const reset = () => {
		setAnswer({ msg: 'Think of a question', color: 'black' });
		setGreen(0);
		setRed(0);
		setGoldenrod(0);
	};

	const [answer, setAnswer] = useState({ msg: 'Think of a question', color: 'black' });
	const [green, setGreen] = useState(0);
	const [red, setRed] = useState(0);
	const [goldenrod, setGoldenrod] = useState(0);
	return (
		<>
			<h1>Magic Eightball</h1>
			<h3>Click anywhere on the ball to get a prediction</h3>
			<div onClick={showAnswer} className='Eightball' id={answer.color}>
				<div className='Eightball-circle'>
					<p className='text'>{answer.msg}</p>
				</div>
			</div>
			<div className='Eightball-count'>
				<p>Green Count: {green}</p>
				<p>Red Count: {red}</p>
				<p>Goldenrod Count: {goldenrod}</p>
			</div>
			<button onClick={reset}>Reset</button>
		</>
	);
}

export default Eightball;
