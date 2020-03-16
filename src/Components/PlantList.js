import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { PlantCard } from 'Components/PlantCard'
import { PlantFetch, plants } from 'Reducers/plants'
import 'Styling/plantList.css'
import moment from 'moment'

export const PlantSummary = () => {
    const dispatch = useDispatch()

    const Plants = useSelector(state => state.plants.plants)


    useEffect(() => {
        dispatch(PlantFetch())
    }, [])

    return (
        <>
            <h1 className="plant-list-title">Your plants:</h1>
            <div className='plant-list'>
                {Plants.map(plants => (
                    <PlantCard
                        key={plants._id}
                        name={plants.name}
                        location={plants.location}
                        acquiredAt={moment(plants.acquiredAt).format('ll')}
                        waterAt={moment(plants.waterAt).format('ll')}
                        notes={plants.notes}
                    />
                ))}
            </div>
        </>
    )
}
