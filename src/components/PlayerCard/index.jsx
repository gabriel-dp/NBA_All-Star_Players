import { Card, DescriptionContainer, ImageContainer } from './styles';

function PlayerCard({ data }) {
	return (
		<Card>
			<ImageContainer>
				<img
					alt="test"
					src={data.image}
				/>
			</ImageContainer>
			<span className="position">{data.position}</span>
			<span className="number">{data.number}</span>
			<DescriptionContainer>
				<span className="firstName">{data.firstName}</span>
				<span className="lastName">{data.lastName}</span>
			</DescriptionContainer>
		</Card>
	);
}

export default PlayerCard;
