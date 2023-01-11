import styled from 'styled-components';
import { FaArrowLeft } from 'react-icons/fa';

export const Button = styled.button`
	height: 2.5rem;
	aspect-ratio: 1;
	border: none;
	background-color: transparent;
	border-radius: 50%;
	cursor: pointer;

	transition: all 0.5s ease;
	* {
		font-size: 1.25rem;
		color: ${(props) => props?.colors?.primary || '#222'};
	}

	:hover {
		background-color: ${(props) => props?.colors?.primary || '#222'};
		* {
			color: ${({ theme }) =>
				(props) =>
					props?.colors?.secondary || theme.light};
			transform: translate(-5%, 0);
		}
	}

	position: absolute;
	top: 2rem;
	left: 2rem;
`;

export const ArrowSymbol = styled(FaArrowLeft)``;
