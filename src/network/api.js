import http from "./request";
import $http from "../../../music/src/network/request";

// * 获取轮播图
export const getSwipeImg = () => http.get('/banner?type=0')

// * 获取推荐歌单  可选参数 : limit: 取出数量 , 默认为 30 (不支持 offset)
export const getPersonalized = params => http.get(`/personalized`, {params})

// *  获取音乐详情
export const getSongDetail = ids => http.get(`/song/detail?ids=${ids}`)

// * 推荐歌单
export const getListDetail = params => http.get('/playlist/detail', {params})

// * 获取音乐url
export const getSongUrl = id => http.get(`/song/url?id=${id}`)

// * 推荐新音乐
export const getPersonalizedNewSong = () => $http.get('/personalized/newsong')

// * 获取音乐歌词
export const getSongLyric = id => $http.get(`lyric?id=${id}`)

//电台
export const getRadioStation = () => $http.get('/dj/banner')

// 排行榜
export const getTopList = () => $http.get('/toplist')

// 排行榜 -> 飙升榜idx = 3
export const getTopListIdx = idx => $http.get(`/top/list?idx=${idx}`)

// * 所有榜单内容摘要
export const getTopListDetail = () => $http.get(`/toplist/detail`)
