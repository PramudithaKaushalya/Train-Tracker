const initState ={
    user: [
        {name: 'Udarata Manike', type: 'Express', time: '12.30'}
    ]
}

const sheduleReducer = (state = initState, action) => {
    
    switch (action.type) {
        case 'CREATE_USER':
            console.log('create user',action.user)
            return state
        case 'CREATE_USER_ERROR':
            console.log('create user ERROR',action.ERR)
            return state
        default:
            return state    
    }
}

export default sheduleReducer;