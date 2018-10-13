$(() => {
    $(".change-devoured").on('click', function (event) {

        let id = $(this).data('id');
        let newDevoured = $(this).data('devoured');

        let newDevouredState = {
            devoured: newDevoured,
        };
        $.ajax(`/api/burgers/${id}`, {
            type: "PUT",
            data: newDevouredState,
        }).then(() => {
            console.log(`Changed devoured to ${newDevouredState}`);
            location.reload();
        });
    });

    $(".create-form").on('submit', (event) => {
        event.preventDefault();

        let newBurger = {
            name: $('#bu').val().trim(),
            devoured: false,
        }
        console.log(newBurger);
        $.post('/api/burgers', newBurger)
        .then(() => {
            console.log("created new burger");
            location.reload();
        });
    });
});