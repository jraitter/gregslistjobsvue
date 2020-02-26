<template>
  <div class="job col-6">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Title: {{ jobData.jobTitle }}</h5>
        <h6 class="card-title">Company: {{ jobData.company }}</h6>
      </div>
      <button @click="setActive">Details</button>
      <button @click="deleteJob">Delete</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Job",
  //NOTE child components 'catch' information in props
  props: ["jobData"],
  methods: {
    deleteJob() {
      this.$store.dispatch("deleteJob", this.jobData._id);
    },
    setActive() {
      this.$store.dispatch("setActiveJob", this.jobData);
    }
  }
};
</script>

<style scoped>
</style>
