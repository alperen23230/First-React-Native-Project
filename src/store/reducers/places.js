import { ADD_PLACE, DELETE_PLACE, SELECT_PLACE, DESELECT_PLACE, CHANGE_NAME } from '../actions/actionTypes'


const initialState = {
    placeName: "",
    places: [],
    selectedPlace: null
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PLACE:
            return {
                ...state,
                places: state.places.concat({
                    key: Math.random(),
                    name: action.placeName,
                    image: { uri: "https://blog.hotelscombined.com/wp-content/uploads/2017/08/Battery-Spencer.jpg?x79158" }
                })
            };
        case DELETE_PLACE:
            return {
                ...state,
                places: state.places.filter(place => {
                    return place.key !== state.selectedPlace.key;
                  }),
                  selectedPlace: null
            };
        case SELECT_PLACE:
            return {
                ...state,
                selectedPlace: state.places.find(place => {
                    return place.key === action.placeKey;
                  })
            };
        case DESELECT_PLACE: 
            return {
                ...state,
                selectedPlace: null
            }; 
        case CHANGE_NAME:
            return {
                ...state,
                placeName: action.placeName
            };       
        default:
            return state;
    }
};

export default reducer;