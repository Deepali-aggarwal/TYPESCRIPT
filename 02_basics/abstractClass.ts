// Abstract Class : No new object can be created from an abstract class but they help to define the class who are inheriting them to get a better structure of the classes .
// If we want to make some methods to be compulsorily inherited we can make them "abstract" as well.

abstract class TakePhoto{
    constructor(
        public cameraMode: string,
        public filter: string,
    ){}

    abstract getSepia(): void
    getReelTime(): number{
        return 8
    }
}

class Instagram extends TakePhoto{
    constructor(
        public cameraMode : string,
        public filter: string,
        public burst: number
    ){
        super(cameraMode, filter)
    }

    getSepia():void {
        console.log("Sepia")
    }
}

// const deepali = new TakePhoto("test" , "Test", 3)