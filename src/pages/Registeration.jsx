import { CircleUserRound } from "lucide-react"

const Registeration = () => {
  return (
    <div
        className="flex items-center justify-center min-h-screen bg-gray-100"
    >
        <div
            className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md"
        >
            <div className='flex flex-col items-center gap-5'>
                <CircleUserRound size={40}/>
                <h2 className="text-2xl font-bold text-center text-gray-800">
                    Create a New Account
                </h2>
            </div>

            <form className="space-y-6">
                <div>
                    <label
                        htmlFor="email"
                        className="block mb-2 text-sm font-medium text-gray-700"
                    >
                        Email Address
                    </label>
                    <input
                        type="email"
                        id="email"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="example@email.com"
                        required
                    />
                </div>
                <div>
                    <label
                        htmlFor="password"
                        className="block mb-2 text-sm font-medium text-gray-700"
                    >
                        Password
                    </label>
                    <input 
                        type="password"
                        id="password"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter your password"
                        required
                    />
                </div>
                <div>
                    <label
                        htmlFor="confirm-password"
                        className="block mb-2 text-sm font-medium text-gray-700"
                    >
                        Confirm Password
                    </label>
                    <input 
                        type="password"
                        id="confirm-password"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter your password"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="w-full px-4 py-2 font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    Sign Up
                </button>
            </form>
        </div>
    </div>
    // <h1>khfkhv</h1>
  )
}

export default Registeration