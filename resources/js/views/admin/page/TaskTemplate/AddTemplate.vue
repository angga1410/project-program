<template>
  <div class="main-content">
    <div class="page-header">
      <h3 class="page-title">New Task Template</h3>
    </div>
    <div class="row">
      <div class="col-sm-12">
        <div class="card">
          <div class="card-body">
            <form class>
              <div class="form-group">
                <label for="name">Task Template Name</label>
                <input type class="form-control" v-model="form.name" />
              </div>
              <hr/>
              <div class="form-group">
                <div class="row">
                  <div class="col-sm-8" v-if="!choose" >
                    <div class="row">
                      <div class="col-sm-2"><label for="name">Name Task</label></div>
                      <div class="col-sm-10"><input type class="form-control" v-model="task" /></div>
                    </div>
                  </div>
                  <div class="col-sm-8" v-if="choose">
                     <div class="row">
                      <div class="col-sm-2"> <label for="name">Select Task</label></div>
                      <div class="col-sm-10">
                        <select v-model="selectedTask" class="form-control">
                      <option value="" selected>Select</option>
                      <option :value="item.id" v-for="item in tasks" :key="item.id">{{item.name}}</option>
                      </select>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-1">
                    <label></label>
                    <button class="btn btn-success" @click.prevent="changeInput" v-if="!choose">select</button>
                    <button class="btn btn-success" @click.prevent="changeInput" v-if="choose">manual</button>
                  </div>
                  <div class="col-sm-2">
                    <button class="btn btn-success" @click.prevent="addList">ADD LIST</button>
                  </div>
                </div>
                <div><span class="text-danger">{{error}}</span></div>
              </div>
              <hr/>
              <div class="form-group">
                <table-component table-class="table" :data="tmpListTask">
                  <table-column label="No">
                     <template slot-scope="row">
                      <span>{{row.vueTableComponentInternalRowId + 1}}</span>
                    </template>
                  </table-column>
                  <table-column show="name" label="Task"></table-column>
                  <table-column label="Action">
                    <template slot-scope="row">
                      <div class="">
                        <a class="btn btn-danger text-white" @click="deleteItem(row.index)">
                          <i class="icon-fa icon-fa-trash" /> Delete
                        </a>
                      </div>
                    </template>
                  </table-column>
                </table-component>
              </div>
              <button class="btn btn-primary" @click="createTemplate">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { TableComponent, TableColumn } from "vue-table-component";

export default {
  components: {
    TableComponent,
    TableColumn
  },

  mounted() {
    console.log("Component mounted.");
  },

  data: function() {
    return {
      error: '',
      choose: false,
      tmpListTask: [],
      tasks: [],
      task: '',
      selectedTask: '',
      form: {
        name: '',
        taskList: [],
      },
    };
  },

  methods: {
    // postNow: function() {
    //   console.log(this.name);
    //   var formData = new FormData();
    //   formData.append("milestone_id", this.milestone_id);
    //   formData.append("name", this.name);
    //   formData.append("employee_id", this.employee_id);
    //   formData.append("priority", this.priority);
    //   formData.append("status", "1");
    //   formData.append("start_at", this.start_at);
    //   formData.append("target_date", this.target_date);
    //   formData.append("deadline", this.deadline);

    //   axios
    //     .post(
    //       "/api/create-task",
    //       formData,

    //       {
    //         headers: {
    //           "Content-type": "application/x-www-form-urlencoded"
    //         }
    //       }
    //     )
    //     .then(r => console.log(r.data))
    //     .catch(err => console.log(err));
    //   this.$router.push({ path: "/admin/page/task" });
    //   window.toastr["success"]("task Added", "Success");
    // },
    createTemplate() {
      var formData = new FormData();
      formData.append("template", this.form.name)
      axios.post(`/api/tmp-create-task`, formData, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        }
      })
      .then(res => {
        console.log("test")
        axios.get("/api/tmp-task")
        .then(res => {
          if(res.data.id != "") {
            for(let i = 0; i < this.tmpListTask.length; i++) {
              if(this.tmpListTask[i].category === "manual") {
                var body = new FormData();
                body.append("name", this.tmpListTask[i].name)
                body.append("template_id", res.data.id)
                axios.post("/api/create-task", body, {
                  headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                  }
                })
                .catch(err => {
                  console.log(err)
                })
                
              } else {
                var body2 = new FormData();
                body2.append("id",this.tmpListTask[i].id)
                body2.append("name", this.tmpListTask[i].name)
                body2.append("template_id", res.data.id)
                axios.update("/api/update-task", body, {
                  headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                  }
                })
                .catch(err => {
                  console.log(err)
                })
                
              }
            }
            
          }
        })
        .catch(err => {
          console.log(err)
        })
      })
      .catch(err => {
        console.log("test")
        console.log(err)
      })
    },
    getData() {
      axios.get(`/api/task`)
        .then(res => {
          console.log(res.data);
          this.tasks = res.data;
        })
        .catch(err => {
          console.log(err);
        });
    },
    changeInput() {
      if(!this.choose === true) {
        this.choose = true
      } else {
        this.choose = false
      }
    },
    addList() {
      if(this.task === "" && this.selectedTask === "") {
        window.toastr["error"]("name task or select task cannot be empty", "Error");
      } else if(!this.choose === true) {
        this.tmpListTask.push({
        'name': this.task,
        'category': "manual"
        });
      } else {
        this.tmpListTask.push({
          'id': this.selectedTask,
          'name': this.nameTask,
          'category': "select"
        })
      }
      this.choose = false;
      this.task = '';
      this.selectedTask = '';
    },
    deleteItem(index) {
      this.tmpListTask.splice(index,1);
    },
  },
  created() {
    this.getData();
  },
  computed: {
    nameTask() {
      for(let i = 0; i < this.tasks.length; i++) {
        if(this.selectedTask === this.tasks[i].id) {
          let newName = this.tasks[i].name;
          return newName;
          break;
        }
      }
      
    }
  }
};
</script>


