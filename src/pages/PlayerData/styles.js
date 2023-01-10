import styled from 'styled-components';

export const Screen = styled.div`
	width: 100%;
	height: 100vh;
	position: relative;
	background-color: #bbb;

	display: flex;
	justify-content: center;

	* {
		transition: all ease 0.2s;
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
	grid-template-columns: minmax(0, 1fr) minmax(0, 2.5fr) minmax(0, 1fr);
	grid-template-rows: minmax(0, 1fr);

	* {
		user-select: none;
	}

	@media screen and (max-width: 1023px) {
		display: flex;
		flex-direction: column;
	}
`;

export const FirstSummary = styled.div`
	height: 100%;
	text-align: right;

	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	padding-bottom: 15rem;
	gap: 1rem;

	@media screen and (max-width: 1023px) {
		height: auto;
		padding: 3rem 0;
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
	font-family: 'NBA';
	overflow-wrap: break-word;

	display: flex;
	flex-direction: column;

	* {
		:hover {
			letter-spacing: 0.25rem;
		}
	}

	.first {
		font-size: 4rem;
	}

	.last {
		font-size: 5rem;
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

	:hover {
		letter-spacing: 0.1rem;
	}
`;

export const MidSummary = styled.div`
	width: 100%;
	height: 100%;
	position: relative;

	display: flex;
	flex-direction: column-reverse;
	align-items: center;

	@media screen and (max-width: 1023px) {
		height: max(25rem, 50vw);
	}
`;

export const TeamLogoContainer = styled.div`
	width: 100%;
	height: min(100%, 25rem);
	transition: none;
	z-index: 0;

	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);

	img {
		height: 100%;
		width: 100%;
		opacity: 0.2;
		object-fit: contain;
	}

	@media screen and (max-width: 1023px) {
		height: min(100%, 30rem);
	}
`;

export const PlayerImageContainer = styled.div`
	height: min(100%, 35rem);
	max-width: 100%;
	padding: 0 1rem;
	filter: drop-shadow(0 0.5rem 0.5rem #00000077);

	display: flex;
	align-items: flex-end;

	img {
		z-index: 1;
		max-height: 100%;
		max-width: 100%;
		object-fit: contain;
		vertical-align: bottom;
	}

	@media screen and (max-width: 1023px) {
		height: min(35rem, 100%);
		transform: translate(0, 1rem); //hide image bottom corners
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
	border: 1px solid ${(props) => props.colors.primary};
	border-radius: 0.75rem;
	font-weight: bold;
	font-size: 0.8rem;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 0.25rem;

	.number {
		font-size: 2.5rem;
		font-weight: normal;
	}

	:hover {
		filter: drop-shadow(0 0 0.5rem ${(props) => props.colors.secondary}aa);
	}

	&.mainStat {
		height: min(25vw, 100%);
		width: min(25vw, 90%);
		aspect-ratio: 1.5;
		background-color: ${(props) => props.colors.primary};
		border: 1px solid ${(props) => props.colors.secondary};
		color: ${(props) => props.colors.secondary};

		.number {
			font-size: 3.5rem;
		}
	}

	@media screen and (max-width: 767px) {
		.number {
			font-size: 2rem;
		}

		&.mainStat {
			.number {
				font-size: 3rem;
			}
		}
	}
`;

export const EndSummary = styled.div`
	width: 100%;
	display: flex;
	align-items: flex-end;
	padding: 1rem;

	@media screen and (max-width: 1023px) {
		padding-top: 0;

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
	filter: drop-shadow(0 0 0.5rem #00000077);
	z-index: 2;

	display: flex;
	flex-direction: column;
	align-items: flex-start;
	gap: 1rem;
`;
