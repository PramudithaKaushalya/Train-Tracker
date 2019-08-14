const initState ={
    authError: null
}

const authReducer = (state = initState, action) => {
    
    switch (action.type) {
        case 'REGISTRATION_SUCCESS':
            console.log('Create User',action.user)
            return{
                ...state,
                authError: null
           }  
        case 'REGISTRATION_ERROR':
            console.log('Create User Error',action.ERR)
            return{
                ...state,
                authError: 'Registration Failed!'
           }  
        case 'LOGIN_SUCCESS': 
            console.log('Log In Success',action.ERR)
            return{
                ...state,
                authError: null
           }     
        case 'LOGIN_ERROR': 
            console.log('Log In Error',action.ERR)
            return{
                 ...state,
                 authError: 'Loging Failed!'
            }       
        case 'CREATE_TRAIN': 
            console.log('Create Train Success')
            return{
                ...state,
                authError: 'Loging Failed!'
           }  
        case 'CREATE_TRAIN_ERROR': 
            console.log('Create Train Error',action.ERR)
            return state 
        case 'LOGOUT_SUCCESS': 
            console.log('Log Out Success',action.ERR)
            return state   
        case 'LOGOUT_ERROR': 
            console.log('Log Out Error',action.ERR)
            return state              
        default:
            return state    
    }
}

export default authReducer;