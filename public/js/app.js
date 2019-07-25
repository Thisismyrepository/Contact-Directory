const app = angular.module('app',[]);
app.run(($http)=>{
    
    $http.get('/read').then((data)=>{
        if(data){
        console.log('in run', data);
        console.log(localStorage);
        console.log(data.data.message[0].name);
        
        } 
    });
    
})