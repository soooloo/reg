


<script>
  import Register from '../components/Register.svelte';
  import Login from '../components/Signin.svelte';
  let registered = false;
  </script>
 
{#if registered}
<Login bind:registered={registered}/>
{:else}
<Register bind:registered={registered}/>
{/if}


