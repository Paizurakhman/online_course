<template>
  <div class="sidebar">
    <p class="sidebar__topics">Сабақтың тақырыптары</p>
    <ul>
      <li v-for="nav in navs" :key="nav.id">
        <router-link
            exact-active-class="active"
            :to="{ name: 'lessons-detail',  params: {slug: nav.id}}"
        >
          <p>
            <i class="fa-solid fa-play"></i>
            <span>{{nav.name}}</span>
          </p>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
  props: {
    navs: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style scoped lang="scss">
  .sidebar {
    min-width: 330px;
    max-width: 330px;
    background: #FFFFFF;
    top: 0;
    bottom: 0;
    left: 0;
    overflow-y: auto;
    float: left;
    position: fixed;
    display: flex;
    flex-direction: column;
    z-index: 2;
    box-shadow: 0 4px 10px rgba(0,0,0,0.1);
    &__topics {
      margin-top: 24px;
      text-transform: uppercase;
      font-size: 14px;
      padding: 0 32px;
    }
    ul {
      li {
        a {
          color: #111927;
          border-left: 4px solid transparent;
          padding: 0 32px;
          display: block;
          font-size: 14px;
          p {
            display: flex;
            align-items: center;
            margin: 0;
            padding: 8px 0;
            gap: 10px;
          }
          &.active {
            border-color: #111927;
            background: rgba(141, 152, 169, 0.2);
            p {
              border-color: transparent;
            }
          }
          i {
            color: rgba(141, 152, 169);
          }
        }
        & + li {
          a p {
            border-top: 1px solid $thm-gray;
          }
        }
      }
    }
  }
</style>
