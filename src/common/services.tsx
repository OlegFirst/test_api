import { serverName } from '../common/constants';

// @var endPoint as String, queryData as Object
export async function getData(endPoint = '', queryData = '') {
	const query = 
		Object.entries(queryData)
		.reduce((acc, item) => {
			const prefix = !acc ? '?' : '&';
			
			return acc += prefix + item[0] + '=' + item[1];
		}, '');
	
	const response = await fetch(serverName + '/' + endPoint + query, {
		method: 'GET',
		mode: 'no-cors',
		cache: 'no-cache',
		headers: {
			'Content-Type': 'application/json'
		}
	});
	
	return response;
};