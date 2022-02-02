import Header from '../Header/Header';

import PropTypes from 'prop-types';

import { s } from './Page.styles';

export default function Page({ children }: any) {
	return (
		<s.PageWrapper>
			<s.GlobalStyles />

			<Header />
			<s.ContentWrapper>{children}</s.ContentWrapper>
		</s.PageWrapper>
	);
}

Page.propTypes = {
	children: PropTypes.any,
};
