module.exports = {
	"port": 8123,
	"server": {
		"baseDir": ["./src", "./node_modules"],
		routes : {
			'/node_modules' : './node_modules',
			'/systemjs.config.js' : './systemjs.config.js'
		}
	}
};