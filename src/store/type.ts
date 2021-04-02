export interface User {
  id: number;
  name: string;
  image: string;
}

export enum UserActionType {
  ADD_NEW_USER= "ADD_NEW_USER",
  REMOVE_USER= "REMOVE_USER",
  CHANGE_ORDERS= "CHANGE_ORDERS",
}

export interface UserAction {
  type: UserActionType;
  payload: User | User[];
}

