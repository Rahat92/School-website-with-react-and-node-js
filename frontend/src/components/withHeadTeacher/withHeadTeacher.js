import React from 'react';
import HeadTeacher from '../HeadTeacher/HeadTeacher';
import './withHeadTeacher.scss';
const withHeadTeacher = (Component) => {
    return () => {
      return (
        <div className='withHeadTeacher'>
          <div className='div1'>
            <div className='div1_div'>
              <Component />
            </div>
          </div>
          <div className='div2'>
            <div className='div2_div'>
              <HeadTeacher />
            </div>
          </div>
        </div>
      );
    }
};

export default withHeadTeacher;