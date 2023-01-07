import { useState, useEffect } from 'react';
import { allstarLogoUrlWebp } from '../../utils/GitHubAssets';

import PlayerCard from '../../components/PlayerCard';
import Footer from '../../components/Footer';

import { Screen, HomeContainer, LogoContainer, CardsContainer } from './style';

function playerTeam(player, teams) {
	// Compares last name because in some teams the name is different of the original
	// 'Los Angeles Clippers' !== 'LA Clippers'
	const getLastName = (string) => {
		const splitted = string.split(' ');
		return splitted[splitted.length - 1];
	};

	return teams.find((team) => getLastName(team.name) === getLastName(player.team.name));
}

function Home() {
	const [players, setPlayers] = useState(null);
	useEffect(() => {
		fetch('/players')
			.then((res) => res.json())
			.then((resJson) => setPlayers(resJson))
			.catch((err) => console.error(err));
	}, []);

	const [teams, setTeams] = useState(null);
	useEffect(() => {
		fetch('/teams')
			.then((res) => res.json())
			.then((resJson) => setTeams(resJson))
			.catch((err) => console.error(err));
	}, []);

	return (
		<Screen>
			<HomeContainer>
				<LogoContainer>
					<img
						alt="allstar-logo"
						src={allstarLogoUrlWebp()}
					/>
				</LogoContainer>
				<CardsContainer>
					{teams &&
						players?.map((player) => (
							<PlayerCard
								data={player}
								team={playerTeam(player, teams)}
								key={player.name.last}
							/>
						))}
				</CardsContainer>
			</HomeContainer>
			<Footer />
		</Screen>
	);
}

export default Home;
