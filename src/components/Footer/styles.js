import styled from 'styled-components';

export const FooterContainer = styled.div`
	height: 10rem;
	width: 100%;
	background-color: ${({ theme }) => theme.background2};
	margin-top: 2rem;
	position: absolute;
	bottom: 0;
	overflow: hidden;

	display: flex;
	justify-content: center;
`;

export const FooterWrapper = styled.div`
	width: min(100%, 75rem);
	padding: 2rem;
	font-size: 0.85rem;
	color: ${({ theme }) => theme.text}99;
	text-align: center;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 0.5rem;

	a {
		transition: color 0.25s ease;
		color: inherit;

		:hover {
			color: ${({ theme }) => theme.primary};
		}
	}
`;
