import React, { FormEvent, useState } from 'react';
import Select from 'react-select';
import { useDispatch, useSelector } from 'react-redux';
import { searchItemByName } from '../store/slices/itemSlice';
import debounce from '../utils/debounce';

type OptionType = {
	label: string;
	value: string;
};

type SearchFormProps = {
	openModal: () => void;
};

const options: OptionType[] = [
	{ value: 'all', label: 'All Items Filter' },
	{ value: 'latest', label: 'Latest Items Filter' },
];

const SearchForm: React.FC<SearchFormProps> = ({ openModal }) => {
	const dispatch = useDispatch();
	const [searchTerm, setSearchTerm] = useState('');
	const [filter, setFilter] = useState<OptionType | null>(
		options[0] || { value: '', label: '' }
	);

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
		console.log('Search Term:', searchTerm);
		console.log('Filter:', filter);
	};

	const handleSearchItem = (searchValue: string) => {
		console.log(`Search value: ${searchValue}`);
		setSearchTerm(searchValue);
		const debouncedSearchItem = debounce((searchValue: string) => {
			setSearchTerm(searchValue);
		}, 400);
		dispatch(searchItemByName(searchValue));
	};

	return (
		<form
			onSubmit={handleSubmit}
			className='container top-0 mb-5 mt-10 flex flex-col items-center justify-center space-y-4 pt-24 md:flex-row md:space-x-4 md:space-y-0'
		>
			<input
				className='h-10 w-full rounded-lg border-2 border-gray-300 bg-white px-5 pr-16 text-sm focus:outline-none md:w-1/2'
				type='search'
				name='search'
				placeholder='Search Item by name...'
				value={searchTerm}
				onChange={(e) => {
					handleSearchItem(e.target.value);
				}}
			/>
			<Select
				className='w-full md:w-1/4'
				defaultValue={options[0]}
				options={options}
				isSearchable={false}
				onChange={setFilter}
			/>
			<button
				type='submit'
				className='flex h-8 w-full items-center justify-center rounded-full bg-custom-blue px-8 text-white hover:bg-blue-600 md:w-auto'
				onClick={openModal}
			>
				+
			</button>
		</form>
	);
};

export default SearchForm;
