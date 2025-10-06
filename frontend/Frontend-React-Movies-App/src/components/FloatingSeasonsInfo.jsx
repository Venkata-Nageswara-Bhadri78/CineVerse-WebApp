import React from 'react'

const FloatingSeasonsInfo = (data) => {
    console.log(Array.isArray(data));
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-200 bg-opacity-50 z-50">
                {Array.isArray(data) && data.length > 0 ? data.map(season => {
                    return(
                        <div key={season.id} className='p-4'>
                            <SeasonCard season={season}/>
                        </div>
                    )
                }) : ''}
        </div>
    )
}

export default FloatingSeasonsInfo