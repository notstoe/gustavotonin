import SeoHead, { SeoProps } from 'Components/Head/SeoHead';
import Intro from 'Components/Intro/Intro';
import type { NextPage } from 'next';

const Home: NextPage = () => {
	const seoInfo: SeoProps = {
		title: 'Gustavo Tonin',
		description: "Gustavo Tonin's Portfolio",
		websiteUrl: 'https://gustavotonin.vercel.app/',
		// TODO - update to custom URL later
	};

	return (
		<>
			<SeoHead
				title={seoInfo.title}
				description={seoInfo.description}
				websiteUrl={seoInfo.websiteUrl}
			/>

			<Intro />
		</>
	);
};

export default Home;
