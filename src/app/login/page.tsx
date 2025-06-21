import { useRouter } from 'next/router'
import Login from '@/component/Login';

export default function LoginPage() {
  const router = useRouter()
  const { error } = router.query

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Login</h1>
      {error && (
        <div style={{ color: 'red', marginTop: '1rem' }}>
          Gagal login. Silakan coba lagi.
        </div>
      )}
      <Login />
    </div>
  )
}
