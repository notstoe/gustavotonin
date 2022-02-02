import type { AppProps } from 'next/app';
import Page from 'Components/Page/Page';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<Page>
			<Component {...pageProps} />
		</Page>
	);
}

export default MyApp;
