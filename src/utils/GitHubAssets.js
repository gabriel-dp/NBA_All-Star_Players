const API_BASE_URL = import.meta.env.VITE_API_URL;

export function fetchGetData(url, setState, api = false) {
	const requestUrl = api ? `${API_BASE_URL}${url}` : url;
	fetch(requestUrl)
		.then((res) => res.json())
		.then((resJson) => setState(resJson))
		.catch((error) => console.error(error));
}

const ASSETS_BASE_URL = import.meta.env.VITE_GITHUB_ASSETS_URL;

export const allstarThemeJson = () => `${ASSETS_BASE_URL}/allstar/theme.json`;

export const allstarLogoUrl = () => `${ASSETS_BASE_URL}/allstar/logo.webp`;

export const playerHeadshotUrl = (player) =>
	`${ASSETS_BASE_URL}/players/headshot/${player.name.first}-${player.name.last}.webp`;

export const playerProfileUrl = (player) =>
	`${ASSETS_BASE_URL}/players/profile/${player.name.first}-${player.name.last}.webp`;

export const playerSignatureUrl = (player) =>
	`${ASSETS_BASE_URL}/players/signature/${player.name.first}-${player.name.last}.webp`;

export const teamLogoUrl = (team) => `${ASSETS_BASE_URL}/teams/logo/${team.abbreviation}.svg`;
