appModule.factory('appFactory',($http,$q,READ_URL,CREATE_URL,UPDATE_URL,DELETE_URL)=>{
    return{
        onloadfn(){
            console.log('in factory');
            var defer = $q.defer();
            $http.get(READ_URL).then((data)=>{
                console.log('data is', data);
                defer.resolve(data);
            },err=>{
                console.log('error is',err);
                defer.reject(err);
            })
            return defer.promise;
        },

        createContact(details){
            var defer = $q.defer();
            $http.post(CREATE_URL,details).then((data)=>{
                console.log('data is',data);
                defer.resolve(data);
                
            },err=>{
                console.log('error is',err);
                defer.reject(err);
            })
            return defer.promise;
        },

        updateContact(details){
            var defer = $q.defer();
            $http.put(UPDATE_URL,details).then((data)=>{
                console.log('data is', data);
                defer.resolve(data);
            },err=>{
                console.log('error is',err);
                defer.reject(err);
            })
            return defer.promise;
        },

        deleteContact(details){
            var defer = $q.defer();
            $http.post(DELETE_URL,details).then((data)=>{
                console.log('data is', data);
                defer.resolve(data);
            },err=>{
                console.log('error is',err);
                defer.reject(err);
            })
            return defer.promise;
        }
    }
})