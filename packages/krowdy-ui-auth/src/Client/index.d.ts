declare class AuthClient {

  constructor(baseURL?: string);
  
  getData(url: string, headers ?: { accessToken: string }): unknown;
  postData(url: string, body: unknown): unknown;
  postWithCredentials(url: string, headers ?: { accessToken: string }, body ?: unknown): unknown;
  postDataEncoded(url: string, body : unknown): unknown;
  verifySession(params?: {
    accessToken?: string ,
    refreshToken?: string,
    iduser?: string
  }): { success?: boolean } | unknown;
  validateAccount(args: {source: string, recoveryPass: boolean}): unknown;
  verifyCode(params: {
    code?: string,
    value?: string,
    type?: string,
    clientId?: string,
    clientSecret?: string,
    allowAds?: number,
    keepSession?: number,
  }): unknown;
  loginByPassword(params : {
    email?: string,
    password?: string,
    clientId?: string,
    clientSecret?: string,
    allowAds?: number,
    keepSession?: number,
  }): unknown;
  updateAccount(accessToken: string, body: unknown): unknown;
  updatePassword(args: {accessToken: string, password: string}): unknown;
  loginSocialNetwork(args: {
    tokenId?: string, 
    network?: string, 
    authorizationCode?: string, 
    clientId?: string, 
    clientSecret?: string,
    allowAds?: number,
    keepSession?: number
  } ,referrer : string): unknown;
}

export default AuthClient
