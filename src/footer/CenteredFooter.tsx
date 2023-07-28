import type { ReactNode } from 'react';

import { FooterCopyright } from './FooterCopyright';
import { FooterIconList } from './FooterIconList';

type ICenteredFooterProps = {
	iconList: ReactNode;
};

const CenteredFooter = (props: ICenteredFooterProps) => (
	<div className='text-center'>
		<div className='mt-8 flex justify-center'>
			<FooterIconList>{props.iconList}</FooterIconList>
		</div>

		<div className='mt-8 text-sm'>
			<FooterCopyright />
		</div>

		<style jsx>
			{`
				.navbar :global(li) {
					@apply mx-4;
				}
			`}
		</style>
	</div>
);

export { CenteredFooter };
