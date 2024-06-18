import { createSlice } from "@reduxjs/toolkit";

interface userInfo {
    name: string;
    phoneNumber: string;
    profilePhoto: string;
    countryDigit: countryDigit;
};
interface countryDigit {
    id: number,
    name: string,
    digit: string,
}

interface startState {
    userInfo: userInfo,
    isLoggedIn: boolean
}
const initialState: startState = {
    userInfo: {
        countryDigit:
        {
            id: 1,
            name: 'India',
            digit: '+91'
        },
        name: '',
        phoneNumber: '',
        profilePhoto: '',
    },
    isLoggedIn: false
}

const UserInfoSlice = createSlice({
    name: 'UserInfo',
    initialState,
    reducers: {
        setNameAndImg: (state, action) => {
            state.userInfo.name = action.payload.name;
            state.userInfo.profilePhoto = action.payload.name;
            state.isLoggedIn = true;
        },
        setPhoneNumber: (state, action) => {
            state.userInfo.phoneNumber = action.payload.phoneNumber;
        },
        setCountryDigit: (state, action) => {
            state.userInfo.countryDigit = action.payload.countryDigit;
        },

    }
})

export const { setNameAndImg, setPhoneNumber, setCountryDigit } = UserInfoSlice.actions
export default UserInfoSlice.reducer