import { http } from '../utils/request';
import { banners, recommendList } from '../mock/mock';
import { Consts } from '../Consts';
const app = getApp();

// banners 数据
export async function getBanners() {
  let data: Array<IBanner> = [];
  if (!app.globalData.useMockData) {
    const res = await http.get(Consts.PATH.ApiUri.Banners) as any;
    data = res.banners;
  } else {
    data = banners;
  }
  return data;
}

export function getRecommendList() {
  return recommendList;
}