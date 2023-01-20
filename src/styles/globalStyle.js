import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		font-family: Helvetica;
		-webkit-tap-highlight-color: transparent;
		
		p {
			font-family: NBA;
		}
	}

	body {
		background-color: ${({ theme }) => theme.background};
	}
`;
