import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import withHeadTeacher from '../withHeadTeacher/withHeadTeacher';
import './HomePage.scss';
const HomePage = () => {
    const [ initialData, setInitialData ] = useState()
    useEffect(() => {
        const url = "/school/head";
        
        const fetchData = async () => {
          try {
            const response = await fetch(url);
            const json = await response.json();
            setInitialData(json)
            console.log(json)
          } catch (error) {
            console.log("error", error);
          }
        };
    
        fetchData();
    }, []);
    console.log(initialData)
    return (
        <div className='main'>
            {/* <h2>প্রধান শিক্ষক</h2>
            <div className='image-div'>
                <figure>
                    <img src='https://scontent.fdac149-1.fna.fbcdn.net/v/t1.6435-9/141520567_2787629741453307_4332944798078028503_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=e3f864&_nc_ohc=iAX33-Q_FyMAX9qLzkT&_nc_ht=scontent.fdac149-1.fna&oh=00_AT-Y2RqNB9L3whtZKgr5N2GiPjRClns3tpdZBEJ9yWkOUA&oe=630ACFEF' alt = 'head-teacher' />
                    <figcaption>{initialData?.data.head[0].name}</figcaption>
                </figure>
            </div> */}
            <div className='main_left'>
              <div className='top_news'>
                <div className='more'>
                  <Link to = '/more'>সকল</Link>
                </div>
                <div className='image_space'>
                  <img src='http://www.rangpurzillaschool.edu.bd/images/golden_jubilee.png' />
                </div>
                <div className='news_text'>
                  <h2>বাংলাদেশের সুবর্ন জয়ন্তি</h2>
                  <p className='description'>আজ বাংলাদেশের সুবর্ন জয়ন্তি</p>
                </div>
              </div>
            </div>
        </div>
    );
};

export default withHeadTeacher(HomePage);