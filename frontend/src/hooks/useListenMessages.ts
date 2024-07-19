import { useEffect } from 'react'

import useConversation from '../zustand/useConversation'

const useListenMessages = () => {
  const { messages, setMessages } = useConversation()

  useEffect(() => {
    setMessages([...messages])
  }, [messages, setMessages])
}
export default useListenMessages
// import { useEffect } from 'react'

// import { useSocketContext } from '../context/SocketContext'
// import useConversation from '../zustand/useConversation'

// import notificationSound from '../assets/sounds/notification.mp3'

// const useListenMessages = () => {
//   const { socket } = useSocketContext()
//   const { messages, setMessages } = useConversation()

//   useEffect(() => {
//     socket?.on('newMessage', (newMessage) => {
//       newMessage.shouldShake = true
//       const sound = new Audio(notificationSound)
//       sound.play()
//       setMessages([...messages, newMessage])
//     })

//     return () => {
//       socket?.off('newMessage')
//     }
//   }, [socket, messages, setMessages])
// }
// export default useListenMessages
