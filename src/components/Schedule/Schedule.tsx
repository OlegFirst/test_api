import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';

import PageTitle from '../_commonComponents/PageTitle/PageTitle';
import TableComponent from './TableComponent/TableComponent';
import RequestStatus from '../_commonComponents/RequestStatus/RequestStatus';

import { requestStatusList, requestStatusInitialState } from '../../common/constants';
import { getData } from '../../common/services';
import { scheduleInterface } from '../../common/settings';

const Schedule = () => {
	const [items, setItems] = useState<scheduleInterface[]>([]);
	const [requestStatus, setRequestStatus] = useState<requestStatusList>(requestStatusInitialState);
	
	const onClick = () => {};
	
	useEffect(() => {
		setRequestStatus(requestStatusList.PENDING);
		
		getData('schedule', '')
			.then(response => {
				response?.json().then(data => {
					setItems([ ...data ]);
					setRequestStatus(requestStatusList.SUCCESS);
				});
			})
			.catch(err => {
				console.log('Error ', err);
				setRequestStatus(requestStatusList.ERROR);
			})
	}, []);
	
	return (
		<section className='Schedule'>
			<PageTitle text={'Schedule'} />
			
			<RequestStatus status={requestStatus} />
			
			<Button 
				className='mt-4 mb-4' 
				variant='primary'
				disabled={requestStatus === requestStatusList.PENDING}
				onClick={onClick}
			>
				Add new record
			</Button>
			
			{requestStatus === requestStatusList.SUCCESS && (
				<TableComponent items={items} />
			)}
		</section>
	)
}

export default Schedule;