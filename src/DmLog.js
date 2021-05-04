import initPlugin from "../init";
import Upload from "../http";

class DmLog extends Upload {
  //初始化
  //设置是否上传 performance
  //设置上传服务器的地址
  //设置 globalError
  //添加时间戳
  //axiosConfig 配置 axios 的 config

  /*
  {
    performance:true,
    globalError:true,
    device:true,
    timestamp:true,
  }
  */

  constructor(option) {
    super(option);
    this.option = option;
    this.init();
  }
  init() {
    initPlugin(this.option, this.logger);
  }
  //上传日志
  log() {
    axios.post();
  }
}

export default DmLog;
