// HOC is a component that renders another component
import React from 'react'
import ReactDOM from 'react-dom'

const Info = props => (
  <div>
    <h1>Info</h1>
    <p>The info is: {props.info}</p>
  </div>
)

const withAdminWarning = WrappedComponent => {
  return props => (
    <div>
      {props.isAdmin && <p>This is private info</p>}
      <WrappedComponent {...props} />
    </div>
  )
}

const requireAuthentication = WrappedComponent => {
  return props => (
    <div>
      {props.isAuthenticated ? (
        <div>
          <p>Welcome to the app!</p>
          <WrappedComponent {...props} />
        </div>
      ) : (
        <p>You are not logged in!</p>
      )}
    </div>
  )
}

const AdminInfo = withAdminWarning(Info)
const AuthInfo = requireAuthentication(Info)

// ReactDOM.render(
//   <AdminInfo isAdmin={true} info="The details" />,
//   document.getElementById('app')
// )

ReactDOM.render(
  <AuthInfo isAuthenticated={true} info="You can see this." />,
  document.getElementById('app')
)
