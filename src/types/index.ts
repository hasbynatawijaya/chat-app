export interface RadioItem {
  value: string | number;
  label: string;
}

export interface SignupPayload {
  fullName: string;
  username: string;
  password: string;
  confirmPassword: string;
  gender: string;
}

export interface User {
  _id: string;
  fullName: string;
  username: string;
  profilePic: string;
}

export interface Conversation {
  _id: string;
  participants: User[];
  messages: Message[];
}

export interface Message {
  _id: string;
  senderId: string;
  receiverId: string;
  message: string;
  createdAt: string;
  shouldShake: boolean;
}
