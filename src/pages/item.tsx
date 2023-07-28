import AddItemModal from '@/components/AddItemModal';
import SearchForm from '@/components/SearchForm';
import React, { useEffect, useState } from 'react';
import Select from 'react-select';

type OptionType = {
	label: string;
	value: string;
};

const options: OptionType[] = [
	{ value: 'latest', label: 'Latest Event' },
	{ value: 'all', label: 'All Events' },
];

type Item = {
	id: string;
	name: string;
	color: string;
	price: number;
};

const ItemList: React.FC = () => {
	const [items, setItems] = useState<Item[]>([]);
	const [isOpen, setIsOpen] = useState(false);
	const [filter, setFilter] = useState<OptionType | null>(
		options[0] || { value: '', label: '' }
	);

	const closeModal = () => setIsOpen(false);
	const openModal = () => setIsOpen(true);

	useEffect(() => {
		const fetchedItems: Item[] = [
			{ id: '1', name: 'Item 1', color: 'Red', price: 100 },
			{ id: '2', name: 'Item 2', color: 'Blue', price: 150 },
			{ id: '3', name: 'Item 3', color: 'Black', price: 200 },
			{ id: '4', name: 'Item 4', color: 'Orange', price: 250 },
			{ id: '5', name: 'Item 5', color: 'Teal', price: 250 },
			{ id: '6', name: 'Item 6', color: 'Yellow', price: 250 },
			{ id: '7', name: 'Item 7', color: 'Green', price: 250 },
			{ id: '8', name: 'Item 8', color: 'White', price: 250 },
			{ id: '9', name: 'Item 9', color: 'Grey', price: 250 },
		];
		setItems(fetchedItems);
	}, []);

	return (
		<div className='container sticky mx-auto px-4'>
			<SearchForm openModal={openModal} />
			<AddItemModal
				isOpen={isOpen}
				closeModal={closeModal}
			/>
			<h2 className='mb-4 text-2xl font-bold'>Items</h2>
			<div className='max-h-screen overflow-y-auto'>
				{items.map((item) => (
					<div
						key={item.id}
						className='item mb-4 rounded-lg border-2 border-gray-300 bg-white p-4 text-sm'
					>
						<div className='flex justify-between'>
							<h3 className='mb-2 text-xl font-semibold'>{item.name}</h3>
							<Select
								className='item-filter md:w-1/4'
								defaultValue={options[0]}
								options={options}
								isSearchable={false}
								onChange={setFilter}
							/>
						</div>
						<p className='mb-2'>
							<strong>Color:</strong> {item.color}
						</p>
						<p>
							<strong>Price:</strong> ${item.price}
						</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default ItemList;
