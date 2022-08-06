import React, { useState } from 'react';
import './NavigationBar.scss';
import { Link } from 'react-router-dom'
import { HiMenuAlt4, HiX } from 'react-icons/hi';

const NavigationBar = () => {
    
    const [toggle,setToggle] = useState();
    return (
        <nav className='navigationBar'>
            <div className='navigation-item'>
                <ul>
                    <li><Link style={{textDecoration:'none'}} to = '/'>প্রথম পাতা</Link></li>
                    <li><Link style={{textDecoration:'none'}} to = '/about-school'>স্কুল পরিচিতি</Link></li>
                    <li><Link style={{textDecoration:'none'}} to = '/about-school'>শিক্ষক-শিক্ষিকা</Link></li>
                    <li>home</li>
                    <li>home</li>
                </ul>
            </div>
           <div className='navigationBar__div'>
                <div className= 'nav-logo'>
                    <img src = './../../assets/logo192.png' alt='' />
                </div>
                <div className='menu-bar'>
                    {!toggle?<HiMenuAlt4 onClick={()=>setToggle(true)}/>:''}
                </div>
                {toggle?
                    <div className='toggle-space'>
                        <HiX onClick={()=>setToggle(false)} />
                        <ul>
                            {['Home', 'about','gallaries', 'activities'].map(item=>(
                                <li key = {item}><a href = '#'>{item}</a></li>
                            ))} 
                        </ul>
                    </div>:
                    ''
                }
            </div> 
        </nav>
    );
};

export default NavigationBar;