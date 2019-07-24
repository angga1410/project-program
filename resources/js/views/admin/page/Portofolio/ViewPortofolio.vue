<template>
  <div class="main-content">
    <div class="page-header">
      
      <h3 class="page-title">Portfolio</h3>
     </div>
    <div class="card">
      <div class="card-header">
        <h3>Portofolio Details</h3>
      </div>
      <div class="card-body">
          <vc-donut
    background="white" foreground="grey"
    :size="200" unit="px" :thickness="30"
    has-legend legend-placement="top"
    :sections="portfoliochart" :total="100"
    :start-angle="0"
    @section-click="handleSectionClick"
  >
    <h1>30%</h1>
  </vc-donut>
        <table-component :data="portfolioById" table-class="table">
          <table-column show="name" label="Name"/>
          <table-column show="manager_id" label="Manager"/>
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
                <h3><i class="icon-fa icon-fa-code"/> Program List</h3>
              </div>
      </div>
      <div class="card-body">
          <vc-donut
    background="white" foreground="grey"
    :size="150" unit="px" :thickness="30"
    has-legend legend-placement="top"
    :sections="programchart" :total="100"
    :start-angle="0"
    @section-click="handleSectionClick"
  >
    <h5>100%</h5>
  </vc-donut>
        <table-component :data="programlist" table-class="table">
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
                <h3><i class="icon-fa icon-fa-file-code-o"/> Project List</h3>
              </div>
      </div>
      <div class="card-body">
         <vc-donut
    background="white" foreground="grey"
    :size="150" unit="px" :thickness="30"
    has-legend legend-placement="top"
    :sections="projectchart" :total="100"
    :start-angle="0"
    @section-click="handleSectionClick"
  >
    <h5>100%</h5>
  </vc-donut>
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
     </div>
      <div class="row">
    <div class="col-md-6">
    <div class="card">
      <div class="card-header">
        <div class="card-header bg-warning">
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
      <div class="card-header bg-danger">
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
    TableColumn,

  },
  data() {
    return {
      portfolioById: [],
      programlist:[],
      projectlist:[],
      portfoliochart: [  
        {label: 'Complete', value: 30 , color: ` #99f962` }, 
    {label: 'Outstanding', value: 40 , color: `#ff927c` }, 
       {label: 'In Process', value: 30 , color: `#fdff7c` }, ],
      programchart: [ { label: 'Complete', value: 40 }, {label:'Outstanding' ,value: 10 }, { label:'In Process' ,value: 50 }],
      projectchart: [{ label: 'Complete', value: 10 }, {label:'Outstanding' ,value: 10 }, { label:'In Process' ,value: 80 }],
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
      axios.get(`/api/portfolio/${this.id}`)
      .then(res => {
        console.log(res.data);
        this.portfolioById.push(res.data) 
      })
      .catch(err => {
        console.log(err)
      })
    },
     getPortfolioList() {
      axios.get(`/api/program-portfolio/${this.id}`)
      .then(res => {
        console.log(res.data);
        this.programlist=res.data 
      })
      .catch(err => {
        console.log(err)
      })
    },

     getProjectList() {
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
    this.getPortfolioList()
    this.getProjectList()
  }
}
</script>
