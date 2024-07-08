<script>
export default {
  props: {
    message: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: 'info',
    },
    color: {
      type: String,
      default: undefined,
    },
    icon: {
      type: String,
      default: null,
    },
    position: {
      type: String,
      default: 'fixed',
    },
    location: {
      type: String,
      default: 'top center',
    },
    closable: {
      type: Boolean,
      default: true,
    },
    timeout: {
      type: Number,
      default: 5000,
    },
  },
  
  data() {
    return {
      show: true,
      progress: 100,
      interval: null,
    }
  },

  mounted() {
    const duration = 50;
		const step = 100 / (this.timeout / duration);
		this.interval = setInterval(() => {
			if (this.progress <= 0) {
				clearInterval(this.interval);
				console.log(this.progress);
				this.show = false;
			}
			this.progress -= step;
		}, duration);
  },

  beforeUnmount() {
    clearInterval(this.interval);
  },

  watch: {
    show() {
      if (!this.show) {
        this.$emit('close');
        clearInterval(this.interval);
      }
    },
  },
}
</script>

<template>
  <v-alert
    :model-value="show"
    :type="type"
    :color="color"
    :icon="icon"
    :text="message"
    :position="position"
    :location="location"
    :closable="closable"
    class="ma-md-4 ma-2"
    elevation="2"
  >
    <v-progress-linear
      :model-value="progress-5"
      height="4"
      location="bottom"
      absolute
    ></v-progress-linear>
  </v-alert>
</template>

<style scoped>
.v-alert {
  z-index: 1000;
}
</style>