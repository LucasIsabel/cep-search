import faker from 'faker';

export const address = {
    cep: faker.random.number({ min: 0}),
    logradouro: faker.random.words(),
    complemento: faker.random.words(),
    bairro: faker.random.words(),
    localidade: faker.random.words(),
    uf: faker.random.words(),
    unidade: faker.random.words(),
    ibge: faker.random.number(),
    gia: faker.random.words(),
    error: faker.random.boolean()
}