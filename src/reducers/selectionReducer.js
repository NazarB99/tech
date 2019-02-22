const initialState = {
    selectedId: null
}

export default function (state = initialState, action) {
    switch (action.type) {
        case 'SELECT_ID':
            return {
                ...state,
                selectedId: action.payload
            }
        default:
            return {
                ...state
            }
    }
}