const User = require("./user/user.js");
const UserMenu = require("./user/userMenu.js")
const readline = require("readline");

class System {
  constructor() {
    this.users = [];
    this.currentUser = null;
  }

  loop() {
    const menu = async () => {
      let choice;
      while (choice != 7) {
        const rl = readline.createInterface({
          // eslint-disable-next-line no-undef
          input: process.stdin,
          // eslint-disable-next-line no-undef
          output: process.stdout,
        });
        console.log("\nBem vindo ao EnergySaver!!\n");
        console.log("1. Acessar usuário");
        console.log("2. Criar usuário");
        console.log("3. Listar informação do usuário");
        console.log("4. Atualizar informação de usuário");
        console.log("5. Deletar usuário");
        console.log("6. Trocar de usuário");
        console.log("7. Sair");

        choice = await this.question(rl, "Selecione alguma opção: ");

        switch (choice) {
          case "1": {
            rl.close()
            if (!this.currentUser) {
              console.log("Nenhum usuário cadastrado.")
              break;
            }
            const userMenu = new UserMenu();
            await userMenu.menu(this.currentUser);
            break;
          }
          case "2": {
            rl.close()
            this.user = await this.createUser();
            break;
          }
          case "3": {
            rl.close()
            if (!this.currentUser) {
              console.log("Nenhum usuário cadastrado.");
              return;
            }
            this.currentUser.printInfo();
            break;
          }
          case "4": {
            rl.close()
            this.currentUser.promptUser();
            break;
          }
          case "5": {
            rl.close()
            this.deleteCurrentUser();
            break;
          }

          case "6": {
            rl.close()
            await this.changeUser();
            break;
          }

          case "7": {
            rl.close()
            console.log("Saindo do programa...")
            return;
          }

          default: {
            rl.close()
            console.log("Input desconhecido.");
            break;
          }
        }

      }
    }
    menu()
  }

  async createUser() {
    const newUser = new User();
    await newUser.promptUser();
    this.currentUser = newUser;
    this.users.push(newUser);
    console.log(`User criado! (index: ${this.users.length - 1})`);
    return newUser;
  }

  async updateUser(user) {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    Object.keys(user).forEach((property, index) => {
      if (typeof user[property] !== "function") {
        console.log(`${index + 1}. ${property}`);
      }
    });

    const choice = await this.question(
      rl,
      "Enter the number corresponding to the property: "
    );

    if (choice >= 1 && choice <= Object.keys(user).length) {
      const selectedProperty = Object.keys(user)[choice - 1];
      user[selectedProperty] = await this.question(
        rl,
        `Enter the new ${selectedProperty}: `
      );
    } else {
      console.log("Invalid choice.");
    }

    rl.close();
  }

  deleteCurrentUser() {
    if (!this.currentUser) {
      console.log("No current user selected.");
      return;
    }

    const userIndex = this.users.findIndex((user) => user === this.currentUser);

    if (userIndex === -1) {
      console.log("Error: Usuário não encontrado.");
      return;
    }

    this.users.splice(userIndex, 1);
    console.log("Usuário deletado.");
    this.currentUser = null;
  }

  async changeUser() {
    for (let [index, user] of this.users.entries()) {
      console.log(`${index + 1}. ${user.name}`);
    }

    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    while (true) {
      let choice = await this.question(
        rl,
        "Selecione um perfil para mudar (digite 0 para sair): "
      );
      choice = parseInt(choice);

      if (isNaN(choice)) {
        console.log("Input não pode ser convertido para um index.");
        continue;
      }

      if (choice == 0) {
        console.log("Retornando para o menu...");
        break;
      }

      if (choice < 0 || choice > this.users.length) {
        console.log("Index fora do intervalo permitido.");
        continue;
      }

      this.currentUser = this.users[choice - 1];
      rl.close();
      return;
    }
  }

  async question(rl, prompt) {
    return new Promise((resolve) => {
      rl.question(prompt, (answer) => {
        resolve(answer);
      });
    });
  }
}

function run() {
  this.sys = new System();
  this.sys.loop();
}

run()
