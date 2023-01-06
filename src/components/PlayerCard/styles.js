import styled from 'styled-components';

export const Card = styled.div`
	width: min(100%, 30rem);
	height: 15rem;
	border-radius: 1rem;
	background-color: ${({ theme }) => theme.background2};
	color: ${({ theme }) => theme.text};
	overflow: hidden;
	position: relative;
	user-select: none;
	transition: all 0.25s ease;
	border: 5px solid transparent;

	display: flex;
	flex-direction: column;
	align-items: center;

	.position {
		font-size: 1.25rem;
		font-weight: bold;
		position: absolute;
		right: 1.25rem;
		top: 1rem;
	}

	::before {
		content: '';
		position: absolute;
		width: 100%;
		height: 100%;
		background: linear-gradient(-2deg, ${({ theme }) => theme.background2}, transparent 35%);
	}

	:hover {
		border: 2px solid ${({ theme }) => theme.primary};
	}
`;

export const DescriptionContainer = styled.div`
	width: 100%;
	padding: 0.8rem;
	color: ${({ theme }) => theme.text};
	transition: all 0.25s ease;
	z-index: 1;

	position: absolute;
	bottom: 0;

	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 0.25rem;

	filter: drop-shadow(0 0 0.25rem ${({ theme }) => theme.background});

	.firstName {
		font-size: 0.9rem;
		font-weight: bold;
	}

	.lastName {
		font-size: 1.1rem;
		font-weight: bold;
		text-transform: uppercase;
	}
`;

export const ImageContainer = styled.div`
	height: 100%;
	width: 100%;
	display: flex;
	justify-content: center;

	img {
		height: 100%;
		object-fit: cover;
	}
`;
