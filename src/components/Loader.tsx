const Loader = () => {
	return (
		<>
			<svg
				className='animate-spin -ml-1 mr-3 h-5 w-5 text-white'
				xmlns='http://www.w3.org/2000/svg'
				fill='none'
				viewBox='0 0 24 24'
			>
				<circle
					className='opacity-25'
					cx='12'
					cy='12'
					r='10'
					stroke='currentColor'
					strokeWidth='4'
				></circle>
				<path
					className='opacity-75'
					fill='currentColor'
					d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647zm11-5.956a4.961 4.961 0 00-2.93 1.122l-2.757-2.758A7.937 7.937 0 0112 4c2.21 0 4.208.898 5.656 2.344l-2.758 2.757zM19 12h4c0-6.627-5.373-12-12-12v4c4.418 0 8 3.582 8 8z'
				></path>
			</svg>
		</>
	);
};

export default Loader;
