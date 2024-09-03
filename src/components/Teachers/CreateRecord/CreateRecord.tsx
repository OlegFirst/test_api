import { useState } from 'react';
import Button from 'react-bootstrap/Button';

import ModalComponent from '../../_commonComponents/ModalComponent/ModalComponent';
import InputComponent from '../../_commonComponents/InputComponent/InputComponent';

import { errorMessagesInterface } from '../../../common/settings';
import { complexRequestStatusList, errorMessagesInitialState } from '../../../common/constants';
import { getData } from '../../../common/services';

const title: string = 'Add new record';

const dataInitialState = {
	firstName: '',
	lastName: ''
};

const CreateRecord = (props: any) => {
	const [isModalShow, setIsModalShow] = useState<boolean>(false);
	const [data, setData] = useState<Object>(dataInitialState);
	const [errorMessages, setErrorMessages] = useState<errorMessagesInterface>(errorMessagesInitialState);
	
	const onButtonClick = () => setIsModalShow(true);
	
	const onModalSubmit = () => {
		setErrorMessages(errorMessagesInitialState);
		
		getData('teachers/create', data)
			.then(response => {
				response?.json().then((responseData: any) => {								
					switch (responseData.flag) {
						case complexRequestStatusList.SUCCESS:
							onModalClose();
							props.read();
							return;
							
						case complexRequestStatusList.FAILURE:
							setErrorMessages(prevState => ({
								...prevState,
								modal: 'Saving error'
							}));
							return;
							
						case complexRequestStatusList.NOT_VALIDE:							
							responseData.validationErrors.forEach((item: any) => {
								setErrorMessages(prevState => ({
									...prevState,
									inputs: {
										...prevState.inputs,
										[item.name]: item.message
									}
								}));
							});
							return;
							
						default: onModalClose();
					}
				});
			})
			.catch(err => {
				console.log('Error ', err);
			});
	};
	
	const onModalClose = () => {
		setIsModalShow(false);
		setData(dataInitialState);
		setErrorMessages(errorMessagesInitialState);
	};
	
	const onInputChange = (e: any) => {
		const { name, value } = e.target;
		
		setData(prevState => ({
			...prevState,
			[name]: value
		}));
	};
	
	return (
		<div className='CreateRecord'>
			<Button 
				className='mt-4 mb-4' 
				variant='primary'
				onClick={onButtonClick}
			>
				{title}
			</Button>
			
			<ModalComponent
				title={title}
				isShow={isModalShow}
				errorMessage={errorMessages?.modal}
				onSubmit={onModalSubmit}
				onClose={onModalClose}
			>
				<InputComponent
					name={'firstName'}
					defaultValue={''}
					placeholder={'First name'}
					onChange={onInputChange}
					errorMessage={errorMessages.inputs?.firstName}
				/>
				
				<br />
				
				<InputComponent
					name={'lastName'}
					defaultValue={''}
					placeholder={'Last name'}
					onChange={onInputChange}
					errorMessage={errorMessages.inputs?.lastName}
				/>
			</ModalComponent>
		</div>
	)
};

export default CreateRecord;