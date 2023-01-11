import styled from 'styled-components';
import { FaArrowLeft } from 'react-icons/fa';

export const Button = styled.button`
	height: 3rem;
	width: 3rem;
	border: none;
	background-color: transparent;
	cursor: pointer;

	position: absolute;
	top: 1.5rem;
	left: 1.5rem;
`;

export const ArrowSymbol = styled(FaArrowLeft)`
	font-size: 1.5rem;
	color: ${(props) => props.color || '#222'};
`;
