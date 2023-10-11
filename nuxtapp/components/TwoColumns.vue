<template>
  <div class="two-columns">
    <div class="column-left">
      <slot name="left" />
    </div>
    <div class="column-right">
      <slot name="right" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "~/node_modules/bulma/sass/utilities/mixins.sass";

.two-columns {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  @include desktop {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    gap: 6rem;
  }
}
.column-left {
  max-width: 25rem;
  flex-grow: 1;
  flex-shrink: 0;
}
.column-right {
  max-width: 45rem;
  flex-shrink: 1;
}
</style>
