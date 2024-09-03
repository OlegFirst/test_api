import Form from 'react-bootstrap/Form';

import './SubjectsDropdown.scss';

import { scheduleInterface } from '../../../../common/settings';

const SubjectsDropdown = (props: any) => {
	const {
		scheduleItems,
		errorMessage
	} = props;
	
	const onChange = (e: any) => {
		// props.onChange({
			// name: 'day',
			// value: e.currentTarget.value
		// });
	};
	
	return (
		<div className='SubjectsDropdown'>
			<Form.Select aria-label="Default select example" onChange={onChange}>
				<option value={''} disabled={false}>Select subject, please</option>
			
				{scheduleItems.map((item: scheduleInterface) => {
					const { id, subject } = item;
					
					return (
						<option 
							value={subject}
							key={id}
						>
							{subject}
						</option>
					)
				})}
			</Form.Select>
			
			{errorMessage && (<span className='Dropdown__error'>{errorMessage}</span>)}
		</div>
	)
}

export default SubjectsDropdown;