class Parent {
    constructor(fatherName){
        this.fatherName = 'walliullah'
    }
}

class Child extends Parent {
    constructor (name){
        super()
        this.name = name;
    }
}

const baby = new Child('kader')
const baby2 =  new Child('foysal')
// const father = new Parent('waliullah')
console.log(baby,baby2)