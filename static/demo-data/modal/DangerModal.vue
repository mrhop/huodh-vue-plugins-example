<template>
  <div>
    <button class="btn btn-danger" @click="createDefaultModal">点击我</button>
  </div>
</template>

<script>
  export default{
    data () {
      return {
        dataDefault: {
          type: 'danger',
          header: 'Danger Modal',
          showFooter: true,
          content: 'just test a single line'
        }
      }
    },
    methods: {
      createDefaultModal () {
        this.$Vue.createModal({modalData: this.dataDefault})
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  button {
    margin: 15px;
  }
</style>
