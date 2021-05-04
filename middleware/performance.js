export default function performance(ctx) {
  const { performance } = ctx;
  if (!performance) {
    return;
  }

  let t = window.performance;
  if (!performance) {
    console.log("您的浏览器不支持performance属性");
    return;
  }

  let times = {};
  //重定向时间
  times.redirectTime = t.redirectEnd - t.redirectStart;

  //dns查询耗时
  times.dnsTime = t.domainLookupEnd - t.domainLookupStart;

  //TTFB 读取页面第一个字节的时间
  times.ttfbTime = t.responseStart - t.navigationStart;

  //DNS 缓存时间
  times.appcacheTime = t.domainLookupStart - t.fetchStart;

  //卸载页面的时间
  times.unloadTime = t.unloadEventEnd - t.unloadEventStart;

  //tcp连接耗时
  times.tcpTime = t.connectEnd - t.connectStart;

  //request请求耗时
  times.reqTime = t.responseEnd - t.responseStart;

  //解析dom树耗时
  times.analysisTime = t.domComplete - t.domInteractive;

  //白屏时间
  times.blankTime = t.domLoading - t.fetchStart;

  //domReadyTime
  times.domReadyTime = t.domContentLoadedEventEnd - t.fetchStart;

  return times;
}
