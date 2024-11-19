import React from 'react'
import newtodaybgimg from "../../Images/newtodaybgimg.jpeg"

function Newtodaybgimg() {
    return (
        <>
            <div
                className="h-screen bg-cover bg-center rounded"
                style={{
                    backgroundImage: `url(${newtodaybgimg})`,
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

export default Newtodaybgimg