module.export = {
	lintOnSave:false,//关闭eslint
	configureWebpack:{
		resolve:{
			extensions:['.js','.vue','.css'],
			alise:{
				//'assets': resolve('@/assets'),
				'assets':'src/assets',
				'common':'src/common',
				'pages':'src/pages'
			}
		}
	}
}
