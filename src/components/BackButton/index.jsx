import { useNavigate } from 'react-router-dom';

import { ArrowSymbol, Button } from './styles';

export default function BackButton({ colors }) {
	const navigate = useNavigate();

	return (
		<Button
			onClick={() => navigate(-1)}
			colors={colors}
		>
			<ArrowSymbol color={colors} />
		</Button>
	);
}
