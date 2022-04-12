<template>
  <div class="container">
    <div class="row">
      <div class="col-12 text-center">
        <h3 class="pt-3">Login Form</h3>
      </div>
    </div>
    <div class="row">
      <div class="col-3"></div>
      <div class="col-6">
        <form>
          <div class="form-group">
            <label>Country</label>
            <input type="text" class="form-control" v-model="form.country" />
          </div>
          <div class="form-group">
            <label>City</label>
            <textarea type="text" class="form-control" v-model="form.city" />
          </div>
          <div class="form-group">
            <label>County</label>
            <input type="text" class="form-control" v-model="form.county" />
          </div>
          <button type="button" class="btn btn-primary" @click="addLocation">
            Submit
          </button>
        </form>
      </div>
      <div class="col-3"></div>
    </div>
  </div>
</template>

<script>
import LocationService from '../services/LocationService'

export default {
  name: "LoginForm",
  data() {
    return {
      form: {
        country: "",
        city: "",
        county: "",
      },
    };
  },
  methods: {
    addLocation() {
      console.log("addlocation içi")
      console.log(this.form)
      LocationService.addLocations(this.form)
      this.$router.push({name: 'Locations' });
    },
  },
};
</script>
