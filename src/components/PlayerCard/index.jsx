import { playerHeadshotUrlWebp } from '../../utils/GitHubAssets';

import { Card, DescriptionContainer, ImageContainer } from './styles';

function PlayerCard({ data }) {
	const imageUrl = playerHeadshotUrlWebp(data);

	return (
		<Card>
			<ImageContainer>
				<img
					alt="test"
					src={imageUrl}
				/>
			</ImageContainer>
			<span className="position">{data.position}</span>
			<span className="number">{data.team.number}</span>
			<DescriptionContainer>
				<span className="firstName">{data.name.first}</span>
				<span className="lastName">{data.name.last}</span>
			</DescriptionContainer>
		</Card>
	);
}

export default PlayerCard;
