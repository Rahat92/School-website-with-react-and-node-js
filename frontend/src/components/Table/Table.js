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
                            <th>স্কুলের নামঃ </th>
                            <td colSpan='3'>সাহ ইসাব উদ্দিন সরকারি প্রাথমিক বিদ্যালয়</td>
                        </tr> 
                        <tr>
                            <th>স্কুলের নামঃ </th>
                            <td colSpan='3'>সাহ ইসাব উদ্দিন সরকারি প্রাথমিক বিদ্যালয়</td>
                        </tr> 
                        <tr>
                            <th>গ্রাম/বাড়ী ও সড়কের বিবরণ :</th>
                            <td colSpan='3'>প্রধান সড়ক, কাচারী বাজার</td>
                        </tr> 
                        <tr>
                            <th>ওয়ার্ড নম্বর :</th>
                            <td>১৯</td>
                            <th>ইউনিয়ন/পৌরসভা/সিটি কর্পোরেশন :</th>
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
                        <tr>
                            <th>জেলা :</th>
                            <td>রংপুর</td>
                            <th>বিভাগ:</th>
                            <td>রংপুর</td>
                        </tr> 
                        <tr>
                            <th>টেলিফোন:</th>
                            <td>০১২৩৪৫</td>
                            <th>E-Mail:</th>
                            <td>khrahat92@gmail.com</td>
                        </tr> 
                        <tr>
                            <th>Website:</th>
                            <td>www.rahat's website</td>
                            <th>শিক্ষার্থীর সংখ্যা:</th>
                            <td>২০০</td>
                        </tr> 
                        <tr>
                            <th>মোট জমির পরিমান (একর) :</th>
                            <td>5.66</td>
                            <th>ভবন সংখ্যা :</th>
                            <td>2</td>
                        </tr> 
                        <tr>
                            <th>মোট শ্রেণিকক্ষ সংখ্যা :	</th>
                            <td>5</td>
                            <th>মাল্টিমিডিয়া শ্রেণিকক্ষ সংখ্যা :</th>
                            <td>2</td>
                        </tr> 
                        <tr>
                            <th>আইসিটি ল্যাব সংখ্যা :</th>
                            <td>1</td>
                            <th>বিজ্ঞানাগার এর জন্য কক্ষ সংখ্যা :</th>
                            <td>1</td>
                        </tr> 
                    </tbody>
                </table>
            </div>
    );
};

export default Table;