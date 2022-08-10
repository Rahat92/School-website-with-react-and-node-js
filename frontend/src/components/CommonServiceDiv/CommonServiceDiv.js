import React from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
const CommonServiceDiv = ({headLine,listText,services}) => {
    return (
        <div>
            <h3>{headLine}</h3>
            <table>
                <tr>
                    <td>
                        <ul>
                            {services.map(el =>(
                                <li><FiChevronRight/><Link style={{textDecoration:'none'}} to = '/'>{el}</Link></li>
                            ))}
                        </ul>
                    </td>
                </tr>
            </table>
        </div>
    );
};

export default CommonServiceDiv;