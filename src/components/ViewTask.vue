<template>
    <div class="viewTask container">
        <!-- <b-container fluid class="bv-example-row bg-light">
                                                    <b-row class="d-flex pt-3">
                                                        <div class="h1 pr-2">
                                                            <b-icon icon="arrow-left-short" class="border border-info rounded-lg" v-on:click="route"></b-icon>
                                                        </div>
                                                        <div class="pl-2">
                                                            <p class="h2">Create Task</p>
                                                        </div>
                                                    </b-row>
                                                </b-container> -->
        <b-form @submit="onSubmit">
            <b-row>
                <b-col>
                    <b-form-group id="input-group-1" label="Creation Date:" label-for="input-1">
                        <p class="border rounded p-1 ">{{createionDate | moment("MMMM Do YYYY")}}</p>
                    </b-form-group>
                </b-col>
                <b-col>
                    <b-form-group id="input-group-1" label="Due Date:" label-for="input-1" description="">
                        <p class="border rounded p-1 ">{{dueDate | moment("MMMM Do YYYY")}}</p>
                    </b-form-group>
                </b-col>
            </b-row>
            <b-row>
                <b-col>
                    <b-form-group id="input-group-3" label="Task Type:" label-for="input-3">
                        <p class="border rounded p-1 ">{{viewForm.type}}</p>
                    </b-form-group>
                </b-col>
                <b-col>
                    <b-form-group id="input-group-3" label="Status:" label-for="input-3">
                        <p class="border rounded p-1 " >{{viewForm.status}}</p>
                    </b-form-group>
                </b-col>
            </b-row>
            <b-row>
                <b-col>
                    <b-form-group id="input-group-2" label="Description:" label-for="input-2">
                        <p class="border rounded p-1 ">{{viewForm.description}}</p>
                    </b-form-group>
                </b-col>
            </b-row>
            <b-row>
                <b-col>
                    <b-form-group id="input-group-2" label="Comments" label-for="input-2">
                        <div class="border">
                            <div v-for="(comment,i) of viewForm.comments" :key="comment">
                                <p>{{i+1}}. {{comment}} </p>
                            </div>
                        </div>
                    </b-form-group>
                </b-col>
            </b-row>
            <b-button type="submit" variant="info">Close</b-button>
            <!-- <b-button type="reset" variant="info">Close</b-button> -->
        </b-form>
    
    </div>
</template>

<script>
import moment from 'moment';

export default {
    name: "ViewTask",
    data() {
        return {
            createionDate: "",
            dueDate: "",
            viewForm:{}
        };
    },
    props: {
        viewRecord: {}
    },
    mounted() {
        console.log(this.viewRecord);
        this.viewForm = this.viewRecord.getTasks[this.viewRecord.index];
        this.createionDate = this.format(this.viewForm.createionDate);
        this.dueDate = this.format(this.viewForm.dueDate);
    },
    methods: {
        format(value) {
            return moment(value).format("YYYY-MM-DD");
        },
        onSubmit() {
            this.$emit("finished");
        },
    }
}
</script>

<style>

</style>
