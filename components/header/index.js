import Link from 'next/link'

import styled from "styled-components";

export default function Header() {
  const LangMenu = styled.div`
    font-size: 3rem;
    margin: 10px;
    a {
      margin: 0 3px;
    }
  `;

	return (
		<header>
			<LangMenu>
				<Link href="/" locale="fr">
					<a>🇫🇷</a>
				</Link>
				<Link href="/" locale="en">
					<a>🇬🇧</a>
				</Link>
			</LangMenu>
		</header>
	)
}