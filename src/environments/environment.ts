// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  /** api服务地址 */
  // api: `https://hzz.swj.sh.gov.cn:8010`,
  // api: `https://hzz.swj.sh.gov.cn:8010`,
  //api: `https://www1.rivermis.cn:8083`,
  // api: `https://api.rivers.kalendsoft.com`,
  api: `http://localhost:8083`,
  appid: 'river00000000001',
  appsecret: '5a154ba9eb4c0a4dc03f3469',
  outernet: true,
  geoserverURL: 'https://gis.rivermis.cn:8091',
  riverlayer: 'riverslakes2021',
  outfallMap: '',
  version: '19.13.3',
  contentimageuploadurl: '/file/imguploadcontent/',
}
