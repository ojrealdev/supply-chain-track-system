import React, { FormEvent, useState, useEffect } from 'react';
import validateItem from '../utils/JsonValidator';

type AddItemModalProps = {
	isOpen: boolean;
	closeModal: () => void;
};

const AddItemModal: React.FC<AddItemModalProps> = ({ isOpen, closeModal }) => {
	const [name, setName] = useState('');
	const [color, setColor] = useState('');
	const [price, setPrice] = useState('');

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
		console.log(color, name, price);

		const newItem = {
			name: name === '' ? null : name,
			color: color === '' ? null : color,
			price: price === '' ? null : price,
		};
		validateItem(newItem);
		console.log(newItem);
	};

	const handleClose = () => {
		closeModal();
		setName('');
		setColor('');
		setPrice('');
	};

	useEffect(() => {
		console.log(validateItem({ name: 'iphone' }));
	}, []);

	return (
		<>
			{isOpen && (
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
										onSubmit={handleSubmit}
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
											name='color'
											placeholder='Color'
											value={color}
											onChange={(e) => setColor(e.target.value)}
										/>
										<input
											className='h-10 w-full rounded-lg border-2 border-gray-300 bg-white px-5 text-sm focus:outline-none'
											type='number'
											name='price'
											placeholder='Price'
											value={price}
											onChange={(e) => setPrice(e.target.value)}
										/>
										<button
											type='submit'
											className='flex h-8 w-full items-center justify-center rounded-full bg-custom-blue px-8 text-white hover:bg-blue-400'
										>
											Add Item
										</button>
									</form>
								</div>
							</div>
							<div className='bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6'>
								<button
									type='button'
									className='inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 sm:mt-0 sm:w-auto sm:text-sm'
									onClick={handleClose}
								>
									Close
								</button>
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default AddItemModal;
