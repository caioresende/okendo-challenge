module.exports = function($scope, ReviewService) {
    
    var self = this;

    this.data = ReviewService;
    

    this.changeSteps = function(step) {
        if ($scope.$parent.main.form.$valid) {
            ReviewService.isStepComplete();
            ReviewService.setCurrentStep(step);
            self.form.$setPristine();
       } else {
        $scope.$parent.main.form.$submitted = true;
       }
    };
};