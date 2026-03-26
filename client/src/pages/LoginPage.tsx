import { LogForm } from "@/components/auth/login_form";

export default function LoginPage() {
  return (

    <main className="flex min-h-screen items-center justify-center bg-background px-4 py-12">
      <div className="w-full max-w-sm">
        <LogForm />
      </div>
    </main>
    
  );
}