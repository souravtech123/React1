import React ,{useState , useContext} from 'react'
import UserContext from '../context/UserContext'

const Login = () => {

    const [username , setusername ] = useState('')
    const [password , setPassword] = useState('')

    const {setuser} = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        setuser({username , password})

    }
  return (
    <div>
      <div className=' bg-cover bg-center h-full justify-items-center flex items-stretch mt-25  bg-gray-100'>
      <div className='justify-self-center justify-items-center self-center bg-white h-120 ml-140 w-md rounded-2xl shadow-2xl'>
      <h2 className='font-sans text-4xl font-bold text-blue-900'>Login</h2>
      <div className='flex flex-col m-10 gap-5  bg-gray-300 w-sm h-35 mt-35 justify-center items-center rounded-sm'>
      <input type="text" 
        placeholder='Enter your Username'
        value={username}
        onChange={(e) => setusername(e.target.value)}
        className='bg-white text-xl rounded-md font-bold '  
        />
        <input type="text"
         placeholder='Enter Your Password'
         value={password}
         onChange={(e) => setPassword(e.target.value)}
         className='bg-white text-xl rounded-md font-bold '
        />
      </div>
      <button className='text-2xl font-medium text-white bg-blue-950 ml-40 h-10 w-30 rounded-4xl hover:bg-sky-400'  onClick={handleSubmit}>Submit</button>
      </div>
      </div>
        
    </div>
  )
}

export default Login