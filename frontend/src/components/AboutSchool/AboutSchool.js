import React from 'react';
import Table from '../Table/Table';
import './AboutSchool.scss';
import withHeadTeacher from '../withHeadTeacher/withHeadTeacher';
const AboutSchool = () => {
    return (
        <>
            <Table />
        </>
    );
};

export default withHeadTeacher(AboutSchool)