interface Options {
  key?: (item: any) => object | number | string | boolean
  value?: (item: any) => object | number | string | boolean
}

export default function arr2obj(arr: any[], options: Options): Object;
