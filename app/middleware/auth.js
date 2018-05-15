module.exports = () => {
    return async function authHandler(ctx,next) {
        await next();

        // 权限认证
    }
};