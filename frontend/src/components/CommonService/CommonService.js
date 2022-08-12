import React from 'react';
import './CommonService.scss';
import CommonServiceDiv from '../CommonServiceDiv/CommonServiceDiv';
const CommonService = () => {
    const services = [
        {
            title:'ই সেবা',
            src: '/eseba'
        },
        {
            title:'পিডি এস(সহকারি মাধ্যমিক)',
            src: '/pisi'
        },
        {
            title:'ভর্তি পরিক্ষার আবেদন',
            src: '/admission'
        }
    ]
    const links = [
        {
            title : 'শিক্ষা মন্ত্রনালয়',
            src :'/shikhkha'
        },
        {
            title : 'মাধ্যমিক ও উচ্চশিক্ষা অধিদপ্তর',
            src :'/madhdhomik'
        },
        {
            title : 'ব্যানবেজ',
            src :'/banbase'
        }
    ]
    return (
        <div>
            <CommonServiceDiv headLine= 'অভ্যন্তরিন সেবা' services={services}/>
            <CommonServiceDiv headLine= 'গুরুত্বপূর্ণ লিংক' services={links}/>
        </div>
    );
};

export default CommonService;