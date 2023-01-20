import { teamLogoUrl } from '../../utils/GitHubAssets';

export default function TeamLogo({ teamData }) {
	return (
		<img
			src={teamLogoUrl(teamData)}
			alt={teamData.abbreviation}
			draggable="false"
		/>
	);
}
