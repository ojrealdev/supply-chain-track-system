import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';
import AddItemForm from './AddItemModal';
import { Footer } from './Footer';
import { Header } from './Header';
import ItemList from './ListItems';
import SearchForm from './SearchForm';

const Base = () => (
	<div className='text-gray-600 antialiased'>
		<Meta
			title={AppConfig.title}
			description={AppConfig.description}
		/>
		<Header />
		<SearchForm />
		<AddItemForm />
		<ItemList />
		<Footer />
	</div>
);

export { Base };
