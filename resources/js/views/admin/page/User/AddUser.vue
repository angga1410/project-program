<template>
  <div class="main-content">
    <div class="page-header">
      <h3 class="page-title">New Portfolio</h3>
    </div>
    <div class="row">
        
      <div class="col-sm-12">
         <div class="card">
          <div class="card-header">
            <h6>Basic Form</h6>
          </div>
          <div class="card-body">
            <form>
              <div class="form-row">
                <div class="form-group col-md-6">
                  <label for="inputFirstName">First Name</label>
                  <input
                   v-model="name"
                    type="text"
                    class="form-control"
                    placeholder="First Name"
                  >
                </div>
                <div class="form-group col-md-6">
                  <label for="inputLastName">Password</label>
                  <input
                    v-model="password"
                    type="text"
                    class="form-control"
                    placeholder="password"
                  >
                </div>
              </div>
              <div class="form-group">
                <label for="exampleInputEmail">Email address</label>
                <input
                  v-model="email"
                  type="email"
                  class="form-control"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                >
                <small id="emailHelp" class="form-text text-muted">
                  We'll never share your email with
                  anyone else.
                </small>
              </div>
              <div class="form-group">
                <label for="inputUserName">Username</label>
                <input
                  id="inputUserName"
                  type="text"
                  class="form-control"
                  placeholder="Username"
                >
              </div>
              <div class="form-group">
                <label for="exampleInputPassword">Password</label>
                <input
                  id="exampleInputPassword1"
                  type="password"
                  class="form-control"
                  placeholder="Password"
                >
              </div>
              <button class="btn btn-primary">Submit</button>
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
       name: '',
       email: '',
       password: '',
       show: false 
    }
  },

        methods: {
  	postNow: function() {
      console.log(this.name);
      var formData = new FormData();
      formData.append('name', this.name);
      formData.append('email', this.email);
      formData.append('password', this.password);
      
      axios.post('/api/create-users', 
      formData,
     
      {headers: {
      'Content-type': 'application/x-www-form-urlencoded',
    }}).then(r => console.log(r.data)).catch(err => console.log(err))
    this.$router.push({path:"/admin/page/Portofolio"})
    },

     getData() {
      axios.get(`/api/users`)
      .then(res => {
        console.log(res.data);
        this.portfolio = res.data
      })
      .catch(err => {
        console.log(err)
      })
    },

  }

    }
</script>


