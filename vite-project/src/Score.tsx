interface Score {
    date: string;
    score: number;
}

export default function Score({ date, score }: Score) {
    return (
	<>
	    <li>
		<p>Date: {date}</p>
	<p>Score: {score}</p>
	</li>
	</>
    );
}
