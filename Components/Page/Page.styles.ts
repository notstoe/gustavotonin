import { brand } from '@helpers/brand';
import { Device, until } from '@helpers/media';

import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

	* {
		margin: 0;
		padding: 0;
		border: 0;
		font-size: 100%;
		vertical-align: baseline;
		box-sizing: border-box;
	}

	main {
		background: ${brand.black.bg};
	}

	/* HTML5 display-role reset for older browsers */
	article,
	aside,
	details,
	figcaption,
	figure,
	footer,
	header,
	hgroup,
	menu,
	nav,
	section {
		display: block;
	}

	body {
		line-height: 1;
	}

	ol,
	ul {
		list-style: none;
	}

	blockquote,
	q {
		quotes: none;
	}

	blockquote:before,
	blockquote:after,
	q:before,
	q:after {
		content: "";
		content: none;
	}

	body,
	input,
	textarea,
	button {
		font: inherit;
	}

	button {
		cursor: pointer;
	}

	a {
		color: inherit;
		text-decoration: none;
	}

	@media ${until(Device.TabletLarge)} {
    /* reduce base font size to 15px */
		html {
			font-size: 87.5%;
		}
	}

	@media ${until(Device.Tablet)} {
    /* reduce base font size to 14px */
		html {
			font-size: 75%;
		}
	}
`;

const PageWrapper = styled.main`
	position: relative;

	width: 100%;

	min-height: 100%;

	font-family: 'Montserrat', sans-serif;
`;

const ContentWrapper = styled.div`
	color: ${brand.white};

	min-height: 90vh;
`;

export const s = {
	PageWrapper,
	ContentWrapper,
	GlobalStyles,
};
