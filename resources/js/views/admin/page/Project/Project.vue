<template>
  <div class="main-content">
    <div class="page-header">
        <ol class="action-list">
        <li class="action-item">
          <router-link to="/admin/page/AddProject">Add New Project</router-link>
        </li>
      </ol>
      <h3 class="page-title">Project</h3>
      
    </div>

   <div class="card">
      <div class="card-header">
        <h6>Project List</h6>
      </div>
      <div class="card-body">
        <table-component  table-class="table" :data="project">
          <table-column show="name" label="Name"/>
          
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
                <router-link :to="{ name: 'view-project', params: { id: row.id }}">View</router-link>
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
    project:[]
  }
},
  methods: {
   getData() {
      axios.get(`/api/project`)
      .then(res => {
        console.log(res.data);
        this.project = res.data
      })
      .catch(err => {
        console.log(err)
      })
    },



    
 deleteData(id) {
      axios.delete(`/api/delete-project/${id}`)
      .then(res => {
        console.log(res.data);
        // this.project = res.data
        this.project.splice(this.project.indexOf(id),1)
        window.toastr['success']('Project Deleted', 'Success')
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
