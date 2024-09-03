import { FunctionComponent } from 'react';
import Alert from 'react-bootstrap/Alert';

const PageTitle: FunctionComponent<{ text: string }> = ({ text }) => (
	<Alert className='mb-4' variant='success'>
		<h1>{text}</h1>
	</Alert>
);

export default PageTitle;