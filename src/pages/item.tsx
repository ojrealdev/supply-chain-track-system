import AddItemModal from '@/components/AddItemModal';
import SearchForm from '@/components/SearchForm';
import React, { useEffect, useState } from 'react';

type Item = {
	id: string;
	name: string;
	color: string;
	price: number;
};

const ItemList: React.FC = () => {
	const [items, setItems] = useState<Item[]>([]);
	const [isOpen, setIsOpen] = useState(false);

	const closeModal = () => setIsOpen(false);
	const openModal = () => setIsOpen(true);

	useEffect(() => {
		const fetchedItems: Item[] = [
			{ id: '1', name: 'Item 1', color: 'Red', price: 100 },
			{ id: '2', name: 'Item 2', color: 'Blue', price: 150 },
			{ id: '3', name: 'Item 3', color: 'Black', price: 200 },
			{ id: '4', name: 'Item 4', color: 'Orange', price: 250 },
			{ id: '5', name: 'Item 5', color: 'Orange', price: 250 },
			{ id: '6', name: 'Item 6', color: 'Orange', price: 250 },
			// Add more items...
		];
		setItems(fetchedItems);
	}, []);

	return (
		<div className='max-h-82 container mx-auto overflow-y-auto px-4'>
			<SearchForm openModal={openModal} />
			<AddItemModal
				isOpen={isOpen}
				closeModal={closeModal}
			/>
			<h2 className='mb-4 text-2xl font-bold'>Items</h2>
			{items.map((item) => (
				<div
					key={item.id}
					className='mb-4 rounded-lg border-2 border-gray-300 bg-white p-4 text-sm'
				>
					<h3 className='mb-2 text-xl font-semibold'>{item.name}</h3>
					<p className='mb-2'>
						<strong>Color:</strong> {item.color}
					</p>
					<p>
						<strong>Price:</strong> ${item.price}
					</p>
				</div>
			))}
		</div>
	);
};

export default ItemList;
