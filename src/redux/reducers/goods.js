const goods=[
  {
    "id": "1",
    "url": "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=952185356,2784269270&fm=27&gp=0.jpg",
    "price": 43,
    "name": "提拉米苏",
    "count": 0,
    "description": "好吃",
    "clicked": false
  },
  {
    "id": "2",
    "url": "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=952185356,2784269270&fm=27&gp=0.jpg",
    "price": 93,
    "name": "黑森林",
    "count": 0,
    "description": "好吃",
    "clicked": false
  },
  {
    "id": "3",
    "url": "http://f12.baidu.com/it/u=881166037,2952098823&fm=72",
    "price": 63,
    "name": "抹茶蛋糕",
    "count": 0,
    "description": "好吃",
    "clicked": false
  }
]
export default function goodsReducer(state=goods,action){
  switch(action.type){
    case 'LOAD_GOODS':
      return action.goods
      default:
      return state
  }
}
