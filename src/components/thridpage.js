
import React from 'react'
import '../styles.css/Css.css'
import { Link } from 'react-router-dom'
const Thirdpage = () => {
    return (
        <div className='thrid'>
            <div >
                <Link to="/forthpage"> <button className='one' type="button" >Agriculture Sector</button></Link>
            </div>
            <div >
                <button className='two' type="button" >Animal Husbandry</button>
            </div>
            <div >
                <button className='three' type="button" >Buidings</button>
            </div>
            <div >
                <button className='four' type="button" >Water</button>
            </div>
            <div>
                <Link to="/back">  <button className='five' type="button" >back</button></Link>
            </div>
        </div >
    )
}

export default Thirdpage