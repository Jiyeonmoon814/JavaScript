/*narrow fx*/

function add1(x,y){
    return x+y;
}

const add2 = (x,y) =>{
    return x+y;
};

console.log(add1(1,2));
console.log(add2(1,2));

const add3 = (x,y) => x+y;


const friends1 = {
    name : 'zero',
    friends : ['one','two','three'],
    logFriends : function(){
        var that = this;
        this.friends.forEach(function(friend){
            console.log(that.name,friend);
        })
    },
};

friends1.logFriends();

const friends2 = {
    name : 'four',
    friends : ['five','six','seven'],
    logFriends2(){
        this.friends.forEach(friend=>{
            console.log(this.name,friend);
        });
    },
};

friends2.logFriends2();

//구조분해 

const candyMachine = {
    status : {
        name : 'rainbow',
        count : 5,
    },
    getCandy : function(){
        this.status.count--;
        return this.status.count;
    },
};

const getCandy = candyMachine.getCandy;
const count = candyMachine.status.count;

const candyMachine2 = {
    status : {
        name : 'sunshine',
        count2 : 5,
    },
    putCandy(){
        this.status.count2++;
        return this.status.count2;
    },
};

const {putCandy, status : {count2}} = candyMachine2;
