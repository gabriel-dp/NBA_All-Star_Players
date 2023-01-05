import styled from 'styled-components';

export const Screen = styled.div`
	width: 100%;

	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const HomeContainer = styled.div`
	width: min(100%, 75rem);
	padding: 2rem;

	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 2rem;
`;

export const LogoContainer = styled.div`
	width: min(100%, 20rem);
	margin: 2rem;

	img {
		width: 100%;
	}
`;

export const CardsContainer = styled.div`
	width: 100%;

	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(18rem, 1fr));
	gap: 1rem;
`;
