import React, { useContext } from 'react'
import { giveValue } from '../App';

let Home = () => {
    let value = useContext(giveValue);
    return(
            <>
            <h2>{value}</h2>
            <h2>  home</h2>
        </>
    )
}
export default Home;