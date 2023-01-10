import styled from 'styled-components';
import { FaStar } from 'react-icons/fa';

export const Card = styled.div`
	width: min(100%, 30rem);
	height: 15rem;
	border-radius: 1rem;
	background-color: ${({ theme }) => theme.background2};
	color: ${({ theme }) => theme.text};
	overflow: hidden;
	position: relative;
	user-select: none;
	cursor: pointer;
	transition: all 0.25s ease;
	border: 5px solid transparent;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-end;

	.position {
		font-size: 1.25rem;
		font-weight: bold;
		position: absolute;
		right: 1rem;
		top: 1rem;
		letter-spacing: 0.25rem;
	}

	::before {
		content: '';
		position: absolute;
		width: 100%;
		height: 100%;
		background: linear-gradient(-2deg, ${({ theme }) => theme.background2}, transparent 35%);
		z-index: 2;
	}

	:hover {
		border: 2px solid ${({ theme }) => theme.primary};
	}

	@media screen and (max-width: 480px) {
		width: 100%;
		height: 12rem;
	}
`;

export const DescriptionContainer = styled.div`
	width: 100%;
	padding: 0.8rem;
	color: ${({ theme }) => theme.text};
	text-transform: uppercase;
	transition: all 0.25s ease;
	z-index: 2;

	position: absolute;
	bottom: 0;

	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 0.25rem;

	filter: drop-shadow(0 0 0.25rem ${({ theme }) => theme.background});

	.lastName {
		font-size: 2rem;
		letter-spacing: 0.1rem;
		font-weight: bold;
		text-transform: uppercase;
	}
`;

export const RoleIcon = styled(FaStar)`
	font-size: 1.5rem;
	position: absolute;
	left: 1.25rem;
	top: 1rem;

	display: ${(props) => (props.game_role === 'bench' ? 'none' : 'normal')};
	color: ${({ theme }) =>
		(props) =>
			props.game_role === 'captain' ? theme.primary : theme.text};
`;

export const PlayerImageContainer = styled.div`
	height: 95%;
	width: 100%;
	display: flex;
	justify-content: center;

	img {
		z-index: 1;
		height: 100%;
		object-fit: cover;
	}
`;

export const TeamLogoContainer = styled.div`
	height: 90%;
	aspect-ratio: 1;
	opacity: 0.05;
	position: absolute;
	transform: translate(20%, -5%);

	img {
		height: 100%;
		object-fit: cover;
	}
`;
