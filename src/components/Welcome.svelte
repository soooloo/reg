<script>
import { dev } from "$app/env";

	export /**
	 * @type {any}
	 */
	let loggedUser;
</script>

<section class="flex items-center justify-center py-10 text-white bg-gray-50 sm:py-16 md:py-24 lg:py-32">
    <div class="relative max-w-3xl px-10 text-center text-white auto lg:px-0">
        <div class="flex boflex-col w-full md:flex-row">
			<div class="flex justify-between p-40">
                <h1 class="relative flex flex-col text-6xl font-extrabold text-left text-black">
                    Welcome
					<span class="bg-clip-text capitalize text-transparent bg-gradient-to-r from-sky-800 to-blue-400">{loggedUser}</span>
                </h1>
			</div>
		</div>
	</div>
</section>
