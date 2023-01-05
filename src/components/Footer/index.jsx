import { FooterContainer, FooterWrapper } from './style';

function Footer() {
	return (
		<FooterContainer>
			<FooterWrapper>
				<p>This is a unofficial and non-profit project</p>
				<p>
					Made with love and work by&nbsp;
					<a
						target="_blank"
						rel="noreferrer"
						href="https://github.com/gabriel-dp/"
					>
						Gabriel de Paula
					</a>
					.
				</p>
				<a
					target="_blank"
					rel="noreferrer"
					href="https://github.com/gabriel-dp/NBA-AllStar-Players"
				>
					Website source code
				</a>
			</FooterWrapper>
		</FooterContainer>
	);
}

export default Footer;
