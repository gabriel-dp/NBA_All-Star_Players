import styled from 'styled-components';

export const Screen = styled.div`
	width: 100%;
	height: 100vh;
	position: relative;
	background-color: ${({ theme }) => theme.light};

	display: flex;
	justify-content: center;

	* {
		transition: all ease 0.5s;
	}

	@media screen and (max-width: 1023px) {
		overflow-y: scroll;
	}
`;

export const PlayerDataContainer = styled.div`
	width: min(100%, 80rem);
	height: 100%;
	padding: 0 2rem;

	display: grid;
	grid-template-columns: minmax(0, 1.5fr) 3fr minmax(0, 2fr);

	@media screen and (max-width: 1023px) {
		display: flex;
		flex-direction: column;
	}
`;

export const FirstSummary = styled.div`
	text-align: right;

	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	margin-bottom: 15rem;
	gap: 1rem;

	@media screen and (max-width: 1023px) {
		padding: 3rem;
		margin-bottom: 0;
		.name {
			text-align: center;
		}

		.details {
			justify-content: center;
		}
	}
`;

export const NameContainer = styled.div`
	color: ${(props) => props.colors.primary};
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
	color: ${(props) => props.colors.primary};
	display: flex;
	flex-direction: row;
	justify-content: flex-end;
	gap: 1rem;
`;

export const MidSummary = styled.div`
	width: 100%;
	position: relative;
`;

export const TeamLogoContainer = styled.div`
	width: min(100%, 40rem);
	height: min(100%, 30rem);
	margin-bottom: min(10rem, 10vw);
	transition: none;

	position: absolute;
	bottom: 0;
	left: 50%;
	transform: translate(-50%, 0);

	img {
		opacity: 0.2;
	}
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
		z-index: 1;
		width: max(100%, 30rem);
	}

	@media screen and (max-width: 1023px) {
		display: flex;
		flex-direction: column;

		img {
			width: min(90%, 30rem);
		}
	}
`;

export const StatsContainer = styled.div`
	width: min(100%, 25rem);
	height: 6rem;
	margin-bottom: 1rem;
	z-index: 2;

	position: absolute;
	bottom: 0;
	left: 50%;
	transform: translate(-50%, 0);

	display: flex;
	flex-direction: row;
	align-items: flex-end;
	justify-content: space-evenly;
	gap: 0.75rem;

	@media screen and (max-width: 1023px) {
		margin-bottom: 0;
	}
`;

export const SingleStatContainer = styled.div`
	height: min(20vw, 90%);
	width: min(20vw, 100%);
	color: ${(props) => props.colors.primary};
	background-color: ${(props) => props.colors.secondary};
	border: 1px solid ${({ theme }) => theme.light};
	border-radius: 1rem;
	font-weight: bold;
	font-size: 0.8rem;
	padding-top: 0.5rem;
	filter: drop-shadow(0 0 0.5rem #00000077);

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
		height: min(25vw, 100%);
		width: min(25vw, 90%);
		aspect-ratio: 1.5;
		background-color: ${(props) => props.colors.primary};
		color: ${(props) => props.colors.secondary};

		.number {
			font-size: 2rem;
		}
	}

	@media screen and (max-width: 1023px) {
		.number {
			font-size: 1rem;
		}

		&.mainStat {
			.number {
				font-size: 1.5rem;
			}
		}
	}
`;

export const EndSummary = styled.div`
	width: 100%;
	display: flex;
	align-items: flex-end;
	margin: 1rem;
	margin-top: 0;
	padding: 0 1rem;

	@media screen and (max-width: 1023px) {
		margin: 0;

		div {
			align-items: center;
		}
	}
`;

export const PlayerProfileContainer = styled.div`
	width: 100%;
	background-color: ${(props) => props.colors.primary};
	color: ${(props) => props.colors.secondary};
	padding: 2rem;
	border-radius: 1rem;
	filter: drop-shadow(0 0.25rem 0.5rem #00000077);

	display: flex;
	flex-direction: column;
	align-items: flex-start;
	gap: 1rem;
`;
