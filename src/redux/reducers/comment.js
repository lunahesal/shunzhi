const comments = [
  {
    "text": "cdc",
    "url": "http://media.haoduoshipin.com/yummy/default-avatar.png",
    "userName": "dd",
    "goodsId": "2",
    "id": 1
  },
  {
    "text": "dv",
    "url": "http://media.haoduoshipin.com/yummy/default-avatar.png",
    "userName": "dd",
    "goodsId": "2",
    "id": 2
  },
  {
    "text": "cd",
    "url": "http://media.haoduoshipin.com/yummy/default-avatar.png",
    "userName": "dd",
    "goodsId": "1",
    "id": 3
  },
  {
    "text": "rrrr",
    "url": "http://media.haoduoshipin.com/yummy/default-avatar.png",
    "userName": "dd",
    "goodsId": "1",
    "id": 4
  },
  {
    "text": "tttt",
    "url": "http://media.haoduoshipin.com/yummy/default-avatar.png",
    "userName": "dd",
    "goodsId": "1",
    "id": 5
  },
  {
    "text": "ggg",
    "url": "http://media.haoduoshipin.com/yummy/default-avatar.png",
    "userName": "cdd",
    "goodsId": "1",
    "id": 6
  }
]
export default function commentReducer(state=comments,action){
  switch(action.type){
    case 'LOAD_COMMENTS':
      return action.comments
    case 'ADD_COMMENT':
    console.log([...state,
      { text:action.text,
        url:action.url,
        userName:action.userName,
        goodsId:action.goodsId
       }
    ]);
      return [...state,
        { text:action.text,
          url:action.url,
          userName:action.userName,
          goodsId:action.goodsId,
          id:action.id
         }
      ]

      default:
      return state
  }
}
