// eslint-disable-next-line import/no-extraneous-dependencies
import { configureStore } from '@reduxjs/toolkit';
import itemsReducer from './slices/itemSlice';

export default configureStore({
	reducer: {
		items: itemsReducer,
	},
});
