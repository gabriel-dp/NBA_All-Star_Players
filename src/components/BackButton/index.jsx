import { useNavigate } from 'react-router-dom';

import { ArrowSymbol, Button } from './styles';

function BackButton({ color }) {
	const navigate = useNavigate();

	return (
		<Button onClick={() => navigate(-1)}>
			<ArrowSymbol color={color} />
		</Button>
	);
}

export default BackButton;
