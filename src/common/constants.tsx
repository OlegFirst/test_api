import { navigationItemInterface, dayNameInterface } from './settings';

export const serverName: string = 'http://localhost/solovey_studio_test/server_api/api';

export const navigationItems: navigationItemInterface[] = [
	{
		name: 'Home',
		url: '/'
	},
	{
		name: 'Schedule',
		url: '/schedule'
	}
];

export const enum requestStatusList {
	NONE,
	SUCCESS,
	PENDING,
	ERROR
};

export const requestStatusInitialState = requestStatusList.NONE;

export const dayNames: dayNameInterface[] = [
	{
		day: 'sun',
		name: 'Sunday'
	},
	{
		day: 'mon',
		name: 'Monday'
	},
	{
		day: 'tue',
		name: 'Tuesday'
	},
	{
		day: 'wed',
		name: 'Wednesday'
	},
	{
		day: 'thu',
		name: 'Thursday'
	},
	{
		day: 'fri',
		name: 'Friday'
	},
	{
		day: 'sat',
		name: 'Saturday'
	}
];