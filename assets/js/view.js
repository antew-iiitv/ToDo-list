$(() => {
    renderTodos()
})

$("ul").on("click", "li", function(){
    // Get ident and toggle complete
    const ident = $(this).attr('identifier')
    toggleTodoComplete(ident)

    // Update view
    $(this).toggleClass("completed");
});

$("ul").on("click", "span", function(){
    // Get ident and remove todo
    const ident = $(this).parent().attr('identifier')
    removeTodo(ident)

    // Animate fadeout
    $(this).parent().fadeOut(500, function(){
    	$(this).remove();
    });

    event.stopPropagation();
});

$("input[type = 'text']").keypress(function(event){
    if (event.which === 13)
    {
        // Get label
        let label = $(this).val();

        // Create todo
        createTodo(label, false)
        renderTodos()

        // Reset text field
        $(this).val('')
    }
});

$(".fa-plus").click(function(){
     $("input[type = 'text']").fadeToggle();
});