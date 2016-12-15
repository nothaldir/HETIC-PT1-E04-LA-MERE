<template>
	<div class="credits">
		<div class="credits__bar">
			<div class="credits__bar-text">crédits et <div>remerciements</div></div>
		</div>
		<div class="credits__content">
			<div class="credits__content-title">remerciements</div>
			<div class="credits__content-text">Nous tenons à remercier en premier lieu les parents qui nous ont permis de filmer leurs enfants dans le cadre de notre projet. Un grand merci à M. Pumir et son fils Balthazar, Mme Boudisseau et son fils Jean, et à Mme Gossioux et son fils Gabriel.</div>
			<div class="credits__content-title">crédits audio</div>
			<div class="credits__content-text">Joe Hisaishi - Castle in the Sky Theme utilisé dans le cadre de l’expérience vidéo.</div>
			<div class="credits__content-title">crédits vidéo</div>
			<div class="credits__content-text">Les témoignages vidéos utilisés dans les pages « Témoignages » proviennent de l’association Love Comes First. L’utilisation de ces vidéos est uniquement destinée à un cadre de projet scolaire. Ces témoignages ne sont en aucun cas utilisés à des fins commerciales.</div>
		</div>
	</div>
</template>

<script>
export default {
  name: 'credits',
  head: {
    title: {
      inner: 'Crédits',
    },
  },
}
</script>

<style lang="scss" scoped>
@import '../variables.scss';

.credits {

	.credits__bar {
		background-color: $primary-color;

		.credits__bar-text {
			padding: 20px 0;
			text-transform: uppercase;
			color: white;
			text-align: center;
			font-size: 26px;
			font-weight: bolder;
		}
	}

	.credits__content {
		max-width: 34rem;
	    margin: auto;
	    padding: 0 20px;

	    .credits__content-title {
	    	color: $primary-color;
	    	text-transform: uppercase;
	    	font-weight: bolder;
	    	font-size: 1.4em;
	    	margin: 40px 0 20px 0;
	    }

	    .credits__content-text {
	    	line-height: 140%;
	    }
	}
}

</style>
