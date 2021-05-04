import performance from "./performance";
import globalError from "./globalError";

export default async function initPlugin(option, logger) {
  const initArr = [performance, globalError];

  for (let i = 0; i < initArr.length; i++) {
    const initItem = initArr[i];
    await initItem(option, logger);
  }
}
