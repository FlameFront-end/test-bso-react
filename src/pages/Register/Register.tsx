import { FC, FormEvent, useState } from 'react'
import { authApi } from '../../store/authApi.ts'

const Register: FC = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [registerUser, { isLoading, error }] = authApi.useRegisterUserMutation()

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    try {
      await registerUser({ username, email, password }).unwrap()
      alert('Registration successful!')
    } catch (err) {
      console.error('Failed to register: ', err)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username:</label>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </div>
      <div>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <button type="submit" disabled={isLoading}>
        Register
      </button>
      {error && <div>Error registering user</div>}
    </form>
  )
}

export default Register
