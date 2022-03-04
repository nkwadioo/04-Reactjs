import React from 'react'


export default function Card(props) {
    return  (
    <div className="card">
        {/* <div className="image"> */}
            <img src={`/images/${props.imageUrl}`} alt="logo" />
        {/* </div> */}
        <div className="content">
            <div className='location'>
                <img src="/images/Fill 220.png" alt="" />
                <span className="country">{props.location}</span>
                <a href={props.googleMapsUrl} target="_blank"  rel="noreferrer">View on Google Maps</a>
            </div>
            <h2>{props.title}</h2>
            <b>{props.startDate} - {props.endDate}</b>
            <p>{props.description}</p>
        </div>
    </div>
)}