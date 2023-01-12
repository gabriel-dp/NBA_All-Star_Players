import { useState, useEffect } from 'react';

import { fetchGetData, allstarLogoUrl } from '../../utils/GitHubAssets';
import PlayerFilter from '../../components/PlayerFilter';
import PlayerCard from '../../components/PlayerCard';
import Footer from '../../components/Footer';
import LoadingBall from '../../components/LoadingBall';

import {
	Screen,
	HomeContainer,
	LogoContainer,
	CardsContainer,
	NoResultsContainer,
	LoadingContainer,
} from './styles';

// Get team by last name because in some teams the name is different from original
// 'Los Angeles Clippers' !== 'LA Clippers'
function playerTeam(player, teams) {
	const getLastName = (string) => string.split(' ').pop();
	return teams.find((team) => getLastName(team.name) === getLastName(player.team.name));
}

function NoResults() {
	return (
		<NoResultsContainer>
			<span>No players match the filters</span>
		</NoResultsContainer>
	);
}

function Home() {
	const [allPlayers, setAllPlayers] = useState(null);
	const [teams, setTeams] = useState(null);
	const [showPlayers, setShowPlayers] = useState(null);

	useEffect(() => {
		fetchGetData('/players', setAllPlayers, true);
		fetchGetData('/teams', setTeams, true);
	}, []);

	const [isLoading, setIsLoading] = useState(true);
	useEffect(() => {
		if (allPlayers && teams) setIsLoading(false);
	}, [allPlayers, teams]);

	return (
		<Screen>
			<HomeContainer>
				<LogoContainer>
					<img
						alt="allstar-logo"
						src={allstarLogoUrl()}
						draggable="false"
					/>
					<span>
						<i>Fan-Made</i>
					</span>
				</LogoContainer>
				<PlayerFilter
					teams={teams}
					playerTeam={playerTeam}
					allPlayers={allPlayers}
					setShowPlayers={setShowPlayers}
				/>
				{isLoading ? (
					<LoadingContainer>
						<LoadingBall />
					</LoadingContainer>
				) : (
					<CardsContainer>
						{showPlayers?.length === 0 && <NoResults />}
						{showPlayers?.map((player) => (
							<PlayerCard
								data={player}
								team={playerTeam(player, teams)}
								key={player.name.last}
							/>
						))}
					</CardsContainer>
				)}
			</HomeContainer>
			<Footer />
		</Screen>
	);
}

export default Home;
