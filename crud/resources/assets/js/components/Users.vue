<template lang="html">
<div>
<table class="table table-stripped">
<thead>
  <tr>
     <th>Username
     </th>
     <th>Email
     </th>
     <th>Password
     </th>
   </tr>
</thead>
<tbody>
   <tr v-for="user in users">
      <td>
      {{ user.name }}
      </td>
       <td>
      {{ user.email }}
      </td>
       <td>
      {{ user.password }}
      </td>
   </tr>
</tbody>
</table>
<div>
</template>
<script>
 export default{
 data(){
 return{
   users: []
 }
 },
   created(){
 this.fetchUsers();
 },
 methods:{
 fetchUsers(){
 this.$http.get('/users').then(response =>
      this.users=response.data.users;
     );
 }
 }

 }
</script>
<style lang="css">
</style>