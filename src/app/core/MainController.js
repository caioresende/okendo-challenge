module.exports = function(ReviewService) {
    
    var self = this;
    var currentStep = {
        name: 'Review',
        isComplete: false
    };

    this.data = ReviewService;

    ReviewService.setCurrentStep(currentStep);

    this.changeStep = function() {
        ReviewService.isStepComplete();
        ReviewService.setCurrentStep();
    };
};