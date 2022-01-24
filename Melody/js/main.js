$(document).ready(function () {
    var currentFloor = 2;
    var counterUp = $(".counter-up");
    var counterDown = $(".counter-down");
    var buttonPrimary = $(".button-primary");
    var modal = $(".modal");
    var closeButton = $(".modal-close-button");

    buttonPrimary.on("click", function () {
        modal.toggleClass("is-open");
    })

    closeButton.on("click", function () {
        modal.toggleClass("is-open");
    })

    $(".home-image path").on("mouseover", function () {
        $(".home-image path").removeClass("current-floor");
        currentFloor = $(this).attr("data-floor");
        $(".counter").text(currentFloor);
    })

    counterUp.on("click", function () {
        if (currentFloor <= 17) {
            currentFloor++;
            usCurrentFloor = currentFloor.toLocaleString('en-US', {
                minimumIntegerDigits: 2,
                useGrouping: false
            });
            $(".counter").text(usCurrentFloor);
            $(".home-image path").removeClass("current-floor");
            $("[data-floor=" + usCurrentFloor + "]").toggleClass("current-floor");
        }
    })

    counterDown.on("click", function () {
        if (currentFloor >= 3) {
            currentFloor--;
            usCurrentFloor = currentFloor.toLocaleString('en-US', {
                minimumIntegerDigits: 2,
                useGrouping: false
            });
            $(".counter").text(usCurrentFloor);
            $(".home-image path").removeClass("current-floor");
            $("[data-floor=" + usCurrentFloor + "]").toggleClass("current-floor");
        }
    })
});