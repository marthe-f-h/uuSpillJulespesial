import { Link } from 'react-router-dom'

function GrottensHistorie() {
	document.title = 'uu spill - grottens historie'
	return (
		<div>
			<Link to={'/uuSpillPiratskatten'}>Gå tilbake til skipsvraket</Link>
			<h1>Grottens historie</h1>
			<p>
				Denne grotten har eksistert siden tidenes morgen. Den sies å ha
				huset den store gude Havsuz som herkset over havet. For 200 år
				siden fant Kaptein Grønnskjegg grotten og bosatte seg her. Han
				var en fryktet pirat som herjet havet.
			</p>
		</div>
	)
}

export default GrottensHistorie
