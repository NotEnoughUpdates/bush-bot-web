<template>
  <div class="listItem flex relative justify-center">
    <div class="pill items-center flex">
      <span v-if="isSelected" class="item" style="opacity: 1; height: 40px; transform: none"></span>
      <span v-else-if="isHovered" class="item" style="opacity: 1; height: 20px; transform: none"></span>
    </div>
    <div>
      <div class="blobContainer block" :draggable="draggable">
        <div class="wrapper serverWrapper">
          <svg width="48" height="48" viewBox="0 0 48 48" class="svg" overflow="visible">
            <defs>
              <transition name="">
                <path
                  v-if="isSelected || isHovered"
                  :id="`${serverid}-blob_mask`"
                  d="M0 24C0 16.5449 0 12.8174 1.21793 9.87706C2.84183 5.95662 5.95662 2.84183 9.87706 1.21793C12.8174 0 16.5449 0 24 0C31.4551 0 35.1826 0 38.1229 1.21793C42.0434 2.84183 45.1582 5.95662 46.7821 9.87706C48 12.8174 48 16.5449 48 24C48 31.4551 48 35.1826 46.7821 38.1229C45.1582 42.0434 42.0434 45.1582 38.1229 46.7821C35.1826 48 31.4551 48 24 48C16.5449 48 12.8174 48 9.87706 46.7821C5.95662 45.1582 2.84183 42.0434 1.21793 38.1229C0 35.1826 0 31.4551 0 24Z"
                ></path>
                <path
                  v-else
                  :id="`${serverid}-blob_mask`"
                  d="M48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24Z"
                ></path>
              </transition>
            </defs>
            <mask :id="serverid" fill="black" x="0" y="0" width="48" height="48">
              <use :href="`#${serverid}-blob_mask`" fill="white"></use>
            </mask>
            <foreignObject
              :mask="`url(#${serverid})`"
              x="0"
              y="0"
              width="48"
              height="48"
              :class="`${isSvg ? (isSelected || isHovered ? svgBackgroundHover : svgBackground) : ''} block`"
              @mouseenter="mouseenter"
              @mouseleave="mouseleave"
              @mousedown="mousedown"
            >
              <div
                class="wrapper items-center flex justify-center"
                style="width: 48px; height: 48px"
                :href="customHref || `/dashboard/guild/${serverid}/`"
              >
                <svg
                  v-if="isSvg"
                  class="icon"
                  :width="svgWidth"
                  :height="svgHeight"
                  :viewBox="`0 0 ${svgWidth} ${svgHeight}`"
                >
                  <path
                    :class="`${isSelected || isHovered ? svgFillHover : svgFill} ${
                      isSelected || isHovered ? svgBackgroundHover : svgBackground
                    }`"
                    fill="currentColor"
                    :d="icon"
                  ></path>
                </svg>
                <img v-else-if="icon" class="icon" :src="icon" alt="" width="48" height="48" />
              </div>
            </foreignObject>
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'ServerIcon',
  props: {
    icon: { type: String, required: false, default: '' },
    isSvg: { type: Boolean, required: false, default: false },
    svgHeight: { type: String, required: false, default: '24' },
    svgWidth: { type: String, required: false, default: '24' },
    svgBackground: { type: String, required: false, default: 'bg-discord-content' },
    svgBackgroundHover: { type: String, required: false, default: 'bg-discord-green' },
    svgFill: { type: String, required: false, default: 'text-discord-green' },
    svgFillHover: { type: String, required: false, default: 'text-white' },
    customHref: { type: String, required: false, default: '' },
    name: { type: String, required: true },
    serverid: { type: String, required: true },
    draggable: { type: Boolean, required: false, default: false },
  },
  data() {
    return {
      isSelected: false,
      isHovered: false,
    }
  },
  methods: {
    mouseenter() {
      this.isHovered = true
    },
    mouseleave() {
      this.isHovered = false
    },
    mousedown() {
      this.isSelected = !this.isSelected
    },
  },
})
</script>

<style scoped>
.listItem {
  width: 72px;
  margin: 0 0 8px;
}

.pill {
  justify-content: flex-start;
  width: 8px;
  height: 48px;
  position: absolute;
  overflow: hidden;
  display: flex;
  align-items: center;
  left: 0;
}

.item {
  display: block;
  position: absolute;
  margin-left: -4px;
  width: 8px;
  background-color: #ffffff;
  border-bottom-right-radius: 4px;
  border-top-right-radius: 4px;
}

/* .wrapper {
  transition-delay: 0s, 0s;
  transition-duration: 0.1s, 0.1s;
  transition-property: background-color, color;
  transition-timing-function: ease-out, ease-out;
} */

.serverWrapper {
  box-sizing: border-box;
  display: block;
  height: 48px;
  width: 48px;
  position: relative;
}

.svg {
  box-sizing: border-box;
  height: 48px;
  left: 0;
}
</style>
