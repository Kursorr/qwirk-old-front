<template>
  <div>
    <h1>
      <slot></slot>
    </h1>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator'

  @Component
  export default class Server extends Vue {
  }
</script>

<style lang="scss" scoped>
  div {
    box-shadow: 0 1px 0 rgba(0,0,0,.2), 0 1.5px 0 rgba(0,0,0,.05), 0 2px 0 rgba(0,0,0,.05);
    margin-bottom: 15px;

    h1 {
      margin-left: 18px;
      font-size: 16px;
      line-height: 20px;
      font-weight: 500;
      padding: 14px 0;
    }
  }
</style>
