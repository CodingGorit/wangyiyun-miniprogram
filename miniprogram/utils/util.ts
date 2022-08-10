// const app = getApp();
import { Consts } from "../Consts";

class Utils {
  private static _instance: Utils | null;

  private constructor() {
  }

  public static getInstance () {
    if (!this._instance) {
      this._instance = new this();
    }
    return this._instance;
  }

  public static releaseInstance () {
    if (this._instance) {
      this._instance = null;
    }
  }

  // 非 static 方法

  public static redirectTo404 () {
    wx.navigateTo({
      url: Consts.PATH.PageUri.NotFoundPage
    });
  }

  // 颜色转换工具
  public static rgbToHex (r: number, g: number, b: number) {
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  }
}

export default Utils;
// export const formatTime = (date: Date) => {
//   const year = date.getFullYear()
//   const month = date.getMonth() + 1
//   const day = date.getDate()
//   const hour = date.getHours()
//   const minute = date.getMinutes()
//   const second = date.getSeconds()

//   return (
//     [year, month, day].map(formatNumber).join('/') +
//     ' ' +
//     [hour, minute, second].map(formatNumber).join(':')
//   )
// }

// const formatNumber = (n: number) => {
//   const s = n.toString()
//   return s[1] ? s : '0' + s
// }