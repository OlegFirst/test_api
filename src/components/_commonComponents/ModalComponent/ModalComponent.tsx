import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';

const ModalComponent = (props: any) => {
	const {
		title,
		children,
		isShow,
		isPending = false
	} = props;
	
	return (		
		<Modal
			className='ModalComponent'
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
			</Modal.Dialog>
		</Modal>
	)
};

export default ModalComponent;