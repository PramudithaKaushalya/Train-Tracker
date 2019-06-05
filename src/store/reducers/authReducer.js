const initState ={
    user: [
        {name: 'Amal', email: 'amal@gmail.com', password: '123'}
    ]
}

const authReducer = (state = initState, action) => {
    
    switch (action.type) {
        case 'REGISTRATION_SUCCESS':
            console.log('create user',action.user)
            return state
        case 'REGISTRATION_ERROR':
            console.log('create user error',action.ERR)
            return state
        case 'CREATE_TRAIN': 
            console.log('Success')
            return state
        case 'CREATE_TRAIN_ERROR': 
            console.log('user login error',action.ERR)
            return state 
        case 'LOGOUT_SUCCESS': 
            console.log('logout success',action.ERR)
            return state   
        case 'LOGOUT_ERROR': 
            console.log('logout error',action.ERR)
            return state              
        default:
            return state    
    }
}

export default authReducer;