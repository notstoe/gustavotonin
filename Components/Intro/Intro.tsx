import Image from 'next/image';
import { s } from './Intro.styles';

import Gustavo from '@assets/Gustavo.svg';
import Tonin from '@assets/Tonin.svg';

export default function Intro() {
	return (
		<s.IntroWrapper>
			<s.IntroInnerContent>
				<s.IntroTextWrapper>
					<h2>
						<s.Text
							target='_blank'
							href='https://www.github.com/notstoe'
							content='Hello.'
							hoverContent='projects'
						/>
					</h2>
					<h2>
						<s.Text
							href='mailto:gstonin95@gmail.com'
							content='I am'
							hoverContent='contact'
						/>
					</h2>
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
						<s.ImageWrapper id='imageWrapper'>
							<svg>
								<defs>
									<filter id='noise'>
										<feTurbulence
											baseFrequency='0.7,0.8'
											seed='0'
											type='fractalNoise'
											result='static'
										>
											<animate
												attributeName='seed'
												values='0;100'
												dur='600ms'
												repeatCount='1'
												begin='imageWrapper.mouseenter'
											/>
										</feTurbulence>
										<feDisplacementMap
											in='SourceGraphic'
											in2='static'
											scale='0'
										>
											<animate
												attributeName='scale'
												values='0;40;0'
												dur='600ms'
												repeatCount='1'
												begin='imageWrapper.mouseenter'
											/>
										</feDisplacementMap>
									</filter>
								</defs>
							</svg>
							<Image
								id='imgNext'
								draggable={false}
								src='https://res.cloudinary.com/dowa8tjdi/image/upload/v1643912840/profile_a9f0xu.jpg'
								layout='fill'
								objectFit='contain'
								priority
								placeholder='blur'
								blurDataURL='https://res.cloudinary.com/dowa8tjdi/image/upload/v1644507520/profileBlurred_pbtjtu.jpg'
							/>
						</s.ImageWrapper>
					</div>
				</s.CirclesWrapper>
			</s.IntroInnerContent>
			<s.Footer>
				<s.FooterLinks
					target='_blank'
					href='https://www.github.com/notstoe'
					textContent='Github'
				>
					<span>Github</span>
				</s.FooterLinks>
				<s.FooterLinks
					target='_blank'
					href='https://www.instagram.com/notstoe/'
					textContent='Instagram'
				>
					<span>Instagram</span>
				</s.FooterLinks>
				<s.FooterLinks
					target='_blank'
					href='https://www.linkedin.com/in/gustavo-s-tonin/'
					textContent='Linkedin'
				>
					<span>Linkedin</span>
				</s.FooterLinks>
			</s.Footer>
		</s.IntroWrapper>
	);
}
