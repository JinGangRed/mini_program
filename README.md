# 微信小程序快速启动项目

这个项目是微信小程序的简单示例项目，便于项目快速开发。同步[博客](https://www.cnblogs.com/kingkangstudy/category/1320390.html)


  - [如何使用这个项目](#如何使用这个项目)
  - [项目目录结构](#项目目录结构)

# 如何使用这个项目
  - 下载[微信开发者工具](https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html)
  - 下载本项目,https://github.com/JinGangRed/mini_program.git
  - 在项目的根目录下，创建一个名为 'project.config.json'
    - 粘贴下边的代码到文件中,注意修改项目的APPID和项目名称
    ```
    {
	    "description": "项目配置文件。",
	    "packOptions": {
		    "ignore": []
	    },
	    "setting": {
		    "urlCheck": true,
		    "es6": true,
		    "postcss": true,
		    "minified": true,
		    "newFeature": true
	    },
	    "compileType": "miniprogram",
	    "libVersion": "2.3.0",
	    "appid": "{WeChat AppID}",
	    "projectname": "quicklystart",
	    "isGameTourist": false,
	    "condition": {
		    "search": {
			"current": -1,
			"list": []
		},
		"conversation": {
			"current": -1,
			"list": []
		},
		"game": {
			"currentL": -1,
			"list": []
		},
		"miniprogram": {
			"current": -1,
			"list": []
	    }
    }
    ```
# 项目目录结构
```
.
├──  assets                 项目的资源文件，如一些图片资源
├──  configs                项目的配置文件，如后端API的URL地址  
├──  pages                  项目的页面,这里只存放tab的页面
│   ├──  index              项目的首页index页面
│       ├──  index.js       index页面的页面逻辑
│       ├──  index.json     index页面配置  
│       ├──  index.wxml     index页面 
│       ├──  index.wxss     index页面样式
├── services                小程序的服务调用
├── subpages                子页面，便于分包，降低首次加载的时候，下载慢的问题
├── utils                   项目的一些工具类
├── app.js                  小程序逻辑
├── app.json                小程序公共配置
├── app.wxss                小程序公共样式表
├── project.config.json     小程序的项目配置
.


```



