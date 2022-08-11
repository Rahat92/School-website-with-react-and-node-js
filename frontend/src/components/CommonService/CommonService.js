import React from 'react';
import './CommonService.scss';
import CommonServiceDiv from '../CommonServiceDiv/CommonServiceDiv';
const CommonService = () => {
    const services = ['ই সেবা','পিডি এস(সহকারি মাধ্যমিক)','ভর্তি পরিক্ষার আবেদন']
    const links = ['শিক্ষা মন্ত্রনালয়','মাধ্যমিক ও উচ্চশিক্ষা অধিদপ্তর','ব্যানবেজ','নায়েম','এনসিটিবি']
    return (
        <div>
            <CommonServiceDiv headLine= 'অভ্যন্তরিন সেবা' services={services}/>
            <CommonServiceDiv headLine= 'অভ্যন্তরিন সেবা' services={links}/>
        </div>
    );
};

export default CommonService;