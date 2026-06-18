import { Form } from "../../../components/ui/Form"

export function LoginForm() {
  return (
    <Form.Root>
      <Form.Legend legend="Login" />
      <Form.Link title="Não possui conta?" href="/register" linkTitle="Cadastre-se." />
      <Form.Field id="email" label="Email" type="text" placeholder="example@email.com" />
      <Form.Field id="password" label="Senha" type="password" placeholder="Digite sua senha" />
    </Form.Root>
  )
}