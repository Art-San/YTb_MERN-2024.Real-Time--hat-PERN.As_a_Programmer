import useGetConversations from '../../hooks/useGetConversations'
import { getRandomEmoji } from '../../utils/emojis'
import Conversation from './Conversation'

const Conversations = () => {
  const { conversations, loading } = useGetConversations()

  return (
    <div className="py-2 flex flex-col overflow-auto">
      {conversations.map((conversation) => (
        <Conversation
          key={conversation.id}
          conversation={conversation}
          emoji={getRandomEmoji()}
        />
      ))}
      {loading ? <span className="loading loading-spinner mx-auto" /> : null}
    </div>
  )
}
export default Conversations

// import { DUMMY_CONVERSATIONS } from '../../_ui_design/dummy_data/dummy'
// import Conversation from './Conversation'

// const Conversations = () => {
//   return (
//     <div className="py-2 flex flex-col overflow-auto">
//       {DUMMY_CONVERSATIONS.map((conversation) => (
//         <Conversation key={conversation.id} conversation={conversation} />
//       ))}
//     </div>
//   )
// }
// export default Conversations
