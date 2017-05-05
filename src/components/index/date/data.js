import Prism from 'prismjs'
export default [
  {
    'title': 'date代码',
    'content': {
      template: '<pre :data-src="$basePath +\'static/demo-data/date/Date.vue\'"></pre>',
      mounted () {
        Prism.highlightAll()
        Prism.fileHighlight()
      }
    },
    'show': true
  }
]
