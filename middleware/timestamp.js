//添加时间戳
export default async function timestamp(option, data) {
  const { timestamp } = option;
  if (!timestamp) {
    return;
  }
  data.timestamp = new Date().valueOf();
}
