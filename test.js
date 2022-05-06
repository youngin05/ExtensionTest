class StrictEqualityExtension {
  getInfo() {
    return {
      id: 'strictequalityexample', // change this if you make an actual extension!
      name: 'Strict Equality',
      blocks: [
        {
          opcode: 'strictlyEquals',
          blockType: Scratch.BlockType.BOOLEAN,
          text: '[ONE] strictly equals [TWO]',
          arguments: {
            ONE: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'First value'
            },
            TWO: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'Second value'
            }
          }
        },
        {
          opcode: 'hello',
          blockType: Scratch.BlockType.REPORTER,
          text: 'Hello, world!'
        },
        {
          opcode: 'wtf',
          blockType: Scratch.BlockType.BOOLEAN,
          text: '[ONE] strictly equals wtf [TWO]',
          arguments: {
            ONE: {
              type: Scratch.ArgumentType.MATRIX,
              defaultValue: 'First value'
            },
            TWO: {
              type: Scratch.ArgumentType.COLOR,
              defaultValue: 'Second value'
            }
          }
        }
      ]
    };
    
  }
  strictlyEquals(args) {
    return args.ONE === args.TWO;
  }
  hello() {
    return 'Hello, world!';
  }
  wtf(args) {
    return args.ONE === args.TWO;
  }
}
Scratch.extensions.register(new StrictEqualityExtension());
