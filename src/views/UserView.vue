<template>
  <div>
    <user-profile :info="fetchedUser">
      <div slot="username">{{ fetchedUser.id }}</div>
      <span slot="time"> {{ "joined " + fetchedUser.created }},  </span>
      <span slot="karma">{{ fetchedUser.karma }}</span>
    </user-profile>
  </div>
</template>

<script>
import UserProfile from "../components/UserProfile.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    UserProfile,
  },
  computed: {
    ...mapGetters(["fetchedUser"]),
    // fetchedUser() {
    //   return this.$store.state.user;
    // }
  },
  created() {
    const userName = this.$route.params.id;
    this.$store.dispatch("FETCH_USER", userName);
  },
};
</script>

<style></style>