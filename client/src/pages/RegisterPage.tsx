import RegForm from "@/components/ui/forms/register_form";

export default function RegisterPage() {
  return (

    <main className="flex min-h-screen items-center justify-center bg-background px-4 py-12">
      <div className="w-full max-w-sm">
        <RegForm />
      </div>
    </main>
    
  );
}