import Form from 'react-bootstrap/Form';

import './TeachersDropdown.scss';

import { teachersInterface } from '../../../../common/settings';

const TeachersDropdown = (props: any) => {
	const {
		teacherItems,
		errorMessage
	} = props;
	
	const onChange = (e: any) => {
		props.onChange({
			name: 'teacherId',
			value: e.currentTarget.value
		});
	};
	
	return (
		<div className='TeachersDropdown'>
			<Form.Select aria-label="Default select example" onChange={onChange}>
				<option value={''} disabled={false}>Select teacher, please</option>
			
				{teacherItems.map((item: teachersInterface) => {
					const { id, firstName, lastName } = item;
					
					return (
						<option 
							value={id}
							key={id}
						>
							{firstName} {lastName}
						</option>
					)
				})}
			</Form.Select>
			
			{errorMessage && (<span className='TeachersDropdown__error'>{errorMessage}</span>)}
		</div>
	)
};

export default TeachersDropdown;