export default function Login(){
    return(
      <section class="flex flex-col items-center">
      <p class="text-2xl font-bold">UNIVERSITY</p>
      <form class="w-full max-w-md mt-8 space-y-6">
          <div class="grid grid-cols-2 gap-4">
          </div>
          <div>
          <label for="email" class="block font-medium text-gray-700">Email</label>
          <input type="email" id="email" name="email" class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
          </div>
          <div>
          <label for="password" class="block font-medium text-gray-700">Password</label>
          <input type="password" id="password" name="password" class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
          </div>
          <button type="submit" class="w-full bg-indigo-600 text-white font-medium py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          login
          </button>
          <div class="text-center">
          <span class="text-gray-700">Have an account yet? </span>
          <a href="#" class="text-indigo-600 hover:text-indigo-700">Sign up here</a>
          </div>
      </form>
      </section>
    )
}