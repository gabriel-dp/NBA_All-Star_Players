export function fetchGetData(url, setState) {
	fetch(url)
		.then((res) => res.json())
		.then((resJson) => setState(resJson))
		.catch((error) => console.error(error));
}

const BASE_URL = import.meta.env.VITE_GITHUB_ASSETS_URL;

export const allstarThemeJson = () => `${BASE_URL}/allstar/theme.json`;

export const allstarLogoUrl = () => `${BASE_URL}/allstar/logo.webp`;

export const playerHeadshotUrl = (player) =>
	`${BASE_URL}/players/headshot/${player.name.first}-${player.name.last}.webp`;

export const playerProfileUrl = (player) =>
	`${BASE_URL}/players/profile/${player.name.first}-${player.name.last}.webp`;

export const playerSignatureUrl = (player) =>
	`${BASE_URL}/players/signature/${player.name.first}-${player.name.last}.webp`;

export const teamLogoUrl = (team) => `${BASE_URL}/teams/logo/${team.abbreviation}.svg`;
