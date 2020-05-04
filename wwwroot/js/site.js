// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

$(function () {
    // vulnerability fixed in https://github.com/vakata/jstree/releases/tag/3.0.3
    $('#jstree').jstree(
        {
            'core': {
                'force_text': true, // added at 3.0.3
                // should be enabled for modifications!!!
                "check_callback": true
            }
        });
});

function add() {
    var selectedNode = $('#jstree').jstree("get_selected");
    if (selectedNode.length > 0) {
        //var id = $("#jstree").jstree('create_node', selectedNode, $("#name").val(), 'last');
        var node = { id: Math.random(), text: $("#name").val() };
        $("#jstree").jstree('create_node', selectedNode, node, 'last');
    }
    else {
        alert('Please select a node first');
    }

}
