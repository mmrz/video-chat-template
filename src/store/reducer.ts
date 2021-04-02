import { UserAction, User, UserActionType } from "./type";

const initailState: User[] = [
  {
    name: "Mike",
    id: Date.now(),
    image: "https://via.placeholder.com/600x400.png/008000?text=Mike"
  }
]

const userReducer = (state: User[] = initailState, {type, payload}: UserAction): User[] => {
  switch(type) {
    case UserActionType.ADD_NEW_USER:
      return [...state, (payload as User)];
    case UserActionType.REMOVE_USER:
      return state.filter(user => user.id !== (payload as User).id);
    case UserActionType.CHANGE_ORDERS:
      return (payload as User[]);
    default:
      return state;
  }
}

export default userReducer;
