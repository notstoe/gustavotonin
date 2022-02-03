import Intro from 'Components/Intro/Intro';
import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>Gustavo Tonin</title>
				<meta name='description' content="Gustavo Tonin's Portfolio" />
				<meta name='og:description' content="Gustavo Tonin's Portfolio" />
			</Head>

			<Intro />
		</>
	);
};

export default Home;
