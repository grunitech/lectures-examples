
// old js vs new js

function Foo() {
    this.x = 1;
    this.y = 2;
}

const f = new Foo();

class Bar {
    x = 1;
    y = 2;
}

const b = new Bar();

class FooBar {
   public x = 1;
   private y = 2;
   protected z = 3;

   private getY() {
       return this.y;
   }

   getZ() {
       return this.z;
   }
}


const fb = new FooBar();

// we get access only for public elements of the class
fb.getZ()


