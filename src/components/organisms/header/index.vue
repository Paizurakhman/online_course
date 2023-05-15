<template>
  <header class="header" id="nav">
    <nav class="navbar header-nav" >
      <div class="container">
        <div class="header__logo">
          <router-link to="/">
            <icon name="logo" />
          </router-link>
        </div>
        <div class="header__navigations">
          <ul class="navigations">
            <li v-for="nav in navs" :key="nav">
              <router-link :to="{ name: nav.name }" exact active-class="active">{{ nav.title }}</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
import Icon from "@/components/atoms/icon/index.vue";
import {onMounted, ref} from "vue";

export default {
  name: "HeaderNav",
  components: {Icon},
  setup() {
    const navs = [
      {
        title: "Сабақтар",
        name: 'lessons'
      },
      {
        title: "Біз туралы",
        name: 'about-us'
      },
      {
        title: "Байланыс",
        name: 'contact-us'
      },
    ]

    onMounted(() => {
      const nav = document.querySelector('#nav');
      let navTop = nav.offsetTop;

      function fixedNav() {
        if (window.scrollY >= navTop + 40) {
          nav.classList.add('fixed');
        } else {
          nav.classList.remove('fixed');
        }
      }

      window.addEventListener('scroll', fixedNav);
    })

    return { navs }
  }
}
</script>

<style scoped lang="scss">
.header {
  transition: .3s ease-in-out;
  position: relative;
  z-index: 1;
  .navigations {
    li {
      display: inline-block;
      & + li {
        margin-left: 30px;
      }
      a {
        color: #a4b1cd;
        font-weight: 500;
        transition: all .3s ease;
        &.active, &:hover {
          color: #FFFFFF;
        }
      }
    }
  }
  &.fixed {
    width: 100%;
    position: sticky;
    top: 0;
    background: #111927;
    box-shadow: 5px 5px 19px 0px rgba(0, 0, 0, 0.5);
  }
  &-nav {
  }
}
</style>
