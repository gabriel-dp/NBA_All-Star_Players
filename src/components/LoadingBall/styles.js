import styled, { keyframes } from 'styled-components';
import { FaBasketballBall } from 'react-icons/fa';

export const LoadingContainer = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const BallIcon = styled(FaBasketballBall)`
	font-size: 2rem;
	color: ${({ theme }) =>
		(props) =>
			props.color || theme.primary};
	animation: ${rotate} 2s linear infinite;
`;
