const template = can.stache.from('form-template'),
      canStart = can.DefineMap.extend({
        page: "string",
        welcomeText: {
          get: function() {
            return `Hello ${this.firstName} ${this.lastName}`;
          }
        },
        firstName: {
          value: '',
          serialize: false
        },
        firstNameLabel: {
          value: 'First name',
          serialize: false
        },
        isFirstNameRequired: {
          value: true,
          serialize: false
        },
        lastName: {
          value: '',
          serialize: false
        },
        lastNameLabel: {
          value: 'Last name',
          serialize: false
        },
        isLastNameRequired: {
          value: true,
          serialize: false
        },
        emailLabel: {
          value: 'Email address',
          serialize: false
        },
        email: {
          value: '',
          serialize: false
        },
        emailType: {
          value: 'text',
          serialize: false
        },
        emailPattern: {
          value: "\\S+@\\S+\\.\\S+"
        },
        isEmailRequired: {
          value: true,
          serialize: false
        },
        age: {
          value: '',
          serialize: false
        },
        ageLabel: {
          value: 'Age',
          serialize: false
        },
        ageType: {
          value: 'number',
          serialize: false
        },
        minmumAge: {
          value: 18,
          serialize: false
        },
        maximumAge: {
          value: 110,
          serialize: false
        },
        isAgeRequired: {
          value: true,
          serialize: false
        },
        isSexGroupRequired: {
          value: true,
          serialize: false
        },
        sexGroupName: {
          value: 'sexGroup',
          serialize: false
        },
        male: {
          value: false,
          serialize: false
        },
        maleShowLabel: {
          value: false,
          serialize: false
        },
        maleInputType: {
          value: 'radio',
          serialize: false
        },
        maleText: {
          value: 'Male',
          serialize: false
        },
        maleShowLabel: {
          value: false,
          serialize: false
        },
        female: {
          value: false,
          serialize: false
        },
        femaleShowLabel: {
          value: false,
          serialize: false
        },
        femaleInputType: {
          value: 'radio',
          serialize: false
        },
        femaleText: {
          value: 'Female',
          serialize: false
        },
        femaleShowLabel: {
          value: false,
          serialize: false
        },
        submitButtonValue: {
          value: 'Submit',
          serialize: false
        },
        showSubmitButtonLabel: {
          value: true,
          serialize: false
        },
        submitButtonType: {
          value: 'submit',
          serialize: false
        },
        submitForm(value) {
          let forms  = document.forms.customerComplainForm;

          if (forms.checkValidity()) {
            this.page = 'sumaryPage'
          }
        }
      }),
      canStartInstance = new canStart();

can.Component.extend({
  tag: 'salutation:text',
  view: can.stache('<h1>{{welcomeText}}</h1>')
});

/**
 * Input field component
 * 
 * viewModel will be give you the output 
**/
can.Component.extend({
  tag: 'input:field',
  view: can.stache.from('input-field'),
  ViewModel: {
    update(value){
      this.inputValue = value;
    }
  }
});

// to camelcase helpers
can.stache.registerHelper("toCamelCase", function(labelText) {
  return labelText().toLowerCase().replace( /\s+(.)/g,
     (match, group1) => group1.toUpperCase());
});

// Routing
can.route.map(canStartInstance);
can.route("{page}", {page: "index"});
can.route.ready();


document.body.appendChild(template(canStartInstance));