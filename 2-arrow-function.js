// const square = function(x){
//     return x * x
// }

// const square = (x) => {
//     return x * x
// }

// const square = (x) => x * x

// console.log(square(4))

const event = {
    name: 'Birthday Party',
    guestList: ['Andrew', 'Travis', 'Mike'],
    printGuests(){
        console.log('Guest list for ' + this.name)

        this.guestList.forEach((guest) => {
            console.log(guest + ' is attending ' + this.name)
        })
    }
}

event.printGuests()