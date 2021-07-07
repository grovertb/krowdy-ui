
class AuthClient {
  constructor(baseUrl) {
    this.urlApi = `${baseUrl}/api`
  }

  getData(url, headers = {}) {
    return fetch(url, {
      headers: {
        Authorization : `Bearer ${headers.accessToken}`,
        'Content-type': 'application/json'
      },
      method: 'GET'
    }).then((res) => res.json())
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

  postWithCredentials(url, headers = {}, body) {
    return fetch(url, {
      body   : JSON.stringify(body),
      headers: {
        Authorization : `Bearer ${headers.accessToken}`,
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

  async verifySession() {
    try {
      const accessToken = localStorage.getItem('accessToken')
      const response = await this.getData(`${this.urlApi}/authenticate`, { accessToken })

      if(!response) throw Error('Error al verificar cuenta.')

      return response
    } catch (error) {
      return { error: error.message, success: false }
    }
  }

  async validateAccount(source) {
    try {
      const response = await this.postData(`${this.urlApi}/onetap/validate`, {
        source
      })
      if(!response || !response.success) return { success: false }

      const { authMode, type, value, success } = response

      return { hasPassword: authMode === 'password', success, type, value }
    } catch (error) {
      return { error: error.message, success: false }
    }
  }

  async verifyCode({ code, value, type, clientId ='candidate' }) {
    try {
      const response = await this.postDataEncoded(`${this.urlApi}/onetap/verifycode`, {
        client_id    : clientId,
        client_secret: 'nuevo',
        code,
        grant_type   : 'authorization_code',
        type,
        value
      })
      if(!response || !response.success) return { success: false }

      return response
    } catch (error) {
      return { error: error.message, success: false }
    }
  }

  async loginByPassword({ email, password, clientId = 'candidate' }) {
    try {
      const response = await this.postDataEncoded(`${this.urlApi}/oauth/token`, {
        client_id    : clientId,
        client_secret: 'nuevo',
        grant_type   : 'password',
        password,
        username     : email.trim()
      })

      if(!response || !response.success) return { success: false }

      return response
    } catch (error) {
      return { error: error.message, success: false }
    }
  }

  updateAccount(accessToken, body) {
    return this.postWithCredentials(
      `${this.urlApi}/onetap/update/account`,
      { accessToken },
      body
    )
  }

  updatePassword(password) {
    return this.postData(`${this.urlApi}/onetap/update/password`, { password })
  }
}

export default AuthClient
