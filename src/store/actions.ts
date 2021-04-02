import { UserAction, User, UserActionType } from "./type";
import names from "./names.json";

const userGenerator = (): User => {
  const name: string =  names[Math.floor(Math.random() * names.length)];
  const color: string = Math.floor(Math.random()*16777215).toString(16);
  return {
    name,
    image: `https://via.placeholder.com/600x400.png/${color}?text=${name}`,
    id: Date.now(),
  }
}

export const addNewUser = (): UserAction => {
  return {
    type: UserActionType.ADD_NEW_USER,
    payload: userGenerator()
  }
}

export const removeUser = (user: User): UserAction => {
  return {
    type: UserActionType.REMOVE_USER,
    payload: user
  }
}

export const changeOrders = (userList: User[]): UserAction => {
  return {
    type: UserActionType.CHANGE_ORDERS,
    payload: userList
  }
}
