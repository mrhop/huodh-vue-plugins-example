<template>
  <div class="container-fluid head">
    <div class="pull-left">
      <h3><span class="brand">Test</span>Management</h3>
    </div>
    <div class="pull-right">
      <a href="logout" title="logout">Logout<span class="glyphicon glyphicon-menu-right"></span></a>
    </div>
  </div>
</template>

<script></script>

<!-- 加入scoped是为了防止本组件中的css渗透到其他组件，可以去掉看看结果 -->
<style scoped>
  h1 {
    color: black;
  }
</style>
