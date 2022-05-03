<script>
	import Register from '../components/Register.svelte';
	import Login from '../components/Signin.svelte';
  import Welcome from '../components/Welcome.svelte';
	let registered = false;
  let loggedIn = false;
  let loggedUser = '';
</script>

{#if registered && !loggedIn}
	<Login bind:registered bind:loggedIn bind:loggedUser />
{:else if !registered && !loggedIn}
	<Register bind:registered />
{:else if registered && loggedIn}
  <Welcome loggedUser={loggedUser} />
{/if}