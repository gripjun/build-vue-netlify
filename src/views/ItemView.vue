<template>
  <div>
    <section>
      <!-- 유저 상세 정보 -->
      <user-profile :info="fetchedAskDetail">
        <router-link slot="username" :to="`/user/${fetchedAskDetail.user}`">
          {{ fetchedAskDetail.user }}
        </router-link>
        <template slot="time">
          {{ "posted " + fetchedAskDetail.time_ago }}
        </template>
      </user-profile>
    </section>
    <section>
      <h2>{{ fetchedAskDetail.title }}</h2>
    </section>
    <section>
      <!-- 질문 댓글 -->
      <div v-html="fetchedAskDetail.content"></div>
    </section>
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
    ...mapGetters(["fetchedAskDetail"]),
  },
  created() {
    const userId = this.$route.params.id;
    this.$store.dispatch("FETCH_ASK_DETAIL", userId);
  },
};
</script>

<style scoped>
.user-container {
  display: flex;
  align-items: center;
  padding: 0.5rem;
}
.fa-user {
  font-size: 2.5rem;
}
.user-description {
  padding-left: 8px;
}
.time {
  font-size: 0.7rem;
}
</style>