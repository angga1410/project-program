<template>
  <div class="main-content">
    <div class="page-header">
      <h3 class="page-title">New Program</h3>
    </div>
    <div class="row">
        
      <div class="col-sm-12">
        <div class="card">
          
          <div class="card-header">
            <h6></h6>
          </div>
          <div class="card-body">
              <form class="" method="post" @submit.prevent="postProgram">
             <div class="form-group">
                <label for="name">Program Name</label>
                 <input type="" class="form-control" v-model="name">
               
              </div>
        
              <div class="form-row">
                  <div class="form-group col-md-6">
                  <label for="portfolio_id">Select Portfolio</label>
                    <select v-model="portfolio_id" class="form-control" >
                  <option v-for="(item,index) in portfolio" :key="index" :value="item.id">{{item.name}}</option>
                </select>
                </div>
                  <div class="form-group col-md-6">
                  <label for="priority">Select Priority</label>
                 <select v-model="priority" class="form-control">
                  <option value="1">Low</option>
                  <option value="2">Medium</option>
                  <option value="3">High</option>
                </select>
                </div>
              </div>
             
            
               <div class="form-group">
                <label for="start">Start Date</label>
                 <input type="date" class="form-control" v-model="start_at">
              </div>
             <div class="form-group">
                <label for="target">Target Date</label>
                 <input type="date" class="form-control" v-model="target_date">
              </div>
                 <div class="form-group">
                <label for="deadline">Deadline</label>
                 <input type="date" class="form-control" v-model="deadline">
               
              </div>
              <button class="btn btn-primary" type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
      </div>
    </div>

</template>

<script>
import Datepicker from 'vuejs-datepicker'
    export default {

        mounted() {

            console.log('Component mounted.')

        },

       data: function() {
  	return {
        portfolio_id: '',
       name: '',
       priority: '', 
        start_at: '', 
         target_date: '', 
          deadline: '',
          portfolio:[],
       show: false 
    }
  },

        methods: {
  	postProgram: function() {
      console.log(this.name);
      var formData = new FormData();
        formData.append('portfolio_id', this.portfolio_id);
      formData.append('name', this.name);
        formData.append('priority', this.priority);
         formData.append('status', '1');
      formData.append('start_at', this.start_at);
      formData.append('target_date', this.target_date);
      formData.append('deadline', this.deadline);
   
      
      axios.post('/api/create-program', 
      formData,
     
      {headers: {
      'Content-type': 'application/x-www-form-urlencoded',
    }}).then(r => console.log(r.data)).catch(err => console.log(err))
    this.$router.push({path:"/admin/page/program"})
     window.toastr['success']('Program Added', 'Success')
    },

     getData() {
      axios.get(`/api/users`)
      .then(res => {
        console.log(res.data);
        this.program = res.data
      })
      .catch(err => {
        console.log(err)
      })
    },
       getPortfolio() {
      axios.get(`/api/portfolio`)
      .then(res => {
        console.log(res.data);
        this.portfolio = res.data
      })
      .catch(err => {
        console.log(err)
      })
    },

  },

  created(){
    this.getPortfolio()
  }

    }
</script>


