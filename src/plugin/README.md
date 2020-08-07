## plugin 模块
> 扩展 Vue 对象

### 说明
- 为 Vue 添加第三方、自定义组件库、插件
- 添加实例属性、方法, `Vue.prototype.[property]`
- 添加全局静态属性、方法,  `Vue.[property]`

### 注意事项
- 添加实例属性, 位置: properties.js, 应以 `$` 为键名前缀, 避免污染全局作用域, 且不能和 Vue 及其原型上的属性名冲突
- 添加业务方法, 位置: methods.js, 应以 `$_` 为键名前缀, 不少于 4 个字符
- 添加自定义组件, 位置: components.js, **推荐**为组件名加上**统一**的字符前缀, 防止命名冲突, 需要注意的是: 如果在自定义组件中已设置 `name` 选项, 那么在注册组件 `Vue.component(id
, definition)` 时, 这里的 `id` 将是 "别名", 实际上会优先使用内部 `name` 选项作为真正的组件名
- 非常用属性、方法, 放置 libs 模块内, 使用 `require/import` 引入具体业务逻辑, 无需挂载到 Vue 原型下

  **注**: 添加自定义的属性、方法、组件时, 会默认对进行命名冲突校验