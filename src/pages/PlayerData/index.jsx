import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import {
	fetchGetData,
	playerProfileUrl,
	teamLogoUrl,
	playerSignatureUrl,
} from '../../utils/GitHubAssets';

import {
	Screen,
	PlayerDataContainer,
	FirstSummary,
	NameContainer,
	DetailsContainer,
	MidSummary,
	TeamLogoContainer,
	NumberContainer,
	PlayerImageContainer,
	StatsContainer,
	SingleStatContainer,
	EndSummary,
	PlayerProfileContainer,
	PersonalDataItem,
	SignatureContainer,
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
					<FirstSummary colors={teamData.colors}>
						<NameContainer className="name">
							<p className="first">{playerData.name.first}</p>
							<p className="last">{playerData.name.last}</p>
						</NameContainer>
						<DetailsContainer className="details">
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
								src={teamLogoUrl(teamData)}
								draggable="false"
							/>
						</TeamLogoContainer>
						<PlayerImageContainer>
							<img
								alt={playerData.name.last}
								src={playerProfileUrl(playerData)}
								draggable="false"
							/>
						</PlayerImageContainer>
						<NumberContainer colors={teamData.colors}>
							<p>#{playerData.team.number}</p>
						</NumberContainer>
						<StatsContainer colors={teamData.colors}>
							<SingleStatContainer>
								<p className="number">{playerData.stats.reb}</p>
								<span>REB</span>
							</SingleStatContainer>
							<SingleStatContainer className="mainStat">
								<p className="number">{playerData.stats.pts}</p>
								<span>PTS</span>
							</SingleStatContainer>
							<SingleStatContainer>
								<p className="number">{playerData.stats.ast}</p>
								<span>AST</span>
							</SingleStatContainer>
						</StatsContainer>
					</MidSummary>
					<EndSummary colors={teamData.colors}>
						<PlayerProfileContainer className="summary">
							{Object.keys(playerData.personalData).map((info) => (
								<PersonalDataItem key={info}>
									<p>{info}</p>
									<span>{playerData.personalData[info]}</span>
									<hr />
								</PersonalDataItem>
							))}
							<SignatureContainer colors={teamData.colors}>
								<img
									alt={`${playerData.name.last}-signature`}
									src={playerSignatureUrl(playerData)}
									draggable="false"
								/>
							</SignatureContainer>
						</PlayerProfileContainer>
					</EndSummary>
				</PlayerDataContainer>
			)}
		</Screen>
	);
}

export default PlayerData;
