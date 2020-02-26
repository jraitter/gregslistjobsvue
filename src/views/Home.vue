<template>
  <div class="home container-fluid">
    <div class="row">
      <div class="col text-center">
        <h1>Welcome to Gregslist - Jobs</h1>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <jobs />
      </div>
      <div class="col">
        <div class="row">
          <div class="col">
            <create-job />
          </div>
        </div>
        <div class="row">
          <div class="col">
            <job-details />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import Jobs from "@/components/Jobs";
import JobDetails from "@/components/JobDetails";
import CreateJob from "@/components/CreateJob";

export default {
  name: "Home",
  components: {
    Jobs,
    JobDetails,
    CreateJob
  }
};
</script>
