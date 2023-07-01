import { userEmptyState } from '../../models'
import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name: 'user',
    initialState: userEmptyState,
    reducers: {
        createUser: (state, action) => {
            return action.payload
        },
        modifyUser: (state, action) => {
            const formattedData = { ...state, ...action.payload}
        },
        resetUser: (state, action) => {
            return userEmptyState
        }
    }
})

export const { createUser, modifyUser, resetUser } = userSlice.actions;

export default userSlice.reducer