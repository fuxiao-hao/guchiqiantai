<template>
  <div class="app">
    <component :is="$store.getters.getAppView"></component>
    
          <router-view />
  </div>
</template>

<script>
import Login from "@/components/Login";
import Index from "@/components/Index";
export default {
  name: "App",
  data() {
    return {};
  },
  components: {
    Login,
    Index
  },
  methods: {},
  created() {
    if (sessionStorage.getItem("app_view")) {
      //this.$store.replaceState(Object.assign({},this.$store.stare,JSON.parse))
      this.$store.dispatch("change", sessionStorage.getItem("app_view"));
    }
    if (sessionStorage.getItem("session_user")) {
      this.$store.dispatch(
        "login",
        JSON.parse(sessionStorage.getItem("session_user"))
      );
    }
    window.addEventListener("beforeunload", () => {
      sessionStorage.setItem(
        "app_view",
        JSON.stringify(this.$store.getters.getAppView)
      );
      sessionStorage.setItem(
        "session_user",
        JSON.stringify(this.$store.getters.getSessionUser)
      );
    });
  }
};
</script>

<style >
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
