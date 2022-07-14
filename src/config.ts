import { environment } from './environments/environment'

class SafetyInfo {
  private key = 'safety-token'
  private _appid: string
  get appid() {
    return this._appid
  }
  private _appsecret: string
  get appsecret() {
    return this._appsecret
  }
  get token() {
    return window.localStorage.getItem(this.key)
  }
  /**
   *
   */
  constructor(appid: string, appsecret: string) {
    this._appid = appid
    this._appsecret = appsecret
  }
  setToken(token: string) {
    window.localStorage.setItem(this.key, token)
  }
  removeToken() {
    window.localStorage.removeItem(this.key)
  }
}

/**配置信息 */
class Config {
  /**是否是生产模式 */
  isProd: Boolean = environment.production
  /**api 的地址 */
  apiprefix: string = environment.api
  /**api Http 的地址 */
  // apiprefixHttp: string = environment.apiHttp
  /**Web端的版本号 */
  version: string = environment.version
  /** 水质监测上传的地址 */
  waterqualityupload: string
  /** 图片下载地址 */
  imagedownurl: string
  /** 图片上传地址 */
  imageuploadurl: string

  safetyInfo: SafetyInfo

  /** 是否外网访问 */
  outernet: Boolean = environment.outernet
  /** 图层服务地址 */
  geoserverURL: string = environment.geoserverURL
  /** 河道图层数据库地址 */
  riverlayer: string = environment.riverlayer

  /** 排污口图标地址 */
  outfallMap: string = environment.outfallMap

  /** 二维码扫描登录地址 */
  curQCode: string = 'http://www1.rivermis.cn:8083'

  constructor() {
    this.safetyInfo = new SafetyInfo(environment.appid, environment.appsecret)
    this.waterqualityupload = this.apiprefix + '/waterquality/upload/'
    this.imagedownurl = this.apiprefix + '/file/imgdown/'
    this.imageuploadurl = this.apiprefix + '/file/imgupload/'
  }
}

/**配置 */
export const config = new Config()
