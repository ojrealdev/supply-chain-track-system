/* eslint-disable jsx-a11y/alt-text */
import { AppConfig } from '../utils/AppConfig';

const Logo = (props) => {
	const fontStyle = props.xl
		? 'font-semibold text-3xl'
		: 'font-semibold text-xl';

	return (
		<span className={`inline-flex items-center text-white ${fontStyle}`}>
			<img
				src='/assets/images/iota_logo.png'
				className='mr-5'
			/>

			{AppConfig.site_name}
		</span>
	);
};

export { Logo };
