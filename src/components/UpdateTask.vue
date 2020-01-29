<template>
    <div class="createtask container">
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
        <b-form @submit="onSubmit" v-if="show">
            <b-row>
                <b-col>
                    <b-form-group id="input-group-1" label="Creation Date:" label-for="input-1">
                        <p class="border rounded p-1 text-success">{{createionDate | moment("MMMM Do YYYY")}}</p>
                    </b-form-group>
                </b-col>
                <b-col>
                    <b-form-group id="input-group-1" label="Due Date:" label-for="input-1" description="">
                        <b-form-input id="input-1" v-model="dueDate" type="date" required placeholder="Select date"></b-form-input>
                    </b-form-group>
                </b-col>
            </b-row>
            <b-row>
                <b-col>
                    <b-form-group id="input-group-3" label="Task Type:" label-for="input-3">
                        <b-form-select id="input-3" v-model="updateForm.type" :options="types" required></b-form-select>
                    </b-form-group>
                </b-col>
                <b-col>
                    <b-form-group id="input-group-3" label="Task Type:" label-for="input-3">
                        <b-form-select id="input-3" v-model="updateForm.status" :options="status" required></b-form-select>
                    </b-form-group>
                </b-col>
            </b-row>
            <b-row>
                <b-col>
                    <b-form-group id="input-group-2" label="Description:" label-for="input-2">
                        <b-form-input id="input-2" v-model="updateForm.description" required placeholder="Task description"></b-form-input>
                    </b-form-group>
                </b-col>
            </b-row>
            <b-row>
                <b-col>
                    <b-form-group id="input-group-2" label="Comment:" label-for="input-2">
                        <b-form-input id="input-2" v-model="comment" required placeholder="Add comment"></b-form-input>
                    </b-form-group>
                </b-col>
            </b-row>
            <b-row>
                <b-col>
                    <b-form-group id="input-group-2" label="Comments" label-for="input-2">
                        <div class="border">
                            <div v-for="(comment,i) of updateForm.comments" :key="comment">
                                <p>{{i+1}}. {{comment}} </p>
                            </div>
                        </div>
                    </b-form-group>
                </b-col>
            </b-row>
            <b-button type="submit" variant="info">Update</b-button>
            <!-- <b-button type="reset" variant="info">Close</b-button> -->
        </b-form>
    
    </div>
</template>

<script>
import moment from 'moment';
import { mapActions } from 'vuex';

export default {
    name: "UpdateTask",
    data() {
        return {
            updateForm: {
                createionDate: "",
                dueDate: "",
                description: "",
                type: null,
                comments: [],
                status:""
            },
            types: [
                { text: "Select One", value: null },
                "Project",
                "Family",
                "Personal",
                "Friends"
            ],
            status: [
                { text: "Create", value: "Created" },
                "Pending",
                "Done"
            ],
            createionDate: "",
            dueDate: "",
            comment: "",
            show: true,
        };
    },
    props: {
        updateRecord: {}
    },
    mounted() {
        console.log(this.updateRecord);
        this.updateForm = this.updateRecord.getTasks[this.updateRecord.index];
        console.log(this.updateForm);
        this.createionDate = this.format(this.updateForm.createionDate);
        this.dueDate = this.format(this.updateForm.dueDate);
        console.log(this.createionDate + " " + this.dueDate);
    },
    methods: {
        ...mapActions(["updateTask"]),
        onSubmit() {
            let form = this.updateForm;
            form.createionDate = new Date(this.createionDate);
            form.dueDate = new Date(this.dueDate);
            if (this.comment) {
                form.comments.push(this.comment);
                this.comment = "";
            }
            console.log(form);
            let taskList = this.updateRecord.getTasks;

            taskList.splice(this.updateRecord.index, 1, form);
            console.log(taskList);
            this.updateTask({ form, taskList });
            this.$emit("finished");

        },
        format(value) {
            return moment(value).format("YYYY-MM-DD");
        },
    }
}
</script>

<style>

</style>
