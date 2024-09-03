import { FunctionComponent } from 'react';
import Table from 'react-bootstrap/Table';

import { scheduleInterface } from '../../../common/settings';
import { dayMatch } from '../../../common/utils';

const TableComponent: FunctionComponent<{ items: scheduleInterface[] }> = ({ items }) => {
	if (items.length === 0) {
		return (
			<h4>Schedule is empty</h4>
		)
	}

	return (
		<Table striped bordered hover>
			<thead>
				<tr>
					<th>#</th>
					<th>Day</th>
					<th>Subject</th>
				</tr>
			</thead>
			
			<tbody>
				{items.map((item, index: number) => {
					const { id, day, subject } = item;
					
					return (
						<tr key={id}>
							<td>{index + 1}</td>
							<td>{dayMatch(day)}</td>
							<td>{subject}</td>
						</tr>
					)
				})}
			</tbody>
		</Table>
	)
};

export default TableComponent;