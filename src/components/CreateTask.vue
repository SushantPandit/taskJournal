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
        <b-form @submit="onSubmit" @reset="onReset" v-if="show">
            <b-row>
                <b-col>
                    <b-form-group id="input-group-1" label="Creation Date:" label-for="input-1" description="Task created on">
                        <b-form-input id="input-1" v-model="createionDate" type="date" required placeholder="Select date"></b-form-input>
                    </b-form-group>
                </b-col>
                <b-col>
                    <b-form-group id="input-group-1" label="Due Date:" label-for="input-1" description="">
                        <b-form-input id="input-1" v-model="dueDate" type="date" required placeholder="Select date"></b-form-input>
                        <p class="h6 text-danger" v-if="dateWarnig">Select correct date.</p>
                    </b-form-group>
    
                </b-col>
            </b-row>
            <b-row>
                <b-col>
                    <b-form-group id="input-group-3" label="Task Type:" label-for="input-3">
                        <b-form-select id="input-3" v-model="form.type" :options="types" required></b-form-select>
                    </b-form-group>
                </b-col>
                <b-col>
                    <b-form-group id="input-group-3" label="Task Type:" label-for="input-3">
                        <b-form-select id="input-3" v-model="form.status" :options="status" required></b-form-select>
                    </b-form-group>
                </b-col>
            </b-row>
            <b-row>
                <b-col>
                    <b-form-group id="input-group-2" label="Description:" label-for="input-2">
                        <b-form-input id="input-2" v-model="form.description" required placeholder="Task description"></b-form-input>
                    </b-form-group>
                </b-col>
            </b-row>
            <b-row>
                <b-col>
                    <b-form-group id="input-group-2" label="Comment:" label-for="input-2">
                        <b-form-input id="input-2" v-model="comment" required placeholder="Comment"></b-form-input>
                    </b-form-group>
                </b-col>
            </b-row>
    
            <b-button type="submit" variant="info">Create</b-button>
            <b-button type="reset" variant="info">Clear</b-button>
        </b-form>
    
    </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import moment from 'moment';

export default {
    name: "CreateTask",
    data() {
        return {
            form: {
                createionDate: "",
                dueDate: "",
                description: "",
                type: null,
                comments: [],
                status: "Created"
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
            dateWarnig: false
        };
    },
    methods: {
        ...mapActions(["createTask","getType"]),
        onSubmit(evt) {
            // this.form.comments = [];
            // condition to set the date as time stamp.
            if (this.createionDate && this.dueDate) {
                this.form.createionDate = this.formateDate(this.createionDate);
                this.form.dueDate = this.formateDate(this.dueDate);
                this.dateWarnig = this.dateDiff(this.form.createionDate, this.form.dueDate);
            }

            if (!this.dateWarnig) {
                console.log('hit in submit');
                evt.preventDefault();
                if (this.comment !== "") {
                    this.form.comments.push(this.comment);
                }
                let form = this.form;
                this.createTask(form);
                this.$emit("finished");
            }
        },
        onReset(evt) {
            evt.preventDefault();
            // Reset our form values
            this.reset();
        },
        formateDate(arg) {
            let date = new Date(arg);
            return date;
        },
        reset() {
            this.form.createionDate = "";
            this.form.dueDate = "";
            this.form.description = null;
            this.form.type = null;
            this.form.comments = [];
            this.createionDate = "";
            this.dueDate = "";
            this.comment = "";
            // Trick to reset/clear native browser form validation state
            this.show = false;
            this.$nextTick(() => {
                this.show = true;
            });
        },
        route() {
            console.log("hit");
            this.$router.push("/");
        },
        dateDiff(date1, date2) {
            var one_day, date1, date2, diff;

            //Get 1 day in milliseconds
            one_day = 1000 * 60 * 60 * 24;
            date1 = date1.getTime();
            date2 = date2.getTime();
            diff = (date1 - date2) / one_day;
            return (diff > 0) ? true : false;
        }
    },
    mounted() {
        this.createionDate = moment(new Date()).format("YYYY-MM-DD");
        this.getType();
        console.log(this.getTypes);
    },
    computed:{
        ...mapGetters(["getTypes"])
    }
};
</script>

<style scoped>

</style>
