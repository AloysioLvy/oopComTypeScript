import { ContaBancaria } from "./ContaBancaria";

describe("ContaBancaria", () => {
    let conta: ContaBancaria;
    beforeEach(() => {
         conta = new ContaBancaria("João", "1234-5", "54321-0", 1000);
    });

    test("Deve inicializar com os valores corretos", () => {
        expect(conta.nome).toBe("João");
        expect(conta.agencia).toBe("1234-5");
        expect(conta.numero).toBe("54321-0");
        expect(conta.consultar()).toBe(1000);
    });

    test("Deve depositar corretamente", () => {
        conta.depositar(500);
        expect(conta.consultar()).toBe(1500);
    });

    test("Deve sacar corretamente quando há saldo suficiente", () => {
        const resultado = conta.sacar(500);
        expect(resultado).toBe(true);
        expect(conta.consultar()).toBe(500);
    });

    test("Não deve permitir saque maior que o saldo disponível", () => {
        const resultado = conta.sacar(1500);
        expect(resultado).toBe(false);
        expect(conta.consultar()).toBe(1000);
    });

    test("Não deve permitir saque de valores negativos", () => {
        const resultado = conta.sacar(-100);
        expect(resultado).toBe(false);
        expect(conta.consultar()).toBe(1000);
    });

    test("Não deve permitir depósito de valores negativos", () => {
        conta.depositar(-100);
        expect(conta.consultar()).toBe(1000);
    });

    test("Deve atualizar agência corretamente", () => {
        conta.agencia = "5678-9";
        expect(conta.agencia).toBe("5678-9");
    });

    test("Não deve atualizar agência com formato inválido", () => {
        conta.agencia = "12345"; // Formato inválido
        expect(conta.agencia).toBe("1234-5");
    });

    test("Deve atualizar número da conta corretamente", () => {
        conta.numero = "98765-4";
        expect(conta.numero).toBe("98765-4");
    });

    test("Não deve atualizar número da conta com formato inválido", () => {
        conta.numero = "987654"; // Formato inválido
        expect(conta.numero).toBe("54321-0");
    });
});