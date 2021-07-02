
class AuthClient {
  constructor(baseUrl) {
    this.urlApi = `${baseUrl}/api/onetap`
  }

  postData(url, body) {
    return fetch(url, {
      body   : JSON.stringify(body),
      headers: {
        'Content-type': 'application/json'
      },
      method: 'POST'
    }).then((res) => res.json())
  }

  async validateAccount(source) {
    try {
      const response = await this.postData(`${this.urlApi}/validate`, {
        source
      })
      if(!response || !response?.success) return { success: false }

      const { authMode, type, value, success } = response

      return { hasPassword: authMode === 'password', success, type, value }
    } catch (error) {
      return { error: error.message, success: false }
    }
  }

  async verifyCode() {
    const response = await this.postData(`${this.urlApi}/verifycode`, {
      // source
    })
    console.log('🚀 ~ file: index.js ~ line 21 ~ AuthClient ~ sendVerifyCode ~ response', response)

    return response
  }
}

export default AuthClient
