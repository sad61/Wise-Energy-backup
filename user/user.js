const readline = require("readline");

class User {
  notifications = [];
  equipments = [];
  
  async promptUser() {
    const rl = readline.createInterface({
      // eslint-disable-next-line no-undef
      input: process.stdin,
      // eslint-disable-next-line no-undef
      output: process.stdout,
    });

    this.name = await this.question(rl, "Enter your name: ");
    this.phone = await this.question(rl, "Enter your phone number: ");
    this.email = await this.question(rl, "Enter your email: ");
    this.password = await this.question(rl, "Enter your password: ");
    this.birthdate = await this.question(rl, "Enter your birthdate: ");

    rl.close();
  }

  question(rl, prompt) {
    return new Promise((resolve) => {
      rl.question(prompt, (answer) => {
        resolve(answer);
      });
    });
  }
}

module.exports = User;
