import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../store";
import { useDispatch, } from "react-redux";

export const useAppDispatch = () => useDispatch<AppDispatch>();

export const useAppSelector:TypedUseSelectorHook<RootState> = useSelector