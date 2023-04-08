import dialogsReducer from "./dialogs-reducer "
import profileReducer from "./profile-reducer"
import sidebarReducer from "./sidebar-reducer copy"


let store = {
  _state :{
    profilePage:{
       posts: [
        {id : 1, message : 'hi, how are you', likeCount: 15}, 
        {id : 2, message : 'It\'s my first post', likeCount:21},
      ],
      newPostText:'it-kamasutra'
    },
    dialogsPage:{
       dialogs: [
        {id : 1, name : 'Demid'}, 
        {id : 2, name : 'Nikita'},
        {id : 3, name : 'Artyomx'},
        {id : 4, name : 'Anton'},
        {id : 5, name : 'Vitalya'}
      ],
    messages: [
        {id : 1, message : '1234'}, 
        {id : 2, message : '5fdfg2'},
        {id : 3, message : 'Yo'},
        {id : 4, message : 'How are you'},
        {id : 5, message : 'it is way of samurai'}
    ],
    newMessageBody: ""
    },
    sidebarPage:{}
},
_callSubscriber () {
  console.log('state changed')

},
getState() {
  return this._state
},
subscribe  (observer) {
 this._callSubscriber = observer
}, 



dispatch(action){
 
 this._state.profilePage = profileReducer(this._state.profilePage, action)
 this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
 this._state.sidebarPage = sidebarReducer(this._state.sidebarPage, action)
 
    this._callSubscriber(this._state)
    
  
}

}


 

export default store

window.store = store