// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// export default function Login() {
//   const navigate = useNavigate();

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");

//   const handleLogin = (e) => {
//     e.preventDefault();

//     if (!email || !password) {
//       setError("Please enter email and password.");
//       return;
//     }

//     // Temporary login
//     localStorage.setItem("isLoggedIn", "true");

//     navigate("/dashboard");
//   };

//   return (
//     <div className="min-h-screen bg-black text-white flex items-center justify-center px-6">

//       <div className="w-full max-w-md bg-[#111827] border border-gray-700 rounded-3xl p-8">

//         <div className="text-center mb-8">
//           <p className="text-blue-500 font-semibold">
//             SYNCdIN AI
//           </p>

//           <h1 className="text-4xl font-bold mt-3">
//             Welcome Back 👋
//           </h1>

//           <p className="text-gray-400 mt-2">
//             Login to continue your career journey.
//           </p>
//         </div>

//         <form onSubmit={handleLogin}>

//           <label className="block mb-2 font-semibold">
//             Email
//           </label>

//           <input
//             type="email"
//             placeholder="Enter your email"
//             value={email}
//             onChange={(e) => {
//               setEmail(e.target.value);
//               setError("");
//             }}
//             className="w-full p-4 mb-5 rounded-xl bg-[#0b1120] border border-gray-700 outline-none focus:border-blue-500"
//           />

//           <label className="block mb-2 font-semibold">
//             Password
//           </label>

//           <input
//             type="password"
//             placeholder="Enter your password"
//             value={password}
//             onChange={(e) => {
//               setPassword(e.target.value);
//               setError("");
//             }}
//             className="w-full p-4 rounded-xl bg-[#0b1120] border border-gray-700 outline-none focus:border-blue-500"
//           />

//           {error && (
//             <div className="mt-5 bg-red-500/10 border border-red-500/30 text-red-400 p-4 rounded-xl">
//               {error}
//             </div>
//           )}

//           <button
//             type="submit"
//             className="w-full mt-6 bg-blue-600 hover:bg-blue-700 py-4 rounded-xl font-semibold text-lg"
//           >
//             Login 🚀
//           </button>

//         </form>

//         <p className="text-center text-gray-400 mt-6">
//           Don't have an account?{" "}
//           <button
//             onClick={() => navigate("/signup")}
//             className="text-blue-500 hover:text-blue-400 font-semibold"
//           >
//             Sign Up
//           </button>
//         </p>

//       </div>

//     </div>
//   );
// }