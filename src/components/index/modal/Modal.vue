<template>
  <div class="modal-sample">
    <panel :col="6">
      <tab :data="defaultModalData"/>
      <span slot="footer">test the default modal</span>
    </panel>
    <panel :col="6">
      <tab :data="modalNoFooterData"/>
      <span slot="footer">test the no footer modal</span>
    </panel>
    <panel :col="6">
      <tab :data="confirmModalData"/>
      <span slot="footer">test the confirm Modal</span>
    </panel>
    <panel :col="6">
      <tab :data="primaryModalData"/>
      <span slot="footer">test the primary Modal</span>
    </panel>
    <panel :col="6">
      <tab :data="successModalData"/>
      <span slot="footer">test the success Modal</span>
    </panel>
    <panel :col="6">
      <tab :data="infoModalData"/>
      <span slot="footer">test the info Modal</span>
    </panel>
    <panel :col="6">
      <tab :data="dangerModalData"/>
      <span slot="footer">test the danger Modal</span>
    </panel>
  </div>
</template>

<script>
  import Prism from 'prismjs'
  import huodhVuePlugins from 'huodh-vue-plugins'
  import defaultModal from './DefaultModal.vue'
  import modalNoFooter from './ModalNoFooter.vue'
  import confirmModal from './ConfirmModal.vue'
  import primaryModal from './PrimaryModal.vue'
  import successModal from './SuccessModal.vue'
  import infoModal from './InfoModal.vue'
  import dangerModal from './DangerModal.vue'
  let panel = huodhVuePlugins.panel
  let tab = huodhVuePlugins.tab
  export default{
    data () {
      return {
        defaultModalData: [
          {
            title: 'default Modal',
            content: defaultModal,
            'show': true
          },
          {
            title: 'code&data',
            content: {
              template: '<pre class=" language-javascript" :data-src="$basePath +\'static/demo-data/modal/DefaultModal.vue\'"></pre>'
            },
            'show': false
          }
        ],
        modalNoFooterData: [
          {
            title: 'No footer Modal',
            content: modalNoFooter,
            'show': true
          },
          {
            title: 'code&data',
            content: {
              template: '<pre class=" language-javascript" :data-src="$basePath +\'static/demo-data/modal/ModalNoFooter.vue\'"></pre>'
            },
            'show': false
          }
        ],
        confirmModalData: [
          {
            title: 'Confirm Modal',
            content: confirmModal,
            'show': true
          },
          {
            title: 'code&data',
            content: {
              template: '<pre class=" language-javascript" :data-src="$basePath +\'static/demo-data/modal/ConfirmModal.vue\'"></pre>'
            },
            'show': false
          }
        ],
        primaryModalData: [
          {
            title: 'Primary Modal',
            content: primaryModal,
            'show': true
          },
          {
            title: 'code&data',
            content: {
              template: '<pre class=" language-javascript" :data-src="$basePath +\'static/demo-data/modal/PrimaryModal.vue\'"></pre>'
            },
            'show': false
          }
        ],
        successModalData: [
          {
            title: 'Success Modal',
            content: successModal,
            'show': true
          },
          {
            title: 'code&data',
            content: {
              template: '<pre class=" language-javascript" :data-src="$basePath +\'static/demo-data/modal/SuccessModal.vue\'"></pre>'
            },
            'show': false
          }
        ],
        infoModalData: [
          {
            title: 'Info Modal',
            content: infoModal,
            'show': true
          },
          {
            title: 'code&data',
            content: {
              template: '<pre class=" language-javascript" :data-src="$basePath +\'static/demo-data/modal/InfoModal.vue\'"></pre>'
            },
            'show': false
          }
        ],
        dangerModalData: [
          {
            title: 'Danger Modal',
            content: dangerModal,
            'show': true
          },
          {
            title: 'code&data',
            content: {
              template: '<pre class=" language-javascript" :data-src="$basePath +\'static/demo-data/modal/DangerModal.vue\'"></pre>',
              mounted () {
                Prism.highlightAll()
                Prism.fileHighlight()
              }
            },
            'show': false
          }
        ]
      }
    },
    components: {panel, tab}
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .modal-sample {
    .tab-body {
      padding: 15px;
    }
    button {
      margin: 15px;
    }
  }
</style>
