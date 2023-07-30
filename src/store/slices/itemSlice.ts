// eslint-disable-next-line import/no-extraneous-dependencies
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// eslint-disable-next-line import/no-extraneous-dependencies
import axios from 'axios';

const initialState = {
	items: [],
	isLoading: true,
};

export const createItem = createAsyncThunk(
	'items/createItem',
	async (data, thunkAPI) => {
		const itemData = JSON.stringify(data);
		try {
			const config = {
				method: 'post',
				url: 'localhost:3001/api/items',
				headers: {
					'Content-Type': 'application/json',
				},
				data: itemData,
			};

			const item = await axios(config);
			return item;
		} catch (error) {
			return thunkAPI.rejectWithValue(error.json);
		}
	}
);

export const editItem = createAsyncThunk(
	'items/editItem',
	async (data, thunkAPI) => {
		try {
			const selectedProduct = JSON.parse(localStorage.getItem('item'));
			const { id } = selectedProduct;

			const config = {
				method: 'put',
				url: `${'baseUrl'}/api/items/${id}`,
				headers: {
					'Content-Type': 'application/json',
				},
				data,
			};

			const item = await axios(config);
			return item;
		} catch (error) {
			return thunkAPI.rejectWithValue(error.json);
		}
	}
);

export const deleteItem = createAsyncThunk(
	'items/deleteItem',
	async (data, thunkAPI) => {
		try {
			const selectedProduct = JSON.parse(localStorage.getItem('item'));
			const { id } = selectedProduct;

			const config = {
				method: 'delete',
				url: `${'baseUrl'}/api/items/${id}`,
				headers: {
					'Content-Type': 'application/json',
				},
			};

			const item = await axios(config);
			return item;
		} catch (error) {
			console.log(error);
			return thunkAPI.rejectWithValue(error.json);
		}
	}
);

export const getItems = createAsyncThunk(
	'items/getItems',
	async (name, thunkAPI) => {
		try {
			const config = {
				method: 'get',
				url: `${'baseUrl'}/api/items`,
				headers: {},
			};

			const items = await axios(config);
			return items;
		} catch (error) {
			return thunkAPI.rejectWithValue(
				'something went wrong while fetching items!'
			);
		}
	}
);

/* eslint-disable no-param-reassign */

const itemsSlice = createSlice({
	name: 'items',
	initialState,
	extraReducers: {
		[getItems.pending]: (state) => {
			state.isLoading = true;
		},
		[getItems.fulfilled]: (state, payload) => {
			state.isLoading = false;
			state.items = payload.payload.data;
		},
		[getItems.rejected]: (state) => {
			state.isLoading = false;
		},

		[createItem.pending]: (state) => {
			state.isLoading = true;
		},
		[createItem.fulfilled]: (state) => {
			state.isLoading = false;
		},
		[createItem.rejected]: (state) => {
			state.isLoading = false;
		},

		[editItem.pending]: (state) => {
			state.isLoading = true;
		},
		[editItem.fulfilled]: (state) => {
			state.isLoading = false;
		},
		[editItem.rejected]: (state) => {
			state.isLoading = false;
		},

		[deleteItem.pending]: (state) => {
			state.isLoading = true;
		},
		[deleteItem.fulfilled]: (state) => {
			state.isLoading = false;
		},
		[deleteItem.rejected]: (state) => {
			state.isLoading = false;
		},
	},
});

export default itemsSlice.reducer;
