export interface AppHandler {
    // 系统开始时候
    app_start();

    // 系统停止时候
    app_stop();
}