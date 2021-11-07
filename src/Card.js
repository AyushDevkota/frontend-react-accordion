import desktopImg from "./images/illustration-woman-online-desktop.svg";
import Question from "./Question";
import { data } from "./data";
import boxImg from "./images/illustration-box-desktop.svg";

function Card() {
	return (
		<section className="card">
			<div className="img-container">
				<img src={desktopImg} alt="banner" className="woman-img" />
			</div>
			<img src={boxImg} alt="banner" className="box-img" />
			<div className="text-container">
				<h2 className="title">FAQ</h2>
				{data.map(({ id, question, answer }) => {
					return <Question question={question} answer={answer} key={id} />;
				})}
			</div>
		</section>
	);
}

export default Card;
