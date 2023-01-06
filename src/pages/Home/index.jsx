import { useState, useEffect } from 'react';

import PlayerCard from '../../components/PlayerCard';
import Footer from '../../components/Footer';

import { Screen, HomeContainer, LogoContainer, CardsContainer } from './style';

function Home() {
	const [data, setData] = useState(null);
	useEffect(() => {
		fetch('/players')
			.then((res) => res.json())
			.then((resData) => setData(resData))
			.catch((err) => console.error(err));
	}, []);

	return (
		<Screen>
			<HomeContainer>
				<LogoContainer>
					<img
						alt="logo"
						src="https://d2xpg1khvwxlf1.cloudfront.net/production/images/original/38712-AS23_Utah_dark_bg-52dc2d80ababe0d0caf4b5815003afd7.png"
					/>
				</LogoContainer>
				<CardsContainer>
					{data?.players.map((player) => (
						<PlayerCard
							data={player}
							key={player.firstName}
						/>
					))}
				</CardsContainer>
			</HomeContainer>
			<Footer />
		</Screen>
	);
}

export default Home;
