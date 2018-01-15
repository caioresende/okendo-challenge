module.exports = function(ReviewService) {
    
    var self = this;
    var currentStep = {
        name: 'Review',
        isComplete: false
    };

    var resetForm = function() {
        self.form.$setPristine();
    }

    this.data = ReviewService;

    ReviewService.setCurrentStep(currentStep);

    this.submitForm = function() {
       if (self.form.$valid) {
            ReviewService.isStepComplete();
            ReviewService.setCurrentStep();
            resetForm();
       }
    };
};