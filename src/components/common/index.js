/**
 * Created by Donghui Huo on 2017/3/21.
 */
// global.basePath = '/test_a1b2/'
global.basePath = ''
var commonUrls = {
  leftTree: global.basePath + 'static/demo-data/tree.json',
  leftTreeDemo: global.basePath + 'static/demo-data/tree/tree.json',
  testTableInit: global.basePath + 'data/table.html',
  testTableRowDel: global.basePath + 'data/table-delete.html',
  testFormInit: global.basePath + 'data/form-init.html',
  testFormSave: global.basePath + 'data/form-save.html',
  vuerouter: {
    testTable: 'table',
    testForm: 'form'
  }
}

export {
  commonUrls
}
