import Link from 'next/link'
import { useRouter } from "next/router";

export default function Header() {
	const { locale } = useRouter();

	return (
		<header>
			<div className="langMenu">
				<Link href="/" locale="fr" activeClassName={locale === "fr"}>
					<a>FR</a>
				</Link>
				<Link href="/" locale="en" activeClassName={locale === "en"}>
					<a>EN</a>
				</Link>
			</div>
		</header>
	)
}