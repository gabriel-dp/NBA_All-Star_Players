import styled from 'styled-components';

export const FooterContainer = styled.div`
	height: 10rem;
	width: 100%;
	background-color: ${({ theme }) => theme.background2};
	margin-top: 2rem;

	display: flex;
	justify-content: center;
`;

export const FooterWrapper = styled.div`
	width: min(100%, 75rem);
	color: ${({ theme }) => theme.text};
	opacity: 0.6;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 0.5rem;

	a {
		color: inherit;
	}
`;
