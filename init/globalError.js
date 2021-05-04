//捕获全局 error,并且上报出现的问题
export default function globalError(option, logger) {
  const { globalError: catchGlobalError } = option;
  if (!catchGlobalError) {
    return;
  }
  //js 同步运行时错误 语法错误 iframe异常
  window.onerror = function (message, source, lineno, colno, error) {
    logger({
      type: "globalError",
      data: {
        message,
        source,
        lineno,
        colno,
        error,
      },
    });
    return true;
  };

  //静态资源加载出错
  window.addEventListener(
    "error",
    (error) => {
      logger({
        type: "globalError",
        data: {
          error,
        },
      });
    },
    true
  );

  window.addEventListener("unhandledrejection", function (event) {
    //可以不在控制台中显示
    event.preventDefault();
    logger({
      type: "globalError",
      data: {
        error,
      },
    });
    return true;
  });
}
