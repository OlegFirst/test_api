import Form from 'react-bootstrap/Form';
import Badge from 'react-bootstrap/Badge';

import './SubjectsDropdown.scss';

import { unionInterface } from '../../../../common/settings';

const SubjectsDropdown = (props: any) => {
	const {
		unionItems,
		errorMessage
	} = props;
	
	const onChange = (e: any) => {
		props.onChange({
			name: 'day',
			value: e.currentTarget.value
		});
	};
	
	return (
		<div className='SubjectsDropdown'>
			<Form.Select aria-label="Default select example" onChange={onChange}>
				<option value={''} disabled={false}>Select subject, please</option>
			
				{unionItems.map((item: unionInterface, index: number) => {
					const { scheduleId, day, subject, firstName, lastName } = item;
					
					const message = !firstName ? subject : subject + ', ' + firstName + ' ' + lastName;
					
					return (
						<option 
							value={day}
							key={index}
							disabled={firstName != null}
						>						
							{message}
						</option>
					)
				})}
			</Form.Select>
			
			{errorMessage && (<span className='SubjectsDropdown__error'>{errorMessage}</span>)}
		</div>
	)
}

export default SubjectsDropdown;