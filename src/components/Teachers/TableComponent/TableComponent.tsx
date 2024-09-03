import { FunctionComponent } from 'react';
import Table from 'react-bootstrap/Table';

import { teachersInterface } from '../../../common/settings';

const TableComponent: FunctionComponent<{ items: teachersInterface[] }> = ({ items }) => {
	if (items.length === 0) {
		return (
			<h4>List of teachers is empty</h4>
		)
	}

	return (
		<Table striped bordered hover>
			<thead>
				<tr>
					<th>#</th>
					<th>First name</th>
					<th>Last name</th>
				</tr>
			</thead>
			
			<tbody>
				{items.map((item, index: number) => {
					const { id, firstName, lastName } = item;
					
					return (
						<tr key={id}>
							<td>{index + 1}</td>
							<td>{firstName}</td>
							<td>{lastName}</td>
						</tr>
					)
				})}
			</tbody>
		</Table>
	);
};

export default TableComponent;