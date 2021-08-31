const event = {
	 name:'Birthday party',
	 guestList: ['sanjay','usha','piyush'],
	 printGuestList(){
	 	console.log('guestList for '+ this.name)

	 	this.guestList.forEach((guest) => {
	 		console.log(guest + 'is attending ' + this.name)
	 	})
	 }
}
event.printGuestList()