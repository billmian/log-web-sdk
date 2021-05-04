import device from "./device";

export default async function middleware(option, data) {
  //控制反转
  const middlewareArr = [device];
  for (let i = 0; i < middlewareArr.length; i++) {
    const middlewareItem = middlewareArr[i];
    await middlewareItem(option, data);
  }
}
