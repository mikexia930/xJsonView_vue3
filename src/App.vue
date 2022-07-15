<template>
  <div id="app">
    <div> Json String</div>
    <textarea v-model="jsonData"></textarea>
    <XJsonView
      :show-depth="2"
      :json-data="jsonData"
      :is-show-err-notice="true"
      :wrap-class="'x-parse-view'"
      @handleJsonView="handleJsonView"
    >
      <template slot="open">+</template>
      <template slot="close">-</template>
    </XJsonView>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'
// import {XJsonView} from '../packages/index';

export default defineComponent({
  name: 'App',
  components: {
    // XJsonView,
  },
  data() {
    return {
      isErr: false,
      jsonData: '{"index":"8si2lja0z88f9bnb","module":"GameAnalysis","open_id":null,"properties":{"persist_uuid":"b5f3be35-ad7a-43fb-aa85-6f064fe73e52","install_uuid":"cfd04668-8b56-465d-8faa-e6fcf4ca2fe4","network":"2","system_version":"Windows 10  (10.0.0) 64bit","ver":"7.18","width":2560,"ga_ver":"3.0.7","device":"Windows","identifyType":"mobile","height":1440,"channel":"TapTap","provider":"unknown","device_name":"B460MAORUSELITE (Gigabyte Technology Co., Ltd.)"},"identify":"823d7de59ff8027de6a0c70b1c4d78710d26de40","user_id":null}',
    };
  },
  setup() {
    const handleJsonView = (data) => {
      console.log(data);
    }
    return {
      handleJsonView,
    }
  }
})
</script>

<style scoped>
textarea {
  width: 600px;
  height: 300px;
  margin-bottom: 20px;
}
</style>
