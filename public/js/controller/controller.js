appModule.controller('appCtrl',($scope,appFactory,$window)=>{
    $scope.details={};
    $scope.selected={};
    $scope.newDetails={};
    $scope.select={};
    $scope.onLoadFun=()=>{
        console.log('in controller');
        const promise = appFactory.onloadfn();
        promise.then(data=>{
            console.log(data);
            $scope.data=data;
        },err=>{
            $scope.err=err;
        })
    }

    $scope.doCreateContact=()=>{
        const promise = appFactory.createContact($scope.details);
        promise.then(data=>{
            $scope.data = data;
            $window.location.reload();
            alert("New Contact Added");
        },err=>{
            $scope.err=err;
        })
        
    }

    $scope.doUpdate=()=>{
        const promise = appFactory.updateContact($scope.selected);
        promise.then(data=>{
            $scope.data = data;
            $window.location.href = 'index.html';
            alert("Contact Updated");
        },err=>{
            $scope.err=err;
        })
    }

    $scope.doDeleteContact=()=>{
        const promise = appFactory.deleteContact($scope.select);
        promise.then(data=>{
            $scope.data = data;
            $window.location.reload();
        },err=>{
            $scope.err=err;
        })
    }

})