$(document).ready(function() {

    $.getJSON('./json/tiles.json', function(data) {
        var tiles = data.Tiles.map(function(tile) {
            return [tile.Caption, tile.TileProperties.HomeURL, tile.DisplayOrder, tile.TileProperties.DefaultDisplay];
        });
        var length = tiles.length;
        for (var i = 0; i < length; i++) {
            var str = tiles[i][0].replace(/[^a-zA-Z0-9]+/g, "").toLowerCase();
            if (tiles[i][3]) {
                $("#display-page > .page-frame").append(" <div class=\"block-wrap " + str + "\" ><p>" + tiles[i][0] + "</p><img class=\"display-show\" src=\"" + tiles[i][1] + "\" alt=\"\"></div>");
                $("#sortable").append(" <div id=\"" + str + "\" class=\"order-tab\"><input class=\"check\" type=\"submit\" value=\"\"  /> " + tiles[i][0] + "  <img  class=\"stack\" src=\"./images/icons/stack.png\" /> ");
            } else {
                $("#display-page > .page-frame").append(" <div class=\"block-wrap " + str + " display-hide\" ><p>" + tiles[i][0] + "</p><img src=\"" + tiles[i][1] + "\" alt=\"\"></div>");
                $("#sortable").append(" <div id=\"" + str + "\" class=\"order-tab\"><input  class=\"empty\" type=\"submit\" value=\"\"  /> " + tiles[i][0] + "  <img  class=\"stack\" src=\"./images/icons/stack.png\" /> ");
            }
        }
    });

    $("#sortable").sortable({
        handle: '.stack',
        stop: function(event, ui) {
            var moving = ui.item.attr("id");
            var afterexist = $("#" + moving).next().get(0);
            console.log(afterexist);
            if (afterexist) {
                var after = $("#" + moving).next().get(0).id;
                $("." + after).before($("." + moving));
            } else {
            	console.log($("#" + moving).parent());
                $("." + moving).parent().append($("." + moving)) ;
            }
        }
    });

    $("#display-page").hide().fadeIn(1500);
    $("#setting-page").hide();


});

$(window).load(function() {

    $("#gear").click(function() {
        $("#display-page").fadeOut(1500);
        $("#setting-page").fadeIn(1500);
    });

    $("#done").click(function() {
        $("#display-page").fadeIn(1500);
        $("#setting-page").fadeOut(1500);
    });


    $(".check").click(function() {
        $(this).toggleClass("check empty");
        console.log('div[class*=\'' + $(this).parent().get(0).id + '\']');
        $('div[class*=\'' + $(this).parent().get(0).id + '\']').toggleClass("display-hide");
    });

    $(".empty").click(function() {
        console.log('div[class*=\'' + $(this).parent().get(0).id + '\']');
        $(this).toggleClass("empty check");
        $('div[class*=\'' + $(this).parent().get(0).id + '\']').toggleClass("display-show");
    });



});
