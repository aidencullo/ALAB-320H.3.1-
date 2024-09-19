export default function Score({ date, score }) {
    return (
	<>
	    <li>
		<p>Date: {score.date}</p>
	<p>Score: {score.score}</p>
	</li>
	</>
    );
}
