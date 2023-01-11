import { playerHeadshotUrl, playerProfileUrl } from '../../utils/GitHubAssets';

function PlayerImage({ playerData, headshot, profile }) {
	let imageSrc = null;
	if (headshot) imageSrc = playerHeadshotUrl(playerData);
	else if (profile) imageSrc = playerProfileUrl(playerData);

	return (
		<img
			alt={`player-${playerData.name.last}`}
			src={imageSrc}
			draggable="false"
		/>
	);
}

export default PlayerImage;
