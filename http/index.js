import axios from "axios";
import middleware from "../middleware";

//这里发送 logger 信息，并且传送 middleware
class Upload {
  constructor(option) {
    this.option = option;
  }
  logger(data) {
    middleware(this.option, data);
    const { host, axiosConfig = {} } = this.option;
    return axios.post(host, data, axiosConfig);
  }
}
export default Upload;
