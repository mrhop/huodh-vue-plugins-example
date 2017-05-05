//用于nodejs的测试使用
var express = require('express');

var bodyParser = require('body-parser');
var lodash = require('lodash')

var app = express();

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


// table data init
var tableData = [
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
app.post('/data/table.html', function (req, res) {
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
        "pager": pager
      }
    })
  } else {
    res.json({
      "data": {
        "rows": returnData,
        "totalCount": subData.length,
        "pager": pager,
        "filters": filters
      }
    })
  }
});
app.get('/data/table-delete.html', function (req, res) {
  var id = parseInt(req.query.key)
  lodash.remove(tableData, function (o) {
    return o.key === id
  });
  res.end();
});
app.get( '/data/form-init.html', function (req, res) {
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
app.post('/data/form-save.html', function (req, res) {
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
app.listen(3000, function () {
  console.log('Test Liaonong app listening on port 3000!');
});
