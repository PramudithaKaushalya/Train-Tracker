const initState = {
    messages:[
        {id:'1',title:'Train Strike',content:'Train strike is due to happen today'},
        {id:'2',title:'Train Delay',content:'Train strike is due to happen today'},
        {id:'3',title:'Train Accident',content:'Train strike is due to happen today'}
    ]
}


const messageReducer = (state = initState,action) => {
    switch (action.type) {
        case 'CREATE_MESSAGE':
            console.log('created message',action.message)
            return state;
        case 'CREATE_MESSAGE_ERROR':
            console.log('create project error',action.err)
            return state;
        default:
            return state;
        
    }
    return state
}

export default messageReducer