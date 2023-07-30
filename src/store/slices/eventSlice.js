import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
	events: [],
	isLoading: true,
};

export const createEvent = createAsyncThunk(
	'events/createEvent',
	async (data, thunkAPI) => {
		const eventData = JSON.stringify(data);
		try {
			const config = {
				method: 'post',
				url: 'http://localhost:3001/api/events',
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
				url: `http://localhost:3001/api/events/${id}`,
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
				url: `http://localhost:3001/api/events/${id}`,
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
			const config = {
				method: 'get',
				url: `http://localhost:3001/api/items`,
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

/* eslint-disable no-param-reassign */

const eventsSlice = createSlice({
	name: 'events',
	initialState,
	extraReducers: {
		[getEvents.pending]: (state) => {
			state.isLoading = true;
		},
		[getEvents.fulfilled]: (state, payload) => {
			state.isLoading = false;
			state.events = payload.payload.data;
		},
		[getEvents.rejected]: (state) => {
			state.isLoading = false;
		},

		[createEvent.pending]: (state) => {
			state.isLoading = true;
		},
		[createEvent.fulfilled]: (state) => {
			state.isLoading = false;
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
