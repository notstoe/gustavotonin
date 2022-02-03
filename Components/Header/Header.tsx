import { s } from './Header.styles';

export default function Header() {
	return (
		<s.Header>
			<s.NameWrapper>
				<a href='https://github.com/notstoe'>Gustavo Tonin</a>
			</s.NameWrapper>

			<a href='https://github.com/notstoe'>Projects</a>
			{/*
			ABOUT section on version 2.0 of the portfolio
			<s.Separator>|</s.Separator>

			<a href='https://github.com/notstoe'>About</a> */}
			<s.Separator>|</s.Separator>

			<a href='mailto:gstonin95@gmail.com'>Contact</a>
		</s.Header>
	);
}
