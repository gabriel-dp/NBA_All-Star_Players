import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { fetchGetData, playerProfileUrlPng, teamLogoUrlSvg } from '../../utils/GitHubAssets';

import {
	Screen,
	PlayerDataContainer,
	FirstSummary,
	NameContainer,
	DetailsContainer,
	MidSummary,
	TeamLogoContainer,
	PlayerImageContainer,
	StatsContainer,
	SingleStatContainer,
	EndSummary,
	PlayerProfileContainer,
} from './styles';

function PlayerData() {
	const playerName = useParams().name;
	const [playerData, setPlayerData] = useState(null);
	const [teamData, setTeamData] = useState(null);

	useEffect(() => {
		fetchGetData(`/players/get/${playerName}`, setPlayerData);
	}, [playerName]);

	useEffect(() => {
		if (!playerData) return;
		fetchGetData(`/teams/get/${playerData.team.name.replace(' ', '-')}`, setTeamData);
	}, [playerData]);

	return (
		<Screen>
			{playerData && teamData && (
				<PlayerDataContainer>
					<FirstSummary>
						<NameContainer
							className="name"
							colors={teamData.colors}
						>
							<span className="first">{playerData.name.first}</span>
							<span className="last">{playerData.name.last}</span>
						</NameContainer>
						<DetailsContainer
							className="details"
							colors={teamData.colors}
						>
							<span>{teamData.name}</span>
							<span>|</span>
							{playerData.position.map((pos) => (
								<span key={pos}>{pos}</span>
							))}
						</DetailsContainer>
					</FirstSummary>
					<MidSummary>
						<TeamLogoContainer>
							<img
								alt={teamData.abbreviation}
								src={teamLogoUrlSvg(teamData)}
							/>
						</TeamLogoContainer>
						<PlayerImageContainer>
							<img
								alt={playerData.name.last}
								src={playerProfileUrlPng(playerData)}
							/>
						</PlayerImageContainer>
						<StatsContainer>
							<SingleStatContainer colors={teamData.colors}>
								<span className="number">{playerData.stats.reb}</span>
								<span>REB</span>
							</SingleStatContainer>
							<SingleStatContainer
								className="mainStat"
								colors={teamData.colors}
							>
								<span className="number">{playerData.stats.pts}</span>
								<span>PTS</span>
							</SingleStatContainer>
							<SingleStatContainer colors={teamData.colors}>
								<span className="number">{playerData.stats.ast}</span>
								<span>AST</span>
							</SingleStatContainer>
						</StatsContainer>
					</MidSummary>
					<EndSummary>
						<PlayerProfileContainer colors={teamData.colors}>
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
