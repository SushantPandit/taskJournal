<template>
    <div class="calender">
        <b-container fluid class="bv-example-row bg-light">
            <b-row class="d-flex justify-content-between pt-3">
                <div class="pl-2">
                    <!-- <img src="" alt="image"> -->
                    <p class="h2">Task</p>
                </div>
                <div class="h1 pr-2 d-flex">
                    <p class="h4 p-2 text-info">Pending</p>
                    <p class="h4 p-2 text-info">Complited</p>    
                    <b-icon icon="plus" class="border border-info rounded-lg" v-b-modal.create>Create</b-icon>
                </div>
            </b-row>
        </b-container>
        <b-container>
            <div class="d-flex justify-content-between mt-3 mb-3">
                <div class="">
                    <b-icon icon="arrow-left-short" v-on:click="pDate" class="border border-info bg-info text-white rounded" font-scale="3"></b-icon>
                    <span class="h2 text-info ml-3">{{currentDate | moment('MMMM Do YYYY , dddd')}}</span>
                </div>
                <div class="align-self-end">
                    <!-- <b-icon icon="arrow-left-short" v-on:click="preDate" class="border border-info rounded ml-2" font-scale="2"></b-icon> -->
                    <b-icon icon="arrow-right-short" v-on:click="nDate" class="border border-info rounded ml-2 bg-info text-white" font-scale="3"></b-icon>
                </div>
            </div>
        </b-container>
        <b-container class="d-flex flex-wrap justify-content-start pl-5" style="width:100%">
            <div v-for="(task,i) of getTasks" v-bind:key="i" class="m-2">
                <b-card style="width:20rem" tag="article" class="mb-2">
                    <div class="">
                        <div class="mb-2 d-flex justify-content-between">
                            <span class="h4">{{task.type}}</span>
                            <b-icon icon="arrows-angle-expand" variant="danger" class="expand" v-on:click="onExpand(i)" font-scale="1.2"></b-icon>
                        </div>
                        <div class="mb-2">
                            <span class="h5 text-info">{{task.description}}</span>
                        </div>
                        <div class="d-flex">
                            <div class="text-left">
                                <p class="mb-0 font-weight-bold">Created</p>
                                <p class=""> {{currentDate | moment("MMMM Do YYYY,dddd")}}</p>
                            </div>
                            <div class="text-right">
                                <p class="mb-0 font-weight-bold">Due Date</p>
                                <p class=""> {{task.dueDate | moment("MMMM Do YYYY,dddd")}}</p>
                            </div>
                        </div>
                        <div class="mb-2" v-if="task.status">
                            <span class="h6 font-weight-bold">Status:</span>
                            <span class="h6 text-denger" v-if="task.status==='Pending'">{{task.status}}</span>
                            <span class="h6 text-success" v-if="task.status!=='Pending'">{{task.status}}</span>
                        </div>
                    </div>
                    <div class="mt-2 d-flex">
                        <b-icon icon="check" class="border border-info rounded ml-2" font-scale="2" ></b-icon>
                        <b-icon icon="document-text" class="border border-info rounded ml-2" v-on:click="onUpdate(i)" font-scale="2"></b-icon>
                        <b-icon icon="window" class="border border-info rounded ml-2" font-scale="2" v-on:click="onDelete(i)"></b-icon>
                    </div>
                </b-card>
            </div>
        </b-container>
        <b-modal id="create" title="Create Task" hide-footer>
            <create-task/>
        </b-modal>
        <b-modal id="update" title="Update Task" hide-footer>
            <update-task :updateRecord="data" />
        </b-modal>
        <b-modal id="view" title="View Task" hide-footer>
            <view-task :viewRecord="data" />
        </b-modal>    
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import CreateTask from "./CreateTask";
import UpdateTask from "./UpdateTask";
import ViewTask from "./ViewTask";

export default {
    name: "Calender",
    data: () => {
        return {
            currentDate: "",
            taskList: {},
            data: ""
        };
    },
    components: {
        CreateTask,
        UpdateTask,
        ViewTask,
    },

    methods: {
        ...mapActions(["callFunction", "preDate", "nextDate","deleteTask"]),

        pDate() {
            this.preDate();
            this.currentDate = this.getDate;
            // console.log(this.getTasks);
        },
        nDate() {
            this.nextDate();
            this.currentDate = this.getDate;
            // console.log(this.getTasks);
        },
        route() {
            console.log("hit");
            this.$router.push("/CreateTask");
        },
        onUpdate(index) {
            // console.log(index);
            this.data ={
                index:index,
                getTasks:this.getTasks
            } 
            this.$bvModal.show('update');
            // this.$refs['update'].show()
        },
        onExpand(index){
            console.log(index);
            this.data ={
                index:index,
                getTasks:this.getTasks
            } 
            this.$bvModal.show('view');
        },
        onDelete(index){
            console.log(index+" hit")
            this.deleteTask(index);
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
.expand {
    position: relative;
    top: -17px;
    right: -17px;
}
</style>
