import Prism from 'prismjs'
export default [
  {
    'title': '代码',
    'content': {
      template: '<pre :data-src="$basePath +\'static/demo-data/treeWithTable/TreeWithTable.vue\'"></pre>'
    },
    'show': true
  },
  {
    'title': 'Tree数据格式',
    'content': {
      template: '<pre :data-src="$basePath +\'static/demo-data/treeWithTable/tree.json\'"></pre>',
      mounted () {
        Prism.highlightAll()
        Prism.fileHighlight()
      }
    },
    'show': false
  }
]
