module.exports = function(ReviewService) {
    
    var self = this;

    this.data = ReviewService;
    

    this.changeSteps = function(step) {
        ReviewService.isStepComplete();
        ReviewService.setCurrentStep(step);
    };
};