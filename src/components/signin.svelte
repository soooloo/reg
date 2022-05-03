<script>
  export let registered = true;
  let username = ""
  let password = ""
  let result = null
  async function handleSubmit (event) {
    event.preventDefault()
  const res = await fetch('https://beta.app.2t.sd/consumer/login', {
    method: 'POST',
    body: JSON.stringify({
      username,
      password,
    })
  })
  
  const json = await res.json()
  result = JSON.stringify(json)
  console.log(json)
  if (json.authorization) {
      alert("You have LoggedIn successfully! as " + json.user.username)
  }
  else {
    alert(json['code'] + '\n' + json['message'])
  }
}
</script>



<div class="min-h-max flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div class="max-w-md w-full space-y-8">
        <div>
          <h2 class="mt-6 text-center text-3xl font-bold text-gray-900">Sign In</h2>
        </div>
        <form class="mt-8 space-y-6" on:submit={handleSubmit} method="POST">
          <input type="hidden" name="remember" value="true">
          <div class="rounded-md shadow-sm -space-y-px">
            <div>
              <label for="username" class="sr-only">User Name</label>
              <input id="username" name="username" type="text" autocomplete="username" bind:value={username} required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-sky-600 focus:border-sky-600 focus:z-10 sm:text-sm" placeholder="User Name">
            </div>
            <div>
              <label for="password" class="sr-only">Password</label>
              <input id="password" name="password" type="password" autocomplete="password" bind:value={password} required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-sky-600 focus:border-sky-600 focus:z-10 sm:text-sm" placeholder="Password">
            </div>
           </div>
          <div class="flex items-center justify-between">
            <div class="text-sm">
              <a href="#" on:click={() => registered = !registered} class="font-medium text-sky-600 hover:text-sky-600">New user? Sign up</a>
            </div>
         
    
          <div>
            <button type="submit" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-sky-600 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-600">
              <span class="absolute left-0 inset-y-0 flex items-center pl-3">
                <svg class="h-5 w-5 text-white group-hover:text-sky-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
                </svg>
              </span>
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>