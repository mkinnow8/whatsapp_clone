import { combineReducers } from "@reduxjs/toolkit";
import userInfoReducer from './UserInfoSlice'
export const RootReducer = combineReducers({
        userInfo:userInfoReducer
    });