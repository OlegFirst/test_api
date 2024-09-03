import Form from 'react-bootstrap/Form';

import './InputComponent.scss';

const InputComponent = (props: any) => {
	const { 
		name,
		defaultValue,
		placeholder = '',
		errorMessage,
		isDisabled = false,
		isValid = false
	} = props;
		
	const onFocus = (event: any) => {
		event.target.select();
	};
	
	return (
		<div 
			className='InputComponent'
			title={defaultValue}
		>
			<Form>
				<Form.Control
					type='text'
					name={name}
					defaultValue={defaultValue}
					placeholder={placeholder}
					size={'sm'}
					onChange={props.onChange}
					onFocus={onFocus}
					onBlur={props.onBlur}				
					isInvalid={errorMessage}
					isValid={isValid}
				/>
				
				{errorMessage && (<span className='input-component__error'>{errorMessage}</span>)}
			</Form>
		</div>
	)
};

export default InputComponent;