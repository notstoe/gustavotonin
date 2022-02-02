import { brand } from '@helpers/brand';
import styled from 'styled-components';

const Header = styled.header`
	position: sticky;
	top: 0;

	display: flex;
	justify-content: center;

	height: 10vh;
	max-height: 80px;
	padding: 1.5rem 3rem;

	color: ${brand.white};

	> a {
		padding: 0 1rem;

		&:before {
			width: 0;
		}
	}

	a {
		position: relative;

		transition: color 0.2s;

		&:before {
			content: '';
			position: absolute;
			bottom: 0px;
			border-bottom: 1px solid ${brand.green_blue};

			transition: width 0.4s cubic-bezier(0.8, 0.11, 0.37, 0.99);
		}

		&:hover {
			color: ${brand.black.faded};

			&:before {
				width: 2rem;
			}
		}
	}
`;

const Separator = styled.span`
	color: ${brand.green_blue};
`;

const NameWrapper = styled.div`
	flex: 1;

	display: flex;
	align-items: center;
	justify-content: flex-start;

	a {
		padding-bottom: 0.3rem;

		&:before {
			width: 2rem;
		}
	}
`;
export const s = { Header, Separator, NameWrapper };
