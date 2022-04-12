<template>
    <div class="container">
        <h1 class="text-center"> Locations </h1>
        <table class="table table-striped">
            <thead>
                <th> Country: </th>
                <th> City: </th>
                <th> County: </th>
            </thead>
            <tbody>
                <tr v-for="location in locations" v-bind:key = "location.id">
                    <td> {{location.id}}</td>
                    <td> {{location.country}}</td>
                    <td> {{location.city}}</td>
                    <td> {{location.county}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>

import LocationService from '../services/LocationService'

    export default{
        name: 'Locations',
        data(){
            return{
                locations : []
            }
        },
        methods: {
            getLocations(){
                LocationService.getLocations().then((response) => {
                    this.locations = response.data;
                })
            }
        },
        created(){
            this.getLocations()
        }
    }
</script>
