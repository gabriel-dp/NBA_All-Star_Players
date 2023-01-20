import { BallIcon, LoadingContainer } from './styles';

export default function LoadingBall({ color }) {
	return (
		<LoadingContainer>
			<BallIcon color={color} />
		</LoadingContainer>
	);
}
