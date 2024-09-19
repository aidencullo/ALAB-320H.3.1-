import Score from './Score.tsx';

export default function Learner({ learner }) {
    return (
	<>
	<h1>{learner.name}</h1>
	<p>{learner.bio}</p>
	<ul>
	    {learner.scores.map((score, index) => {
		return (
		    <Score key={index} score={score} />
		)
	    })}
	</ul>
	</>
    );
}
