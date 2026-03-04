import { useForm } from 'react-hook-form';
import { registerRequest, type RegisterUser } from '../api/auth';
import './RegisterPage.css';

function RegisterPage() {
  const { 
    register, 
    handleSubmit, 
    formState: { errors } 
  } = useForm<RegisterUser>();

  const onSubmit = async (values: RegisterUser) => {
    try {
      const res = await registerRequest(values);
      console.log(res);
      alert("¡Registro exitoso!");
    } catch (error) {
      console.error("Error al registrar:", error);
      alert("Hubo un error en el registro");
    }
  };

  return (
    <div className="container-registro">
      <div className="card-form">
        <h1>Crear Cuenta</h1>
        
        <form onSubmit={handleSubmit(onSubmit)}>
          
          <div className="form-group">
            <label>Número de Cuenta</label>
            <input
              type="number"
              {...register('num_cta', { required: "El número de cuenta es obligatorio", valueAsNumber: true })}
            />
            {errors.num_cta && <span className="error">{errors.num_cta.message}</span>}
          </div>

          <div className="form-group">
            <label>Correo Electrónico</label>
            <input
              type="email"
              {...register('email', { required: "El correo es obligatorio" })}
            />
            {errors.email && <span className="error">{errors.email.message}</span>}
          </div>

          <div className="form-group">
            <label>Contraseña</label>
            <input
              type="password"
              {...register('password', { required: "La contraseña es obligatoria", minLength: { value: 6, message: "Mínimo 6 caracteres" }})}
              placeholder="********"
            />
            {errors.password && <span className="error">{errors.password.message}</span>}
          </div>

          <div className="form-group">
            <label>Fecha de Nacimiento</label>
            <input
              type="date"
              {...register('fecha_nacimiento', { required: "La fecha es obligatoria" })}
            />
            {errors.fecha_nacimiento && <span className="error">{errors.fecha_nacimiento.message}</span>}
          </div>

          <button type="submit" className="btn-submit">
            Registrar Usuario
          </button>

        </form>
      </div>
    </div>
  );
}

export default RegisterPage;


// import React from 'react'
// import { useForm } from 'react-hook-form'
// import { registerRequest, type RegisterUser } from '../api/auth'

// function RegisterPage() {
//   const { register, handleSubmit } = useForm<RegisterUser>();

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-zinc-900">
//       <div className="bg-zinc-800 w-full max-w-md p-8 rounded-xl shadow-lg">
        
//         <h1 className="text-2xl font-bold text-white text-center mb-6">
//           Crear Cuenta
//         </h1>

//         <form
//           className="space-y-4"
//           onSubmit={handleSubmit(async (values) => {
//             const res = await registerRequest(values);
//             console.log(res);
//           })}
//         >
//           <input
//             type="number"
//             {...register("num_cta", {
//               required: true,
//               valueAsNumber: true,
//             })}
//             className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
//             placeholder="Número de cuenta"
//           />

//           <input
//             type="email"
//             {...register("email", { required: true })}
//             className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
//             placeholder="Email"
//           />

//           <input
//             type="password"
//             {...register("password", { required: true })}
//             className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
//             placeholder="Password"
//           />

//           <input
//             type="date"
//             {...register("fecha_nacimiento", { required: true })}
//             className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md border border-zinc-600 appearance-none"
//           />

//           <button
//             type="submit"
//             className="w-full bg-indigo-500 hover:bg-indigo-600 transition-colors duration-200 text-white py-2 rounded-md font-semibold"
//           >
//             Register
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default RegisterPage;
