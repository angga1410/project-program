<template>
  <div class="main-content">
    <div class="page-header">
        <ol class="action-list">
        <li class="action-item">
          <router-link to="/admin/page/AddTask">Add New Task</router-link>
        </li>
      </ol>
      <h3 class="page-title">Task</h3>
      
    </div>

   <div class="card">
      <div class="card-header">
        <h6>Task List</h6>
      </div>
      <div class="card-body">
        <table-component  table-class="table" :data="task">
          <table-column show="name" label="Name"/>
            <table-column show="employee_id" label="Employee"/>
              <table-column show="start_at" label="Start Date"/>
                <table-column show="target_date" label="Target Date"/>
                  <table-column show="deadline" label="Deadline"/>
             <table-column label="status"> 
            <template  slot-scope="row">
              <span v-if="row.status==='1'">
                  <button class="btn btn-danger btn-rounded">
                    Outstanding
                  </button>
                  </span>
                   <span v-else-if="row.status==='2'">
                  <button class="btn btn-warning btn-rounded">
                    In Progress
                  </button>
                  </span>
                <span v-else> <button class="btn btn-success btn-rounded">
                    Complete
                  </button></span>
            </template>
          </table-column>
          <table-column>
            <template slot-scope="row">
              <div class="table__actions">
                <router-link :to="{ name: 'view-task', params: { id: row.id }}">Edit</router-link>
              <a
                      class="btn btn-default btn-sm"
                      @click="deleteData(row.id)"
                    >
                      <i class="icon-fa icon-fa-trash"/> Delete
                    </a>
              </div>
            </template>
          </table-column>
        </table-component>
      </div>
    </div>
  </div>
</template>

<script>
import { TableComponent, TableColumn } from 'vue-table-component'
import axios from 'axios'
export default {
  components: {
    TableComponent,
    TableColumn
  },

  data() {
  return {
    task:[]
  }
},
  methods: {
   getData() {
      axios.get(`/api/task`)
      .then(res => {
        console.log(res.data);
        this.task = res.data
      })
      .catch(err => {
        console.log(err)
      })
    },



    
 deleteData(id) {
      axios.delete(`/api/delete-task/${id}`)
      .then(res => {
        console.log(res.data);
        // this.task = res.data
        this.task.splice(this.task.indexOf(id),1)
        window.toastr['success']('Task Deleted', 'Success')
      })
      .catch(err => {
        console.log(err)
      })
    },
  },
   created() {
    this.getData()
  }
}
</script>
