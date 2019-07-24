<template>
  <div class="sidebar-left">
    <div class="sidebar-body scroll-pane">
      <div class="side-nav">
        <v-collapse accordion>
          <v-collapse-item>
            <a slot="item-title" href="/admin/dashboard/basic">
              <i class="icon-fa icon-fa-dashboard"/> 
              Dashboard
            </a>
          </v-collapse-item>

          <v-collapse-item active-url="/admin/layouts">
            <a slot="item-title" href="#">
              <i class="icon-fa icon-fa-th-large"/>Data Initation
              <span class="icon-fa arrow icon-fa-fw"/>
            </a>

            <router-link to="/admin/users/All">
              User Management
            </router-link>

            
          </v-collapse-item>

           <v-collapse-item>
            <a slot="item-title" href="/admin/page/Portofolio">
              <i class="icon-fa icon-fa-credit-card"/> 
              Portofolio
            </a>
          </v-collapse-item>

         <v-collapse-item>
            <a slot="item-title" href="/admin/page/Program">
              <i class="icon-fa icon-fa-code"/> 
              Program
            </a>
          </v-collapse-item>

            <v-collapse-item>
            <a slot="item-title" href="/admin/page/Project">
              <i class="icon-fa icon-fa-file-code-o"/> 
             Project
            </a>
          </v-collapse-item>

          <v-collapse-item active-url="/admin/layouts">
            <a slot="item-title" href="#">
              <i class="icon-fa icon-fa-th-large"/>Template
              <span class="icon-fa arrow icon-fa-fw"/>
            </a>

            <router-link to="/admin/users/All">
              Template Milestone
            </router-link>
              <router-link to="/admin/users/All">
              Template Task
            </router-link>

            
          </v-collapse-item>
           <v-collapse-item>
            <a slot="item-title" href="/admin/page/Milestone">
              <i class="icon-fa icon-fa-rocket"/> 
             Milestone
            </a>
          </v-collapse-item>

           <v-collapse-item>
            <a slot="item-title" href="/admin/page/Task">
              <i class="icon-fa icon-fa-rocket"/> 
             Task
            </a>
          </v-collapse-item>

        </v-collapse>
      </div>
    </div>
  </div>
</template>