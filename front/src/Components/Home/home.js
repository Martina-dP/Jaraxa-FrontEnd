import React from "react";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import { getMedicines } from "../../Action/action";

function Home(){

    const dispatch = useDispatch();

    useEffect(() =>{ 
        dispatch(getMedicines());
    },[dispatch])

    const dataMedecine = useSelector(state => state.medecine);

    let str = [];

    for (let i = 0; i < dataMedecine.length ; i++) {
        str.push(dataMedecine[i]["patient"])
    }
    console.log(str, "str")

    return(
        <div >
            <h1>HOLA MUNDO</h1>
        </div>
    )} 

export default Home;