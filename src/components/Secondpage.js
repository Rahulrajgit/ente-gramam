
import React from 'react'
import '../styles.css/Css.css'
import { Link } from 'react-router-dom'
const Secondpage = () => {
    return (
        <div className='second'>
            <div >

                <Link to="/thridpage">
                    <button className='aaz' type="button" >Project Application</button>
                </Link>
            </div>

            <div >
                <button className='ccz' type="button" >Labour Bank</button>
            </div>

        </div>
    )
}

export default Secondpage;