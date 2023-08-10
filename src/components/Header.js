import Link from 'next/link';

import { Background } from './Background';
import { Section } from './layout/Section';
import { NavbarTwoColumns } from './navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Header = () => (
	<Background color='bg-custom-blue fixed w-screen top-0 z-10'>
		<Section yPadding='py-6'>
			<NavbarTwoColumns logo={<Logo xl />}>
				<li>
					<Link href='https://www.iota.org'>Get Started</Link>
				</li>
				<li>
					<Link href='/'>Connect</Link>
				</li>
				<li>
					<Link href='/'>Track Item</Link>
				</li>
			</NavbarTwoColumns>
		</Section>
	</Background>
);

export { Header };
