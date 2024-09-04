import { useEffect, useState } from 'react';

import PageTitle from '../_commonComponents/PageTitle/PageTitle';
import TableComponent from './TableComponent/TableComponent';
import CreateRecord from './CreateRecord/CreateRecord';
import RequestStatus from '../_commonComponents/RequestStatus/RequestStatus';

import { teachersInterface } from '../../common/settings';
import { requestStatusList, requestStatusInitialState } from '../../common/constants';
import { mappingTeacherItems } from '../../common/utils';
import { getData } from '../../common/services';

const Teachers = () => {
	const [items, setItems] = useState<teachersInterface[]>([]);
	const [requestStatus, setRequestStatus] = useState<requestStatusList>(requestStatusInitialState);
	
	const read = () => {
		setRequestStatus(requestStatusList.PENDING);
		
		getData('teachers', '')
			.then((response: any) => {				
				response?.json().then((data: any) => {
					setItems(mappingTeacherItems(data));
					setRequestStatus(requestStatusList.SUCCESS);
				});
			})
			.catch((err: any) => {
				console.log('Error ', err);
				setRequestStatus(requestStatusList.ERROR);
			})
	};
	
	useEffect(() => {
		read();
	}, []);
	
	return (
		<section className='Teachers'>
			<PageTitle text={'Teachers'} />
			
			<RequestStatus status={requestStatus} />
			
			{requestStatus !== requestStatusList.PENDING && (			
				<CreateRecord
					storedDays={items}
					read={read} 
				/>
			)}
			
			{requestStatus === requestStatusList.SUCCESS && (
				<TableComponent items={items} />
			)}
		</section>
	)
}

export default Teachers;