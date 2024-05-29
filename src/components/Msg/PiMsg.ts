import { createApp } from 'vue'
import PiMsg from './PiMsg.vue'

export type ThemeType = '' | 'primary' | 'success' | 'warning' | 'danger' | 'info'
interface MsgOption {
  visible?: boolean
  closed?: boolean
  prefix?: string
  dangerHTML?: boolean
  msg: string
  theme?: ThemeType
  duration?: number
  timer?: number
  onClose?: null | any
  position?: string
  vOffset?: number
  hOffset?: string
  width?: string
  id?: string
  autoClose?: boolean
}

let instance: any
let seed = 1
let showOrder = 1

export let defaultMsgOpt: MsgOption = {
  visible: true,
  prefix: '',
  dangerHTML: false,
  msg: '',
  theme: 'primary',
  duration: 5000,
  timer: undefined,
  closed: false,
  onClose: null,
  position: 'right',
  hOffset: '1rem',
  vOffset: 80,
  width: '180px',
  id: '',
  autoClose: true
}
const initData = (): MsgOption => {
  return {
    visible: true,
    prefix: '',
    dangerHTML: false,
    msg: '',
    theme: 'primary',
    duration: 5000,
    timer: undefined,
    closed: false,
    onClose: null,
    position: 'right',
    hOffset: '1rem',
    vOffset: 80,
    width: '180px',
    id: '',
    autoClose: true
  }
}
const Msg = function (options: MsgOption | string) {
  if (!options) console.error(`[PiMsg Error] Msg 方法需要1個參數（字串或物件）`)
  defaultMsgOpt = initData()
  if (typeof options === 'string') {
    options = {
      ...defaultMsgOpt,
      msg: options
    }
  } else {
    const userOnClose = options.onClose
    const id = 'pi-msg_' + seed++
    options.id = id
    options.closed = false

    options.onClose = function () {
      Msg.close(id, userOnClose)
    }
    // set defaultOptions from options
    for (const key in options) {
      if (Object.prototype.hasOwnProperty.call(options, key)) {
        defaultMsgOpt[key] = options[key]
      }
    }
  }
  const app: any = createApp(PiMsg, {
    ...options
  })
  app.vm = app.mount(document.createElement('div'))
  // append to body
  const tmp = document.body.appendChild(app.vm.$el)
  const getElement = document.getElementById(tmp.id)
  // append width
  if (defaultMsgOpt.width) getElement.style.width = defaultMsgOpt.width
  // append position
  switch (defaultMsgOpt.position) {
    case 'left':
      getElement.style.left = defaultMsgOpt.hOffset
      break
    case 'center':
      getElement.style.left = '50%'
      getElement.style.transform = 'translateX(-50%)'
      break
    case 'right':
      getElement.style.right = defaultMsgOpt.hOffset
      break
  }
  if (showOrder < 1) showOrder = 1
  getElement.style.top = defaultMsgOpt.vOffset * showOrder++ + 'px'

  return instance
}

// set theme function for Msg, // success, warning, primary, danger, info
;['success', 'warning', 'primary', 'danger', 'info'].forEach((type: ThemeType) => {
  ;(Msg as { [key: string]: any })[type] = (options: MsgOption | string) => {
    let opt: MsgOption
    if (typeof options === 'string') {
      opt = {
        msg: options
      }
    } else {
      opt = { ...options }
    }
    if (type !== 'info') opt.theme = type as ThemeType
    else opt.theme = ''
    return Msg(opt)
  }
})

Msg.close = function (id: string, userOnClose: any) {
  // remove current by id
  const el = document.getElementById(id)
  // destroy el
  if (el) el.parentNode?.removeChild(el)
  // get every element
  const allMsg = document.querySelectorAll('.pi-msg')
  // minus top of every element
  allMsg.forEach((item: any, index) => {
    item.style.top = defaultMsgOpt.vOffset * (index + 1) + 'px'
  })
  showOrder--
  if (userOnClose) {
    userOnClose()
  }
}

export default Msg
