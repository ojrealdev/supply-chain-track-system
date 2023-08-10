import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

const ListEventsModal = (props) => {
	const { isOpenEventsModal, closeEventsModal } = props;

	const events = useSelector((state) => state.events.events);

	// const eventsList = useSelector((state) => state);

	useEffect(() => {}, []);

	return (
		<div className=''>
			{isOpenEventsModal && (
				<div className='overflow-y-auto'>
					<div
						className='fixed inset-0 z-10 overflow-y-auto'
						aria-labelledby='modal-title'
						role='dialog'
						aria-modal='true'
					>
						<div className='flex min-h-screen items-end justify-center px-2 text-center sm:block sm:p-0'>
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
								<div className='container max-h-screen overflow-y-auto'>
									<div className='bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4'>
										{events.length > 0 ? (
											events.map((event) => (
												<div className='sm:flex sm:items-start'>
													<div className='mr:20'>
														<span className='inline-block bg-custom-blue text-white text-xs px-2 mt-5 rounded-full uppercase font-semibold tracking-wide mb-3'>
															Step: {event.name}
														</span>
														<p>
															<strong>Custodian:</strong> {event.custodian}
														</p>
														<p className='mb-1'>
															<strong>Status:</strong>{' '}
															<span className='inline-block bg-green-600 text-white text-xs px-2 rounded-full uppercase font-semibold tracking-wide'>
																{event.status}
															</span>
														</p>
														<p className=''>
															<strong>Created At:</strong> {event.createdAt}
														</p>
													</div>
												</div>
											))
										) : (
											<div className='bottom-6 m-1 bg-white text-red-500 py-2 px-4 rounded-md shadow-lg'>
												<p>Sorry! no event created for this item yet.</p>
											</div>
										)}
									</div>
									<hr className='bg-black w-full' />
								</div>
								<div className='bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6'>
									<button
										type='button'
										className='inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 sm:mt-0 sm:w-auto sm:text-sm'
										onClick={closeEventsModal}
									>
										Close
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default ListEventsModal;
