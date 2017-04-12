<template>
  <div id="index-app">
    <!--左侧树，使用scrollbar的植入方式-->
    <div class="left-tree">
      <tree :treeData="treeData"/>
    </div>
    <!--右侧content-->
    <div class="right-content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import huodhVuePlugins from 'huodh-vue-plugins'
  import {commonUrls} from '../common'
  let tree = huodhVuePlugins.tree
  // 树的初始化
  export default {
    name: 'index',
    data () {
      return {
        treeData: commonUrls.leftTree
      }
    },
    components: {
      tree
    }
  }
</script>

<style scoped>
  @import '../../../node_modules/prismjs/themes/prism-coy.css';
</style>
