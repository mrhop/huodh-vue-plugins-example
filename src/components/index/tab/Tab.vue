<template>
  <div class="tab-sample">
    <panel>
      <tab :data="tabData"/>
      <span slot="footer">test the tabs</span>
    </panel>
  </div>
</template>

<script>
  import huodhVuePlugins from 'huodh-vue-plugins'
  import data from './data'
  let panel = huodhVuePlugins.panel
  let tab = huodhVuePlugins.tab
  export default{
    data () {
      return {
        tabData: data
      }
    },
    components: {
      panel, tab
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .tab-sample {
    overflow: hidden;
  }
</style>
