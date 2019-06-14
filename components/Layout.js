import Header from './Header'

const Layout = (props) => {
  return (
    <div>
      <Header />
      {props.children}
      <footer>Copyright Me</footer>
    </div>
  )
}

export default Layout