<template>
  <v-row
    v-if="projects.length"
    class="mx-0 projects-swiper-wrapper"
  >
    <p
      class="ma-0 pa-0 flying-text hidden-md-and-up"
      v-text="`*${$t('projects.swipe')}*`"
    ></p>
    <i
      v-show="!isFirstPage"
      class="fas fa-chevron-left arrow-icon arrow-icon-left hidden-sm-and-down"
      @click="prevSlide"
    ></i>
    <swiper
      ref="swiperRef"
      :options="options"
      @ready="initSwiperProperties"
      @slideChange="onSlideChangeHandler"
    >
<!--      cols="12" sm="6" md="4"-->
      <swiper-slide
        v-for="(proj, i) in projects"
        class="pt-0"
        :key="proj.id"
        :project="proj"
        :index="i"
      >
          <projects-swiper-item
            :project="proj"
            :index="i"
          />
      </swiper-slide>
    </swiper>
    <i
      v-show="!isLastPage"
      class="fas fa-chevron-right arrow-icon arrow-icon-right hidden-sm-and-down"
      @click="nextSlide"
    ></i>
  </v-row>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'
import 'swiper/swiper.scss'
import ProjectsSwiperItem from '@/components/projects/ProjectsSwiperItem'
export default {
  props: {
    projects: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      swiper: null,
      activeIndex: 0,
      slidesPerView: 3,
      lastIndex: null,
      initialWidth: 0,
      breakpoint: 0,
      breakpointWasModified: false
    }
  },
  mounted() {
    this.initialWidth = document.documentElement.clientWidth
    window.addEventListener('resize', this.resizeHandler)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.resizeHandler)
  },
  computed: {
    options() {
      return {
        slidesPerView: this.slidesPerView,
        spaceBetween: 30,
        breakpoints: {
          1920: {
            slidesPerView: 4
          },
          0: {
            slidesPerView: 1
          },
          600: {
            slidesPerView: 2
          },
          1024: {
            slidesPerView: 3
          }
        }
      }
    },
    isFirstPage() {
      return this.activeIndex === 0
    },
    isLastPage() {
      return this.activeIndex === this.lastIndex
    }
  },
  methods: {
    resizeHandler() {
      const width = document.documentElement.clientWidth
      const breakpoint = +this.breakpoint

      if (width <= breakpoint) {
        this.setActiveBreakpoint()
        this.setLastIndex(this.projects.length, this.breakpoint)
        return
      }
      const allBreakpoints = Object.keys(this.options.breakpoints)
      const lastBreakpointIndex = allBreakpoints.length - 1

      const alreadyOnTheLastBreakpoint = breakpoint === +allBreakpoints[lastBreakpointIndex]
      const nextBreakPointValue = !alreadyOnTheLastBreakpoint && allBreakpoints.findIndex((bp) => +bp === breakpoint) + 1
      if (alreadyOnTheLastBreakpoint) {
        return
      }
      if (!alreadyOnTheLastBreakpoint && width >= breakpoint && width > allBreakpoints[nextBreakPointValue]) {
        this.setActiveBreakpoint()
        this.setLastIndex(this.projects.length, this.breakpoint)
      }
    },
    initSwiperProperties(swiper) {
      this.swiper = swiper
      this.activeIndex = swiper.activeIndex
      this.setActiveBreakpoint()
      this.setLastIndex(this.projects?.length, this.breakpoint)
    },
    setActiveBreakpoint() {
      this.breakpoint = this.$refs.swiperRef?.swiperInstance.currentBreakpoint
    },
    setLastIndex(projectsCount, breakpoint) {
      const currentBreakpoint = this.options.breakpoints
      this.lastIndex = Math.ceil(projectsCount / currentBreakpoint[breakpoint].slidesPerView) - 1
    },
    onSlideChangeHandler() {
      this.activeIndex = this.swiper.activeIndex
    },
    nextSlide() {
      this.swiper.slideNext()
    },
    prevSlide() {
      this.swiper.slidePrev()
    }
  },
  components: {
    ProjectsSwiperItem,
    Swiper,
    SwiperSlide
  }
}
</script>

<style lang="scss" scoped>
.projects-swiper-wrapper {
  position: relative;
}
.arrow-icon {
  font-size: 1.5rem;
  position: absolute;
  top: 35%;
  cursor: pointer;
  padding: 1rem 1.2rem;
  color: #dbdbdb;
  transition: color 0.5s ease;
  &:hover {
    color: #000;
    transition: color 0.5s ease;
  }
  &-left {
    left: -6%;
    z-index: 2;
  }
  &-right {
    right: -6%;
    z-index: 2;
  }
}

.flying-text {
  font-size: .7rem;
  color: rgba(0, 0, 0, .2);
  position: absolute;
  top: -5%;
  left: 0;
  right: 0;
  z-index: 50;
}
</style>
