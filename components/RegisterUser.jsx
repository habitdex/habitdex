"use client"
import axios from "axios";
import { useEffect } from "react";

// redux dispatch 
import { useDispatch } from "react-redux";
import { setUser } from "@/store/reducers/userSlice";

export default function RegisterUser() {
    const dispatch = useDispatch();
    const registerNewUser = async () => {
        const response = await axios.get("/api/v1/createUser");
        const data = await response.data;
        console.log(data);

        // dispatch the user data to the redux store
        dispatch(setUser(data));
    }
    useEffect(()=>{
        registerNewUser();
    },[])
    return (
        <></>
    )
}