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
          opcode: 'touch',
          blockType: Scratch.BlockType.BOOLEAN,
          text: 'touch'
        },
        {
          opcode: 'alert',
          blockType: Scratch.BlockType.COMMAND,
          text: 'alert [TEXT]',
          arguments:{
           TEXT: {
             type: Scratch.ArgumentType.STRING
           }
          }
        },
        {
          opcode: 'wtf',
          blockType: Scratch.BlockType.BOOLEAN,
          text: '[ONE] strictly equals wtf [TWO]',
          arguments: {
            ONE: {
              type: Scratch.ArgumentType.MATRIX
            },
            TWO: {
              type: Scratch.ArgumentType.COLOR
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
  touch() {
    let touch_yes = false;
    addEventListener('click', function(event){
      touch_yes = true;
    });
    return touch_yes;
  }
  alert(args) {
    alert(args);
    return;
    }
  }
  wtf(args) {
    return args.ONE === args.TWO;
  }
}
Scratch.extensions.register(new StrictEqualityExtension());
