import { s } from './Header.styles';

export default function Header() {
	return (
		<s.Header>
			<s.NameWrapper textContent='Gustavo Tonin'>
				<a target='_blank' href='https://github.com/notstoe'>
					<span>Gustavo Tonin</span>
				</a>
			</s.NameWrapper>

			<s.HeaderLinks
				target='_blank'
				href='https://github.com/notstoe'
				textContent='Projects'
			>
				<span>Projects</span>
			</s.HeaderLinks>
			{/*
			// TODO - ABOUT section on version 2.0 of the portfolio
			<s.Separator>|</s.Separator>

			<a href='https://github.com/notstoe'>About</a> */}
			<s.Separator>|</s.Separator>

			<s.HeaderLinks textContent='Contact' href='mailto:gstonin95@gmail.com'>
				<span>Contact</span>
			</s.HeaderLinks>
		</s.Header>
	);
}
