module.exports = () => {
    return async function errorHandler(ctx,next) {
        try {
            await next();
        } catch(e){
            // 统一错误处理
        }
    }
};