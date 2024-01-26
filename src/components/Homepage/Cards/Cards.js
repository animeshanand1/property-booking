import React from 'react'
import './card.css'
function Cards({ imageUrl, location, totalProperties }) {
    
    return (
        <div className="card">
            <div className="card-details">
                <img src={imageUrl} alt="Property" className="card-image" height='230px' width='230px' />
                <p className="card-location">{location}</p>
                <p className="card-properties">{`${totalProperties} Properties Listed`}</p>
            </div>
        </div>
    )
}


export default Cards