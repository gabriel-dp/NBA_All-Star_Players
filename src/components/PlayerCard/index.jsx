import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import TeamLogo from '../TeamLogo';
import PlayerImage from '../PlayerImage';
import LoadingBall from '../LoadingBall';

import {
	Card,
	DescriptionContainer,
	PlayerImageContainer,
	RoleIcon,
	TeamLogoContainer,
} from './styles';

function PlayerCard({ data, team }) {
	const [imageIsLoaded, setImageIsLoaded] = useState(false);

	const link = `./${data.name.first}-${data.name.last}`;
	const navigate = useNavigate();
	const handleClick = () => navigate(link);

	return (
		<Card onClick={() => handleClick()}>
			<PlayerImageContainer>
				{!imageIsLoaded && <LoadingBall />}
				<PlayerImage
					playerData={data}
					headshot
					setImageIsLoaded={setImageIsLoaded}
				/>
				<TeamLogoContainer>
					<TeamLogo teamData={team} />
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
