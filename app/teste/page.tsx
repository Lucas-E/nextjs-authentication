import ProtectedRoute from "@/components/ProtectedRoute/ProtectedRoute"
const page = () => {
  return (
    <ProtectedRoute>
        <h1>Tá logado dentro da página teste</h1>
    </ProtectedRoute>
  )
}

export default page