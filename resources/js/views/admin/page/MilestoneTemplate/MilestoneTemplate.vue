<template>
  <div class="main-content">
    <div class="page-header">
        <ol class="action-list">
        <li class="action-item">
          <router-link to="/admin/page/AddProgram">Add New Template</router-link>
        </li>
      </ol>
      <h3 class="page-title">Milestone Template</h3>
      
    </div>

   <div class="card">
      <div class="card-header">
        <h6>Template List</h6>
      </div>
      <div class="card-body">
        <table-component  table-class="table" :data="program">
          <table-column show="name" label="Name"/>
          <table-column>
            <template slot-scope="row">
              <div class="table__actions">
                <router-link :to="{ name: 'view-program', params: { id: row.id }}">Edit</router-link>
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
    program:[]
  }
},
  methods: {
   getData() {
      axios.get(`/api/....`)
      .then(res => {
        console.log(res.data);
        this.program = res.data
      })
      .catch(err => {
        console.log(err)
      })
    },

    
 deleteData(id) {
      axios.delete(`/api/...../${id}`)
      .then(res => {
        console.log(res.data);
        // this.program = res.data
        this.program.splice(this.program.indexOf(id),1)
        window.toastr['success']('Program Deleted', 'Success')
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
