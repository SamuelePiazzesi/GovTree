<script>
	export let link;
	import { selectLink } from '../stores';
</script>

<li>
  <a href={link.url} target="_blank" rel="noopener">{link.title}</a>

	<button on:click={() => selectLink(link)}>
		<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" class=" " role="img" aria-hidden="false" aria-labelledby="ltclid7365499_title "><title id="ltclid7365499_title">Share</title><path fill-rule="evenodd" clip-rule="evenodd" d="M10.6464 3.85353L11 4.20708L11.7071 3.49998L11.3536 3.14642L8.35355 0.146423H7.64645L4.64645 3.14642L4.29289 3.49998L5 4.20708L5.35355 3.85353L7.5 1.70708V9.49998V9.99998H8.5V9.49998V1.70708L10.6464 3.85353ZM1 5.5L1.5 5H4V6H2V15H14V6H12V5H14.5L15 5.5V15.5L14.5 16H1.5L1 15.5V5.5Z" fill="currentColor"></path></svg>
	</button>
</li>



<style>
	li {
  display: flex;
	align-items: center;
	gap: 0.5rem;
  list-style-type: none;
  width: 100%;
	color: var(--color-text);
	background-color: var(--color-primary);
	position:relative;
	border-radius: 30px;
	cursor: pointer;
}

button {
	background-color: transparent;
	border:none;
	color: var(--color-text);
	min-height: 40px;
  min-width: 40px;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
	background-color: rgba(0, 102, 204, 0.2);
  align-items: center;
  z-index: 10;
	right: 0.5rem;
  top: 50%;
  overflow: hidden;
  border-radius: 50%;
	cursor: pointer;
	transition: all 120ms ease-out 0s;
}

a {
  display: flex;
  justify-content: center;
  align-items: center;
  white-space: normal;
  padding: 1rem;
	text-decoration: none;
	color: inherit;
	font-weight: 600;
	border: 1px solid var(--color-text);
	border-radius: 30px;
	flex: 1 1 auto;
}

@media (min-width: 768px) {
	a {
		padding: 1rem 3rem;
	}

	button {
		position: absolute;
		opacity: 0;
	}

	li:is(:hover, :focus-within) button {
	background-color: rgba(0, 102, 204, 0.6);
	transform: translateY(-50%);
  pointer-events: auto;
	opacity: 1;
	}

	li:is(:hover, :focus-within) {
	background-color: var(--color-text);
	color: var(--color-primary);
	transition: box-shadow 0.25s cubic-bezier(0.08, 0.59, 0.29, 0.99) 0s, border-color 0.25s cubic-bezier(0.08, 0.59, 0.29, 0.99) 0s, transform 0.25s cubic-bezier(0.08, 0.59, 0.29, 0.99) 0s, background-color 0.25s cubic-bezier(0.08, 0.59, 0.29, 0.99) 0s;
	}



}
</style>
