import styled from 'styled-components';

export const Screen = styled.div`
	width: 100%;
	min-height: 100vh;
	position: relative;
	padding-bottom: 10rem; // Footer height

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
	width: min(80%, 20rem);
	margin: 2rem 0 0 0;
	color: ${({ theme }) => theme.text};
	font-size: 0.8rem;
	user-select: none;

	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1.5rem;

	img {
		width: 100%;
	}
`;

export const CardsContainer = styled.div`
	width: 100%;

	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(18rem, 1fr));
	gap: 1rem;
	justify-items: center;
`;

export const NoResultsContainer = styled.div`
	width: 100%;
	padding: 2rem;
	color: ${({ theme }) => theme.text};
	text-align: center;

	display: flex;
	justify-content: center;
`;

export const LoadingContainer = styled.div`
	margin: 5rem;
	position: relative;
`;
