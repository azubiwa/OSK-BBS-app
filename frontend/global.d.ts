// module.cssの拡張子を読み込む
declare module "*.module.css" {
  const classes: { [key: string]: string };
  export default classes;
}
