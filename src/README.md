# Things to remember
* Make a Commit after every step! 

# What to do next
* Finish the next-cycle-modal 
    * after each cycle I want the user to have a deload and TM test option
        * inform the users that a deload week followed by a TM test week is recommended
    * If they choose to skip the deload week and just do the TM test it's a week of 90% TM reps
    * If they choose deload they will need to choose which deload they want to do
        * after the deload week they will be given the option to do the TM test week or skip it
    * the deload and TM test weeks need a special calender and an option to quit back to default
    * after the deload/TM test decision the user can choose if they want to add/subtact weight or leave it

# Things to do
* Implement The rotating banner
* add a spinner or something while the data is being retrieved
* If no weights are set the display just says calculating. figure out a way to know if the data will
    * eventually show up or not and display "enter weight on the other page" or something 


#Done
* figure out how to dispaly the locally stored One Rep Max values
    * I made an array of objects with the properties I needed nested inside the objects
* Implement the weight select portion
    * I want the buttons to become disabled once the weight has been stored and stay disabled when you return to the page
    * the page should refresh when you clear the selected weights or the ORMs
* add default data so the user knows what to do and so the display doesnt say "val ?"
* Complete nextWorkout functionality