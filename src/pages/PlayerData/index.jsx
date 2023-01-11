import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { fetchGetData, playerSignatureUrl } from '../../utils/GitHubAssets';
import TeamLogo from '../../components/TeamLogo';
import PlayerImage from '../../components/PlayerImage';
import BackButton from '../../components/BackButton';

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
import LoadingBall from '../../components/LoadingBall';

function PlayerData() {
	const playerName = useParams().name;
	const [playerData, setPlayerData] = useState(null);
	const [teamData, setTeamData] = useState(null);

	// Get player data based on Url params
	useEffect(() => {
		fetchGetData(`/players/get/${playerName}`, setPlayerData, true);
	}, [playerName]);

	// Get team data after process player data
	useEffect(() => {
		if (!playerData) return;
		fetchGetData(`/teams/get/${playerData.team.name.replace(' ', '-')}`, setTeamData, true);
	}, [playerData]);

	// Loading state to player image
	const [imageIsLoaded, setImageIsLoaded] = useState(false);

	return (
		<Screen>
			<BackButton colors={teamData?.colors} />
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
							<TeamLogo teamData={teamData} />
						</TeamLogoContainer>
						{!imageIsLoaded && <LoadingBall color={teamData.colors.primary} />}
						<PlayerImageContainer>
							<PlayerImage
								playerData={playerData}
								profile
								setImageIsLoaded={setImageIsLoaded}
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
