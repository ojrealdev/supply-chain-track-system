import AddItemModal from '@/components/AddItemModal';
import SearchForm from '@/components/SearchForm';
import React, { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Select from 'react-select';
import { getItems } from '@/store/slices/itemSlice';

type OptionType = {
	label: string;
	value: string;
};

const options: OptionType[] = [
	{ value: 'latest', label: 'Latest Events' },
	{ value: 'all', label: 'All Events' },
];

const ItemList: FC = () => {
	const dispatch = useDispatch();
	const [isOpen, setIsOpen] = useState(false);
	const [filter, setFilter] = useState<OptionType | null>(
		options[0] || { value: '', label: '' }
	);

	const items = useSelector((state) => state.items.items);

	const closeModal = () => setIsOpen(false);
	const openModal = () => setIsOpen(true);

	useEffect(() => {
		dispatch(getItems());
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
				{items?.map((item) => (
					<div
						key={item.id}
						className='item mb-4 rounded-lg border-2 border-gray-300 bg-white p-4 text-sm'
					>
						<div className='flex justify-between'>
							<h3 className='mb-1 text-xl font-semibold'>{item.name}</h3>
							<Select
								className='item-filter md:w-1/4'
								defaultValue={options[0]}
								options={options}
								isSearchable={false}
								onChange={setFilter}
							/>
						</div>
						<div className='flex'>
							<div className='mr:20'>
								<p className='mb-1'>
									<strong>Color:</strong> {item.color}
								</p>
								<p>
									<strong>Price:</strong> ${item.price}
								</p>
							</div>
							<div>
								<img
									src='https://sani-ecommerce.s3.amazonaws.com/lightscape-0BhsN70JVA8-unsplash.jpg'
									className='h-16 w-32 ml-10'
								/>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default ItemList;
