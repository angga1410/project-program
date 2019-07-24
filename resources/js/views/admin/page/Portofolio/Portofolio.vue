<template>
  <div class="main-content">
    <div class="page-header">
        <ol class="action-list">
        <li class="action-item">
          <router-link to="/admin/page/AddPortofolio">Add New Portfolio</router-link>
        </li>
      </ol>
      <h3 class="page-title">Portfolio</h3>
      
    </div>

    <div class="card">
      <div class="card-header">
        <h6>Portoflio List</h6>
      </div>
      <div class="card-body">
        <table-component  table-class="table" :data="portfolio">
          <table-column show="name" label="Name"/>
        
          <!-- <table-column show="status" label="Status"/> -->
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
                <router-link :to="{ name: 'view-portfolio', params: { id: row.id }}">View</router-link>
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
    portfolio:[]
  }
},




  methods: {
    async fetchData ({ page, filter, sort }) {
      const response = await axios.get(`/api/admin/portfolio/get?page=${page}`)

      return {
        data: response.data.data,
        pagination: {
          totalPages: response.data.last_page,
          currentPage: page,
          count: response.data.count
        }
      }
    },




    getData() {
      axios.get(`/api/portfolio`)
      .then(res => {
        console.log(res.data);
        this.portfolio = res.data
      })
      .catch(err => {
        console.log(err)
      })
    },



    
 deleteData(id) {
      axios.delete(`/api/delete-portfolio/${id}`)
      .then(res => {
        console.log(res.data);
        // this.portfolio = res.data
        this.portfolio.splice(this.portfolio.indexOf(id),1)
        window.toastr['success']('Portfolio Deleted', 'Success')
      })
      .catch(err => {
        console.log(err)
      })
    },

    //    deleteUser (id) {
    //   let self = this
    //   window.notie.confirm({
    //     text: 'Are you sure?',
    //     cancelCallback: function () {
    //       window.toastr['info']('Cancel')
    //     },
    //     submitCallback: function () {
    //       self.deleteUserData(id)
    //     }
    //   })
    // },
    // async deleteUserData (id) {
    //   try {
    //     let response = await window.axios.delete('/api/delete-portfolio/' + id).then(res => {
    //       this.portfolio.splice(this.portfolio.indexOf(id),1)
    //        window.toastr['success']('User Deleted', 'Success')
    //     })
    //     this.portfolio = response.data
    //     //  this.$router.push({path:"/admin/page/Portofolio"})
    //   } catch (error) {
    //     if (error) {
    //       // window.toastr['error']('There was an error', 'Error')
    //     }
    //   }
    // }
    
  },


  created() {
    this.getData()
  }

}
</script>
