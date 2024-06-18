import Image from 'next/image';
import Link from 'next/link';

export default function signUp() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-between">
      <div className="flex justify-between gap-10 items-center">
        <div className=" w-1/2 p-5">
          <div className="bg-custom-violet text-gray-50 w-20 h-20 flex justify-center items-center p-2 text-xs rounded-lg m-auto">
            <h1 className="uppercase">Chatbot</h1>
          </div>
          <h1 className="font-extrabold text-center text-2xl mt-5 text-[#9095A1]">
            Sign Up
          </h1>
          <form className="flex flex-col space-y-4 mt-10">
            <label className="flex flex-col">
              <span className="text-red-500">Email</span>
              <input
                type="email"
                className="p-2 border border-gray-200 rounded-md outline-none"
                required
                placeholder="Please enter your email"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-red-500">Name</span>
              <input
                id="name"
                type="text"
                className="p-2 border border-gray-200 rounded-md outline-none"
                required
                placeholder="Please enter your first last name"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-red-500">Password</span>
              <input
                type="password"
                className="p-2 border border-gray-200 rounded-md outline-none"
                required
                placeholder="Please enter your password"
              />
            </label>

            <label className="flex flex-col">
              <span className="text-red-500">Confirm Password</span>
              <input
                type="password"
                className="p-2 border border-gray-200 rounded-md outline-none"
                required
                placeholder="Please enter your password"
              />
            </label>
            <button
              type="submit"
              className="w-full bg-[#15ABFF] text-gray-50 p-2 rounded-md"
            >
              Sign Up
            </button>
          </form>
          <div className="">
            <p className="text-[#15ABFF]  mt-5 text-left">
              Already have an account? <Link href="/"> Log In</Link>
            </p>
          </div>
        </div>
        <div className="w-full h-[100vh]">
          <Image
            src="/images/login-signup.png"
            alt="Login"
            width={1000}
            height={1000}
            className="object-cover h-full w-full"
          />
        </div>
      </div>
    </main>
  );
}
