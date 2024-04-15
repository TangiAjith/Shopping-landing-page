/* eslint-disable no-unused-vars */
import React from 'react'

const Header = () => {
  return (
    <div className='headerSection'>
        <div className='left'>
            <div className='title'>
                <>Shopping</>
            </div>
        </div>
        <div className='center'>
            <ul>
                <li>Women</li>
                <li>Men</li>
                <li>Kids</li>
                <li>Beauty</li>
            </ul>
        </div>
        <div className='search'>
            <input type='text' placeholder='Search.......' />
        </div>
        <div className='right'>
            <div className='signIn'>
                SignIn/SignUp
            </div>
            <div className='cart'>
                Cart
            </div>
        </div>
    </div>
  )
}

export default Header