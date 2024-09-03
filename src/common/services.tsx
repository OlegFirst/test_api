import { serverName } from '../common/constants';

/*
* @var endPoint as String, queryData as Object
*/
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

/*
* @var data as Object
*/
export async function postData(endPoint = '', data = {}) {	
	const response = await fetch(serverName + '/' + endPoint, {
		method: 'POST',
		mode: 'no-cors',
		cache: 'no-cache',
		headers: {
			'Content-Type': 'application/json',
			// "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
		},
		// body: JSON.stringify({ name: 33 })
		body: JSON.stringify(data)
	});
	
	return response;
};