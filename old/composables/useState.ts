export const useMenuActiveKey = (path?:string) => useState<string>("menuActiveKey", () => path ? path : '/')
export const useBaseApiURL = () => useState<string>("baseApiURL", () => 'https://coding.autre.cn/api');
export const useAppKey = () => useState<string>("appKey", () => '2d1f5385e831422eb16981a84befc910');
