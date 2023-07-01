import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { createUser } from "../../redux/slices/user.slice"

const Home = () => {
  const dispatch = useDispatch()

  const dispatchAction = () => {
    setTimeout(() => {
      dispatch(createUser({ name: 'Mario', id: '1' }));
    }, 2000)
  }

  useEffect(() => {
    dispatchAction()
  }, [])

  return (
    <div>Abemus Home</div>
  )
}
export default Home