
import { cookies } from 'next/headers'
import {redirect} from 'next/navigation'
const ProtectedRoute = ({children}: any) => {
    const cookieStore = cookies()
    if(!cookieStore.has('accessToken') && !cookieStore.has('refreshToken')){
        redirect('/')
    }
  return (
    <div>
        {children}
    </div>
  )
}

export default ProtectedRoute