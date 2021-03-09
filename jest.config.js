module.exports = {
  testEnvironment: 'jsdom', //simula dom do browser pra permitir que os testes rodem direitinho
  testPathIgnorePatterns: ['/node_modules/', '/.next/'], //informa as pastas que ele deve ignorar
  collectCoverage: true, //vai fazer o teste de cobertura pra ver se estamos cobrindo todas funções, variáveis, etc
  collectCoverageFrom: ['src/**/*.ts(x)'], //informando todos os arquivos do projeto com código
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'] //configurações que o jest deve carregar antes de implementar os testes
}
