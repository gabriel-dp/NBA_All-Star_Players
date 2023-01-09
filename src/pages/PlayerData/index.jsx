import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { fetchGetData } from '../../utils/GitHubAssets';

import {
	Screen,
	PlayerDataContainer,
	FirstSummary,
	NameContainer,
	DetailsContainer,
	MidSummary,
	PlayerImageContainer,
	StatsContainer,
	SingleStatContainer,
	EndSummary,
	PlayerProfileContainer,
} from './styles';

function PlayerData() {
	const playerName = useParams().name;
	const [playerData, setPlayerData] = useState(null);
	useEffect(() => {
		fetchGetData(`/players/get/${playerName}`, setPlayerData);
	}, [playerName]);

	return (
		<Screen>
			{playerData && (
				<PlayerDataContainer>
					<FirstSummary>
						<NameContainer className="name">
							<span className="first">{playerData.name.first}</span>
							<span className="last">{playerData.name.last}</span>
						</NameContainer>
						<DetailsContainer className="details">
							<span>{playerData.team.name}</span>
							<span>|</span>
							{playerData.position.map((pos) => (
								<span key={pos}>{pos}</span>
							))}
						</DetailsContainer>
					</FirstSummary>
					<MidSummary>
						<PlayerImageContainer>
							<img
								alt="photoooooo"
								src="\src\pages\PlayerData\playerImage.png"
							/>
						</PlayerImageContainer>
						<StatsContainer>
							<SingleStatContainer>
								<span className="number">{playerData.stats.reb}</span>
								<span>REB</span>
							</SingleStatContainer>
							<SingleStatContainer className="mainStat">
								<span className="number">{playerData.stats.pts}</span>
								<span>PTS</span>
							</SingleStatContainer>
							<SingleStatContainer>
								<span className="number">{playerData.stats.ast}</span>
								<span>AST</span>
							</SingleStatContainer>
						</StatsContainer>
					</MidSummary>
					<EndSummary>
						<PlayerProfileContainer>
							<span>Height - {playerData.personalData.heightImperial}</span>
							<span>Weight - {playerData.personalData.weightImperial}</span>
							<span>Age - {playerData.personalData.age}</span>
							<span>Country - {playerData.personalData.country}</span>
						</PlayerProfileContainer>
					</EndSummary>
				</PlayerDataContainer>
			)}
		</Screen>
	);
}

export default PlayerData;
