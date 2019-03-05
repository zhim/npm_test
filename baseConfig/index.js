/**

 @Name：richwayui 项目的配置文件
 @Author：g.zhou
 @License：MIT

 */
const configDefault = require(`./default`);

const config = {
    // 生产，开发环境标识 production   development
    env: `development`,
    // 接口数据来源， demo pro
    interfacePattern: `demo`,
    // 菜单来源  local  cloud
    menuSource: `local`,
    // 域名
    hostDomain: ``,
    // 移动端域名
    wapHost: ``,
    // 首页路径
    portalHost: `/engineering_platform/situation_analysis/general_situation`,
    // 接口服务
    InterfaceHost: `http://192.168.1.163:8080/gzshzh`,
    // 导入文件的服务
    UploadFileHost: `http://192.168.1.163:8080/gzshzh`,
    // 导出文件的服务
    DownloadFileHost: `http://192.168.1.163:8080/gzshzh`,
    // 报表服务
    ReportServiceHost: `http://222.213.236.170:8089/WebReport_yc/ReportServer`,
    // 图片服务器
    ImageServiceHost: `http://124.205.4.210:5000/staticRes`,
    // 代理
    proxy: {
        ReportServiceHost: ``,
        ImageServiceHost: ``
    },
    // 日志级别
    // logLevel: 2,
    // 是否启动socket
    // webSocket: false,
    // session的存储介质  redis  memory
    SessionStore: `redis`,
    // Redis配置
    RedisHost: { host: `localhost`, port: `6379`, password: `123456` },
};


module.exports = Object.assign(configDefault, config);
