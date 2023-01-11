import { teamLogoUrl } from '../../utils/GitHubAssets';

function TeamLogo({ teamData }) {
	return (
		<img
			src={teamLogoUrl(teamData)}
			alt={teamData.abbreviation}
			draggable="false"
		/>
	);
}

export default TeamLogo;
