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
          opcode: 'colorcolor',
          blockType: Scratch.BlockType.REPORTER,
          text: 'Color Matrix [ONE] [TWO]',
          arguments: {
            ONE: {
              type: Scratch.ArgumentType.COLOR,
              defaultValue: '0'
          },
            TWO: {
              type: Scratch.ArgumentType.MATRIX,
              defaultValue: '0'
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
  colorcolor(args){
    retrun 0;
  }
}
Scratch.extensions.register(new StrictEqualityExtension());
