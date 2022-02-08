import SeoHead, { SeoProps } from 'Components/Head/SeoHead';
import Intro from 'Components/Intro/Intro';
import type { NextPage } from 'next';

const Home: NextPage = () => {
	const seoInfo: SeoProps = {
		title: 'Gustavo Tonin | Portfolio',
		description:
			"Showcase of Gustavo's Tonin work and personal info | React Developer",
		imageUrl:
			'https://res.cloudinary.com/dowa8tjdi/image/upload/v1644351028/homepagePic_aitwuo.jpg',
		websiteUrl: 'https://gustavotonin.vercel.app/',
		// TODO - update to custom URL later
	};

	return (
		<>
			<SeoHead
				title={seoInfo.title}
				description={seoInfo.description}
				imageUrl={seoInfo.imageUrl}
				websiteUrl={seoInfo.websiteUrl}
			/>

			<Intro />
		</>
	);
};

export default Home;
