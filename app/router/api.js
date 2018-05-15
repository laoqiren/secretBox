module.exports = app => {
    const { router, controller, middleware } = app;
    const { user, topic } = controller.api;

    // 用户
    router.resources('users','/api/user',user);
    router.resources('topics','/api/topic',topic);
}