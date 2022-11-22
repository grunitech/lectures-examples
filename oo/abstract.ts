
interface IsGreat {
    isGreat(): boolean;
}

abstract class IsGreatCls {
    abstract isGreat(): boolean;
}

abstract class Fruit {
    isDelicious(): boolean {
        return true;
    }

    // abstract isGreat(): boolean;
}

class Apple extends Fruit implements IsGreat {

    isGreat(): boolean {
        return false;
    }
}

class BlackTesla implements IsGreat {
    isGreat(): boolean {
        return true;
    }
}


function doYouGreat(x: IsGreat) {
    x.isGreat()
}


