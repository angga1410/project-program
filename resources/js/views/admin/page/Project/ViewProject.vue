<template>
  <div class="main-content">
    <div class="page-header">
      
      <h3 class="page-title">Project</h3>
       <div class="col-md-6">
    </div>
    <div class="card">
          <div class="card-header">Progress Bars</div>
          <div class="card-body">
            <div class="progress">
              <div
                class="progress-bar bg-info"
                role="progressbar"
                style="width: 50%"
                aria-valuenow="50"
                aria-valuemin="0"
                aria-valuemax="100"
            >Project 50%</div>
            </div>
            <div class="progress">
              <div
                class="progress-bar bg-warning"
                role="progressbar"
                style="width: 75%"
                aria-valuenow="75"
                aria-valuemin="0"
                aria-valuemax="100"
             >Milestone 75%</div>
            </div>
          </div>
          </div>
        </div>
    <div class="card">
      <div class="card-header">
        <h6>Portofolio Details</h6>
      </div>
      <div class="card-body">
        <table-component :data="projectById" table-class="table">
          <table-column show="name" label="Name"/>
          <table-column show="program_id" label="Program"/>
          <table-column show="priority" label="Priority"/>
          <table-column show="status" label="Status"/>
          <table-column show="start_at" label="Start Date"/>
          <table-column show="target_date" label="Target Date"/>
          <table-column show="deadline" label="Deadline"/>
        
        </table-component>
      </div>
    </div>
     <div class="row">
    <div class="col-md-6">
     <div class="card">
      <div class="card-header">
       <div class="card-header  bg-success">
                <h6><i class="icon-fa icon-fa-star"/> Milestone List</h6>
              </div>
      </div>
      <div class="card-body">
        <table-component :data="fetchData" table-class="table">
          <table-column show="name" label="Name"/>
          <table-column show="" label="Status"/>
        
        </table-component>
      </div>
    </div>
    </div>
    <div class="col-md-6">
    <div class="card">
      <div class="card-header">
         <div class="card-header bg-info">
                <h6><i class="icon-fa icon-fa-star"/> Employee List</h6>
              </div>
      </div>
      <div class="card-body">
        <table-component :data="fetchData" table-class="table">
          <table-column show="name" label="Name"/>
          <table-column show="" label="Status"/>
        
        </table-component>
      </div>
    </div>
    </div>
     </div>
  </div>
</template>

<script>
import { TableComponent, TableColumn } from 'vue-table-component'

export default {
  props: ['id'],
  components: {
    TableComponent,
    TableColumn
  },
  data() {
    return {
      projectById: []
    }
  },
  methods: {
    async fetchData ({ page, filter, sort }) {
      const response = await axios.get(`/api/admin/users/get?page=${page}`)

      return {
        data: response.data.data,
        pagination: {
          totalPages: response.data.last_page,
          currentPage: page,
          count: response.data.count
        }
      }
    },
    getDataById() {
      axios.get(`/api/project/${this.id}`)
      .then(res => {
        console.log(res.data);
        this.projectById.push(res.data) 
      })
      .catch(err => {
        console.log(err)
      })
    }
  },
  created() {
    this.getDataById()
  }
}
</script>
