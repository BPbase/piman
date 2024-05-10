import { createApp } from 'vue';
import PiMsg from './PiMsg.vue';
interface MsgOption {
  visible?: boolean;
  closed?: boolean;
  prefix?: string;
  dangerHTML?: boolean;
  msg: string;
  theme?: "primary"|"success"|"warning"|"danger";
  duration?: number;
  timer?: number;
  onClose?: null | any;
  vOffset?: number;
  id?: string;
}

let instance: any;
let seed = 1;

export const defaultMsgOpt: MsgOption = {
  visible: true,
  prefix: '',
  dangerHTML: false,
  msg: '',
  theme: 'primary',
  duration: 1000,
  timer: undefined,
  closed: false,
  onClose: null,
  vOffset: 20,
  id: ''
}

const Msg = function (options: MsgOption | string) {
  if(!options) console.error(`[PiMsg Error] Msg 方法需要1個參數（字串或物件）`);
  console.log(options)
  if (typeof options === 'string') {
    options = {
      ...defaultMsgOpt,
      msg: options
    };
  } else {
    const userOnClose = options.onClose;
    const id = 'bpa-msg_' + seed++;
    options.id = id;
    options.closed = false;

    options.onClose = function() {
      console.log('call close')
      Msg.close(id, userOnClose);
    };
    // set defaultOptions from options
    for (const key in options) {
      if (Object.prototype.hasOwnProperty.call(options, key)) {
        defaultMsgOpt[key] = options[key];
      }
    }
  }
  const app: any = createApp(PiMsg, {
    ...options,
  });
  app.vm = app.mount(document.createElement('div'));
  //
  const tmp = document.body.appendChild(app.vm.$el);
  // instance = MsgConstructor.component('PiMsg', PiMsg as any);
  // instance.id = id;
  // console.log(instance)
  // instance.mount(document.createElement('div'));
  // document.body.appendChild(instance.component);

  //方塊離邊緣的距離
  // let verticalOffset = 20;
  // instances.forEach(item => {
  //   verticalOffset += item.$el.offsetHeight + 16;
  // });
  // instance.vOffset = verticalOffset;

  // if(instance.id != null) {
  //   document.getElementById(instance.id).style.top = instance.vOffset+'px';
  // }

  // instances.push(instance);

  return instance;
};

['success', 'warning', 'primary', 'danger' ].forEach(type => {
  (Msg as {[key: string]: any})[type] = (options: MsgOption | string) => {
    let opt: MsgOption;
    if (typeof options === 'string') {
      opt = {
        ...defaultMsgOpt,
        msg: options
      };
    } else {
      opt = { ...defaultMsgOpt, ...options };
    }
    opt.theme = type as ('success'|'warning'|'primary'|'danger');
    return Msg(opt);
  };
});

Msg.close = function(id: string, userOnClose: any) {
  // remove current by id
  const el = document.getElementById(id);
  // destroy el
  if(el) el.parentNode?.removeChild(el);

  // const len = instances.length;
  // let index = -1;
  // let removedHeight;
  // for (let i = 0; i < len; i++) {
  //   if (id === instances[i].id) {
  //     removedHeight = instances[i].$el.offsetHeight;
  //     index = i;
  //     if (typeof userOnClose === 'function') {
  //       userOnClose(instances[i]);
  //     }
  //     instances.splice(i, 1);
  //     break;
  //   }
  // }
  // if (len <= 1 || index === -1 || index > instances.length - 1) return;
  // for (let i = index; i < len - 1 ; i++) {
  //   const dom = instances[i].$el;
  //   dom.style['top'] =
  //     parseInt(dom.style['top'], 10) - removedHeight - 16 + 'px';
  // }
};

export default Msg;
