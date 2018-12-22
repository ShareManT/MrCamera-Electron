import Vue from 'vue';
import axios from 'axios';
import App from './App';
import router from './router';
import store from './store';
import iView from 'iview';
import db from './datastore';
import vueCropper from 'vue-cropper';
import kebabCase from 'lodash/kebabCase';
import './assets/iview.less';
import './assets/override.scss';

Vue.config.productionTip = false;

if (!process.env.IS_WEB) Vue.use(require('vue-electron'));
Vue.use(iView);
Vue.use(vueCropper);

Vue.http = Vue.prototype.$http = axios;
Vue.prototype.$db = db;
Vue.prototype.$getId = () => {
  return Number(Math.random().toString().substr(3, length) + Date.now()).toString(36);
};

const nextComponents = require.context('./components', true, /\.vue$/);
nextComponents.keys().forEach(fileName => {
  const componentConfig = nextComponents(fileName);
  const componentName = kebabCase(
    fileName.replace(/^\.\/(.*)\.\w+$/, '$1')
  );
  Vue.component(
    componentName,
    componentConfig.default || componentConfig
  );
});

let devInnerHeight = 1080.0;
let devDevicePixelRatio = 1.0;
let devScaleFactor = 1.3;
let scaleFactor = require('electron').screen.getPrimaryDisplay().scaleFactor;
let zoomFactor = (window.innerHeight / devInnerHeight) * (window.devicePixelRatio / devDevicePixelRatio) * (devScaleFactor / scaleFactor);
require('electron').webFrame.setZoomFactor(zoomFactor);

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app');
