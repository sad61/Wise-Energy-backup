const readline = require("readline");

class Equipment {
  model;
  nickname;
  serialNumber;
  consumption;
  budget;

  async promptUser() {
    const rl = readline.createInterface({
      // eslint-disable-next-line no-undef
      input: process.stdin,
      // eslint-disable-next-line no-undef
      output: process.stdout,
    });

    this.model = await this.question(
      rl,
      "Modelo do aparelho (ar-condicionado, TV, ...): "
    );
    this.nickname = await this.question(
      rl,
      "Nickname do aparelho (TV do quarto): "
    );
    this.serialNumber = await this.question(
      rl,
      "Número de série do aparelho: "
    );
    this.consumption = await this.question(rl, "Consumo médio do aparelho: ");
    this.budget = await this.question(rl, "Orçamento do aparelho: ");

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

module.exports = Equipment;
