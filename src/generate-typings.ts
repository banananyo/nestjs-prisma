import { GraphQLDefinitionsFactory } from '@nestjs/graphql';
import { join } from 'path';

const definitionsFactory = new GraphQLDefinitionsFactory();
definitionsFactory.generate({
  typePaths: ['./src/graphql/schemas/*.graphql'],
  path: join(process.cwd(), 'src/graphql/graphql.ts'),
  outputAs: 'interface',
});
