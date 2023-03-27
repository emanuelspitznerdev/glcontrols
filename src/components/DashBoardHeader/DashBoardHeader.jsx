import React from 'react'
import NuKenzieLogo from '/src/assets/glcontrols.png'
import '/src/components/DashBoardHeader/DashBoardHeader.css'

const DashBoardHeader = () => {
    

    return (
        <header className='header__container'>
            <img src={NuKenzieLogo} alt='NuKenzieLogo' className='header__logo'/>
        </header>
    )
}

export default DashBoardHeader