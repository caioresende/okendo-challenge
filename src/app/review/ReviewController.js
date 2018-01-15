module.exports = function(ReviewService) {
    var self = this;
    this.data = ReviewService;

    this.checkForMaxOptions = function(question, option) {
        if (question.sel_options == question.max_options && question.answer.indexOf(option) < 0) {
            return true;
        }
        return false;
    };

    this.checkQuestionOptions = function (question, option) {
        var idx = question.answer.indexOf(option);

        if (question.answer.length && idx > -1) {
            question.answer = question.answer.replace( ' ' + option, '');
            question.sel_options--;
        } else {
            question.answer = question.answer + ' ' + option; 
            question.sel_options++;
        }
    }
};