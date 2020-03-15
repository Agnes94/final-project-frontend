import React from 'react'
import { ui } from 'Reducers/ui'
import { deletePlants } from 'Reducers/plants'
import { useDispatch, useSelector } from 'react-redux'


export const DeletePlant = () => {
  const dispatch = useDispatch()
  const open = useSelector(state => state.ui.ConfirmDelete)
  const plant = useSelector(state => state.plants.plant)

  const handleYes = () => {
    dispatch(deletePlants(plant))
    dispatch(ui.actions.setConfirmDelete(false))
  }

  const handleNo = () => {
    dispatch(ui.actions.setConfirmDelete(false))
  }

  return (
    <>
      {open && (
        <section>
          <h1>Are you sure you want to delete this plant ?</h1>
          <div>
            <button type='button' title='Yes' onClick={handleYes} />
            <button type='button' title='No' onClick={handleNo} />
          </div>
        </section>
      )}
    </>
  )
}
