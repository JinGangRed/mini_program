# 微信小程序快速启动项目

这个项目是微信小程序的简单示例项目，便于项目快速开发。同步[博客](https://www.cnblogs.com/kingkangstudy/category/1319541.html)

  - 项目目录结构
  - 如何使用这个项目

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

