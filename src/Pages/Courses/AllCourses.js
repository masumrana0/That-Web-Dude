import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import './AllCourses.css';
import CourseCard from './CourseCard';

const AllCourses = () => {
    const datas=useLoaderData();
    console.log(datas)
    return (
        <div className='all-courses-cotainer'>
            <div className='course-navigation'>
                <Link className='all-courses-link'>All Courses</Link>
                {
                    datas.map((data,index)=><Link key={index} className='all-courses-link'>{data.name}</Link>)
                }
            </div>
            <div className='all-courses-card'>
                {
                    datas.map(data=><CourseCard key={data.id} data={data}/>)
                }
            </div>
        </div>
    );
};

export default AllCourses;