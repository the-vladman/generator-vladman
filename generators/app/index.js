var Generator = require('yeoman-generator');
const yosay = require('yosay');

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);
    // This makes `appname` a required argument.
    this.argument('appname', { type: String, required: false });


  }

  initializing() {
    this.pkg = require('../../package.json');
  }

  prompting() {
    this.log(yosay('Bienvenido a México Abierto!    '));
    const prompts = [
      {
      type    : 'input',
      name    : 'username',
      message : '¿Cúal es tu usuario de GitHub?',
      store   : true
      }
    ];
    if (!this.options.appname) {
      prompts.unshift({
        type    : 'input',
        name    : 'name',
        message : 'Nombre del proyecto =>',
        default : this.appname // Default to current folder name
      })
    };

    return this.prompt(prompts).then((answers) => {
      answers.name = answers.name ? answers.name : this.options.appname;
      this.log('app name', answers.name);
      this.log('GitHub User', answers.username);
    });
  }

};
