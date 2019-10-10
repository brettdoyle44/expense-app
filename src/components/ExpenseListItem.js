import React from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'
import numeral from 'numeral'
import TableCell from '@material-ui/core/TableCell'

const ExpenseListItem = ({ dispatch, description, amount, createdAt, id }) => (
  <React.Fragment>
    <TableCell
      style={{ fontSize: '0.75em', color: 'white' }}
      component="th"
      scope="row"
    >
      {description}
    </TableCell>
    <TableCell style={{ fontSize: '0.75em', color: 'white' }} align="right">
      {numeral(amount / 100).format('$0,0.00')}
    </TableCell>
    <TableCell style={{ fontSize: '0.75em', color: 'white' }} align="right">
      {moment(createdAt).format('MMMM Do, YYYY')}
    </TableCell>
  </React.Fragment>
)

export default ExpenseListItem

{
  /* <Link to={`/edit/${id}`}> */
}
