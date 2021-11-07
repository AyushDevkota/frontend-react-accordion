import React, { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

const Question = ({ question, answer }) => {
	const [isAnswer, setIsAnswer] = useState(false);
	const [isActive, setIsActive] = useState(false);
	const handleAnswers = () => {
		setIsActive(!isActive);
		setIsAnswer(!isAnswer);
	};
	return (
		<div className="question">
			<div
				className={`question-title ${isActive ? "active" : ""}`}
				onClick={handleAnswers}
			>
				{question}
				<button>{isAnswer ? <FaAngleUp /> : <FaAngleDown />}</button>
			</div>
			<div className="answer">{isAnswer ? answer : ""}</div>
		</div>
	);
};

export default Question;
