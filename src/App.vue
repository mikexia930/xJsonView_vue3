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
      jsonData: "{data:{dimensions:{global:{eventName:'device_login'}}},modelSelected:{dateDiff:86400,isApproximate:false,beginDateTimeCompare:'2022-10-10',chooseDateKey:'D|246|245',dateFormatUse:0,beginDateTime:'2022-10-10',endDateTime:'2022-10-11',chooseDateKeyCompare:'D|246|245',isNeedCompare:false,endDateTimeCompare:'2022-10-11'},selected:{correctDimensions:[{filter:{type:1},identify:'3da92b6eaf50d6b10d881190e3038187',history:{type:'LATEST'},dimension:{columnType:'varchar',tableType:0,quotaDesc:'激活时省份',hasDict:false,identify:'14_0',quota:'activation_province',columnIndex:17,selectType:'string',propType:'event_prop'}},{filter:{type:1},identify:'6d4434396926301dcd54773e651410a0',history:{type:'LATEST'},dimension:{columnType:'varchar',tableType:0,quotaDesc:'城市',hasDict:false,identify:'47_0',quota:'city',columnIndex:11,selectType:'string',propType:'event_prop'}},{filter:{type:1},identify:'238b512d7702ad9720abf6c68f15352f',history:{type:'LATEST'},dimension:{columnType:'varchar',tableType:0,quotaDesc:'激活时网络运营商',hasDict:false,identify:'13_0',quota:'activation_provider',columnIndex:28,selectType:'string',propType:'event_prop'}}],isTimeParticleSize:false,correctDimensionNumberRange:{},globalDimension:{items:[],relation:'and'},timeParticleSize:'total',correctCustom:[{identify:'b5d2eadd2231e25d54af2cc1c326601a',data:{identify:'546351e35aa09c7ab538e2793fdd99ba',name:'',filters:{items:[],relation:'and'},event:{eventDesc:'App 启动',eventName:'device_login'},isShowEditName:false,properties:{quotaDesc:'总次数',quota:'total_times'}},type:'index',formulaData:{unit:'twoBit',identify:'65536f08bb434116733be3200accf40b',name:'自定义公式',filters:{items:[],relation:'and'},leftBracket:'',items:[]}},{identify:'31589c10f6fde38fe314e2729ad51c0c',data:{identify:'baf131466acd2cbf82d2e4850f12cdda',name:'',filters:{items:[],relation:'and'},event:{eventDesc:'App 启动',eventName:'device_login'},isShowEditName:false,properties:{quotaDesc:'触发设备数',quota:'trig_device_num'}},type:'index',formulaData:{unit:'twoBit',identify:'7a2256c02fd8e1f5d2008902843b764d',name:'自定义公式',filters:{items:[],relation:'and'},leftBracket:'',items:[]}},{identify:'1d21f8f43c185e7363e39cc5150456fb',data:{identify:'f2929590b5d2dad9dfa53d303078529a',name:'',filters:{items:[],relation:'and'},event:{eventDesc:'App 启动',eventName:'device_login'},isShowEditName:false,properties:{quotaDesc:'设备平均次数',quota:'per_device_times'}},type:'index',formulaData:{unit:'twoBit',identify:'cecfdede03f41c635b6e5ad1ead58f1f',name:'自定义公式',filters:{items:[],relation:'and'},leftBracket:'',items:[]}}],chart:{eventsSelected:['App 启动的总次数'],dimensionSelectAll:false,dimensionSortableData:{isSort:true,topNumber:10,isValid:true,type:'value-desc'},dimensionsSelected:['广东,广州,中国移动','广东,广州,中国联通','广东,广州,CMCC','广东,广州,中国电信','广东,广州,unknown','广东,广州,CHN-UNICOM','广东,广州,CHN-CT','广东,广州,CHINA MOBILE','广东,广州,中國移動','广东,广州,無服務'],typeSelect:'barDistribution',eventsSelect:['App 启动的总次数']},table:{sort:{},type:'pivot'}}}",
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
