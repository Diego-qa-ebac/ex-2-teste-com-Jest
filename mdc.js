function somaMultiplos5e7() {

    let soma = 0;
    for (let i = 1; i < 1000; i++) {
      if (i % 5 === 0 || i % 7 === 0) {
        soma += i;
      }
    }
    return soma;
    
  }
  
  describe('Função somaMultiplos5e7', () => {

    it('Deve retornar a soma correta dos múltiplos de 5 e 7 abaixo de 1000', () => {
      const resultado = somaMultiplos5e7();
      expect(resultado).toBe(2310); 
    });
  
    it('Deve retornar 0 se o limite for menor que 1', () => {
      const resultado = somaMultiplos5e7(0);
      expect(resultado).toBe(0); 
    });
  });
  
  const resultado = somaMultiplos5e7();
  console.log("A soma dos múltiplos de 5 ou 7 abaixo de 1000 é:", resultado);  