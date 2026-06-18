import { Form } from "../../../components/ui/Form";

export function RegisterForm() {
  return (
    <Form.Root>
      <Form.Legend legend="Cadastrar" />
      <Form.Link title="Já possui conta?" href="/login" linkTitle="Faça login." />
      <Form.Field id="email" label="Email" type="text" placeholder="example@email.com" />
      <Form.Field id="password" label="Senha" type="password" placeholder="Crie sua senha" />
      <Form.Field id="confirmPassword" label="Confirmar senha" type="password" placeholder="Confirme sua senha" />
    </Form.Root>
  )
}