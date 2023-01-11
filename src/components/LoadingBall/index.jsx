import { BallIcon, LoadingContainer } from './styles';

function LoadingBall({ color }) {
	return (
		<LoadingContainer>
			<BallIcon color={color} />
		</LoadingContainer>
	);
}

export default LoadingBall;
