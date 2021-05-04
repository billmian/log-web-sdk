import performance from "./performance";

export default function middleware(ctx) {
  let context = ctx;
  const middlewareArr = [performance]; //这里进行注册中间件，不关心中间件干了什么
  middlewareArr.forEach((middlewareItem) => {
    context = middlewareItem(context);
  });
}
