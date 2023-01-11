import { playerHeadshotUrl, playerProfileUrl } from '../../utils/GitHubAssets';

function PlayerImage({ playerData, headshot, profile, setImageIsLoaded }) {
	let imageSrc = null;
	if (headshot) imageSrc = playerHeadshotUrl(playerData);
	else if (profile) imageSrc = playerProfileUrl(playerData);

	const handleLoaded = () => {
		if (setImageIsLoaded !== undefined) setImageIsLoaded(true);
	};

	return (
		<img
			alt={`player-${playerData.name.last}`}
			src={imageSrc}
			draggable="false"
			onLoad={() => handleLoaded()}
		/>
	);
}

export default PlayerImage;
