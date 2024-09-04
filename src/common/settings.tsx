export interface navigationItemInterface {
	name: string,
	url: string
};

export interface scheduleInterface {
	id: number,
	day: string,
	subject: string
};

export interface teachersInterface {
	id: number,
	firstName: string,
	lastName: string
};

export interface unionInterface {
	scheduleId: number,
	teacherId: number,
	day: string,
	subject: string,
	firstName: string,
	lastName: string
};

export interface dayNameInterface {
	day: string,
	name: string
};

export interface errorMessagesInterface {
	modal: string,
	inputs: {
		[key: string]: any
	}
};