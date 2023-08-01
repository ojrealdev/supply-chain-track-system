import { configureStore } from '@reduxjs/toolkit';
import itemsReducer from './slices/itemSlice';
import eventsReducer from './slices/eventSlice';

export default configureStore({
	reducer: {
		items: itemsReducer,
		events: eventsReducer,
	},
});
