import { useState } from 'react';
import Button from 'react-bootstrap/Button';

import ModalComponent from '../../_commonComponents/ModalComponent/ModalComponent';
import InputComponent from '../../_commonComponents/InputComponent/InputComponent';

import { postData } from '../../../common/services';

const title: string = 'Add new record';
const dataInitialState = {
	day: '',
	subject: ''
};

const CreateRecord = () => {
	const [isModalShow, setIsModalShow] = useState<boolean>(false);
	const [data, setData] = useState<Object>(dataInitialState);
	
	const onButtonClick = () => setIsModalShow(true);
	
	const onModalSubmit = () => {
		console.log(data)
		
		postData('schedule/create', data)
			.then(response => {
				response?.json().then((data: any) => {
					console.log(data)
					// navigate('/config');
				});
			})
			.catch(err => {
				console.log('Error ', err);
			})
		
		// onModalClose();
	};
	
	const onModalClose = () => setIsModalShow(false);
	
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
				onSubmit={onModalSubmit}
				onClose={onModalClose}
			>
				<InputComponent
					name={'day'}
					defaultValue={''}
					placeholder={'Day'}
					onChange={onInputChange}
					errorMessage={''}
				/>
				
				<br />
				
				<InputComponent
					name={'subject'}
					defaultValue={''}
					placeholder={'Subject'}
					onChange={onInputChange}
					errorMessage={''}
				/>
			</ModalComponent>
		</div>
	)
}

export default CreateRecord;