<template>
    <footer class="footer">
        <div class="footer__logo">Logo</div>
        <div class="footer__navigation">
            <RouterLink class="footer__navigation-link" v-for="page in pagesFromStore" :to="{ name: 'page', params: { page_id: page.id } }">{{ page.title }}</RouterLink>
        </div>
    </footer>
</template>

<script>
	export default {
        computed: {
			pagesFromStore() {
				return this.$store.getters['getPages'];
			}
		}
	};
</script>

<style>
	.footer {
		background: #eee;
		display: flex;
        font-size: 0.7em;
        position: absolute;
        bottom: 0;		
	}

    .footer__logo {
        margin-right: 1em;
    }

    .footer__navigation {
        display: flex;
        flex-flow: column wrap;
    }	
    .header__navigation-link {
		margin-left: 1em;
		color: rgb(37, 78, 29);
		text-decoration: none;
	}

	.header__navigation-link:hover {
		font-weight: bolder;
	}
</style>