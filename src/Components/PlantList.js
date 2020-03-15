import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {PlantCard} from 'Components/PlantCard'
import {PlantFetch, plants} from 'Reducers/plants'
import {ui} from 'Reducers/ui'
import moment from 'moment'

export const PlantSummary = () => {
    const dispatch = useDispatch()

    const Plants = useSelector(state => state.plants.plants)

    const handleDeletePlant = (plant) => {
        dispatch(plants.actions.setPlant(plant))
        dispatch(ui.actions.setConfirmDelete(true))
    }


    /*  const handleEditPlant = (plant) => {
       dispatch(plants.actions.setPlant(plant))
       dispatch(ui.actions.setConfirmEdit(true))
     } */

    useEffect(() => {
        dispatch(PlantFetch())
    }, [])

    return (
        <div>
            {Plants.map(plants => (
                <PlantCard
                    key={plants._id}
                    name={plants.name}
                    location={plants.location}
                    acquiredAt={moment(plants.acquiredAt).format('ll')}
                    waterAt={moment(plants.waterAt).format('ll')}
                    notes={plants.notes}
                    onClickDelete={() => handleDeletePlant(plants)}
                    /* onClickEdit={() => handleEdit(plants)} */
                />
            ))}
        </div>

    )
}
