import React from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'
import numeral from 'numeral'
import TableCell from '@material-ui/core/TableCell'
import EditIcon from '@material-ui/icons/Edit'
import IconButton from '@material-ui/core/IconButton'

const ExpenseListItem = ({ dispatch, description, amount, createdAt, id }) => (
  <React.Fragment>
    <TableCell
      style={{ fontSize: '0.75em', color: 'white' }}
      component="th"
      scope="row"
    >
      <Link to={`/edit/${id}`}>
        <IconButton
          aria-label="edit"
          style={{ color: '#ffffff' }}
          onClick={() => {}}
        >
          <EditIcon />
        </IconButton>
      </Link>
      {'   '}
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
