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
  validateAccount(source: string): unknown;
  verifyCode(params: {
    code?: string,
    value?: string,
    type?: string,
    clientId?: string
  }): unknown;
  loginByPassword(params : {
    email?: string,
    password?: string,
    clientId?: string
  }): unknown;
  updateAccount(accessToken: string, body: unknown): unknown;
  updatePassword(password: string): unknown;
}

export default AuthClient
