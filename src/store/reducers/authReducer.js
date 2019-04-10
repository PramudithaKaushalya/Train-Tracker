const initState ={
    user: [
        {name: 'Amal', email: 'amal@gmail.com', password: '123'}
    ]
}

const authReducer = (state = initState, action) => {
    
    switch (action.type) {
        case 'CREATE_USER':
            console.log('create user',action.user)
            return state
        case 'CREATE_USER_ERROR':
            console.log('create user error',action.ERR)
            return state
        case 'LOGIN_SUCCESS': 
            console.log('login success',action.credentials)
            return state
        case 'LOGIN_ERROR': 
            console.log('user login error',action.ERR)
            return state 
        case 'LOGOUT_ERROR': 
            console.log('logout success',action.ERR)
            return state            
        default:
            return state    
    }
}

export default authReducer;