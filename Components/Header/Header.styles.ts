import { brand } from '@helpers/brand';
import styled from 'styled-components';

export const headerHeight: string = '4rem';

const Header = styled.header`
	position: sticky;
	top: 0;

	display: flex;
	justify-content: center;
	align-items: center;

	width: 90%;
	max-width: 86rem;
	height: ${headerHeight};

	padding: 1.5rem 0;
	margin: 0 auto;

	color: ${brand.white};
	font-size: 0.95rem;
`;

const HeaderLinks = styled.a<{ textContent: string }>`
	position: relative;

	padding-left: 1rem;

	overflow: hidden;

	span {
		display: inline-block;
		transition: transform 0.4s;

		&::before {
			content: '${({ textContent }) => textContent}';

			position: absolute;
			bottom: 25px;
			right: 0;
		}
	}

	&:hover {
		span {
			transform: translateY(25px);
		}

		&::before {
			transform: translateY(25px);
		}
	}
`;

const Separator = styled.span`
	color: ${brand.green_blue};

	padding-left: 1rem;
`;

const NameWrapper = styled.div<{ textContent: string }>`
	flex: 1;

	display: flex;
	align-items: center;
	justify-content: flex-start;

	position: relative;

	padding-bottom: 0.4rem;

	&:before {
		content: '';
		position: absolute;
		bottom: 0;
		left: 0;
		border-bottom: 1px solid ${brand.green_blue};

		width: 2rem;
	}

	a {
		display: inline-block;
		transition: transform 0.4s;
		overflow: hidden;

		position: relative;

		span {
			display: inline-block;
			transition: transform 0.4s;

			&::after {
				content: '${({ textContent }) => textContent}';

				position: absolute;
				bottom: 25px;
				left: 0;
			}
		}

		&:hover {
			span {
				transform: translateY(25px);
			}

			&::before {
				transform: translateY(25px);
			}
		}
	}
`;
export const s = { Header, HeaderLinks, Separator, NameWrapper };
