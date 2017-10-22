const activeuser = {
  "userName": "dd",
  "userEmail": "ss",
  "password": "sd",
  "url": "http://media.haoduoshipin.com/yummy/default-avatar.png",
  "id": 2,
  "slogn": "fffffffff",
  "friendId": 2
}



export default function activeuserReducer(state=activeuser,action){
  switch(action.type){
    case 'ACTIVEUSER':
      return action.user
    case 'UP_DATE':
      const upState = {...state,slogn:action.slogn}
      console.log(upState);
      return upState

      default:
      return state
  }
}
