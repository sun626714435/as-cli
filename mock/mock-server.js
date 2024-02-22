const jsonServer = require('json-server');
const getMockData = require('./read-mock-data-file');
const {port, prefix} = require('./config');

let count = 0;

getMockData((mockData)=> {
	const server = jsonServer.create();
	server.use(jsonServer.bodyParser);
	mockData.forEach(data=>{
		for (const registerUrl in data){
			let method = '';
			const urlParts = registerUrl.split(':');
			let route = urlParts[1];
			if(urlParts.indexOf('POST') === 0){
				method = 'post'
			}else if(urlParts.indexOf('PUT') === 0){
				method = 'put'
			}else if(urlParts.indexOf('DELETE') === 0){
				method = 'delete'
			}else{
				method = 'get';
			}
			// ignorePrefix 可以忽略前缀
			const url = urlParts[2] === 'ignorePrefix' ?  `${route}` : `${prefix}${route}`;
			console.log(`register route : ${method.toUpperCase()} ${url}`);
			count ++;
			server[method](url, (req, res) => {
				const realUrl = `${req.method}:${req.url.replace(prefix,'')}`;
				// 直接用真实的url获取数据 如果没有用注册的url获取数据
				const result = data[realUrl] ? data[realUrl] : data[registerUrl] ;
				if(typeof result ==='object'){
					res.jsonp(result);
				}else if(typeof result ==='function'){
					try {
						result(req,res);
					} catch (e) {
						console.error(e);
					}
				}else{
					console.error('return mock data format error');
				}
			})
		}
	});
	server.listen(port, () => {
		console.log(`the mock server is running at ${port}, total: ${count}`);
	});
});
