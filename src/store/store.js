import { configureStore } from '@reduxjs/toolkit';
import itemsReducer from './slices/itemSlice';

export default configureStore({
	reducer: {
		items: itemsReducer,
	},
});
