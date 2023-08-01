import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { baseUrl } from '../../utils/baseUrl';

const initialState = {
	events: [],
	isLoading: true,
	isEventCreated: null,
};

export const createEvent = createAsyncThunk(
	'events/createEvent',
	async (data, thunkAPI) => {
		const eventData = JSON.stringify(data);
		try {
			const config = {
				method: 'post',
				url: `${baseUrl}/api/events`,
				headers: {
					'Content-Type': 'application/json',
				},
				data: eventData,
			};

			const event = await axios(config);
			return event;
		} catch (error) {
			return thunkAPI.rejectWithValue(error.json);
		}
	}
);

export const editEvent = createAsyncThunk(
	'events/editEvent',
	async (data, thunkAPI) => {
		try {
			const selectedProduct = JSON.parse(localStorage.getEvent('event'));
			const { id } = selectedProduct;

			const config = {
				method: 'put',
				url: `${baseUrl}/api/events/${id}`,
				headers: {
					'Content-Type': 'application/json',
					// Authorization: `Bearer ${token}`,
				},
				data,
			};

			const event = await axios(config);
			return event;
		} catch (error) {
			return thunkAPI.rejectWithValue(error.json);
		}
	}
);

export const deleteEvent = createAsyncThunk(
	'events/deleteEvent',
	async (data, thunkAPI) => {
		try {
			const selectedProduct = JSON.parse(localStorage.getEvent('event'));
			const { id } = selectedProduct;

			const config = {
				method: 'delete',
				url: `${baseUrl}/api/events/${id}`,
				headers: {
					'Content-Type': 'application/json',
				},
			};

			const event = await axios(config);
			return event;
		} catch (error) {
			console.log(error);
			return thunkAPI.rejectWithValue(error.json);
		}
	}
);

export const getEvents = createAsyncThunk(
	'events/getEvents',
	async (name, thunkAPI) => {
		try {
			const itemId = localStorage.getItem('itemId');
			console.log('itemId...');
			const config = {
				method: 'get',
				url: `${baseUrl}/api/events/${itemId}`,
				headers: {
					// Authorization: `Bearer ${token}`,
				},
			};

			const events = await axios(config);
			return events;
		} catch (error) {
			return thunkAPI.rejectWithValue(
				'something went wrong while fetching events!'
			);
		}
	}
);

export const getCurrentEvent = createAsyncThunk(
	'events/getCurrentEvent',
	async (name, thunkAPI) => {
		try {
			const itemId = localStorage.getItem('itemId');
			console.log(`itemId:...${itemId}`);
			const config = {
				method: 'get',
				url: `${baseUrl}/api/events/${itemId}/latest`,
				headers: {},
			};

			const events = await axios(config);
			return events;
		} catch (error) {
			return thunkAPI.rejectWithValue(
				'something went wrong while fetching events!'
			);
		}
	}
);

/* eslint-disable no-param-reassign */

const eventsSlice = createSlice({
	name: 'events',
	initialState,
	extraReducers: {
		[getEvents.pending]: (state) => {
			state.isLoading = true;
			state.isEventCreated = null;
		},
		[getEvents.fulfilled]: (state, payload) => {
			state.isLoading = false;
			state.events = payload.payload.data;
		},
		[getEvents.rejected]: (state) => {
			state.isLoading = false;
		},

		[getCurrentEvent.pending]: (state) => {
			state.isLoading = true;
			state.isEventCreated = null;
		},
		[getCurrentEvent.fulfilled]: (state, payload) => {
			state.isLoading = false;
			state.events = payload.payload.data;
		},
		[getCurrentEvent.rejected]: (state) => {
			state.isLoading = false;
		},

		[createEvent.pending]: (state) => {
			state.isLoading = true;
		},
		[createEvent.fulfilled]: (state) => {
			state.isLoading = false;
			state.isEventCreated = true;
		},
		[createEvent.rejected]: (state) => {
			state.isLoading = false;
		},

		[editEvent.pending]: (state) => {
			state.isLoading = true;
		},
		[editEvent.fulfilled]: (state) => {
			state.isLoading = false;
		},
		[editEvent.rejected]: (state) => {
			state.isLoading = false;
		},

		[deleteEvent.pending]: (state) => {
			state.isLoading = true;
		},
		[deleteEvent.fulfilled]: (state) => {
			state.isLoading = false;
		},
		[deleteEvent.rejected]: (state) => {
			state.isLoading = false;
		},
	},
});

export default eventsSlice.reducer;
