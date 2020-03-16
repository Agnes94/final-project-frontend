import {createSlice} from '@reduxjs/toolkit';


export const plants = createSlice({
    name: 'plants',
    initialState: {
        plants: [],
        plant: ''
    },

    reducers: {
        setPlant: (state, action) => {
            state.plant = action.payload
        },
        setPlants: (state, action) => {
            state.plants = action.payload
        },
        addPlant: (state, action) => {
            state.plants.push(action.payload)
        },
        deletePlant: (state, action) => {
            state.plants = state.plants.filter(plant => plant._id !== action.payload)
        }
    }
})

//THUNK FOR ADDING PLANTS

export const addPlants = (plant) => {
    return dispatch => {
        fetch("http://127.0.0.1:8000/plants", {
            method: 'POST',
            body: `name=${plant.name}&location=${plant.location}&type=${plant.type}&notes=${plant.notes}&acquiredAt=${plant.acquiredAt}&waterAt=${plant.waterAt}`,
            headers: {
                Accept: "application/json",
                'Content-Type': "application/x-www-form-urlencoded"
            }
        })
            .then(res => res.json())
            .then((json) => {
                // Dispatching the form values to the action to add guest
                dispatch(plants.actions.addPlant(json))
            })
    }
}

//THUNK FOR PLANTLIST

export const PlantFetch = () => {
    return dispatch => {
        const accessToken = localStorage.getItem('accessToken')
        fetch(`http://127.0.0.1:8000/plants/`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: accessToken
            }
        })
            .then(res => res.json())
            .then(json => {
                dispatch(plants.actions.setPlants(json))
            })
    }
}

//THUNK MIDDLEWARE FOR UPDATE SPECIFIC PLANT
export const updatePlants = (formData, plant) => {
    return dispatch => {
        fetch(`http://127.0.0.1:8000/plants/${plant._id}`, {
            method: 'PUT',
            body: JSON.stringify(formData),
            headers: {'Content-Type': 'application/json'}
        })
            .then(() => {
                dispatch(plants.actions.updatePlant(plant))

            })
    }
}

//THUNK MIDDLEWARE FOR DELETING SPECIFIC PLANT
export const deletePlants = (plantId) => {
    return dispatch => {
        fetch(`http://127.0.0.1:8000/plants/${plantId}`, {
            method: 'DELETE',
        })
            .then(() => {
                dispatch(plants.actions.deletePlant(plantId))
            })
    }
}
