import Score from './Score.tsx';

interface Learner {
    name: string;
    bio: string;
    scores: number[];
}

export default function Learner({ name, bio, scores }: Learner) {
    return (
	<>
	    <h1>{name}</h1>
	<p>{bio}</p>
	<ul>
	    {scores.map((score, index) => {
		return (
		    <Score key={index} {...score} />
		)
	    })}
	</ul>
	</>
    );
}
