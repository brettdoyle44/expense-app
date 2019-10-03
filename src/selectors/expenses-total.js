export default expenses => {
  const reducer = (acc, cur) => acc + cur
  const amountArr = expenses.map(expense => {
    return expense.amount
  })
  return amountArr.reduce(reducer, 0)
}
