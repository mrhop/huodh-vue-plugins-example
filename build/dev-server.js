require('./check-versions')()

var config = require('../config')
if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = JSON.parse(config.dev.env.NODE_ENV)
}

var opn = require('opn')
var path = require('path')
var express = require('express')
var bodyParser = require('body-parser')
var lodash = require('lodash')
var webpack = require('webpack')
var proxyMiddleware = require('http-proxy-middleware')
var webpackConfig = process.env.NODE_ENV === 'testing'
  ? require('./webpack.prod.conf')
  : require('./webpack.dev.conf')

// default port where dev server listens for incoming traffic
var port = process.env.PORT || config.dev.port
// automatically open browser, if not set will be false
var autoOpenBrowser = !!config.dev.autoOpenBrowser
// Define HTTP proxies to your custom API backend
// https://github.com/chimurai/http-proxy-middleware
var proxyTable = config.dev.proxyTable

var app = express()
var compiler = webpack(webpackConfig)

var devMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: webpackConfig.output.publicPath,
  quiet: true
})

var hotMiddleware = require('webpack-hot-middleware')(compiler, {
  log: () => {
  }
})
// force page reload when html-webpack-plugin template changes
compiler.plugin('compilation', function (compilation) {
  compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
    hotMiddleware.publish({action: 'reload'})
    cb()
  })
})

// proxy api requests
Object.keys(proxyTable).forEach(function (context) {
  var options = proxyTable[context]
  if (typeof options === 'string') {
    options = {target: options}
  }
  app.use(proxyMiddleware(options.filter || context, options))
})

// handle fallback for HTML5 history API
app.use(require('connect-history-api-fallback')())

// serve webpack bundle output
app.use(devMiddleware)

// enable hot-reload and state-preserving
// compilation error display
app.use(hotMiddleware)

app.use(bodyParser.json())

// serve pure static assets
var staticPath = path.posix.join(config.dev.assetsPublicPath, config.dev.assetsSubDirectory)
app.use(staticPath, express.static('./static'))

var uri = 'http://localhost:' + port

devMiddleware.waitUntilValid(function () {
  console.log('> Listening at ' + uri + '\n')
})
// table data init
let tableData = [
  {
    "key": 1,
    "value": [
      "小一",
      1493568000000
    ]
  },
  {
    "key": 2,
    "value": [
      "小二",
      1493568000000
    ]
  },
  {
    "key": 3,
    "value": [
      "小3",
      1493568000000
    ]
  },
  {
    "key": 4,
    "value": [
      "小4",
      1493568000000
    ]
  },
  {
    "key": 5,
    "value": [
      "小5",
      1493568000000
    ]
  },
  {
    "key": 6,
    "value": [
      "小6",
      1493568000000
    ]
  },
  {
    "key": 7,
    "value": [
      "小7",
      1493568000000
    ]
  },
  {
    "key": 8,
    "value": [
      "小8",
      1493568000000
    ]
  },
  {
    "key": 9,
    "value": [
      "小9",
      1493568000000
    ]
  },
  {
    "key": 10,
    "value": [
      "小10",
      1493568000000
    ]
  },
  {
    "key": 11,
    "value": [
      "小1一",
      1493568000000
    ]
  },
  {
    "key": 12,
    "value": [
      "小1二",
      1493568000000
    ]
  },
  {
    "key": 13,
    "value": [
      "小13",
      1493568000000
    ]
  },
  {
    "key": 14,
    "value": [
      "小14",
      1493568000000
    ]
  },
  {
    "key": 15,
    "value": [
      "小15",
      1493568000000
    ]
  },
  {
    "key": 16,
    "value": [
      "小16",
      1493568000000
    ]
  },
  {
    "key": 17,
    "value": [
      "小17",
      1493568000000
    ]
  },
  {
    "key": 18,
    "value": [
      "小18",
      1493568000000
    ]
  },
  {
    "key": 19,
    "value": [
      "小19",
      1493568000000
    ]
  },
  {
    "key": 20,
    "value": [
      "小20",
      1493568000000
    ]
  },
  {
    "key": 21,
    "value": [
      "小2一",
      1493568000000
    ]
  },
  {
    "key": 22,
    "value": [
      "小2二",
      1493568000000
    ]
  },
  {
    "key": 23,
    "value": [
      "小23",
      1493568000000
    ]
  }
]

