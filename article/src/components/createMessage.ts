import { createApp } from 'vue'
import Message from './Message.vue'
export type MessageType = 'success' | 'error' | 'default'
function createMessage (message: string, type: MessageType, timeout = 2000) {
  // 创建组件实例， 第二个参数是props
  const messageInstance = createApp(Message, {
    message,
    type
  })

  // 将组件实例挂载到dom上
  const node = document.createElement('div')
  document.body.append(node)
  messageInstance.mount(node)

  setTimeout(() => {
    messageInstance.unmount(node)
    document.body.removeChild(node)
  }, timeout)
}

export default createMessage
