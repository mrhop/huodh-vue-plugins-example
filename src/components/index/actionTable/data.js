import Prism from 'prismjs'
export default [
  {
    'title': 'table代码',
    'content': {
      template: '<pre :data-src="$basePath +\'static/demo-data/actionsComponents/actionTable/ActionTable.vue\'"></pre>'
    },
    'show': true
  },
  {
    'title': 'table数据格式',
    'content': {
      template: '<pre :data-src="$basePath +\'static/demo-data/table/table.json\'"></pre>',
      mounted () {
        Prism.highlightAll()
        Prism.fileHighlight()
      }
    },
    'show': false
  }
]
