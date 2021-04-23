var canvas = new fabric.Canvas('myCanvas');

x_coord = 10;
y_coord = 10;

character_width = 30;
character_height = 30;

var player_object = "";
var block_object = "";

function player_update(){
    fabric.Image.fromURL("player.png", function(Img){
    player_object = Img;

    player_object.scaleToWidth(150);
    player_object.scaleToWidth(140);
    player_object.set({top:y_coord, left:x_coord});
    canvas.add(player_object);
    });
}

function new_image(get_image){
    fabric.Image.fromURL(get_image, function(Img){
    bock_object = Img;
    
    block_object.scaleToWidth(block_width);
    block_object.scaleToWidth(block_height);
    block_object.set({top:y_coord, left:x_coord});
    canvas.add(block_object);
    });
}
