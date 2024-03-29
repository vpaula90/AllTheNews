function shownote(event) {
	event.preventDefault();
	var id = $(this).attr("value");

		$("#addnote").css("display", "flex");

		$("#add-note").attr("value", id);

		$.get("/" + id, function(data) {

			$("#article-title").text(data.title);

			$.get("/note/" + id, function(data) {

				if (data) {
					$("#note-title").val(data.title);
					$("#note-body").val(data.body);
				}
			});
		});

}

function addnote(event) {
	event.preventDefault();
	var id = $(this).attr("value");
	var obj = {
		title: $("#note-title").val().trim(),
		body: $("#note-body").val().trim()
	};
	$.post("/note/" + id, obj, function(data) {
		window.location.href = "/saved";
	});
}

function changeback() {
	$(this).html($(this).attr("value"));
}

$(document).on("click", ".addnote-button", shownote);
$(document).on("click", "#add-note", addnote);
$("#close-note").on("click", function() {
	$("#addnote").fadeOut(300);
});