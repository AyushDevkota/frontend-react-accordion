import React, { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

const Question = ({ question, answer }) => {
	const [isActive, setIsActive] = useState(false);
	return (
		<div className="question">
			<div
				className={`question-title ${isActive ? "active" : ""}`}
				onClick={() => {
					setIsActive(!isActive);
				}}
			>
				{question}
				<button>{isActive ? <FaAngleUp /> : <FaAngleDown />}</button>
			</div>
			<div className="answer">{isActive ? answer : ""}</div>
		</div>
	);
};

export default Question;
