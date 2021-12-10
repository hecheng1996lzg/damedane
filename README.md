# damedane
专业技术人员学习新干线，的一些便利的方法。

## 方案一
只破解20分钟弹验证码问题，通过覆盖原弹框计时器返回值，屏蔽弹窗。
```javascript
function isPopWin(playTime){
	return false;
}
```

## 方案二
通过安装chrome插件来自动破解20分钟弹验证码。  
从右上角菜单->更多工具->扩展程序可以进入 插件管理页面，也可以直接在地址栏输入 [chrome://extensions](chrome://extensions/) 访问。

![](http://image.liuxianan.com/201706/20170620_195047_992_5668.png)

勾选`开发者模式`即可以文件夹的形式直接加载插件，否则只能安装`.crx`格式的文件。Chrome要求插件必须从它的Chrome应用商店安装，其它任何网站下载的都无法直接安装，所以，其实我们可以把`crx`文件解压，然后通过开发者模式直接加载。
