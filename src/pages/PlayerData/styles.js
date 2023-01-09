import styled from 'styled-components';

export const Screen = styled.div`
	width: 100%;
	min-height: 100vh;
	position: relative;
	background-color: ${({ theme }) => theme.light};

	display: flex;
	justify-content: center;
`;

export const PlayerDataContainer = styled.div`
	width: min(100%, 75rem);
	height: 100vh;
	padding: 0 2rem;

	display: grid;
	grid-template-columns: minmax(0, 1.5fr) minmax(0, 3fr) minmax(0, 2fr);

	@media screen and (max-width: 1023px) {
		display: flex;
		flex-direction: column;
	}
`;

export const FirstSummary = styled.div`
	text-align: right;

	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 1rem;

	@media screen and (max-width: 1023px) {
		.name {
			text-align: center;
		}

		.details {
			justify-content: center;
		}
	}
`;

export const NameContainer = styled.div`
	color: #333;
	text-transform: uppercase;
	font-weight: bold;
	overflow-wrap: break-word;

	display: flex;
	flex-direction: column;

	.first {
		font-size: 2rem;
	}

	.last {
		font-size: 2.5rem;
	}
`;

export const DetailsContainer = styled.div`
	font-size: 1rem;
	font-weight: bold;
	color: #333;

	display: flex;
	flex-direction: row;
	justify-content: flex-end;
	gap: 1rem;
`;

export const MidSummary = styled.div`
	width: 100%;
	position: relative;
`;

export const PlayerImageContainer = styled.div`
	width: 100%;
	height: 100%;
	aspect-ratio: 2rem;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-end;

	img {
		width: max(100%, 25rem);
	}

	@media screen and (max-width: 1023px) {
		display: flex;
		flex-direction: column;

		img {
			height: 30rem;
			width: auto;
		}
	}
`;

export const StatsContainer = styled.div`
	width: 100%;
	height: 6rem;

	position: absolute;
	bottom: 0;

	display: flex;
	flex-direction: row;
	align-items: flex-end;
	justify-content: space-evenly;
	gap: 1rem;
`;

export const SingleStatContainer = styled.div`
	height: 90%;
	aspect-ratio: 1.25;
	background-color: red;
	border-radius: 1rem;
	font-weight: bold;
	font-size: 0.8rem;
	padding-top: 0.5rem;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 0.25rem;

	.number {
		font-size: 1.75rem;
		font-weight: normal;
	}

	&.mainStat {
		background-color: cyan;
		height: 100%;
		aspect-ratio: 1.5;
	}
`;

export const EndSummary = styled.div`
	width: 100%;
	display: flex;
	align-items: center;

	@media screen and (max-width: 1023px) {
		div {
			align-items: center;
		}
	}
`;

export const PlayerProfileContainer = styled.div`
	width: 100%;

	display: flex;
	flex-direction: column;
	align-items: flex-start;
	gap: 1rem;
`;
