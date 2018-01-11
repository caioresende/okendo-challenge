module.exports = function(ReviewService) {
    var self = this;
    this.data = ReviewService;

    this.checkQuestionOptions = function (question, option) {
        var idx = question.answer.indexOf(option);

        if (question.answer.length && idx > -1) {
            question.answer.splice(idx, 1);
        } else {
            question.answer.push(option)
        }
    }
};