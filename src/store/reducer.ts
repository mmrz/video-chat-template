import { UserAction, User, UserActionType, UserState } from "./type";

const initailState: UserState = [
  {
    name: "Mike",
    id: Date.now(),
    image: "https://via.placeholder.com/600x400.png/008000?text=Mike"
  }
]

const userReducer = (state: UserState = initailState, {type, payload}: UserAction): UserState => {
  switch(type) {
    case UserActionType.ADD_NEW_USER:
      return [...state, (payload as User)];
    case UserActionType.REMOVE_USER:
      return state.filter(user => user.id !== (payload as User).id);
    case UserActionType.CHANGE_ORDERS:
      return (payload as User[]);
    case UserActionType.RESE:
      return initailState
    case UserActionType.SHUFFLE:
      return [...state].sort(() => Math.random() - 0.5)
    default:
      return state;
  }
}

export default userReducer;
