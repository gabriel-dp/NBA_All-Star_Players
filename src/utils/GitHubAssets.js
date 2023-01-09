export function fetchGetData(url, setState) {
	fetch(url)
		.then((res) => res.json())
		.then((resJson) => setState(resJson))
		.catch((error) => console.error(error));
}

const BASE_URL = import.meta.env.VITE_GITHUB_ASSETS_URL;

export const allstarThemeJson = () => `${BASE_URL}/allstar/theme.json`;

export const allstarLogoUrlWebp = () => `${BASE_URL}/allstar/logo.webp`;

export const playerHeadshotUrlWebp = (player) =>
	`${BASE_URL}/players/headshot/${player.name.first}-${player.name.last}.webp`;

export const teamLogoUrlSvg = (team) => `${BASE_URL}/teams/logo/${team.abbreviation}.svg`;
