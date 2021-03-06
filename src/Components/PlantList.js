import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { PlantCard } from 'Components/PlantCard'
import { PlantFetch } from 'Reducers/plants'
import 'Styling/plantList.css'
import moment from 'moment'
import { deletePlants, editPlants } from "../Reducers/plants";

export const PlantSummary = () => {
    const Plants = useSelector(state => state.plants.plants)

    const dispatch = useDispatch();
    const handleDeletePlant = (plantId) => {
        dispatch(deletePlants(plantId));
    };

    const handleEditPlants = (formData, plantId) => {
        dispatch(editPlants(formData, plantId))
    }

    useEffect(() => {
        dispatch(PlantFetch())
    }, [])

    return (
        <>
            <h1 className="plant-list-title">Your plants</h1>
            <div className='plant-list'>
                {Plants.map(plants => (
                    <PlantCard
                        key={plants._id}
                        image={plants.image}
                        name={plants.name}
                        location={plants.location}
                        type={plants.type}
                        acquiredAt={moment(plants.acquiredAt).format('ll')}
                        waterAt={moment(plants.waterAt).format('ll')}
                        notes={plants.notes}
                        onClickDelete={() => handleDeletePlant(plants._id)}
                        onClickEdit={() => handleEditPlants(plants._id)}
                    />
                ))}
            </div>
        </>
    )
}
