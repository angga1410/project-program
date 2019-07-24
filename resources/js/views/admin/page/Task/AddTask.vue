<template>
  <div class="main-content">
    <div class="page-header">
      <h3 class="page-title">New Task</h3>
    </div>
    <div class="row">
        
      <div class="col-sm-12">
        <div class="card">
          
          <div class="card-header">
            <h6></h6>
          </div>
          <div class="card-body">
              <form class="" method="post" @submit.prevent="postNow">
             <div class="form-group">
                <label for="name">Task Name</label>
                 <input type="" class="form-control" v-model="name">
               
              </div>
        
              <div class="form-row">
                  <div class="form-group col-md-6">
                  <label for="portfolio_id">Select Milestone</label>
                    <select v-model="milestone_id" class="form-control">
                  <option v-for="(item,index) in milestone" :key="index" :value="item.id">{{item.name}}</option>
                </select>
                </div>
                  <div class="form-group col-md-6">
                  <label for="portfolio_id">Select Employe</label>
                    <select v-model="employee_id" class="form-control">
                  <option v-for="(item,index) in users" :key="index" :value="item.id">{{item.name}}</option>
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
        milestone_id: '',
       name: '',
       employee_id:``,
       priority: '', 
        start_at: '', 
         target_date: '', 
          deadline: '',
          users: [], 
          milestone:[],
       show: false 
    }
  },

        methods: {
  	postNow: function() {
      console.log(this.name);
      var formData = new FormData();
        formData.append('milestone_id', this.milestone_id);
      formData.append('name', this.name);
       formData.append('employee_id', this.employee_id);
         formData.append('priority', this.priority);
       formData.append('status', '1');
      formData.append('start_at', this.start_at);
      formData.append('target_date', this.target_date);
      formData.append('deadline', this.deadline);
   
      
      axios.post('/api/create-task', 
      formData,
     
      {headers: {
      'Content-type': 'application/x-www-form-urlencoded',
    }}).then(r => console.log(r.data)).catch(err => console.log(err))
    this.$router.push({path:"/admin/page/task"})
     window.toastr['success']('task Added', 'Success')
    },

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
     getMilestone() {
      axios.get(`/api/milestone`)
      .then(res => {
        console.log(res.data);
        this.milestone = res.data
      })
      .catch(err => {
        console.log(err)
      })
    },

  },
  created(){
    this.getMilestone()
    this.getData()
  }


    }
</script>


