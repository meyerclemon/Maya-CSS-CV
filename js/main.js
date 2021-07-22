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
            event.preventDefault()
            console.log("Name field cannot be empty")
            $("#name").text("Name field cannot be empty")
        }

        if(email.length > 5 && email.includes("@") && email.includes(".")) {
            console.log("Email is valid")
        } else {
            event.preventDefault()
            console.log("Email is not valid")
            $("#email").text("Email address is invalid")
        }

        if(subject.length > 0) {
            console.log("Subject is valid") 
        } else {
            event.preventDefault()
            console.log("Subject field cannot be empty")
            $("#subject").text("Subject field cannot be empty")
        }
        if(message.length > 0) {
            console.log("Message is valid") 
        } else {
            event.preventDefault()
            console.log("Message field cannot be empty")
            $("#message").text("Message field cannot be empty")
        }

    })
})