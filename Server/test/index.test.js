const app = require("../src/app");
const session = require("supertest");
const agent = session(app);
const { email, password } = require("../src/utils/users");

describe("Test de RUTAS", () => {
  describe("GET /rickandmorty/character/:id", () => {
    it("Responde con status: 200", async () => {
      await agent.get("/rickandmorty/character/1").expect(200);
    });

    it('Responde un objeto con las propiedades: "id", "name", "species", "gender", "status", "origin" e "image"', async () => {
      const { body } = await agent.get("/rickandmorty/character/1");

      const atributes = [
        "id",
        "name",
        "species",
        "gender",
        "status",
        "origin",
        "image",
      ];
      const keys = Object.keys(body);

      atributes.forEach((atribute) => {
        expect(keys).toContain(atribute);
      });
    });

    it("Si hay un error responde con status: 500", async () => {
      await agent.get("/rickandmorty/character/0").expect(500);
    });
  });

  describe("GET /rickandmorty/login", () => {
    it("objeto access true si hay credencailes correctas", async () => {
      const { body } = await agent.get(
        `/rickandmroty/login?email=${email}&password=${password}`
      );

      expect(body.acces).toEqual(true);
    });
  });

  describe("POST /rickandmorty/fav", () => {
    const character1 = { id: 1, name: "pichichu" };
    const character2 = { id: 2, name: "nova" };

    it("devuelve un array con el character", async () => {
      const { body } = await agent.post("/rickandmorty/fav").send(character1);

      expect(body).toContainEqual(character1);
    });

    it("al enviar multiples elementos, los devuelve todos", async () => {
      const { body } = await agent.post("/rickandmorty/fav").send(character2);

      expect(body).toContainEqual(character1);
      expect(body).toContainEqual(character2);
    });
  });

  describe("DELETE /rickandmorty/fav/:id", ()=>{
    const character1 = { id: 1, name: "pichichu" };
    const character2 = { id: 2, name: "nova" };

    it('si el id es invalido, retorna el mismo array', async()=>{

      const {body} = await agent.delete("/rickandmorty/fav/cucarachas");

      expect(body).toContainEqual(character1);
      expect(body).toContainEqual(character2);

    });

    it('si el id es valido, elimina el character', async()=>{

      const {body} = await agent.delete("/rickandmorty/fav/1");

      expect(body).not.toContainEqual(character1);


    });

  });

});
