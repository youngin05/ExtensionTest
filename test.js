let just_test_value = 'ONE';
let touchLength = 0;
console.log('test1');

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
          blockType: Scratch.BlockType.REPORTER,
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
  window.addEventListener('touchstart', function(event){
    touchLength = event.touches.length;
    console.log(touchLength);
  });
    console.log('test123');
    return touchLength;
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
addEventListener('touchstart', function(event){
  touchLength = event.touches.length;
  console.log(touchLength);
});

window.addEventListener('keydown', function(e){
  console.log(e);
  console.log("hi");
});

console.log('test3');
console.log(getElementsByClassName('StrictEqualityExtension'));

Scratch.extensions.register(new StrictEqualityExtension());
