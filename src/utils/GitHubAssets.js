export const allstarLogoUrlWebp = () =>
	`${import.meta.env.VITE_GITHUB_ASSETS_URL}/allstar/logo.webp`;

export const playerHeadshotUrlWebp = (player) =>
	`${
		import.meta.env.VITE_GITHUB_ASSETS_URL
	}/players/headshot/${player.name.first.toLowerCase()}-${player.name.last.toLowerCase()}.webp`;

export const teamLogoUrlSvg = (team) =>
	`${import.meta.env.VITE_GITHUB_ASSETS_URL}/teams/logo/${team.abbreviation}.svg`;
