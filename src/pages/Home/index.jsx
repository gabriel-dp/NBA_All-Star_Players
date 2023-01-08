import { useState, useEffect } from 'react';
import { allstarLogoUrlWebp } from '../../utils/GitHubAssets';

import PlayerFilter from '../../components/PlayerFilter';
import PlayerCard from '../../components/PlayerCard';
import Footer from '../../components/Footer';

import { Screen, HomeContainer, LogoContainer, CardsContainer, NoResultsContainer } from './style';

function fetchGetData(url, setState) {
	fetch(url)
		.then((res) => res.json())
		.then((resJson) => setState(resJson))
		.catch((error) => console.error(error));
}

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
		fetchGetData('/players', setAllPlayers);
		fetchGetData('/teams', setTeams);
	}, []);

	return (
		<Screen>
			<HomeContainer>
				<LogoContainer>
					<img
						alt="allstar-logo"
						src={allstarLogoUrlWebp()}
						draggable="false"
					/>
				</LogoContainer>
				<PlayerFilter
					teams={teams}
					playerTeam={playerTeam}
					allPlayers={allPlayers}
					setShowPlayers={setShowPlayers}
				/>
				{teams && showPlayers?.length > 0 ? (
					<CardsContainer>
						{showPlayers?.map((player) => (
							<PlayerCard
								data={player}
								team={playerTeam(player, teams)}
								key={player.name.last}
							/>
						))}
					</CardsContainer>
				) : (
					<NoResults />
				)}
			</HomeContainer>
			<Footer />
		</Screen>
	);
}

export default Home;
