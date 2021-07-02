// Display today's day and date
const timeStamp =() => {
    let currentDate = moment().format('MMMM Do YYYY, h:mm:ss a');
    $("#currentDay").html(currentDate);
}

setInterval(timeStamp, 1000);

$(document).ready(() => {
    // click listener for save button
    $(".saveBtn").on("click", (event) => {
        // Get nearby values of the description in JQuery
        let text = $(event.currentTarget).siblings(".description").val();
        console.log(text);
        let time = $(event.currentTarget).parent().attr("id");
        console.log(time);
        // Save text in local storage
        localStorage.setItem(time, text);
    })
   
    let timeTracker = () => {
        //get current number of hours.
        let currentTime = moment().hour();
        console.log(currentTime);

        // loop over time blocks
        $(".time-block").each((index, element) => {
            let blockTime = parseInt($(element).attr("id").split("hour-")[1]);
            console.log(blockTime);

            //To check the time and add the classes for background indicators
            if (blockTime < currentTime) {
                $(element).removeClass("future");
                $(element).removeClass("present");
                $(element).addClass("past");
            }
            else if (blockTime === currentTime) {
                $(element).removeClass("past");
                $(element).removeClass("future");
                $(element).addClass("present");
            }
            else {
                $(element).removeClass("present");
                $(element).removeClass("past");
                $(element).addClass("future");

            }
        })
    }

    // Get item from local storage if any
    $("#hour-9 .description").val(localStorage.getItem("hour-9"));
    $("#hour-10 .description").val(localStorage.getItem("hour-10"));
    $("#hour-11 .description").val(localStorage.getItem("hour-11"));
    $("#hour-12 .description").val(localStorage.getItem("hour-12"));
    $("#hour-13 .description").val(localStorage.getItem("hour-13"));
    $("#hour-14 .description").val(localStorage.getItem("hour-14"));
    $("#hour-15 .description").val(localStorage.getItem("hour-15"));
    $("#hour-16 .description").val(localStorage.getItem("hour-16"));
    $("#hour-17 .description").val(localStorage.getItem("hour-17"));

    
    timeTracker();
})