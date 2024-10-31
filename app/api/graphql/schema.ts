const schema = `#graphql
  type Query {
    me: String!
    people: [Person!]!
    search: [SearchType]!
  }

  type Person {
    name: String!
    id: ID!
    pets: [Animal]!
  }

  enum COLORS {
    BLUE
    RED
    GREEN
    BROWN
  }

  type Animal {
    species: String!
    name: String!
  }
  union SearchType = Animal | Person

`

export default schema

// interface Character {
//   name: String!
//   outfit: String!
//   strengthStat: Int!
// }

// type Person implements Character {
//   name: String!
//   outfit: String!
//   strengthStat: Int!

//   backgroundStory: String
//   profile: Profile!
// }

// type Alien implements Character {
//   name: String!
//   outfit: String!
//   strengthStat: Int!

//   homeWorld: String
// }

// input SearchInput {
//   id: ID
//   name: String
// }

// type Tweet {
//   id: ID!
//   content: String!
// }

// type Profile {
//   id: ID!
//   username: String! @deprecated(reason: "this is an old field that's no longer used")
//   person: Person!
// }

// union SearchResult = Tweet | Profile

// enum STATUS {
//   IN_PROGRESS
//   DONE
//   TODO
// }

// type Todo {
//   status: STATUS
// }

// # for getting stuff
// type Query {
//   me: Person!
//   characters: [Character!]!
//   search(input: SearchInput!): [SearchResult]!
// }

// # for creating, deleting, and modifying stuff
// type Mutation {
//   makeTweet(content: String!): Tweet!
// }

// type Subscription {
//   userUpdated(id: ID!): User
// }
