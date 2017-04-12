// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
  'default e2e tests': function (browser) {
    // automatically uses dev Server port from /config.index.js
    // default: http://localhost:8080
    // see nightwatch.conf.js
    const devServer = browser.globals.devServerURL

    browser
      .url(devServer)
      .waitForElementVisible('div', 10000)
      .assert.elementCount('h1', 3)
      .assert.elementPresent('.index')
      .assert.containsText('h1.index', 'This is Index module!')
      .end()
  }
}
