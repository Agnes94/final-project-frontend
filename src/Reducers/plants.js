import { createSlice } from '@reduxjs/toolkit';


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
        },
        editPlant: (state, action) => {
            state.plants = state.plants.map((plant) => {
                if (plant._id === action.payload._id) {
                    return action.payload
                }
                return plant
            })
        }
    }
})

//THUNK FOR ADDING PLANTS

export const addPlants = (plant) => {
    let data = new FormData()
    data.append("name", plant.name)
    data.append("location", plant.location)
    data.append("type", plant.type)
    data.append("notes", plant.notes)
    data.append("acquiredAt", plant.acquiredAt)
    data.append("waterAt", plant.waterAt)
    data.append("image", plant.image)
    return dispatch => {
        fetch("https://plantcare-webapp.herokuapp.com/plants", {
            method: 'POST',
            body: data,
            headers: {
                Accept: "application/json",
            }
        })
            .then(res => res.json())
            .then((json) => {
                dispatch(plants.actions.addPlant(json))
            })
    }
}

//THUNK FOR PLANT LIST

export const PlantFetch = () => {
    return dispatch => {
        const accessToken = localStorage.getItem('accessToken')
        fetch(`https://plantcare-webapp.herokuapp.com/plants/`, {
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

//THUNK FOR EDITING SPECIFIC PLANT

export const editPlants = (formData, plantId) => {
    return dispatch => {
        fetch(`https://plantcare-webapp.herokuapp.com/${plantId}`, {
            method: 'PUT',
            body: JSON.stringify(formData),
            headers: { 'Content-Type': 'application/json' }
        })
            .then((res) => res.json())
            .then((plant) => {
                dispatch(plants.actions.editPlant(plant))
            })
    }
}

//THUNK FOR DELETING SPECIFIC PLANT

export const deletePlants = (plantId) => {
    return dispatch => {
        fetch(`https://plantcare-webapp.herokuapp.com/plants/${plantId}`, {
            method: 'DELETE',
        })
            .then(() => {
                dispatch(plants.actions.deletePlant(plantId))
            })
    }
}
