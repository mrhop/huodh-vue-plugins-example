<template>
  <div class="panel-sample">
    <panel>
      <h1 slot="header">full width Panel</h1>
      <p>content here</p>
      [code]
      <pre :data-src="$basePath + 'static/demo-data/panel.html'"></pre>
      <span slot="footer">panel desc</span>
    </panel>
    <div class="row">
      <panel :col="6">
        <h1 slot="header">1/2</h1>
        <p>content here</p>
        [code]
        <pre :data-src="$basePath +'static/demo-data/panel-6.html'"></pre>
        <span slot="footer">panel desc</span>
      </panel>
      <panel :col="6">
        <h1 slot="header">2/2</h1>
        这里可以放置其他内容，也可以嵌套其他插件和组件
        <span slot="footer">panel desc</span>
      </panel>
    </div>
    <panel :col="4">
      <h2 slot="header">1/3</h2>
      这里可以放置其他内容，也可以嵌套其他插件和组件
      <span slot="footer">panel desc</span>
    </panel>
    <panel :col="4">
      <h2 slot="header">2/3</h2>
      这里可以放置其他内容，也可以嵌套其他插件和组件
      <span slot="footer">panel desc</span>
    </panel>
    <panel :col="4">
      <h2 slot="header">3/3</h2>
      这里可以放置其他内容，也可以嵌套其他插件和组件
      <span slot="footer">panel desc</span>
    </panel>
    <panel :col="3">
      <h2 slot="header">1/4</h2>
      这里可以放置其他内容，也可以嵌套其他插件和组件
      <span slot="footer">panel desc</span>
    </panel>
    <panel :col="3">
      <h2 slot="header">2/4</h2>
      这里可以放置其他内容，也可以嵌套其他插件和组件
      <span slot="footer">panel desc</span>
    </panel>
    <panel :col="3">
      <h2 slot="header">3/4</h2>
      这里可以放置其他内容，也可以嵌套其他插件和组件
      <span slot="footer">panel desc</span>
    </panel>
    <panel :col="3">
      <h2 slot="header">4/4</h2>
      这里可以放置其他内容，也可以嵌套其他插件和组件
      <span slot="footer">panel desc</span>
    </panel>
    <panel :col="7">
      <h2 slot="header">7/12</h2>
      这里可以放置其他内容，也可以嵌套其他插件和组件
      <span slot="footer">panel desc</span>
    </panel>
    <panel :col="5">
      <h2 slot="header">5/12</h2>
      这里可以放置其他内容，也可以嵌套其他插件和组件
      <span slot="footer">panel desc</span>
    </panel>
  </div>
</template>

<script>
  import Prism from 'prismjs'
  import huodhVuePlugins from 'huodh-vue-plugins'
  let panel = huodhVuePlugins.panel
  export default{
    components: {
      panel
    },
    mounted () {
      //  Prism.highlightAll()
      Prism.fileHighlight()
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .panel-sample {
    .row {
      margin: 0;
    }
  }
</style>
