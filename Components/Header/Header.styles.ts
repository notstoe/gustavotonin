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

	> a {
		padding-left: 1rem;
	}

	a {
		transition: color 0.2s;

		&:hover {
			color: ${brand.black.faded};
		}
	}
`;

const Separator = styled.span`
	color: ${brand.green_blue};

	padding-left: 1rem;
`;

const NameWrapper = styled.div`
	flex: 1;

	display: flex;
	align-items: center;
	justify-content: flex-start;

	position: relative;

	padding-bottom: 0.2rem;

	a {
		&:before {
			content: '';
			position: absolute;
			bottom: 0px;
			border-bottom: 1px solid ${brand.green_blue};

			width: 2rem;
		}
	}
`;
export const s = { Header, Separator, NameWrapper };
