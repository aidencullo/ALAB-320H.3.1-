import Score from './Score.tsx';

interface Learner {
    name: string;
    bio: string;
    scores: number[];
}

interface LearnerProps {
    learner: Learner;
}

export default function Learner({ learner }: LearnerProps) {
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
