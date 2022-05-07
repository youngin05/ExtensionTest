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
          opcode: 'Upper',
          blockType: Scratch.BlockType.REPORTER,
          text: 'Upper [A]',
          arguments: {
            A: {
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
    console.log('touch sensing ...');
    addEventListener('click', function(event){
      touch_yes = true;
      console.log('touch sensed !!!');
    });
    return touch_yes;
  }
  Upper({A}) {
    let Upper_test = A.toUpperCase();
    console.log(Upper_test);
    return Upper_test;
  
  }
  wtf(args) {
    return args.ONE === args.TWO;
  }
}
Scratch.extensions.register(new StrictEqualityExtension());
