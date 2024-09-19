interface Score {
    date: string;
    score: number;
}

interface ScoreProps {
    score: Score;
}

export default function Score({ score }: ScoreProps) {
    return (
	<>
	    <li>
		<p>Date: {score.date}</p>
	<p>Score: {score.score}</p>
	</li>
	</>
    );
}
