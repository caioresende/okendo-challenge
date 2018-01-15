module.exports = function() {

    var self = this;

    this.review = {};

    this.product = 'B-Curl Mink Lashes';

    this.currentStep = {
        name: '',
        isComplete: ''
    };
    this.steps = [{
        name: 'Review',
        isComplete: false
    }, {
        name: 'Ratings',
        isStepComplete: false
    }, {
        name: 'Media',
        isComplete: false
    }, {
        name: 'Confirm',
        isComplete: false
    }];

    this.questions = [
        {
            title: 'Rating',
            caption: 'How many starts would you give to the product',
            type: 'RATING',
            options: [],
            answer: '',
            required: false,
            step: 'Review'
        },
        {
            title: 'Comments',
            caption: 'Would you like to leave a comment about your experience with the product ',
            type: 'TEXT_AREA',
            options: [],
            answer: '',
            required: false,
            step: 'Review'
        },
        {
            title: 'Quality',
            caption: '',
            type: 'GRADE',
            options: ['1', '2', '3', '4', '5'],
            answer: '',
            required: false,
            step: 'Ratings'
        },
        {
            title: 'Longevity',
            caption: '',
            type: 'GRADE',
            options: ['1', '2', '3', '4', '5'],
            answer: '',
            required: false,
            step: 'Ratings'
        },
        {
            title: 'Easy of Use',
            caption: '',
            type: 'GRADE',
            options: ['1', '2', '3', '4', '5'],
            answer: '',
            required: false,
            step: 'Ratings'
        },
        {
            title: 'Pros',
            caption: 'Choose up to five that best apply',
            type: 'MULTIPLE_OPTIONS',
            options: ['Soft Feel', 'Natural Feel', 'Luxurious', 'Easy to Use', 'Good Value', 'Consistent Curls'],
            max_options: 5,
            sel_options: 0,
            answer: '',
            required: false,
            step: 'Ratings'
        },
        {
            title: 'Lash Tech Experience',
            caption: 'Choose one',
            type: 'MULTIPLE_OPTIONS',
            options: ['< 1 Year', '2-3 Years', '3-5 Years', '5-10 Years', '10 Years+'],
            max_options: 1,
            sel_options: 0,
            answer: '',
            required: false,
            step: 'Ratings'
        },
        {
            title: 'Country',
            caption: '',
            type: 'SELECT',
            options: ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua &amp; Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia &amp; Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Cape Verde","Cayman Islands","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cruise Ship","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyz Republic","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania","Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre &amp; Miquelon","Samoa","San Marino","Satellite","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","South Africa","South Korea","Spain","Sri Lanka","St Kitts &amp; Nevis","St Lucia","St Vincent","St. Lucia","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad &amp; Tobago","Tunisia","Turkey","Turkmenistan","Turks &amp; Caicos","Uganda","Ukraine","United Arab Emirates","United Kingdom","Uruguay","Uzbekistan","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"],
            answer: '',
            required: false,
            step: 'Ratings'
        }
    ];
    this.currentQuestions = [];

    this.getCurrentStep = function() {
        for (var i = 0; i < self.steps.length; i++) {
            if (self.steps[i].name === self.currentStep.name) {
                return self.steps[i];
            }
        }
    };

    this.setCurrentStep = function(step) {
        var idx = -1;

        for (var i = 0; i < self.steps.length; i++) {
            if (self.steps[i].name === self.currentStep.name) {
                idx = i;
            }
        }

        if (!step && idx < self.steps.length) {
            self.currentStep = self.steps[idx + 1];
        } else {
            self.currentStep = step;
        }
        self.currentQuestions = self.currentStep && self.getQuestionsFromStep(self.currentStep.name);
    };

    this.isStepComplete = function() {
        var questions = [];
        var step = self.getCurrentStep();
        var isCompleted = true;

        for (var i = 0; i < self.questions.length; i++) {
            if (self.questions[i].step === self.currentStep.name && (!self.questions[i].answer || self.questions[i].answer.length === 0)) {
                isCompleted = false;
            }
        }
        step.isComplete = isCompleted;
    };

    this.getSteps = function() {
        return self.steps;
    };

    this.getQuestionsFromStep = function(step) {
        var questions = [];

        for (var i = 0; i < self.questions.length; i++) {
            if (self.questions[i].step === step) {
                questions.push(self.questions[i])
            }
        }

        return questions;
    };
};