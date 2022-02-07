import { brand } from '@helpers/brand';
import { Device, until } from '@helpers/media';

import { headerHeight } from '../Header/Header.styles';

import styled, { keyframes } from 'styled-components';

const IntroWrapper = styled.section`
	display: flex;
	justify-content: center;
	flex-direction: column;

	/* everything in the viewport height minus the header height */
	height: calc(100vh - ${headerHeight});

	@media ${until(Device.TabletLarge)} {
		padding-top: 2.5rem;

		justify-content: flex-start;
	}
`;

const IntroInnerContent = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;

	font-size: 5rem;
	font-weight: 600;

	@media ${until(Device.TabletLarge)} {
		flex-direction: column;

		gap: 3rem;
	}

	@media ${until(Device.Laptop)} {
		font-size: 3.2rem;
	}
`;

const IntroTextWrapper = styled.h1`
	display: flex;
	flex-direction: column;
	justify-content: center;
`;

const Text = styled.a<{ content: string; hoverContent: string }>`
	&::before {
		content: '${({ content }) => content}';

		transition: padding 0.4s;

		cursor: pointer;
	}

	&:hover {
		&:before {
			content: '${({ hoverContent }) => hoverContent}';
			padding-left: 20px;
		}
	}
`;

const CirclesWrapper = styled.div`
	position: relative;

	cursor: pointer;

	.circleImageTrim {
		overflow: hidden;

		width: 25rem;
		height: 25rem;
		border-radius: 50%;

		@media ${until(Device.TabletLarge)} {
			width: 20rem;
			height: 20rem;
		}
	}

	&:hover {
		${() => GreenBlueCircle} {
			transform: translate(40px, -40px);
			filter: blur(8px);
		}
		${() => RedCircle} {
			transform: translate(-40px, 40px);
			filter: blur(8px);
		}
	}

	&:active {
		cursor: default;

		${() => GreenBlueCircle}, ${() => RedCircle} {
			filter: blur(5px);
			transform: translate(0);
		}
	}
`;

const ImageWrapper = styled.div`
	position: relative;

	width: 25rem;
	height: 40rem;

	transform: translateY(-11.5rem);

	@media ${until(Device.TabletLarge)} {
		width: 20rem;
		height: 40rem;
	}
`;

const RedCircle = styled.div`
	position: absolute;
	bottom: 5px;
	right: 2px;

	background: ${brand.red};

	width: 25rem;
	height: 25rem;
	border-radius: 50%;

	transition: transform 0.4s, filter 0.2s;

	@media ${until(Device.TabletLarge)} {
		width: 20rem;
		height: 20rem;
	}
`;

const GreenBlueCircle = styled.div`
	position: absolute;
	top: 1px;
	right: 6px;

	background: ${brand.green_blue};

	width: 25rem;
	height: 25rem;
	border-radius: 50%;

	transition: transform 0.4s, filter 0.4s;

	@media ${until(Device.TabletLarge)} {
		width: 20rem;
		height: 20rem;
	}
`;

const Name = styled.span`
	position: relative;

	display: flex;
	gap: 1.1rem;

	margin-top: 1.2rem;
	padding-bottom: 0.3rem;

	cursor: pointer;

	&:before {
		content: '';
		position: absolute;
		bottom: 0;
		width: 100%;
		border-bottom: 3px solid ${brand.white};

		transition: width 1s;
	}

	&:after {
		content: '';
		position: absolute;
		bottom: 0;
		right: 0;
		width: 0%;
		border-bottom: 3px solid ${brand.white};

		transition: width 1s;
	}

	&:hover {
		&:before {
			width: 0%;
		}
	}

	&:active {
		cursor: default;

		&:after {
			width: 100%;
		}
	}

	@media ${until(Device.TabletLarge)} {
		flex-direction: column;
		gap: 0;

		&:before {
			width: 0%;
		}
	}
`;

const svgWidth: number = 24;
const svgWidthMobile: number = 15;

const SvgGus = styled.div`
	color: ${brand.white};

	width: ${svgWidth}rem;

	@media ${until(Device.Laptop)} {
		width: ${svgWidthMobile}rem;
	}
`;

const SvgTonin = styled.div`
	color: ${brand.white};

	width: calc(${svgWidth}rem * 0.675);

	@media ${until(Device.Laptop)} {
		width: calc(${svgWidthMobile}rem * 0.675);
	}
`;

const Footer = styled.footer`
	display: flex;
	gap: 2rem;

	font-size: 0.95rem;
	font-weight: 500;

	margin-top: 5rem;

	a {
		transition: color 0.2s;

		&:hover {
			color: ${brand.black.faded};
		}
	}

	@media ${until(Device.TabletLarge)} {
		align-self: center;
	}
`;

export const s = {
	IntroWrapper,
	CirclesWrapper,
	RedCircle,
	GreenBlueCircle,
	IntroTextWrapper,
	Text,
	Name,
	SvgGus,
	SvgTonin,
	ImageWrapper,
	Footer,
	IntroInnerContent,
};
