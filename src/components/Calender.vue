<template>
    <div class="calender">
        <b-container fluid class="bv-example-row bg-light">
            <b-row class="d-flex justify-content-between">
                <div class="pl-2">
                    <!-- <img src="" alt="image"> -->
                    <p class="h2">Task</p>
                </div>
                <div class="h1 pr-2">
                    <b-icon icon="list" v-on:click="route"></b-icon>
                </div>
            </b-row>
        </b-container>
        <b-container>
            <div class="d-flex justify-content-between mt-3 mb-3">
                <div class="">
                    <b-icon icon="arrow-left-short" v-on:click="pDate" class="border border-info rounded" font-scale="3"></b-icon>
                    <span class="h2 text-info ml-3">{{currentDate | moment('MMMM Do YYYY , dddd')}}</span>
                </div>
                <div class="align-self-end">
                    <!-- <b-icon icon="arrow-left-short" v-on:click="preDate" class="border border-info rounded ml-2" font-scale="2"></b-icon> -->
                    <b-icon icon="arrow-right-short" v-on:click="nDate" class="border border-info rounded ml-2" font-scale="3"></b-icon>
                </div>
            </div>
        </b-container>
        <b-container class="d-flex flex-wrap justify-content-start pl-5" style="width:100%">
            <div v-for="task of getTasks" v-bind:key="task.id" class="m-2">
                <b-card :title=task.type style="width:20rem" tag="article" class="mb-2">
                    <div class="">
                        <div class="mb-2">
                            <!-- <span class="" >Description: </span> -->
                            <span class="h6">{{task.details}}</span>
                        </div>
                        <div class="">
                            <p class="mb-0">Created :</p>
                            <p class=""> {{currentDate | moment("MMMM Do YYYY,dddd")}}</p>
                            <p class="mb-0">Due Date:</p>
                            <p class=""> {{task.dueDate}}</p>
                        </div>
                    </div>
                    <div class="mt-4">
                        <b-icon icon="check" class="border border-info rounded ml-2" font-scale="2"></b-icon>
                        <b-icon icon="document-text" class="border border-info rounded ml-2" font-scale="2"></b-icon>
                        <b-icon icon="window" class="border border-info rounded ml-2" font-scale="2"></b-icon>
                    </div>
                </b-card>
            </div>
        </b-container>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
    name: "Calender",
    data: () => {
        return {
            currentDate: "",
            taskList: {}
        };
    },

    methods: {
        ...mapActions(["callFunction", "preDate", "nextDate"]),

        pDate() {
            this.preDate();
            this.currentDate = this.getDate;
            console.log(this.getTasks);
        },
        nDate() {
            this.nextDate();
            this.currentDate = this.getDate;
            // console.log(this.getTasks);
        },
        route() {
            console.log('hit');
            this.$router.push('/CreateTask');
        }
    },

    computed: {
        ...mapGetters(["getDate", "getTasks"])
    },

    mounted() {
        this.callFunction();
        this.currentDate = this.getDate;
        // this.taskList = this.getTasks;
        console.log(this.getTasks);
    }
};
</script>

<style>

</style>
