export default function Learner({ learner }) {
    return (
	<>
	<h1>{learner.name}</h1>
	<p>{learner.bio}</p>
	<ul>
	    {learner.scores.map((score, index) => {
		return (
		    <li key={index}>
			<p>Date: {score.date}</p>
			<p>Score: {score.score}</p>
		    </li>
		)
	    })}
	</ul>
	</>
    );
}
