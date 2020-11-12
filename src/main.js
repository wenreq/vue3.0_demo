import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from './router'
import store from './store'
import { Button } from 'vant';
import 'vant/lib/index.css'; // 全局引入样式
// 这里 lib-flexible 是网页做 html 的 font-size 适配用的，所以需要安装到 dependencies。而 postcss-pxtorem 是在编译的时候对 px 单位转换为 rem 单位时使用，所以安装到 devDependencies 便可。
import 'lib-flexible/flexible'

const app = createApp(App)

app.use(router)
app.use(store)
app.use(Button) // 注册组件

app.mount('#app')
