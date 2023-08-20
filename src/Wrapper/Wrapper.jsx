import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router";
import Header from "../components/Header";

const Wrapper = ()=>{
    

    return ( 
            <>
                <Header />
                <Outlet />
            </>
        )
}

export default Wrapper;