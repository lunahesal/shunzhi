const initState = {
  all:[
    {
      "userName": "cd",
      "userEmail": "1223",
      "password": "123",
      "url": "http://yummy.haoduoshipin.com/uploads/avatars/f4580743b0a71c010daede0a8cb671c0",
      "id": 1,
      "slogn": "cndj",
      "friendId": 2
    },
    {
      "userName": "dd",
      "userEmail": "ss",
      "password": "sd",
      "url": "http://media.haoduoshipin.com/yummy/default-avatar.png",
      "id": 2,
      "slogn": "fffffffff",
      "friendId": 2
    },
    {
      "userName": "f",
      "userEmail": "gg",
      "password": "ty",
      "url": "http://media.haoduoshipin.com/yummy/default-avatar.png",
      "id": 3,
      "slogn": "还没填写个性签名"
    },
    {
      "userName": "aa",
      "userEmail": "ss",
      "password": "as",
      "passwordsed": "as",
      "url": "http://media.haoduoshipin.com/yummy/default-avatar.png",
      "slogn": "还没填写个性签名",
      "id": 4
    },
    {
      "userName": "cdd",
      "userEmail": "cd",
      "password": "cd",
      "passwordsed": "cd",
      "url": "http://media.haoduoshipin.com/yummy/default-avatar.png",
      "slogn": "还没填写个性签名",
      "id": 5
    }
  ],
  isFrind:'加为好友'
}
export default function userReducer(state=initState,action){
  switch(action.type){

    case 'LOGIN':
      return {...state,all:action.users}
    case 'ADD_FRIEND':
      return {...state,isFrind:'已是好友'}
      default:
      return state
  }
}
