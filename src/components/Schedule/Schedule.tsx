import { useEffect, useState } from 'react';

import PageTitle from '../_commonComponents/PageTitle/PageTitle';
import TableComponent from './TableComponent/TableComponent';
import CreateRecord from './CreateRecord/CreateRecord';
import RequestStatus from '../_commonComponents/RequestStatus/RequestStatus';

import { requestStatusList, requestStatusInitialState } from '../../common/constants';
import { getData } from '../../common/services';
import { scheduleInterface } from '../../common/settings';

const Schedule = () => {
	const [items, setItems] = useState<scheduleInterface[]>([]);
	const [requestStatus, setRequestStatus] = useState<requestStatusList>(requestStatusInitialState);
		
	useEffect(() => {
		setRequestStatus(requestStatusList.PENDING);
		
		getData('schedule', '')
			.then((response: any) => {				
				response?.json().then((data: any) => {
					setItems([ ...data ]);
					setRequestStatus(requestStatusList.SUCCESS);
				});
			})
			.catch((err: any) => {
				console.log('Error ', err);
				setRequestStatus(requestStatusList.ERROR);
			})
	}, []);
	
	return (
		<section className='Schedule'>
			<PageTitle text={'Schedule'} />
			
			<RequestStatus status={requestStatus} />
			
			{requestStatus != requestStatusList.PENDING && (			
				<CreateRecord />
			)}
			
			{requestStatus === requestStatusList.SUCCESS && (
				<TableComponent items={items} />
			)}
		</section>
	)
}

export default Schedule;