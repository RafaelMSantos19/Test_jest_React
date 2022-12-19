import Calculo from "./Calculo";

const {sum,sub} = Calculo();

test("Aplica soma", () =>{
    expect(sum(10,10)).toBe(20)
})

test("Aplicando Subutração",()=>{
    expect(sub(10,10)).toBe(0)
})