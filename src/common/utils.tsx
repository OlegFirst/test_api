import { dayNames } from './constants';
import { dayNameInterface, unionInterface, teachersInterface } from './settings';

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

export const mappingUnionItems = (data: any) => (
	data.map((item: any) => ({
		scheduleId: Number(item.schedule_id),
		teacherId: Number(item.teacher_id),
		day: item.day,
		subject: item.subject,
		firstName: item.first_name,
		lastName: item.last_name
	}))
);