import React from 'react'
import RoundProgress from '../ui/RoundProgress'
import PersonCard from './PersonCard'
import ListLoadingSkeleton from '../ui/ListLoadingSkeleton'

const PersonList = ({ pageStyle, loading, trending }) => {
    // console.log(trending);
    return(
        // <div className='flex scrollbar-hide flex-row overflow-x-auto p-4 gap-3 bg-gray-300'>
        <div
        className={`${
          pageStyle
            ? 'grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-3 justify-items-center'
            : 'flex flex-row overflow-x-auto snap-x snap-mandatory gap-3 px-2 scrollbar-hide'} p-2 bg-gray-200`}>

            {loading ? <ListLoadingSkeleton /> : (trending.map(person => {
                return(
                    <PersonCard key={person.id} person={person} />
                )
            }))}
        </div>
    )
}

export default PersonList
