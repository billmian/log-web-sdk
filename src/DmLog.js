import middleware from "../middleware";
import axios from "axios";

class DmLog {
  //初始化
  //设置是否上传 performance
  //设置上传服务器的地址
  //
  constructor(option) {
    this.option = option;
  }
  init() {}
  //上传日志
  log() {
    axios.post()
  }
}

export default DmLog;
