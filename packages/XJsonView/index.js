import XJsonView from './src/index.vue';

// 为组件提供 install 安装方法，供按需引入
XJsonView.install = function (Vue) {
  Vue.component(XJsonView.name, XJsonView);
};

// 导出组件
export default XJsonView;
