import Vue from 'vue'

/*
* Element-UI模块
* 包括自定义主题以及更改默认语言
*/
import Element from 'element-ui'
//自定义Element主题
import '@/assets/css/element-variables.scss'
//更改Element默认语言为英文
import locale from 'element-ui/lib/locale/lang/en'
Vue.use(Element, { locale })


