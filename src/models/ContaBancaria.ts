import { deepEqual } from "assert";

export class ContaBancaria{
    private _saldo: number;
    private _name: string;
    private _numero: string;
    private _agencia: string;

    constructor (name:string, agencia:string, numero:string, saldo: number){

        this._agencia = this._validarAgencia(agencia) ? agencia : '0000-0'
        this._numero = this._validarNumero(numero) ? numero : '00000-0'
        this._saldo = this._validarSaldo(saldo) ? saldo : 0;
        this._name = this._validarNome(name) ? name : "aaaaa"
    }

    get numero(): string{
        return this._numero
    }

    set numero(value:string){
       if(this._validarNumero(value)){
        this._numero = value;
       }else{
        console.log("Formato de numero invalaido")
       }

    }

    get agencia(): string{
        return this._agencia;
    }
    set agencia(value: string){
        if(this._validarAgencia(value)){
            this._agencia = value;
        }
        else{
            console.log("Formato de agencia invalido")
        }
    }

    private set saldo(value:number){
       if(this._validarSaldo(value)){
        this._saldo = value;
       }else{
        console.log("Saldo invalido")
       }
        
    }
    private get saldo(){
        return this._saldo;
    }
    private set nome(value:string){
        if(this._validarNome(value)){
            this._name =  value
        }else{
            console.log("Nome invalido")
        }
    }
    get nome(){
        return this._name
    }

    consultar(){
        return this.saldo;
    }

    depositar(deposito:number){
        this.saldo += deposito
         
    }

    sacar (valor: number):boolean {
        if(valor >= 0 && this._saldo >= valor){
           this._saldo =- valor;
           return true
        }

        return false
    }
    private _validarNumero(value:string): boolean{
        const regex = /^\d{5}-\d{1}$/;
        if(regex.test(value)){
           return true;
        }
        return false;
    }
    private _validarAgencia(value:string): boolean{
        const regex = /^\d{4}-\d{1}$/;
        if(regex.test(value)){
            return true;
        }
        return false;
    }
    private _validarSaldo(value:number): boolean{
        if(value >= 0){
            return true;
        }
        return false;
    }
    private _validarNome(value:string): boolean{
        if(value.length > 0){
            return true;
        }else{
            return false;
        }
    }



}