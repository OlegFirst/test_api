import { dayNames } from './constants';
import { dayNameInterface } from './settings';

export const dayMatch = (currentDay: string): any => {
	const dayName: dayNameInterface | undefined =
		dayNames.find(({ day, name }) => day === currentDay.toLowerCase());
	
	return dayName?.name ?? 'Not valid day';
};

export const mappingTeacherItems = (data: any) => (
	data.map((item: any) => ({
		id: item.id,
		firstName: item.first_name,
		lastName: item.last_name
	}))
);