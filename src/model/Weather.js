class Weather {
  constructor(data) {
    this.data = data
    this.errors = []
  }
  validateUserInput() {
    if (this.data == '') {
      this.errors.push('ERROR: 도시의 이름을 입력하십시오.')
    }
  }
}

module.exports = Weather
