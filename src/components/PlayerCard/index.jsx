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
			<span className="number">{data.number}</span>
			<DescriptionContainer>
				<span className="firstName">{data.firstName}</span>
				<span className="lastName">{data.lastName}</span>
			</DescriptionContainer>
		</Card>
	);
}

export default PlayerCard;
