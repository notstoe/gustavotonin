import Image from 'next/image';
import { s } from './Intro.styles';

import Gustavo from '@assets/Gustavo.svg';
import Tonin from '@assets/Tonin.svg';

export default function Intro() {
	return (
		<s.IntroWrapper>
			<s.IntroInnerContent>
				<s.IntroTextWrapper>
					<span>Hello.</span>
					<span>I am</span>
					<s.Name>
						<s.SvgGus>
							<Gustavo />
						</s.SvgGus>
						<s.SvgTonin>
							<Tonin />
						</s.SvgTonin>
					</s.Name>
				</s.IntroTextWrapper>
				<s.CirclesWrapper>
					<s.GreenBlueCircle />
					<s.RedCircle />
					<div className='circleImageTrim'>
						<div className='imageWrap'>
							<Image
								src='https://res.cloudinary.com/dowa8tjdi/image/upload/v1643912840/profile_a9f0xu.jpg'
								layout='fill'
								objectFit='contain'
							/>
						</div>
					</div>
				</s.CirclesWrapper>
			</s.IntroInnerContent>
			<s.Footer>
				<a href='https://github.com/notstoe'>Github</a>
				<a href='https://www.instagram.com/notstoe/'>Instagram</a>
				<a href='https://www.linkedin.com/in/gustavo-s-tonin/'>Linkedin</a>
			</s.Footer>
		</s.IntroWrapper>
	);
}
