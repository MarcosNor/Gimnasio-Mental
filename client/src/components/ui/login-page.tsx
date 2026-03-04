import { LoginForm } from "./login-form";

export function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-4 py-12">
      <div className="w-full max-w-sm">
        <LoginForm />
      </div>
    </main>
  );
}
