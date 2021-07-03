
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

  postDataEncoded(url, body) {
    let formBody = []
    for (const property in body) {
      const encodedKey = encodeURIComponent(property)
      const encodedValue = encodeURIComponent(body[property])
      formBody.push(encodedKey + '=' + encodedValue)
    }

    return fetch(url, {
      body   : formBody.join('&'),
      headers: {
        'Content-type': 'application/x-www-form-urlencoded'
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

  async verifyCode({ code, value, type, clientId }) {
    const response = await this.postDataEncoded(`${this.urlApi}/verifycode`, {
      client_id    : clientId,
      client_secret: 'nuevo',
      code,
      grant_type   : 'authorization_code',
      type,
      value
    })
    console.log('🚀 ~ file: index.js ~ line 21 ~ AuthClient ~ sendVerifyCode ~ response', response)

    return response
  }

  async updateAccount(body) {
    const response = await this.postData(`${this.urlApi}/update/account`, body)
    console.log('🚀 ~ file: index.js ~ line 43 ~ AuthClient ~ updateAccount ~ response', response)

    return response
  }

  async updatePassword(password) {
    const response = await this.postData(`${this.urlApi}/update/password`, { password })
    console.log('🚀 ~ file: index.js ~ line 43 ~ AuthClient ~ updateAccount ~ response', response)

    return response
  }
}

export default AuthClient