// 默认table data的获取
app.post(path.posix.join(config.dev.assetsPublicPath, 'data/table.html'), function (req, res) {
  var pager = req.body.pager
  var init = req.body.init
  var filters = req.body.filters
  var subData = tableData;
  if (filters && filters.name) {
    subData = lodash.filter(tableData, function (o) {
      return o.value[0].indexOf(filters.name) > -1
    })
  }
  if (filters && filters.testDate) {
    subData = lodash.filter(subData, function (o) {
      return o.value[1] < filters.testDate
    })
  }
  if ((pager.currentPage - 1) * pager.pageSize >= subData.length) {
    pager.currentPage = Math.ceil(subData.length / pager.pageSize)
    if (pager.currentPage === 0) {
      pager.currentPage = 1
    }
  }
  var returnData = subData.slice((pager.currentPage - 1) * pager.pageSize, pager.currentPage * pager.pageSize)
  if (init) {
    // 初始化
    res.json({
      "rules": {
        "header": [
          {
            "name": "#sn",
            "title": "#sn"
          },
          {
            "name": "name",
            "title": "名称",
            "type": "text",
            "filter": true
          },
          {
            "name": "testDate",
            "title": "在此之前",
            "type": "date",
            "filter": true
          }
        ],
        "action": {
          "add": true,
          "detail": true,
          "update": true,
          "delete": true
        },
        "feature": {
          "filter": true,
          "pager": true
        }
      },
      "data": {
        "rows": subData.slice(0, pager.pageSize),
        "totalCount": subData.length,
        pager
      }
    })
  } else {
    res.json({
      "data": {
        "rows": returnData,
        "totalCount": subData.length,
        pager,
        filters
      }
    })
  }
});
app.get(path.posix.join(config.dev.assetsPublicPath, 'data/table-delete.html'), function (req, res) {
  var id = parseInt(req.query.key)
  lodash.remove(tableData, function (o) {
    return o.key === id
  });
  res.end();
});
app.get(path.posix.join(config.dev.assetsPublicPath, 'data/form-init.html'), function (req, res) {
  var id = parseInt(req.query.key)
  res.json({
    "rules": {
      "items": [
        {
          "name": "name",
          "label": "姓名",
          "type": "text",
          "validate": [{
            "errorMsg": "不能为空",
            "regex": "^\\S+$"
          }],
          "defaultValue": "姓名",
          "placeholder": "请输入姓名",
          "locked": false,
          "error": true
        },
        {
          "name": "testPassword",
          "label": "测试Password",
          "type": "password",
          "validate": [{
            "errorMsg": "不能为空",
            "regex": "^\\S+$"
          }]
        },
        {
          "name": "testNumber",
          "label": "测试Number",
          "type": "number",
          "validate": [{
            "errorMsg": "不能为空",
            "regex": "^\\S+$"
          }]
        },
        {
          "name": "testDate",
          "label": "测试日期",
          "type": "date",
          "validate": [
            {
              "errorMsg": "不能为空",
              "regex": "^\\S+$"
            }
          ]
        },
        {
          "name": "testDateRange",
          "label": "测试范围日期",
          "type": "daterange",
          "validate": [
            {
              "errorMsg": "不能为空",
              "regex": "^\\S+$"
            }
          ]
        },
        {
          "name": "testSelect",
          "label": "测试select",
          "type": "select",
          "validate": [{
            "errorMsg": "不能为空",
            "regex": "^\\S+$"
          }],
          "defaultValue": "2",
          "items": [
            {
              "label": "测试1",
              "value": "1"
            },
            {
              "label": "测试2",
              "value": "2"
            },
            {
              "label": "测试3",
              "value": "3"
            }
          ]
        },
        {
          "name": "testRadio",
          "label": "测试Radio",
          "type": "radio",
          "validate": [{
            "errorMsg": "不能为空",
            "regex": "^\\S+$"
          }],
          "defaultValue": "1",
          "items": [
            {
              "label": "测试1",
              "value": "1"
            },
            {
              "label": "测试2",
              "value": "2"
            },
            {
              "label": "测试3",
              "value": "3"
            }
          ]
        },
        {
          "name": "testCheckbox",
          "label": "测试Checkbox",
          "type": "checkbox",
          "validate": [{
            "errorMsg": "不能为空",
            "regex": "^\\S+$"
          }],
          "defaultValue": [
            "1",
            "2"
          ],
          "items": [
            {
              "label": "测试1",
              "value": "1"
            },
            {
              "label": "测试2",
              "value": "2"
            },
            {
              "label": "测试3",
              "value": "3"
            }
          ]
        },
        {
          "name": "testTextArea",
          "label": "测试TextArea",
          "type": "textarea",
          "validate": [{
            "errorMsg": "不能为空",
            "regex": "^\\S+$"
          }],
          "defaultValue": "看一看，瞧一瞧",
          "rows": 10,
          "placeholder": "this is textarea"
        }
      ],
      "action": {
        "save": {
          "label": "保存"
        },
        "reset": {
          "label": "重置"
        },
        "backup": {
          "label": "返回列表"
        }
      }
    }
  })
});
app.post(path.posix.join(config.dev.assetsPublicPath, 'data/form-save.html'), function (req, res) {
  var data = req.body
  if (data && data.name) {
    tableData.push({
      "key": new Date().getTime(),
      "value": [
        data.name,
        data.testDate
      ]
    })
  }
  res.json({
    success: {
      title: '向测试table中保存数据',
      message: '保存成功'
    }
  })
});
module.exports = app.listen(port, function (err) {
  if (err) {
    console.log(err)
    return
  }

  // when env is testing, don't need open it
  if (autoOpenBrowser && process.env.NODE_ENV !== 'testing') {
    opn(uri)
  }
})
