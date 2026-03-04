import { Log } from "@/components/ui/login-form";

export default function LoginPage() {
  return (
    // <div className="h-screen flex items-center justify-center bg-zinc-900">
    //   <div className="bg-zinc-800 p-8 rounded-xl shadow-lg w-full max-w-md">
    //     <h1 className="text-2xl font-bold text-white mb-6 text-center">
    //       Iniciar Sesión
    //     </h1>

    //     <form className="space-y-4">
    //       <input
    //         type="email"
    //         placeholder="Correo"
    //         className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
    //       />

    //       <input
    //         type="password"
    //         placeholder="Contraseña"
    //         className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
    //       />

    //       <button
    //         type="submit"
    //         className="w-full bg-indigo-500 hover:bg-indigo-600 transition-colors duration-200 text-white py-2 rounded-md font-semibold"
    //       >
    //         Entrar
    //       </button>
    //     </form>
    //   </div>
    // </div>
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-50 p-4">
      <Log />
    </div>
  );
}