import React from 'react'
import RoundProgress from '../ui/RoundProgress'
import PersonCard from './PersonCard'

const PersonList = ({ trending }) => {
    // console.log(trending);
    return(
        <div className='flex flex-row overflow-x-auto p-4 gap-3 bg-gray-300'>
            {trending.map(person => {
                return(
                    <PersonCard key={person.id} person={person} />
                )
            })}
        </div>
    )
}

export default PersonList
