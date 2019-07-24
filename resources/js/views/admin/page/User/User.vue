<template>
  <div class="main-content">
    <div class="page-header">
      <h3 class="page-title">Users</h3>
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="#">Home</a></li>
        <li class="breadcrumb-item"><a href="#">Users</a></li>
        <li class="breadcrumb-item active">Users</li>
      </ol>
      <div class="page-actions">
          <ol class="action-list">
        <li class="action-item">
          <router-link to="/admin/user/create">Add New Users</router-link>
        </li>
      </ol>
      
      </div>
    </div>
    <div class="row">
      <div class="col-sm-12">
        <div class="card">
          <div class="card-header">
            <h6>All Users</h6>
            <div class="card-actions" />
          </div>
          <div class="card-body">
            <table-component
              :data="users"
              sort-by="row.name"
              sort-order="desc"
              table-class="table"
            >
              <table-column show="name" label="Name"/>
              <table-column show="email" label="Email"/>
              <table-column show="role" label="Role"/>
              <table-column
                show="created_at"
                label="Registered On"
                data-type="date:YYYY-MM-DD h:i:s"
              />
              <table-column
                :sortable="false"
                :filterable="false"
                label=""
              >
                <template slot-scope="row">
                  <div class="table__actions">
                    <router-link to="/admin/users/profile">
                      <a class="btn btn-default btn-sm">
                        <i class="icon-fa icon-fa-search"/> View
                      </a>
                    </router-link>
                    <a
                      class="btn btn-default btn-sm"
                      data-delete
                      data-confirmation="notie"
                      @click="deleteUser(row.id)"
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
    </div>
  </div>
</template>

<script type="text/babel">
import { TableComponent, TableColumn } from 'vue-table-component'
import axios from 'axios'
export default {
  components: {
    TableComponent,
    TableColumn
  },



  data () {
    return {
      users: []
    }
  },



  methods: {


   getData() {
      axios.get(`/api/users`)
      .then(res => {
        console.log(res.data);
        this.users = res.data
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
