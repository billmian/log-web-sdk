//上报日志时是否携带设备信息

export default function device(option, data) {
  const { device } = option;
  if (!device) {
    return;
  }
  data.app = navigator.appVersion;
}
