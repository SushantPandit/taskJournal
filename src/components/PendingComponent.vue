<template>
    <div class="pending-component">
        <b-container fluid class="bv-example-row bg-light">
            <b-row class="d-flex justify-content-between pt-3">
                <div class="pl-2">
                    <!-- <img src="" alt="image"> -->
                    <p class="h2" v-on:click="route()">Task</p>
                </div>
                <div class="h1 pr-2 d-flex">
                    <p class="h4 p-2 text-info" v-on:click="route('PendingComponent')">Pending</p>
                    <p class="h4 p-2 text-info" v-on:click="route('CompletedComponent')">Complited</p>
                    <!-- <b-icon icon="plus" class="border border-info rounded-lg" v-b-modal.create>Create</b-icon> -->
                </div>
            </b-row>
        </b-container>
        <b-container class="">
            <b-row class="date" v-for="(list,i) of allTask" v-bind:key="i">
                <b-container v-if="pedingTask(list.tasks)">
                    <div class="d-flex justify-content-between mt-3 mb-3">
                        <div class="">
                            <span class="h3 text-info ml-3">{{list.tasks[0].createionDate | moment('MMMM Do YYYY , dddd')}}</span>
                        </div>
                    </div>
                    <!-- </b-container> -->
                    <div class="d-flex flex-wrap justify-content-start pl-5" style="width:100%">
                        <div v-for="(task,i) of list.tasks" v-bind:key="i" class="m-2">
                            <b-card style="width:20rem" tag="article" class="mb-2" v-if="task.status==='Pending'">
                                <div class="">
                                    <div class="mb-2 d-flex justify-content-between">
                                        <span class="h4">{{task.type}}</span>
                                        <!-- <b-icon icon="arrows-angle-expand" variant="danger" class="expand" v-on:click="onExpand(i)" font-scale="1.2"></b-icon> -->
                                    </div>
                                    <div class="mb-2">
                                        <span class="h5 text-info">{{task.description}}</span>
                                    </div>
                                    <div class="">
                                        <div class="d-flex justify-content-between">
                                            <p class="mb-0 font-weight-bold">Created: </p>
                                            <p class=""> {{task.createionDate | moment("MMMM Do YYYY,ddd")}}</p>
                                        </div>
                                        <div class="d-flex justify-content-between">
                                            <p class="mb-0 font-weight-bold">Due Date: </p>
                                            <p class=""> {{task.dueDate | moment("MMMM Do YYYY,ddd")}}</p>
                                        </div>
                                    </div>
                                    <div class="mb-2" v-if="task.status">
                                        <span class="h6 font-weight-bold">Status:</span>
                                        <span class="h6 text-danger" v-if="task.status==='Pending'">{{task.status}}</span>
                                        <span class="h6 text-success" v-if="task.status!=='Pending'">{{task.status}}</span>
                                    </div>
                                </div>
                                <!-- <div class="mt-2 d-flex">
                                    <b-icon icon="check" class="border border-info rounded ml-2" font-scale="2"></b-icon>
                                    <b-icon icon="document-text" class="border border-info rounded ml-2" v-on:click="onUpdate(i)" font-scale="2"></b-icon>
                                    <b-icon icon="window" class="border border-info rounded ml-2" font-scale="2" v-on:click="onDelete(i)"></b-icon>
                                </div> -->
                            </b-card>
                        </div>
                    </div>
                </b-container>
            </b-row>
        </b-container>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
    name: "PendingComponent",
    data: () => {
        return {
        }
    },
    methods: {
        ...mapActions(["getAllTask"]),
        route(arg) {
            console.log("hit");
            arg ? this.$router.push("/" + arg) : this.$router.push("/");
        },
        pedingTask(args) {
            let valid = false;
            args.forEach(element => {
                if (element.status === "Pending") {
                    valid = true;
                }
            });
            return valid;
        }
    },
    mounted() {
        this.getAllTask();
    },
    computed: {
        ...mapGetters(["allTask"])
    }
}
</script>

<style>

</style>
