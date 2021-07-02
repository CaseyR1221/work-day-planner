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
        let time = $(event.currentTarget).parent().attr("id");
        
        localStorage.setItem(time, text); // store values in local storage
    })
   
    let timeTracker = () => {
        let currentTime = moment().hour(); // the current hour

        $(".time-block").each((index, element) => {
            let blockTime = parseInt($(element).attr("id").split("hour-")[1]); // hour of the current time block

            // adds the appropriate background color to the time block depending on the current time
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

    // pulls any stored values from the time blocks
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