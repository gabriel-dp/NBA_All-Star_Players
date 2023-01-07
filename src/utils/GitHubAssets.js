export const playerHeadshotUrlWebp = (player) =>
	`${
		import.meta.env.VITE_GITHUB_ASSETS_URL
	}/players/headshot/${player.firstName.toLowerCase()}-${player.lastName.toLowerCase()}.webp`;

export const teamLogoUrlSvg = (team) =>
	`${import.meta.env.VITE_GITHUB_ASSETS_URL}/teams/logo/${team.abbreviation}.svg`;
