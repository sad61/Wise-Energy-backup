const readline = require("readline")
const Equipment = require("../equipment/equipment.js")

class UserMenu {
    async menu(user) {
      let choice;
      while (choice != 4 ) {
      const rl = readline.createInterface({
        // eslint-disable-next-line no-undef
        input: process.stdin,
        // eslint-disable-next-line no-undef
        output: process.stdout,
      });

      console.log("\n1. Listar equipamentos");
      console.log("2. Adicionar equipamento");
      console.log("3. Ver minhas notificações");
      console.log("4. Sair");

      choice = await this.question(rl, "Digite a opção desejada: ");


      switch (choice) {
        case "1": {
          rl.close()
          if (user.equipments?.length == 0 ) console.log("Ainda não há nenhum equipamento cadastrado.")
          else console.log(user.equipments)
          break;
        }
        case "2": {
          rl.close()
          await this.addEquipment(user)
          break;
        }
        case "3": {
          rl.close()
          if (user.notifications.length == 0) console.log("Ainda não há nenhuma notificação.")
          else console.log(user.notifications)
          break;
        }
        case "4": {
          rl.close()
          console.log("Retornando ao menu principal... \n\n")
          return;
        }
        default: {
          rl.close()
          console.log("Input desconhecido.")
          break;
        }
      }
      rl.close()
    }
    return;
  }

  async addEquipment(user) {
    let equipment = new Equipment();
    await equipment.promptUser();
    user.equipments.push(equipment)
  }

  question(rl, prompt) {
    return new Promise((resolve) => {
      rl.question(prompt, (answer) => {
        resolve(answer);
      });
    });
  }
}


module.exports = UserMenu;