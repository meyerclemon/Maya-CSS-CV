console.log("it works");


$(document).ready(function() {
    $(".submit").click(function(event) {
        event.preventDefault()
        console.log("clicked button")

        var name = $(".name").val()
        var email = $(".email").val()
        var subject = $(".subject").val()
        var message = $(".message").val()
        var statusElm = $(".status").val()

        if(name.length > 0) {
            console.log("Name is valid") 
        } else {
            console.log("Name field cannot be empty")
        }

        if(email.length > 5 && email.includes("@") && email.includes(".")) {
            console.log("Email is valid")
        } else {
            console.log("Email is not valid")
        }

        if(subject.length > 0) {
            console.log("Status is valid") 
        } else {
            console.log("Status field cannot be empty")
        }
        if(message.length > 0) {
            console.log("Message is valid") 
        } else {
            console.log("Message field cannot be empty")
        }

    })
})