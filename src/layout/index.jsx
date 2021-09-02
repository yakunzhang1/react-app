import Header from '../components/Header'
import { Route } from 'react-router'
import Home from '../pages/config'
import Menu from '../components/Menu/menu'
export const children = (props) => {
  console.log(props)
  return (
    <div>
      <Header />
      <Route path="/" component={Home}></Route>
      <Menu />
    </div>
  )
}
export default children