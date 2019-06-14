import Layout from '../components/Layout'
import { withRouter } from 'next/router'

const About = ({ router }) => {
  console.log(router)
  return (
    <Layout>
      <h1>Hello from About!</h1>
      <button onClick={() => router.back()}>Go Back</button>
      <button onClick={() => router.replace('/contact')}>Go Contact</button>
    </Layout>
  )
}

export default withRouter(About)