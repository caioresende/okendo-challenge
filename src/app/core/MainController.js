module.exports = function(ReviewService) {
    
    var self = this;
    var currentStep = {
        name: 'Review',
        isComplete: false
    };
    this.data = ReviewService;

    ReviewService.setCurrentStep(currentStep);

    this.submitForm = function() {
       if (self.form.$valid) {
            ReviewService.isStepComplete();
            ReviewService.setCurrentStep();
            self.form.$setPristine();   
       }
    };
};