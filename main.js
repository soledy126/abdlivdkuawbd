
var canvas = new fabric.Canvas('myCanvas');

ball_y=0;
ball_x=0;
holle_y=400;
holle_x=800;
block_image_width = 5;
block_image_height = 5;

function load_img(){
    fabric.Image.fromURL("golf-b.png", function(Img) {
		holle_obj = Img;
		holle_obj.scaleToWidth(50);
		holle_obj.scaleToHeight(50);
		holle_obj.set({
			top:holle_y,
			left:holle_x
		});
		canvas.add(holle_obj);
	    });
	new_image();
}

function new_image()
{
	fabric.Image.fromURL("bola.png", function(Img) {
		ball_obj = Img;
		ball_obj.scaleToWidth(50);
		ball_obj.scaleToHeight(50);
		ball_obj.set({
			top:ball_y,
			left:ball_x
		});
		canvas.add(ball_obj);
	    });
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	if((ball_x==holle_x)&&(ball_y==holle_y)){
		canvas.remove(ball_obj);
		document.getElementById("hd3").innerHTML="Você acertou o buraco!!!";
		document.getElementById("myCanvas").style.borderColor="red";
	}
	
	else{
		if(keyPressed == '38')
		{
			up();
			console.log("cima");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("baixo");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("esquerda");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("direita");
		}
	}
	
	function up()
	{
		if(ball_y >=5)
		{
		   ball_y = ball_y - block_image_height;
		   console.log("altura do bloco da imagem = " + block_image_height);
		   console.log("Quando a seta para cima é  pressionada, X =  " + ball_x + " , Y = "+ball_y);
		   canvas.remove(ball_obj);
		   new_image();
		}
	}

	function down()
	{
		 if(ball_y <=450)
		 {
			ball_y = ball_y + block_image_height;
			console.log("altura do bloco da imagem = " + block_image_height);
			console.log("Quando a seta para baixo é  pressionada, X =  " + ball_x + " , Y = "+ball_y);
			canvas.remove(ball_obj);
			new_image();
		 }
	}

	function left()
	{
		if(ball_x >5)
		{	
			   ball_x = ball_x - block_image_width;
			   console.log("altura do bloco da imagem = " + block_image_width);
			   console.log("Quando a seta para direita é  pressionada, X =  " + ball_x + " , Y = "+ball_y);
			   canvas.remove(ball_obj);
			   new_image();
			
		}
	}

	function right()
	{
		if(ball_x <=1050)
		{
			ball_x = ball_x + block_image_width;
			console.log("altura do bloco da imagem = " + block_image_width);
			console.log("Quando a seta para esquerda é  pressionada, X =  " + ball_x + " , Y = "+ball_y);
			canvas.remove(ball_obj);
			new_image();
		}
	}
	
}

