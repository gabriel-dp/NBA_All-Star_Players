import { useNavigate } from 'react-router-dom';
import { playerHeadshotUrl, teamLogoUrl } from '../../utils/GitHubAssets';

import {
	Card,
	DescriptionContainer,
	PlayerImageContainer,
	RoleIcon,
	TeamLogoContainer,
} from './styles';

function PlayerCard({ data, team }) {
	const playerImageUrl = playerHeadshotUrl(data);
	const teamImageUrl = teamLogoUrl(team);
	const link = `./${data.name.first.toLowerCase()}-${data.name.last.toLowerCase()}`;

	const navigate = useNavigate();
	const handleClick = () => navigate(link);

	return (
		<Card onClick={() => handleClick()}>
			<PlayerImageContainer>
				<img
					alt={`headshot-${data.name.last}`}
					src={playerImageUrl}
				/>
				<TeamLogoContainer>
					<img
						alt={`logo-${team.abv}`}
						src={teamImageUrl}
					/>
				</TeamLogoContainer>
			</PlayerImageContainer>
			<span className="position">{data.position}</span>
			<RoleIcon game_role={data.allStar.role} />
			<DescriptionContainer>
				<p className="lastName">{data.name.last}</p>
			</DescriptionContainer>
		</Card>
	);
}

export default PlayerCard;
