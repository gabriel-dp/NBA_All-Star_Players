import { useState, useEffect } from 'react';
import { allstarLogoUrlWebp } from '../../utils/GitHubAssets';

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
						alt="allstar-logo"
						src={allstarLogoUrlWebp()}
					/>
				</LogoContainer>
				<CardsContainer>
					{data?.map((player) => (
						<PlayerCard
							data={player}
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
