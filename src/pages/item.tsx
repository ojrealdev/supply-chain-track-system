import SearchForm from '@/components/SearchForm';
import React, { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Select from 'react-select';
import AddItemModal from '@/components/AddItemModal';
import AddEventModal from '@/components/AddEventModal';
import { getItems } from '../store/slices/itemSlice';
import { getCurrentEvent, getEvents } from '../store/slices/eventSlice';
import ListEventsModal from '@/components/ListItemEventsModal';

type OptionType = {
	label: string;
	value: string;
};

const options: OptionType[] = [
	{ value: 'latest', label: 'Current Event' },
	{ value: 'all', label: 'All Events' },
	{ value: 'add', label: 'Create Event' },
];

const ItemList: FC = () => {
	const dispatch = useDispatch();
	const [isOpenItemFormModal, setIsOpenItemFormModal] = useState(false);
	const [isOpenAddEventModal, setIsOpenAddEventModal] = useState(false);
	const [isOpenEventsModal, setIsOpenEventsModal] = useState(false);
	const [itemId, setItemId] = useState('');

	const items = useSelector((state: any) => state.items.items);

	const closeModal = () => setIsOpenItemFormModal(false);
	const closeAddEventModal = () => setIsOpenAddEventModal(false);
	const openModal = () => setIsOpenItemFormModal(true);
	const closeEventsModal = () => setIsOpenEventsModal(false);

	const handleFilterEvents = (value: string, itemId: string) => {
		localStorage.setItem('itemId', itemId);
		setItemId(itemId);
		console.log(value + ': ' + itemId);
		if (value === 'latest') {
			dispatch(getCurrentEvent());
			setIsOpenEventsModal(true);
		}
		if (value === 'all') {
			dispatch(getEvents());
			setIsOpenEventsModal(true);
		}
		if (value === 'add') {
			setIsOpenAddEventModal(true);
		}
	};

	useEffect(() => {
		dispatch(getItems());
	}, []);

	return (
		<div className='container sticky mx-auto px-4'>
			<SearchForm openModal={openModal} />
			<AddItemModal
				isOpenItemFormModal={isOpenItemFormModal}
				closeModal={closeModal}
			/>
			<AddEventModal
				isOpenAddEventModal={isOpenAddEventModal}
				closeAddEventModal={closeAddEventModal}
				currentItemId={itemId}
			/>
			<ListEventsModal
				isOpenEventsModal={isOpenEventsModal}
				closeEventsModal={closeEventsModal}
			/>
			<h2 className='mb-4 text-2xl font-bold'>Items</h2>
			<div className='max-h-screen overflow-y-auto'>
				{items?.map((item: any) => (
					<div
						key={item._id}
						className='item mb-4 rounded-lg border-2 border-gray-300 bg-white p-4 text-sm'
					>
						<div className='flex justify-between'>
							<h3 className='mb-1 text-xl font-semibold'>{item.name}</h3>
							<Select
								className='item-filter md:w-1/4'
								defaultValue={options[0]}
								options={options}
								isSearchable={false}
								onChange={(searchTerm) => {
									if (searchTerm)
										handleFilterEvents(searchTerm.value, item._id);
								}}
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
								<p className='mb-1'>
									<strong>Event:</strong> {'customer'.slice(0, 6) + '...'}
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
