<template>
  <div class="main-content">
    <div class="page-header">
        <ol class="action-list">
        <li class="action-item">
          <router-link to="/admin/page/AddTemplate">Add New Template</router-link>
        </li>
      </ol>
      <h3 class="page-title">Task Template</h3>
      
    </div>

   <div class="card">
      <div class="card-header">
        <h6>Template List</h6>
      </div>
      <div class="card-body">
        <table-component  table-class="table" :data="program">
          <table-column show="name" label="Name"/>
          <table-column label="Action">
            <template slot-scope="row">
              <div class="table__actions">
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
const URL = "http://192.168.0.35:8000/api";
export default {
  components: {
    TableComponent,
    TableColumn
  },

  data() {
  return {
    listTaskTemplate:[]
  }
},
  methods: {
   getData() {
      axios.get(`${URL}/tmp-task`)
      .then(res => {
        console.log(res.data);
        this.listTaskTemplate = res.data
      })
      .catch(err => {
        console.log(err)
      })
    },

    
 deleteData(id) {
      axios.delete(`${URL}/tmp-task/${id}`)
      .then(res => {
        console.log(res.data);
        this.program.splice(this.listTaskTemplate.indexOf(id),1)
        window.toastr['success']('Task Template Deleted', 'Success')
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
