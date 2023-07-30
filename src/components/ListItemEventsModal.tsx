import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentEvent, getEvents } from '@/store/slices/eventSlice';

type ListItemEventsModalProps = {
	isOpenEventsModal: boolean;
	closeEventsModal: () => void;
};

const ListEventsModal: React.FC<ListItemEventsModalProps> = (props) => {
	const { isOpenEventsModal, closeEventsModal } = props;
	const dispatch = useDispatch();

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
										<div className='sm:flex sm:items-start'>
											<div className='mr:20'>
												<span className='inline-block bg-custom-blue text-white text-xs px-2 rounded-full uppercase font-semibold tracking-wide mb-3'>
													Step 1: Initiated
												</span>
												<p>
													<strong>Custodian:</strong> ${'item.price item.price'}
												</p>
												<p className='mb-1'>
													<strong>Status:</strong>{' '}
													<span className='inline-block bg-green-600 text-white text-xs px-2 rounded-full uppercase font-semibold tracking-wide'>
														Complete
													</span>
												</p>
												<p className='mb-1'>
													<strong>Created At:</strong>{' '}
													{'customer'.slice(0, 6) + '...'}
												</p>
											</div>
										</div>
									</div>
									<hr className='bg-black w-full' />
									<div className='bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4 '>
										<span className='inline-block bg-custom-blue text-white text-xs px-2 rounded-full uppercase font-semibold tracking-wide mb-3'>
											Step 2: Processing
										</span>
										<div className='sm:flex sm:items-start'>
											<div className='mr:20'>
												<p className='mb-1'>
													<strong>Custodian:</strong> {'item.color item.color'}
												</p>
												<p className='mb-1'>
													<strong>Status:</strong>{' '}
													<span className='inline-block bg-blue-600 text-white text-xs px-2 rounded-full uppercase font-semibold tracking-wide'>
														Progress
													</span>
												</p>
												<p className='mb-1'>
													<strong>Created At:</strong>{' '}
													{'customer'.slice(0, 6) + '...'}
												</p>
											</div>
										</div>
									</div>
									<hr className='bg-black w-full' />

									<div className='bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4 '>
										<span className='inline-block bg-custom-blue text-white text-xs px-2 rounded-full uppercase font-semibold tracking-wide mb-3'>
											Step 3: Delivered
										</span>
										<div className='sm:flex sm:items-start'>
											<div className='mr:20'>
												<p className='mb-1'>
													<strong>Custodian:</strong> {'item.color'}
												</p>
												<p className='mb-1'>
													<strong>Status:</strong>{' '}
													<span className='inline-block bg-red-600 text-white text-xs px-2 rounded-full uppercase font-semibold tracking-wide'>
														Waiting
													</span>
												</p>
												<p className='mb-1'>
													<strong>Created At:</strong>{' '}
													{'customer'.slice(0, 6) + '...'}
												</p>
											</div>
										</div>
									</div>
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
