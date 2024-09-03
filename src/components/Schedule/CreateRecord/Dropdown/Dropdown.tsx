import Form from 'react-bootstrap/Form';

import './Dropdown.scss';

import { dayNameInterface } from '../../../../common/settings';
import { dayNames } from '../../../../common/constants';

interface dropdownDayNameInterface {
	day: string,
	name: string,
	isDisabled: boolean
};

const Dropdown = (props: any) => {
	const {
		storedDays,
		errorMessage
	} = props;
	
	const dropdownDayNameItems: dropdownDayNameInterface[] = dayNames.map((item: dayNameInterface) => {
		const isDisabled = storedDays.some((storedDay: any) => storedDay.day === item.day);
		
		return {
			...item,
			isDisabled 
		};
	});		
	
	const onChange = (e: any) => {
		props.onChange({
			name: 'day',
			value: e.currentTarget.value
		});
	};
	
	return (
		<div className='Dropdown'>
			<Form.Select aria-label="Default select example" onChange={onChange}>
				<option value={''} disabled={false}>Select day, please</option>
			
				{dropdownDayNameItems.map((item: dropdownDayNameInterface, index: number) => {
					const { day, name, isDisabled } = item;
					
					return (
						<option 
							value={day}
							key={index}
							disabled={isDisabled}
						>
							{name}
						</option>
					)
				})}
			</Form.Select>
			
			{errorMessage && (<span className='Dropdown__error'>{errorMessage}</span>)}
		</div>
	)
};

export default Dropdown;