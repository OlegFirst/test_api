import { useEffect, useState } from 'react';

import PageTitle from '../_commonComponents/PageTitle/PageTitle';
import CreateRecord from './CreateRecord/CreateRecord';
import RequestStatus from '../_commonComponents/RequestStatus/RequestStatus';

import { scheduleInterface, teachersInterface } from '../../common/settings';
import { requestStatusList, requestStatusInitialState } from '../../common/constants';
import { mappingTeacherItems } from '../../common/utils';
import { getData } from '../../common/services';

const Union = () => {
	const [scheduleItems, setScheduleItems] = useState<scheduleInterface[]>([]);
	const [teacherItems, setTeacherItems] = useState<teachersInterface[]>([]);
	const [requestStatus, setRequestStatus] = useState<requestStatusList>(requestStatusInitialState);
	
	const readScheduleItems = () => {
		setRequestStatus(requestStatusList.PENDING);
		
		getData('schedule', '')
			.then((response: any) => {				
				response?.json().then((data: any) => {
					setScheduleItems([ ...data ]);
					setRequestStatus(requestStatusList.SUCCESS);
				});
			})
			.catch((err: any) => {
				console.log('Error ', err);
				setRequestStatus(requestStatusList.ERROR);
			})
	};
	
	const readTeacherItems = () => {
		setRequestStatus(requestStatusList.PENDING);
		
		getData('teachers', '')
			.then((response: any) => {				
				response?.json().then((data: any) => {
					setTeacherItems(mappingTeacherItems(data));
					setRequestStatus(requestStatusList.SUCCESS);
				});
			})
			.catch((err: any) => {
				console.log('Error ', err);
				setRequestStatus(requestStatusList.ERROR);
			})
	};
	
	useEffect(() => {
		readScheduleItems();
		readTeacherItems();
	}, []);
	
	console.log('/', scheduleItems)
	console.log('//', teacherItems)
	
	return (
		<section className='Union'>
			<PageTitle text={'Union teacher and subject'} />
			
			<RequestStatus status={requestStatus} />
			
			{requestStatus != requestStatusList.PENDING && (
				<CreateRecord 
					scheduleItems={scheduleItems}
					teacherItems={teacherItems}
				/>
			)}
		</section>
	)
}

export default Union;