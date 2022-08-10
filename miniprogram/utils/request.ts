import { Consts } from "../Consts";

const app = getApp();

export type Method =
| 'OPTIONS'
| 'GET'
| 'HEAD'
| 'POST'
| 'PUT'
| 'DELETE'
| 'TRACE'
| 'CONNECT'

class HttpUtils {

   public post(url: string, data?: object, formType = 'application/json') {
    return this.request("POST", url, data, formType);
  }
  public get(url: string, data?: object, formType = 'application/json') {
    return this.request("GET", url, data, formType);
  }
  public put(url: string, data?: object, formType = 'application/json') {
    return this.request("PUT", url, data, formType);
  }
  public detete(url: string, data?: object, formType = 'application/json') {
    return this.request("DELETE", url, data, formType);
  }

  private request(method: Method, url: string, data?: object, formType?: string) {
    return new Promise((resolve, reject) => {
      const comtentType = formType ? 'application/json' : 'application/x-www-form-urlencoded'
      wx.request({
        url: app.globalData.baseUrl + url,
        method: method,
        data: data,
        timeout: Consts.HTTP_REQUEST_TIMEOUT,
        dataType: "json",
        header: {
          "content-type": comtentType
        },
        success(res) {
          resolve(res.data);
        },
        fail(err) {
          reject(err);
        }
      })
    })
  }
}

export const http = new HttpUtils();