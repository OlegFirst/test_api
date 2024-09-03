import { FunctionComponent } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import Alert from 'react-bootstrap/Alert';

import { requestStatusList, requestStatusInitialState } from '../../../common/constants';


const RequestStatus: FunctionComponent<{ status: requestStatusList }> = ({ status }) => {
	return (
		<section className='RequestStatus'>
			{status === requestStatusList.PENDING && (
				<Spinner
					className='ms-4'
					as='span'
					animation='border'
					role='status'
					aria-hidden='true'
				/>
			)}
			
			{status === requestStatusList.ERROR && (
				 <Alert variant={'danger'}>
          Server error
        </Alert>
			)}
		</section>
	)
}

export default RequestStatus;