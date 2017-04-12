import Prism from 'prismjs'
export default [
  {
    'title': 'tree代码',
    'content': {
      template: '<pre :data-src="$basePath +\'static/demo-data/tree/Tree.vue\'"></pre>'
    },
    'show': true
  },
  {
    'title': 'tree数据格式',
    'content': {
      template: '<pre :data-src="$basePath +\'static/demo-data/tree/tree.json\'"></pre>',
      mounted () {
        Prism.highlightAll()
        Prism.fileHighlight()
      }
    },
    'show': false
  }
]
