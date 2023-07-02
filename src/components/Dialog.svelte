<script>
import { getSharedLinks, selectedLink, unSelectLink } from '../stores';
let dialog;
let showModal = false;


const copyLink = (url) => {
	navigator.clipboard.writeText(url);
	dialog.close();
}

const closeModal = () => {
	console.log('close')
	dialog.close();
	showModal = false;
	unSelectLink()
}

$: if ($selectedLink) showModal = true ;
$: if (dialog && showModal) dialog.showModal();


</script>


<!-- svelte-ignore a11y-click-events-have-key-events -->
<dialog
bind:this={dialog} 
on:close={closeModal}
on:click|self={closeModal}
>
 <div>
	{#if $selectedLink}
	<h1>{$selectedLink.title}</h1>
	<ul on:click|stopPropagation>
			{#each getSharedLinks($selectedLink) as shareLink}
				<li>
					<a href={shareLink.href} target="_blank">
						<span>
							<img src={shareLink.icon} alt="" />
						Condividi su {shareLink?.name}
						</span>
						

						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
  						<path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
						</svg>

					</a>

				</li>
			{/each}
			<li>
				<!-- svelte-ignore a11y-invalid-attribute -->
				<a href="#" on:click={() => copyLink($selectedLink.url)}>
					<span>
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
							<path stroke-linecap="round" stroke-linejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
						</svg>
						Copia il link
					</span>

					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
					</svg>
				</a>
			</li>
	</ul>
	{/if}	
 </div>
</dialog>



<style>
	dialog {
		margin: auto 0 0 0;
		border: none;
		border-top-left-radius: 24px;
		border-top-right-radius: 24px;
		padding: 1rem;
		box-shadow: 6px -1px 9px 6px rgba(0,0,0,.2);
		z-index: 100;
		transition: transform .4s ease-in;
		-webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;    
    box-sizing: border-box;  
		width: 100%;
		max-width: 100%;
		
	}

	dialog[open] {
		animation: fade 0.3s ease-in-out;
	}

	@keyframes fade {
		from {
			transform: translateY(60%);
			opacity: 0;
		}
		to {
			transform: translateY(0);
			opacity: 1;
		}
	}


	dialog::backdrop {
		background: rgba(0,0,0,0.5);
  	backdrop-filter: saturate(100%) blur(3px);
	}
	
	h1 {
		font-size: 1rem;
		text-align: center;
	}
	ul {
		width: 100%;
		margin: 0;
		padding: 0;
		list-style: none;
	}

	li {
		-webkit-box-align: center;
    align-items: center;
    
		border-radius: 0.5rem;
    color: var(--color-text);
    width: 100%;
    height: 100%;

	}
	li:is(:hover, :focus-within) {
		background-color: rgba(0, 102, 204, 0.2);
	}

	a {
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: 1rem;
		text-decoration: none;
		color: var(--color-black);
		font-weight: 600;
		cursor: pointer;
		padding: 1rem 0;
	}

	a span {
		display: flex;
		align-items: center;
	}

	img, svg {
		width: 1.2rem;
		height: 1.2rem;
		margin: 0 0.5rem;
	}

</style>
