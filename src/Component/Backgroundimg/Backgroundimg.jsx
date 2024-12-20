import React from 'react'
import bgimage from "../../Images/meancar.jpeg"

function Backgroundimg() {
    return (
        <>
            <div
                className="h-screen bg-cover bg-center rounded-md "
                style={{
                    backgroundImage: `url(${bgimage})`,
                    backgroundSize: 'cover',  // Ensures the image covers the container
                    backgroundPosition: 'center',  // Centers the image
                    backgroundRepeat: 'no-repeat' // Prevents the image from repeating
                }}
            >
                {/* You can add overlay or content here if needed */}
            </div>
        </>
    )
}

export default Backgroundimg