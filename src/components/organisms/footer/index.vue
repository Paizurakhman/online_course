<template>
  <footer class="footer">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-9 text-center">
          <div class="footer-site-logo mb-4">
            <a href="#">OLearn</a>
          </div>
          <ul class="list-unstyled nav-links mb-5">
            <li><a href="#">Біз туралы</a></li>
            <li><a href="#">Сервистер</a></li>
            <li><a href="#">Мансап</a></li>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Ресми</a></li>
            <li><a href="#">Байланыс</a></li>
          </ul>

          <div class="social mb-4">
            <h3>Байланыста бол</h3>
            <ul class="list-unstyled">
              <li class="in"><a href="#">
                <i class="fa-brands fa-instagram"></i>
              </a></li>
              <li class="fb"><a href="#">
                <i class="fa-brands fa-facebook"></i>
              </a></li>
              <li class="tw"><a href="#">
                <i class="fa-brands fa-twitter"></i>
              </a></li>
              <li class="pin"><a href="#">
                <i class="fa-brands fa-pinterest"></i>
              </a></li>
              <li class="dr"><a href="#">
                <i class="fa-brands fa-dribbble"></i>
              </a></li>
            </ul>
          </div>

          <div class="copyright">
            <p class="mb-0"><small>&copy; OLearn. Барлық Құқықтар Сақталған.</small></p>
          </div>
        </div>
      </div>
    </div>
  </footer>

</template>

<script>
export default {
  name: "Footer"
}
</script>

<style scoped lang="scss">
.footer {
  padding: 5rem 0;
  background: #222a38;

  .footer-site-logo {
    text-align: center;
    font-size: 2rem;
    font-weight: 900;
    a {
      color: #4200ff;
    }
  }

  .nav-links {
    padding: 0;
    margin: 0;
    li {
      display: inline-block;
      a {
        padding: 10px;
        color: #FFFFFF;
        &:hover {
          color: #4200ff;
        }
      }
    }
  }
  .social {
    h3 {
      font-weight: bold;
      font-size: 18px;
      color: #FFFFFF;
    }
    ul {
      li {
        display: inline-block;
        a {
          display: inline-block;
          padding: 10px;
        }
        &.in {
          a {
            color: #df588a;
          }
        }
        &.tw {
          a {
            color: #15b8ff;
          }
        }
        &.fb {
          a {
            color: #3742d0;
          }
        }
        &.dr {
          a {
            color: #fa38c1;
          }
        }
        &.pin {
          a {
            color: #dd4d5a;
          }
        }
      }
    }
  }
  .copyright {
    color: darken(#ccc, 20%);
  }
}
</style>
