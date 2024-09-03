import SubjectsDropdown from './SubjectsDropdown/SubjectsDropdown';

const CreateRecord = (props: any) => {
	const {
		scheduleItems,
		teacherItems
	} = props;
	
	return (
		<section className='CreateRecord'>
		{scheduleItems.length > 0
		? (
				<SubjectsDropdown 
					scheduleItems={scheduleItems}
					errorMessage={''}
				/>
			)
		: (
			<h4>Thera are no subjects</h4>
		)}
		</section>
	)
}

export default CreateRecord;