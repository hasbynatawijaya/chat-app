import { create } from "zustand";
import { Message, User } from "../types";

interface ConversationState {
  selectedConversation: User | null;
  setSelectedConversation: (conversation: User | null) => void;
  messages: Message[];
  setMessages: (messages: Message[]) => void;
}

const useConversation = create<ConversationState>((set) => ({
  selectedConversation: null,
  setSelectedConversation: (selectedConversation) =>
    set({ selectedConversation }),
  messages: [],
  setMessages: (messages) => set({ messages }),
}));

export default useConversation;
