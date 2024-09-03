import { dayNames } from './constants';
import { dayNameInterface } from './settings';

export const dayMatch = (currentDay: string): any => {
	const dayName: dayNameInterface | undefined =
		dayNames.find(({ day, name }) => day === currentDay.toLowerCase());
	
	return dayName?.name ?? 'Not valid day';
};