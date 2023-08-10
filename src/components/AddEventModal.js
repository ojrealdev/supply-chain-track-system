import React, { FormEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createEvent, getEvents } from '@/store/slices/eventSlice';

const AddEventModal = ({
	isOpenAddEventModal,
	closeAddEventModal,
	currentItemId,
}) => {
	const dispatch = useDispatch();
	const [name, setName] = useState('');
	const [custodian, setCustodian] = useState('');
	const [itemId, setItemId] = useState('');

	const items = useSelector((state) => state.items.items);
	const isCreated = useSelector((state) => state.events.isEventCreated);

	const handleCreateEvent = (e) => {
		e.preventDefault();
		const newEvent = {
			name: name === '' ? null : name,
			custodian: custodian === '' ? null : custodian,
			itemId: itemId === '' ? null : itemId,
		};
		dispatch(createEvent(newEvent));
		console.log(newEvent);
		setTimeout(() => {
			handleClose();
			dispatch(getEvents());
		}, 3000);
	};

	const handleClose = () => {
		closeAddEventModal();
		setName('');
		setCustodian('');
		setItemId(localStorage.getItem('itemId'));
	};

	return (
		<>
			{isOpenAddEventModal && (
				<div
					className='fixed inset-0 z-10 overflow-y-auto'
					aria-labelledby='modal-title'
					role='dialog'
					aria-modal='true'
				>
					<div className='flex min-h-screen items-end justify-center px-4 pb-20 pt-4 text-center sm:block sm:p-0'>
						<div
							// eslint-disable-next-line tailwindcss/migration-from-tailwind-2
							className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity'
							aria-hidden='true'
						></div>
						<span
							className='hidden sm:inline-block sm:h-screen sm:align-middle'
							aria-hidden='true'
						>
							&#8203;
						</span>
						<div className='inline-block transform overflow-hidden rounded-lg bg-white text-left align-bottom shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:align-middle'>
							<div className='bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4'>
								<div className='sm:flex sm:items-start'>
									<form
										onSubmit={handleCreateEvent}
										className='container mt-10 flex flex-col items-center justify-center  space-y-4'
									>
										<input
											className='h-10 w-full rounded-lg border-2 border-gray-300 bg-white px-5 text-sm focus:outline-none'
											type='text'
											name='name'
											placeholder='Name'
											value={name}
											onChange={(e) => setName(e.target.value)}
										/>
										<input
											className='h-10 w-full rounded-lg border-2 border-gray-300 bg-white px-5 text-sm focus:outline-none'
											type='text'
											name='custodian'
											placeholder='Custodian'
											value={custodian}
											onChange={(e) => setCustodian(e.target.value)}
										/>
										<select
											className='h-10 w-full rounded-lg border-2 border-gray-300 bg-white px-5 text-sm focus:outline-none'
											name='itemId'
											value={currentItemId}
											onChange={(e) => setItemId(e.target.value)}
										>
											<option
												value=''
												disabled
												selected
											>
												Select an item
											</option>
											{items.map((item) => (
												<option value={item._id}>{item.name}</option>
											))}
										</select>

										{isCreated ? (
											<div
												className='bottom-6 m-6 bg-green-500 text-white py-2 px-4 rounded-md shadow-lg'
												id='success-toast'
											>
												<p>Success!new event created!</p>
											</div>
										) : (
											<button
												type='submit'
												className='flex h-8 w-full items-center justify-center rounded-full bg-custom-blue px-8 text-white hover:bg-blue-400'
											>
												Add Event
											</button>
										)}
									</form>
								</div>
							</div>
							{!isCreated && (
								<div className='bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6'>
									<button
										type='button'
										className='inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 sm:mt-0 sm:w-auto sm:text-sm'
										onClick={handleClose}
									>
										Close
									</button>
								</div>
							)}
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default AddEventModal;
