// const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND-MESSAGE";

let initialState = {
  dialogs: [
    { id: 1, name: "Demid" },
    { id: 2, name: "Nikita" },
    { id: 3, name: "Artyomx" },
    { id: 4, name: "Anton" },
    { id: 5, name: "Vitalya" },
  ],
  messages: [
    { id: 1, message: "1234" },
    { id: 2, message: "5fdfg2" },
    { id: 3, message: "Yo" },
    { id: 4, message: "How are you" },
    { id: 5, message: "it is way of samurai" },
  ],
  // newMessageBody: "",
};

const dialogsReducer = (state = initialState, action) => {
  let stateCopy;

  switch (action.type) {
    // case UPDATE_NEW_MESSAGE_BODY:
    //     return { ...state,
    //     newMessageBody: action.body
    //  };
     

    case SEND_MESSAGE:
        let body = action.newMessageBody;
        return { 
        ...state,
    messages: [...state.messages, { id: 6, message: body }],
    };
     
    default:
      return state;
  }
};

export const sendMessageCreator = (newMessageBody) => ({ type: SEND_MESSAGE, newMessageBody });

// export const updateNewMessageBodyCreator = (body) => ({
//   type: UPDATE_NEW_MESSAGE_BODY,
//   body: body,
// });

export default dialogsReducer;
