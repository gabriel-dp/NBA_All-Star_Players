import { FooterContainer, FooterWrapper } from './styles';

function Footer() {
	return (
		<FooterContainer>
			<FooterWrapper>
				<span>This is a unofficial and non-profit project</span>
				<span>
					Made with love and work by&nbsp;
					<a
						target="_blank"
						rel="noreferrer"
						href="https://github.com/gabriel-dp/"
					>
						Gabriel de Paula
					</a>
					.
				</span>
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
