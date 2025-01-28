<template>
  <div class="browser-card">
    <div v-if="props.cv" class="item item-chrome">
      <div class="item-logo">
        <img src="../assets/svg/logo-chrome.svg" />
      </div>
      <div class="item-version">Chrome {{ props.cv }}</div>
    </div>
    <div v-if="props.fv" class="item item-firefox">
      <div class="item-logo">
        <img src="../assets/svg/logo-firefox.svg" />
      </div>
      <div class="item-version">Firefox {{ props.fv }}</div>
    </div>
    <div v-if="props.sv" class="item item-safari">
      <div class="item-logo">
        <img src="../assets/svg/logo-safari.svg" />
      </div>
      <div class="item-version">Safari {{ props.sv }}</div>
    </div>
    <div v-if="props.ev" class="item item-edge">
      <div class="item-logo">
        <img src="../assets/svg/logo-edge.svg" />
      </div>
      <div class="item-version">Edge {{ props.ev }}</div>
    </div>
    <div v-if="props.oev" class="item item-old-edge">
      <div class="item-logo">
        <img src="../assets/svg/logo-edge10.svg" />
      </div>
      <div class="item-version">Edge {{ props.oev }}</div>
    </div>
    <div v-if="props.iev" class="item item-ie">
      <div class="item-logo">
        <img src="../assets/svg/logo-ie.svg" />
      </div>
      <div class="item-version">IE {{ props.iev }}</div>
    </div>
    <div v-if="props.ov" class="item item-opera">
      <div class="item-logo">
        <img src="../assets/svg/logo-opera.svg" />
      </div>
      <div class="item-version">Opera {{ props.ov }}</div>
    </div>
    <div v-if="props.nv" class="item item-node">
      <div class="item-logo">
        <img src="../assets/svg/logo-node.svg" />
      </div>
      <div class="item-version">Node {{ props.nv }}</div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const props = defineProps({
  cv: { type: String, default: "" },
  fv: { type: String, default: "" },
  sv: { type: String, default: "" },
  ev: { type: String, default: "" },
  oev: { type: String, default: "" },
  iev: { type: String, default: "" },
  ov: { type: String, default: "" },
  nv: { type: String, default: "" },
});
</script>

<style lang="scss" scoped>
.browser-card {
  display: flex;
  border: 1px solid var(--vp-c-divider);

  .item {
    flex: 1;
    display: flex;
    flex-direction: column;

    &-logo {
      flex: 1;
      display: grid;
      place-content: center;
      padding: 10px 6px;
      font-size: 0;
      background-color: var(--vp-c-bg-soft);

      > img {
        max-width: 50px;
        user-select: none;
        -webkit-user-drag: none;
      }
    }

    &-version {
      padding: 10px 6px;
      text-align: center;
      font-size: 14px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }

  .item:not(:first-child) {
    border-left: 1px solid var(--vp-c-divider);
  }
  .item > div:not(:first-child) {
    border-top: 1px solid var(--vp-c-divider);
  }
}

@media (max-width: 768px) {
  .browser-card {
    flex-direction: column;

    .item {
      flex-direction: row;

      &-logo {
        > img {
          max-width: auto;
          height: 50px;
        }
      }

      &-version {
        flex: 1;
        display: grid;
        place-content: center;
      }
    }

    .item:not(:first-child) {
      border-left: none;
    }
    .item > div:not(:first-child) {
      border-top: none;
    }

    .item:not(:first-child) .item-logo,
    .item:not(:first-child) .item-version {
      border-top: 1px solid var(--vp-c-divider);
    }
    .item .item-version {
      border-left: 1px solid var(--vp-c-divider);
    }
  }
}
</style>
