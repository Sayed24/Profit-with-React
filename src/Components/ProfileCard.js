import React from 'react';

function ProfileCard({ image, name, title, description }) {
    return (
        <div style={{ border: '2px solid black', borderRadius: '8px', margin: '10px', padding: '10px' }}>
            <div style={{ display: 'flex' }}>
                <img src={image} height='100px' />
                <div>
                    <h2 style={{ marginLeft: '10px' }}>{name}</h2>
                    <h6 style={{ marginLeft: '10px' }}>{title}</h6>
                </div>
            </div>
            <div>
                <p>{description}</p>
            </div>

        </div>
    )
}

export default ProfileCard
