import React from "react";
import { Table } from "reactstrap";

const CartComponent = ({ data }) => {
	return (
		<Table>
			<thead>
				<tr>
					<th>#</th>
					<th>First Name</th>
					<th>Last Name</th>
					<th>Username</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<th scope="row">1</th>
					<td>{data?.title}</td>
					<td>Otto</td>
					<td>@mdo</td>
				</tr>
			</tbody>
		</Table>
	);
};

export default CartComponent;
