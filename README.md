# damedane
专业技术人员学习新干线，的一些便利的方法。

## 方案一
只破解20分钟弹验证码问题，通过覆盖原弹框计时器返回值，屏蔽弹窗。
```javascript
function isPopWin(playTime){
	return false;
}
```
