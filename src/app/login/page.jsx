// // pages/login.js

// import Image from "next/image";
// import Link from "next/link";
// import { doSocialLogin } from "../actions";




// const LoginPage = () => {
   

   
//     return (
//         <div className="flex justify-center gap-6 mt-12">
//             <div>
//                 <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_nFqg830P_VriGxOXvv4QbA13rkzVC8YwRA&s" width={300} height={300} alt="login image"></Image>
//             </div>
//             <div className="max-w-3xl rounded-2xl py-4 px-4 border border-base-200 shadow">
//                 <h1 className="text-3xl font-bold my-4">Login <span className="text-gray-500">Now</span>!</h1>
//             <form className="space-y-3">
//                 <div>
//                     <label>Username:</label>
//                     <input type="text" className="border border-gray-400 rounded-sm" />
//                 </div>
//                 <div>
//                     <label>Password:</label>
//                     <input type="password" className="border border-gray-400 rounded-sm"  />
//                 </div>
//                 <button type="submit" className="btn btn-wide">Log in</button>
//                 <p>New to our website? <Link href="register">Please Register</Link></p>
//             </form>
            
            
//             <form 
//             action={doSocialLogin}
//             className="flex flex-col justify-center items-center">
//                 <button 
//             className="bg-red-500 text-white m-1 rounded-md p-1 text-lg"
//             type="submit" name="action" value="google">
//                 Sign in with Google
//                 </button>
//             <button 
//              className="bg-black text-white m-1 rounded-md p-1 text-lg"
//             type="submit" name="action" value="github">
//                 Sign in with Github
//                 </button>
//             </form>
//             </div>
//         </div>
//     )
// };

// export default LoginPage;