<template>
  <a
    class="button"
    :class="{'disabled': disabled, 'is-icon-only': !label && this.$slots.default}"
    :href="href"
  >
    <slot></slot>
    <span
      v-if="label"
      class="button-label"
    >{{ label }}</span>
  </a>
</template>

<script>
export default {
  name: 'VButton',
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    href: {
      type: String,
      default: null
    },
    label: {
      type: String,
      default: null
    }
  }
}
</script>

<style lang="scss">
.button {
  background: mediumblue;
  color: white;
  padding: 1rem;
  text-decoration: none;
  display: flex;
  width: fit-content;
  &:hover {
    opacity: .5;
  }
  &:active {
    transform: scale(0.95);
  }
}

.button.disabled {
  opacity: .5;
  pointer-events: none;
}

.button .button-label {
  line-height: 1rem;
}

.button svg {
  width: 1rem;
  height: 1rem;
}

.button:not(.is-icon-only) svg {
  margin-right: 1rem;
}

.button svg,
.button svg path {
  fill: white;
}
</style>
