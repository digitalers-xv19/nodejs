import * as chai from "chai";
import { describe } from "mocha"
import { sum } from "../../dist/calc/sum.js"

describe('Desarrollo de Funcion sumar', () => {
    it("Debe sumar dos numeros de cualquier tipo", () => {
        chai.expect(sum(10,5)).to.equal(15);
        chai.expect(sum(-10,5)).to.equal(-5);
        chai.expect(sum(10,-5)).to.equal(5);
        chai.expect(sum(-10,-5)).to.equal(-15);
    })
    it("Debe devolver Error si algun parametro no es numerico",() =>{
        chai.expect(sum({},5)).to.be.an('object');
        chai.expect(sum([],5)).to.have.property('message');
        chai.expect(sum("10",5)).to.be.a('number');
    })
    it("Debe devolver Error si no se pasan 2 argumentos", () =>{
        chai.expect(sum(5)).to.have.property('message');
        chai.expect(sum(5,10,15)).to.have.property('message');
    })
    it("Debe devolver 0 si no se pasan parametros", () => {
        chai.expect(sum()).to.equal(0);
    })
})