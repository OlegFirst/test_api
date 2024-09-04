import { useState } from 'react';

import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';

import SubjectsDropdown from './SubjectsDropdown/SubjectsDropdown';
import TeachersDropdown from './TeachersDropdown/TeachersDropdown';

const dataInitialState = {
	day: '',
	teacherId: ''
};

const CreateRecord = (props: any) => {
	const {
		unionItems,
		teacherItems
	} = props;
	
	const [data, setData] = useState<Object>(dataInitialState);
	
	const onSubmit = () => {
		setErrorMessages(errorMessagesInitialState);
		
		getData('union/create', data)
			.then(response => {
				response?.json().then((responseData: any) => {								
					switch (responseData.flag) {
						case complexRequestStatusList.SUCCESS:
							// onModalClose();
							// props.read();
							return;
							
						case complexRequestStatusList.FAILURE:
							// setErrorMessages(prevState => ({
								// ...prevState,
								// modal: 'Saving error'
							}));
							return;
							
						case complexRequestStatusList.NOT_VALIDE:							
							// responseData.validationErrors.forEach((item: any) => {
								// setErrorMessages(prevState => ({
									// ...prevState,
									// inputs: {
										// ...prevState.inputs,
										// [item.name]: item.message
									// }
								// }));
							// });
							return;
							
						// default: onModalClose();
					}
				});
			})
			.catch(err => {
				console.log('Error ', err);
			});
	};
	
	const onChange = (keyValue: any) => {
		const { name, value } = keyValue;
		
		setData(prevState => ({
			...prevState,
			[name]: value
		}));
	};
	
	return (
		<section className='CreateRecord'>
		{unionItems.length > 0
		? (
				<>
					<SubjectsDropdown 
						unionItems={unionItems}
						onChange={onChange}
						errorMessage={''}
					/>
					
					<br />
					
					<TeachersDropdown 
						teacherItems={teacherItems}
						onChange={onChange}
						errorMessage={''}
					/>
					
					<br />
					
					{teacherItems.length === 0 && (
						<Alert variant={'warning'}>
							<h4>Add at least one teacher, please</h4>
						</Alert>						
					)}
					
					<Button 
						className='mt-4 mb-4' 
						variant='primary'
						onClick={onSubmit}
						disabled={teacherItems.length === 0}
					>
						Union
					</Button>
				</>
			)
		: (
			<h4>Thera are no subjects</h4>
		)}
		</section>
	)
}

export default CreateRecord;