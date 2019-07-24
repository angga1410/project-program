<template>
  <div class="main-content">
    <div class="page-header">
        <ol class="action-list">
        <li class="action-item">
          <router-link to="/admin/page/AddManager">Add New Manager</router-link>
        </li>
      </ol>
      <h3 class="page-title">Manager</h3>
      
    </div>

    <div class="card">
      <div class="card-header">
        <h6>Manager List</h6>
      </div>
      <div class="card-body">
        <table-component  table-class="table" :data="portfolio">
          <table-column show="name" label="Name"/>
          
          <table-column show="status" label="Dept"/>
          <table-column>
            <template slot-scope="row">
              <div class="table__actions">
                <router-link :to="{ name: 'view-portfolio', params: { id: row.id }}">Edit</router-link>
                <a :href="`#${row.name}`">Delete</a>
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
    }
  },
  created() {
    this.getData()
  }

}
</script>
