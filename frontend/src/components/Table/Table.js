import React from 'react';
import './Table.scss';
const Table = () => {
    return (
        <div className='section_left'>
                <table cellSpacing= '0px' cellPadding= '10px' border= '1px'>
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
                        <tr>
                            <th>পোস্ট অফিস :</th>
                            <td>রংপুর</td>
                            <th>পোস্ট কোড :</th>
                            <td>৫৪০০</td>
                        </tr> 
                        <tr>
                            <th>পুলিশ স্টেশন :</th>
                            <td>কোতয়ালী</td>
                            <th>উপজেলা :	</th>
                            <td>রংপুর সদর</td>
                        </tr> 
                    </tbody>
                </table>
            </div>
    );
};

export default Table;