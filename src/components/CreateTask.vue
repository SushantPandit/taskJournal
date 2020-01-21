<template>
    <div class="createtask container">
        <div class="title">
            <p class="h2">Create Task</p>
        </div>
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
                    <!-- empty -->
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
        <!-- <b-card class="mt-3" header="Form Data Result">
                        <pre class="m-0">{{ form }}</pre>
                    </b-card> -->
    </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
    name: "CreateTask",
    data() {
        return {
            form: {
                createionDate: "",
                dueDate: "",
                description: "",
                type: null,
                comments: []
            },
            types: [
                { text: "Select One", value: null },
                "Project",
                "Family",
                "Personal",
                "Friends"
            ],
            createionDate:'',
            dueDate:'',
            comment: '',
            show: true
        };
    },
    methods: {
        ...mapActions(['createTask']),
        onSubmit(evt) {
            evt.preventDefault();
            if (this.comment !== '') {
                this.form.comments.push(this.comment);
            }
            if (this.createionDate && this.dueDate) {
                this.form.createionDate = this.formateDate(this.createionDate);
                this.form.dueDate = this.formateDate(this.dueDate);
            }

            this.createTask(this.form);
            // alert(JSON.stringify(this.form));
        },
        onReset(evt) {
            evt.preventDefault();
            // Reset our form values
            this.form.createionDate = "";
            this.form.dueDate = "";
            this.form.description = null;
            this.form.type = null;
            this.form.comments = [];
            this.createionDate = "";
            this.dueDate = "";
            // Trick to reset/clear native browser form validation state
            this.show = false;
            this.$nextTick(() => {
                this.show = true;
            });
        },
        formateDate(arg) {
            let date = new Date(arg);
            return date;
        }
    }
};
</script>

<style scoped>

</style>
