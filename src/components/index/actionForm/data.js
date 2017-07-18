import Prism from 'prismjs'
export default [
  {
    'title': 'form代码',
    'content': {
      template: '<pre :data-src="$basePath +\'static/demo-data/actionsComponents/actionForm/ActionForm.vue\'"></pre>'
    },
    'show': true
  },
  {
    'title': 'form数据格式',
    'content': {
      template: '<pre :data-src="$basePath +\'static/demo-data/form/form.json\'"></pre>'
    },
    'show': false
  },
  {
    'title': 'form中tree element数据',
    'content': {
      template: '<pre :data-src="$basePath +\'static/demo-data/form/tree.json\'"></pre>',
      mounted () {
        Prism.highlightAll()
        Prism.fileHighlight()
      }
    },
    'show': false
  },
  {
    'title': '联动规则',
    'url': 'static/demo-data/form/linkage-desc.html',
    'show': false
  }
]
