<template>
  <div class="create-Job">
    <form @submit.prevent="createJob">
      <input
        type="text"
        name="jobTitle"
        placeholder="Job title..."
        v-model="newJob.jobTitle"
        required
      />
      <input type="text" name="company" placeholder="Company..." v-model="newJob.company" required />
      <input
        type="text"
        name="description"
        placeholder="Job description..."
        v-model="newJob.description"
      />
      <input type="number" name="hours" placeholder="hours..." v-model="newJob.hours" required />
      <input type="number" name="rate" placeholder="rate..." v-model="newJob.rate" required />
      <br />
      <button type="submit" class="btn btn-success">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "CreateJob",
  data() {
    return {
      newJob: {}
    };
  },
  methods: {
    createJob() {
      this.$store.dispatch("createJob", this.newJob);
    }
  }
};
</script>

<style></style>
