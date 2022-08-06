import React, { useEffect, useState } from 'react';
import './SlideShow.scss'
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import images from '../image-data';
const SlideShow = () => {
    const [ currentImageIndex, setCurrentImageIndex ] = useState(0)
    const [click, setClick] = useState(false);
    const showNext = () => {
        if(currentImageIndex === images.length-1){
            setCurrentImageIndex(0);
        }
        else{
            setCurrentImageIndex(currentImageIndex+1)
        }
        setClick(prev=>!prev)
    }
    const showPrev = () => {
        if(currentImageIndex === 0){
            setCurrentImageIndex(images.length-1)
        }
        else{
            setCurrentImageIndex(currentImageIndex-1)
        }
        setClick(prev=>!prev)
    }
    const autoScroll = true;
    useEffect(()=>{
        setCurrentImageIndex(0)
    },[])
    let slideInterval;
    const auto = () => {
        slideInterval = setInterval(showNext,4000)
    }
    useEffect(()=>{
        if(autoScroll){
            auto()
        }
        return ()=> clearInterval(slideInterval)
    },[currentImageIndex])
    return (
        <div className='slide_div'>
            <HiChevronLeft className='left' onClick={showPrev}/>
            <HiChevronRight className='right' onClick={showNext}/>
            <div className='slide_space'>
                
                {images.map((item,index)=>(
                    <div className= {currentImageIndex === index?'image current':'image'}>
                        
                        {currentImageIndex === index ?(
                                <>
                                    <img src={item.src} alt = {item.title} />
                                    <div className='detail'>
                                        <p>{item.title}</p>
                                    </div>
                                </>
                        ):''}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SlideShow;