import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import Alert from 'react-bootstrap/Alert';

const ModalComponent = (props: any) => {
	const {
		title,
		errorMessage = '',
		children,
		isShow,
		isPending = false
	} = props;
	
	return (		
		<Modal
			className='ModalComponent'
			size='xl'
			show={isShow}
			onHide={props.onClose}
			onExited={props.onExited}
		>
			<Modal.Dialog>						
				<Modal.Header>
					<Modal.Title>{title}</Modal.Title>
				</Modal.Header>				
				
				<Modal.Body>
					{children}
				</Modal.Body>
				
				<Modal.Footer>
					<Button
						variant='outline-primary'
						onClick={props.onClose}
					>
						Cancel
					</Button>
		
					<Button
						variant='primary'
						disabled={isPending}
						onClick={props.onSubmit}
					>			
						OK
					</Button>
				</Modal.Footer>
				
				{errorMessage && (
					<Alert className='p-0 pt-2 m-4 text-center' variant='danger'>
						<p>{errorMessage}</p>
					</Alert>
				)}
			</Modal.Dialog>
		</Modal>
	)
};

export default ModalComponent;