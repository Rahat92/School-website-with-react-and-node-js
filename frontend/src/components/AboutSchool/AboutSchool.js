import React from 'react';
import './AboutSchool.scss';
const AboutSchool = () => {
    return (
        <div className='about_section'>
            <div className='section_left'>
                <table border= '2px'>
                    <thead style={{background:'violet'}}>
                        <tr>
                            <th colSpan= '4' style= {{textAlign:'center'}}> এক নজরে বিদ্যালয়ের পরিচিতি </th>
                        </tr> 
                    </thead>
                    <tbody>
                        <tr>
                            <td> স্কুলের নামঃ </td>
                            <td colSpan='3'>সাহ ইসাব উদ্দিন সরকারি প্রাথমিক বিদ্যালয়</td>
                        </tr> 
                        <tr>
                            <td> স্কুলের নামঃ </td>
                            <td colSpan='3'>সাহ ইসাব উদ্দিন সরকারি প্রাথমিক বিদ্যালয়</td>
                        </tr> 
                        <tr>
                            <td>গ্রাম/বাড়ী ও সড়কের বিবরণ :</td>
                            <td colSpan='3'>প্রধান সড়ক, কাচারী বাজার</td>
                        </tr> 
                        <tr>
                            <td>ওয়ার্ড নম্বর :</td>
                            <td>১৯</td>
                            <td>ইউনিয়ন/পৌরসভা/সিটি কর্পোরেশন :</td>
                            <td>সিটি করপোরেশন</td>
                        </tr> 
                    </tbody>
                </table>
            </div>
            <div className='section_right'>
                right side
            </div>
        </div>
    );
};

export default AboutSchool;