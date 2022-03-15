export const schema = `
  type Query {
    add(x: Int, y: Int): Int
  }
`;

const add = async (
  _: any,
  params: { x: number; y: number }
): Promise<number> => {
  const { x, y } = params;
  return x + y;
};

export const resolvers = {
  Query: {
    add: add,
  },
};
