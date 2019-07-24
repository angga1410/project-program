<template>
  <div class="main-content">
    <div class="page-header">
      
      <h3 class="page-title">Program</h3>
       <div class="col-md-6">
    </div>
    <div class="card">
          <div class="card-header">Progress Bars</div>
          <div class="card-body">
            <div class="progress">
              <div
                class="progress-bar bg-success"
                role="progressbar"
                style="width: 25%"
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
              >Program 25%</div>
            </div>
            <div class="progress">
              <div
                class="progress-bar bg-info"
                role="progressbar"
                style="width: 50%"
                aria-valuenow="50"
                aria-valuemin="0"
                aria-valuemax="100"
            >Projet 50%</div>
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
        <h6>Program Details</h6>
      </div>
      <div class="card-body">
        <table-component :data="programById" table-class="table">
          <table-column show="name" label="Name"/>
          <table-column show="portfolio_id" label="portfolio"/>
          <table-column label="Priority"> 
            <template  slot-scope="row">
              <span v-if="row.priority==='1'">
                  <button class="btn btn-success btn-rounded">
                    Low
                  </button>
                  </span>
                   <span v-else-if="row.priority==='2'">
                  <button class="btn btn-warning btn-rounded">
                    Medium
                  </button>
                  </span>
                <span v-else> <button class="btn btn-danger btn-rounded">
                    High
                  </button></span>
            </template>
          </table-column>
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
                <h6><i class="icon-fa icon-fa-star"/> Project List</h6>
              </div>
      </div>
      <div class="card-body">
        <table-component :data="projectlist" table-class="table">
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
        
        </table-component>
      </div>
    </div>
    </div>
    <div class="col-md-6">
    <div class="card">
      <div class="card-header">
         <div class="card-header bg-info">
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
     </div>
      <div class="row">
    <div class="col-md-6">
    <div class="card">
      <div class="card-header">
        <div class="card-header bg-warning">
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
      programById: [],
      projectlist:[]
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
      axios.get(`/api/program/${this.id}`)
      .then(res => {
        console.log(res.data);
        this.programById.push(res.data) 
      })
      .catch(err => {
        console.log(err)
      })
    },
     getProjectlist() {
      axios.get(`/api/project-program/${this.id}`)
      .then(res => {
        console.log(res.data);
        this.projectlist=res.data 
      })
      .catch(err => {
        console.log(err)
      })
    }
  },
  created() {
    this.getDataById()
    this.getProjectlist()
  }
}
</script>
