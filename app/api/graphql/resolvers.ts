const resolvers = {
  Query: {
    me: () => {
      return 'hullo'
    },
    people: () => {
      return [{ name: 'samie', id: 1234, pets: [1, 2] }]
    },
    search: () => {
      return [
        { name: 'samuel', id: 0 },
        { name: 'fido', species: 'doge' },
      ]
    },
  },
  Person: {
    name: (p) => p.name.toUpperCase(),
    pets: (person) => [
      { name: 'catty', species: 'cat' },
      { name: 'dogy', species: 'doge' },
    ],
  },
  COLORS: {
    BLUE: '#3902',
  },
  SearchType: {
    __resolveType: (b) => {
      if (b.species) {
        return 'Animal'
      } else {
        return 'Person'
      }
    },
  },
}

export default resolvers
