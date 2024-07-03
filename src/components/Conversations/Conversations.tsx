import useGetUsers from "../../hooks/useGetUsers";
import { getRandomEmoji } from "../../utils/emoji";
import Conversation from "../Conversation/Conversation";

const Conversations = () => {
  const { loading, users } = useGetUsers();
  return (
    <div className="py-2 flex flex-col overflow-auto">
      {users.map((user, idx) => (
        <Conversation
          key={user._id}
          user={user}
          emoji={getRandomEmoji()}
          lastIdx={idx === users.length - 1}
        />
      ))}

      {loading ? (
        <span className="loading loading-spinner mx-auto"></span>
      ) : null}
    </div>
  );
};
export default Conversations;
