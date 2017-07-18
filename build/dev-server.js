require('./check-versions')()

var config = require('../config')
if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = JSON.parse(config.dev.env.NODE_ENV)
}

var opn = require('opn')
var path = require('path')
var fs = require('fs');
var express = require('express')
var bodyParser = require('body-parser')
var multer = require('multer')
var upload = multer({dest: 'static/upload'})
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
      [1, 2],
      1,
      "",
      1493568000000
    ]
  },
  {
    "key": 2,
    "value": [
      "小二",
      "",
      "",
      "",
      1493568000000
    ]
  },
  {
    "key": 3,
    "value": [
      "小3",
      "",
      "",
      "",
      1493568000000
    ]
  },
  {
    "key": 4,
    "value": [
      "小4",
      "",
      "",
      "",
      1493568000000
    ]
  },
  {
    "key": 5,
    "value": [
      "小5",
      "",
      "",
      "",
      1493568000000
    ]
  },
  {
    "key": 6,
    "value": [
      "小6",
      "",
      "",
      "",
      1493568000000
    ]
  },
  {
    "key": 7,
    "value": [
      "小7",
      "",
      "",
      "",
      1493568000000
    ]
  },
  {
    "key": 8,
    "value": [
      "小8",
      "",
      "",
      "",
      1493568000000
    ]
  },
  {
    "key": 9,
    "value": [
      "小9",
      "",
      "",
      "",
      1493568000000
    ]
  },
  {
    "key": 10,
    "value": [
      "小10",
      "",
      "",
      "",
      1493568000000
    ]
  },
  {
    "key": 11,
    "value": [
      "小1一",
      "",
      "",
      "",
      1493568000000
    ]
  },
  {
    "key": 12,
    "value": [
      "小1二",
      "",
      "",
      "",
      1493568000000
    ]
  },
  {
    "key": 13,
    "value": [
      "小13",
      "",
      "",
      "",
      1493568000000
    ]
  },
  {
    "key": 14,
    "value": [
      "小14",
      "",
      "",
      "",
      1493568000000
    ]
  },
  {
    "key": 15,
    "value": [
      "小15",
      "",
      "",
      "",
      1493568000000
    ]
  },
  {
    "key": 16,
    "value": [
      "小16",
      "",
      "",
      "",
      1493568000000
    ]
  },
  {
    "key": 17,
    "value": [
      "小17",
      "",
      "",
      "",
      1493568000000
    ]
  },
  {
    "key": 18,
    "value": [
      "小18",
      "",
      "",
      "",
      1493568000000
    ]
  },
  {
    "key": 19,
    "value": [
      "小19",
      "",
      "",
      "",
      1493568000000
    ]
  },
  {
    "key": 20,
    "value": [
      "小20",
      "",
      "",
      "",
      1493568000000
    ]
  },
  {
    "key": 21,
    "value": [
      "小2一",
      "",
      "",
      "",
      1493568000000
    ]
  },
  {
    "key": 22,
    "value": [
      "小2二",
      "",
      "",
      "",
      1493568000000
    ]
  },
  {
    "key": 23,
    "value": [
      "小23",
      "",
      "",
      "",
      1493568000000
    ]
  }
]
// 默认table data的获取
app.post(path.posix.join(config.dev.assetsPublicPath, 'data/table.html'), function (req, res) {
  var pager = req.body.pager
  var init = req.body.init
  var filters = req.body.filters
  var sorts = req.body.sorts
  var subData = tableData;
  if (filters && filters.name) {
    subData = lodash.filter(tableData, function (o) {
      return o.value[0].indexOf(filters.name) > -1
    })
  }
  if (filters && filters.testDate) {
    subData = lodash.filter(subData, function (o) {
      return (+o.value[4]) < filters.testDate
    })
  }
  if (filters && filters.testSelect) {
    subData = lodash.filter(subData, function (o) {
      return (+o.value[2]) === filters.testSelect
    })
  }
  if (sorts && sorts.name) {
    lodash.reverse(subData)
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
            "editable": true,
            "filter": true,
            "sortable": true
          },
          {
            "name": "testCheckbox",
            "title": "测试多选",
            "type": "checkbox",
            "editable": true,
            "items": [
              {
                "label": "测试1",
                "value": 1
              },
              {
                "label": "测试2",
                "value": 2
              },
              {
                "label": "测试3",
                "value": 3
              }
            ]
          },
          {
            "name": "testSelect",
            "title": "测试select",
            "type": "select",
            "editable": true,
            "filter": true,
            "items": [
              {
                "label": "测试1",
                "value": 1
              },
              {
                "label": "测试2",
                "value": 2
              },
              {
                "label": "测试3",
                "value": 3
              }
            ]
          },
          {
            "name": "testImg",
            "title": "测试图片",
            "type": "image",
            "editable": true,
          },
          {
            "name": "testDate",
            "title": "在此之前",
            "editable": true,
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
        filters,
        sorts
      }
    })
  }
});
app.post(path.posix.join(config.dev.assetsPublicPath, 'data/tablefortree.html'), function (req, res) {
  var from = req.query.from || 0
  var to = req.query.to || 0
  var subData = tableData;
  if (from && !to) {
    subData = tableData.slice(from - 1)
  } else if (from && to) {
    subData = tableData.slice(from - 1, to)
  }
  var pager = req.body.pager
  var init = req.body.init
  var filters = req.body.filters
  if (filters && filters.name) {
    subData = lodash.filter(subData, function (o) {
      return o.value[0].indexOf(filters.name) > -1
    })
  }
  if (filters && filters.testDate) {
    subData = lodash.filter(subData, function (o) {
      return (+o.value[3]) < filters.testDate
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
            "type": "text"
          },
          {
            "name": "testCheckbox",
            "title": "测试多选",
            "type": "checkbox",
            "items": [
              {
                "label": "测试1",
                "value": 1
              },
              {
                "label": "测试2",
                "value": 2
              },
              {
                "label": "测试3",
                "value": 3
              }
            ]
          },
          {
            "name": "testSelect",
            "title": "测试select",
            "type": "select",
            "items": [
              {
                "label": "测试1",
                "value": 1
              },
              {
                "label": "测试2",
                "value": 2
              },
              {
                "label": "测试3",
                "value": 3
              }
            ]
          },
          {
            "name": "testImg",
            "title": "测试图片",
            "type": "image",
          },
          {
            "name": "testDate",
            "title": "在此之前",
            "type": "date",
          }
        ],
        "action": {
          "add": true,
          "detail": true,
          "update": true,
          "delete": true
        },
        "feature": {
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
var formLineAdd = {add1: false, add2: false}
app.get(path.posix.join(config.dev.assetsPublicPath, 'data/form-init.html'), function (req, res) {
  formLineAdd = {add1: false, add2: false}
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
          "type": "password"
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
          "name": "testFile",
          "label": "测试File",
          "type": "file",
          "quantity": 5,
          "validate": [{
            "errorMsg": "只能为图片文件",
            "regex": "\\.(png|jpe?g|gif|svg)(\\?.*)?$"
          }],
          "maxSize": 5000,
          "required": true,
          "path": ["http://www.hopever.cn/mogilefs/images/user/photo/14817789496788475104059462733375755.jpg"]
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
          ],
          "ruleChange": true
        },
        {
          "name": "ruleChange1",
          "label": "联动1",
          "type": "text",
          "validate": [{
            "errorMsg": "不能为空",
            "regex": "^\\S+$"
          }],
          "defaultValue": "联动测试1",
          "placeholder": "联动测试1",
          "locked": false,
          "hidden": false,
          "error": true
        },
        {
          "name": "ruleChange2",
          "label": "联动2",
          "type": "text",
          "validate": [{
            "errorMsg": "不能为空",
            "regex": "^\\S+$"
          }],
          "defaultValue": "联动测试2",
          "placeholder": "联动测试2",
          "locked": false,
          "hidden": true,
          "error": true
        },
        {
          "name": "ruleChange3",
          "label": "联动3",
          "type": "text",
          "validate": [{
            "errorMsg": "不能为空",
            "regex": "^\\S+$"
          }],
          "defaultValue": "联动测试3",
          "placeholder": "联动测试3",
          "locked": false,
          "hidden": true,
          "error": true
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
          "name": "testTree",
          "label": "下拉树控件",
          "type": "tree",
          "treeData": "/static/demo-data/form/tree.json",
          "defaultLabel": "测试3",
          "defaultValue": "3",
          "validate": [
            {
              "errorMsg": "不能为空",
              "regex": "^\\S+$"
            }
          ],
          "placeholder": "点击选择树"
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
        },
        [
          {
            "name": "testInline1",
            "label": "测试Inline1",
            "type": "text",
            "validate": [
              {
                "errorMsg": "不能为空",
                "regex": "^\\S+$"
              }
            ]
          },
          {
            "name": "testInline2",
            "label": "测试Inline2",
            "type": "text"
          },
          {
            "name": "addLine",
            "label": "添加新行",
            "defaultValue": "添加新行",
            "type": "button",
            "ruleChange": true
          }
        ],
        [
          {
            "name": "testInline4",
            "label": "测试Inline4",
            "type": "text",
            "validate": [
              {
                "errorMsg": "不能为空",
                "regex": "^\\S+$"
              }
            ],
            "hidden": true
          },
          {
            "name": "testInline5",
            "label": "测试Inline5",
            "type": "text",
            "hidden": true
          },
          {
            "name": "delLine1",
            "label": "删除本行",
            "defaultValue": "删除本行",
            "type": "button",
            "ruleChange": true,
            "hidden": true
          }
        ],
        [
          {
            "name": "testInline6",
            "label": "测试Inline6",
            "type": "text",
            "validate": [
              {
                "errorMsg": "不能为空",
                "regex": "^\\S+$"
              }
            ],
            "hidden": true
          },
          {
            "name": "testInline7",
            "label": "测试Inline7",
            "type": "text",
            "hidden": true
          },
          {
            "name": "delLine2",
            "label": "删除本行",
            "defaultValue": "删除本行",
            "type": "button",
            "ruleChange": true,
            "hidden": true
          }
        ]
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
app.get(path.posix.join(config.dev.assetsPublicPath, 'data/form-reset.html'), function (req, res) {
  formLineAdd = {add1: false, add2: false}
  var id = parseInt(req.query.key)
  res.end()
});

app.post(path.posix.join(config.dev.assetsPublicPath, 'data/form-rulechange.html'), function (req, res) {
  var data = req.body
  if (data && data.testRadio) {
    if (data.testRadio == '1') {
      res.json([
        {
          "name": "ruleChange1",
          "hidden": false
        }, {
          "name": "ruleChange2",
          "hidden": true
        }, {
          "name": "ruleChange3",
          "hidden": true
        }
      ])
    } else if (data.testRadio == '2') {
      res.json([
        {
          "name": "ruleChange1",
          "hidden": true
        }, {
          "name": "ruleChange2",
          "hidden": false
        }, {
          "name": "ruleChange3",
          "hidden": true
        }
      ])
    } else if (data.testRadio == '3') {
      res.json([
        {
          "name": "ruleChange1",
          "hidden": true
        },
        {
          "name": "ruleChange2",
          "hidden": true
        },
        {
          "name": "ruleChange3",
          "defaultValue": "联动测试3" + new Date().getMilliseconds(),
          "hidden": false
        }
      ])
    }
  }
  if (data && data.addLine) {
    // add line
    if (!formLineAdd.add1) {
      formLineAdd.add1 = true
      res.json([
        {
          "name": "testInline4",
          "hidden": false
        }, {
          "name": "testInline5",
          "hidden": false
        }, {
          "name": "delLine1",
          "hidden": false
        }
      ])
    } else if (!formLineAdd.add2) {
      formLineAdd.add2 = true
      res.json([
        {
          "name": "testInline6",
          "hidden": false
        }, {
          "name": "testInline7",
          "hidden": false
        }, {
          "name": "delLine2",
          "hidden": false
        }
      ])
    }
  }
  if (data && data.delLine1) {
    formLineAdd.add1 = false
    res.json([
      {
        "name": "testInline4",
        "hidden": true
      }, {
        "name": "testInline5",
        "hidden": true
      }, {
        "name": "delLine1",
        "hidden": true
      }
    ])
  }
  if (data && data.delLine2) {
    formLineAdd.add2 = false
    res.json([
      {
        "name": "testInline6",
        "hidden": true
      }, {
        "name": "testInline7",
        "hidden": true
      }, {
        "name": "delLine2",
        "hidden": true
      }
    ])
  }
});
app.post(path.posix.join(config.dev.assetsPublicPath, 'data/form-save.html'), upload.array('testFile', 5), function (req, res) {
  // file deal
  var files = req.files
  let filesPath = []
  for (var index in files) {
    var replacePath = files[index].path + files[index].originalname.replace(/^.*(\.[^\.\?]*)\??.*$/, '$1')
    fs.rename(files[index].path, replacePath, function (err) {
      if (err) console.log('ERROR: ' + err);
    });
    filesPath[index] = uri + "/static/upload/" + replacePath.replace(/^.*[\/\\]+(.*)\??.*$/, '$1')
  }
  var data = req.body
  if (data && data.name) {
    tableData.push({
      "key": new Date().getTime(),
      "value": [
        data.name,
        filesPath,
        filesPath,
        +data.testDate
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
app.get(path.posix.join(config.dev.assetsPublicPath, 'data/tree-item-delete.html'), function (req, res) {
  var id = parseInt(req.query.id)
  if (id == 5 || id == 6) {
    res.json({
      error: {
        header: '该栏目已锁定',
        content: '当前状态，不可删除'
      }
    })
  } else {
    res.end()
  }
});
app.post(path.posix.join(config.dev.assetsPublicPath, 'data/tree-item-save.html'), function (req, res) {
  res.json({
    success: {
      data: {
        id: new Date().getTime()
      }
    }
  })
});
app.post(path.posix.join(config.dev.assetsPublicPath, 'data/tree-item-update.html'), function (req, res) {
  res.end()
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
