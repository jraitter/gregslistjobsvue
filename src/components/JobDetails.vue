<template>
  <div class="job-details">
    <div v-if="jobData._id">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Title: {{ jobData.jobTitle }}</h5>
          <h6 class="card-title">Company: {{ jobData.company }}</h6>
          <p>Description: {{jobData.description}}</p>
          <p>hours: {{jobData.hours}} --- rate: ${{jobData.rate}}</p>
        </div>
        <button @click="deleteJob">Delete</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "JobDetails",
  computed: {
    jobData() {
      return this.$store.state.activeJob;
    }
  },
  methods: {
    deleteJob() {
      this.$store.dispatch("deleteJob", this.jobData._id);
    }
  }
};
</script>

<style></style>
