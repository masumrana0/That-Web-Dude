import React from 'react';
import './HomeSwoperCard.css';

const HomeSwiperCard = ({data}) => {
    const {id,name,company_name,position,photo}=data
    console.log(data)
    return (
        <div className='swiper-container' >
            {/* <img src={photo} alt={'successfull Student'}/>
            <h2>{name}</h2>
             <div>
                <p>{position}</p>
                <p>{company_name}</p>
             </div> */}
        </div>
        
    );
};

export default HomeSwiperCard;