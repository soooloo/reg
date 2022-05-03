<script>
	export let registered = false;
	let username = '';
	let mobile = '';
	let email = '';
	let password = '';
	let password2 = '';
	let result = null;
	async function handleSubmit(event) {
		event.preventDefault();
		const res = await fetch('https://beta.app.2t.sd/consumer/register', {
			method: 'POST',
			body: JSON.stringify({
				username,
				mobile,
				password,
				password2,
				email
			})
		});

		const json = await res.json();
		result = JSON.stringify(json);
		console.log(result);
		if (json.ok == 'object was successfully created') {
			alert('You have registered successfully!, Please LogIn!');
			registered = true;
		} else {
			alert(json['code'] + '\n' + json['message']);
		}
	}
	// async function handleSubmit(e) {
	//   e.preventDefault()
	//   let username = e.target.username.value
	//   let mobile = e.target.mobile.value
	//   let email = e.target.email.value
	//   let password = e.target.password.value
	//   let password2 = e.target.password2.value

	//   console.log({
	//       username,
	//       mobile,
	//       email,
	//       password,
	//       password2

	//     })
	//   const res = await fetch('https://beta.app.2t.sd/consumer/register', {
	//     method: 'POST',
	//     body: JSON.stringify({
	//       username,
	//       mobile,
	//       email,
	//       password,
	//       password2
	//     })
	//   })

	//   const json = await res.json()
	//   console.log(json)
	//   result = JSON.stringify(json)
	//   console.log(result)
	//   if (json.ok == "object was successfully created") {
	//       alert("You have registered successfully!")
	//   }
	//   else {
	//     alert(json['code'] + '\n' + json['message'])
	//   }
	// }
</script>

<div class="min-h-max flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
	<div class="max-w-md w-full space-y-8">
		<div>
			<h2 class="mt-6 text-center text-3xl font-bold text-gray-900">Sign Up</h2>
		</div>
		<form class="mt-8 space-y-6" on:submit={handleSubmit} method="POST">
			<input type="hidden" name="remember" value="true" />
			<div class="rounded-md shadow-sm -space-y-px">
				<div>
					<label for="username" class="sr-only">User Name</label>
					<input
						id="username"
						name="username"
						bind:value={username}
						type="text"
						autocomplete="username"
						required
						class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-sky-600 focus:border-sky-600 focus:z-10 sm:text-sm"
						placeholder="User Name"
					/>
				</div>
				<div>
					<label for="mobile" class="sr-only">Mobile</label>
					<input
						id="mobile"
						name="mobile"
						type="string"
						bind:value={mobile}
						autocomplete="mobile"
						required
						class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-sky-600 focus:border-sky-600 focus:z-10 sm:text-sm"
						placeholder="Mobile"
					/>
				</div>
				<div>
					<label for="password" class="sr-only">Password</label>
					<input
						id="password"
						name="password"
						type="password"
						bind:value={password}
						autocomplete="password"
						required
						class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-sky-600 focus:border-sky-600 focus:z-10 sm:text-sm"
						placeholder="Password"
					/>
				</div>
				<div>
					<label for="password2" class="sr-only">Confirm Password</label>
					<input
						id="password2"
						name="password2"
						type="password"
						bind:value={password2}
						autocomplete="confirm-password"
						required
						class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-sky-600 focus:border-sky-600 focus:z-10 sm:text-sm"
						placeholder="Confirm Password"
					/>
				</div>
				<div>
					<label for="email-address" class="sr-only">Email address</label>
					<input
						id="email-address"
						name="email"
						type="email"
						bind:value={email}
						autocomplete="email"
						required
						class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-sky-600 focus:border-sky-600 focus:z-10 sm:text-sm"
						placeholder="Email address"
					/>
				</div>
			</div>
			<div class="flex items-center justify-between">
				<div class="text-sm">
					<!-- svelte-ignore a11y-invalid-attribute -->
					<a
						href="#"
						on:click={() => (registered = !registered)}
						class="font-medium text-sky-600 hover:text-sky-600"
					>
						Sign in
					</a>
				</div>
			</div>

			<div>
				<button
					type="submit"
					class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-sky-600 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-600"
				>
					<span class="absolute left-0 inset-y-0 flex items-center pl-3">
						<svg
							class="h-5 w-5 text-white group-hover:text-sky-400"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
							fill="currentColor"
							aria-hidden="true"
						>
							<path
								fill-rule="evenodd"
								d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
								clip-rule="evenodd"
							/>
						</svg>
					</span>
					Sign up
				</button>
			</div>
		</form>
	</div>
</div>
