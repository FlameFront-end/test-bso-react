import { FC, FormEvent, useState } from 'react'
import { useLoginUser } from '../../store/authApi'

const Login: FC = () => {
  const [identifier, setIdentifier] = useState('')
  const [password, setPassword] = useState('')
  const [loginUser, { isLoading, error }] = useLoginUser()

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    try {
      await loginUser({ identifier, password }).unwrap()
      alert('Login successful!')
    } catch (err) {
      console.error('Failed to login: ', err)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username or Email:</label>
        <input type="text" value={identifier} onChange={(e) => setIdentifier(e.target.value)} />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <button type="submit" disabled={isLoading}>
        Login
      </button>
      {error && <div>Error logging in</div>}
    </form>
  )
}

export default Login
