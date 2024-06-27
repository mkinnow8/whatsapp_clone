import { combineReducers } from "@reduxjs/toolkit";
import userInfoReducer from './UserInfoSlice'
import statusReducer from './StatusSlice'
export const RootReducer = combineReducers({
        userInfo:userInfoReducer,
        status:statusReducer
    });