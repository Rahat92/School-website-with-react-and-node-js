import React from 'react';
import HeadTeacher from '../HeadTeacher/HeadTeacher';
import './withHeadTeacher.scss';
const withHeadTeacher = (Component) => {
    return () => {
      return (
        <div className='withHeadTeacher'>
          <Component />
          <HeadTeacher />
        </div>
      );
    }
};

export default withHeadTeacher;