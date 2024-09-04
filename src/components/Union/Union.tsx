import { useEffect, useState } from 'react';

import PageTitle from '../_commonComponents/PageTitle/PageTitle';
import CreateRecord from './CreateRecord/CreateRecord';
import RequestStatus from '../_commonComponents/RequestStatus/RequestStatus';

import { unionInterface, teachersInterface } from '../../common/settings';
import { requestStatusList, requestStatusInitialState } from '../../common/constants';
import { 
	mappingUnionItems,
	mappingTeacherItems
} from '../../common/utils';
import { getData } from '../../common/services';

const Union = () => {
	const [unionItems, setUnionItems] = useState<unionInterface[]>([]);
	const [teacherItems, setTeacherItems] = useState<teachersInterface[]>([]);
	const [requestStatus, setRequestStatus] = useState<requestStatusList>(requestStatusInitialState);
	
	const readUnionItems = () => {
		setRequestStatus(requestStatusList.PENDING);
		
		getData('union', '')
			.then((response: any) => {				
				response?.json().then((data: any) => {
					setUnionItems(mappingUnionItems(data));
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
		readUnionItems();
		readTeacherItems();
	}, []);
	
	return (
		<section className='Union'>
			<PageTitle text={'Union teachers and subjects'} />
			
			<RequestStatus status={requestStatus} />
			
			{requestStatus != requestStatusList.PENDING && (
				<CreateRecord 
					unionItems={unionItems}
					teacherItems={teacherItems}
				/>
			)}
		</section>
	)
}

export default Union;