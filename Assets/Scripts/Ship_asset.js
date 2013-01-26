/*
 * The Ship is moving to any space.
 * ivan.zenteno@zentenoit.com
 * copyright 2013
 */

var Ship : GameObject;
var speed : float = 10.0;
var positionX : int = 0;
var positionY : int = 0;

function Start () {
	positionX = transform.position.x;
	positionY = transform.position.y;
}

function Update () {
/*	var vertical : float = Input.GetAxis ("Vertical") * speed; 
	var horizontal : float = Input.GetAxis ("Horizontal") * speed;
	vertical *= Time.deltaTime;
	horizontal *= Time.deltaTime;
	transform.Translate (0, vertical,0);
	transform.Translate (horizontal,0,0);
	*/
}

function OnGUI () {
//	
//	if (GUI.RepeatButton (Rect (30, Screen.height - 100, 50,40), " 1"))
//	{
//		//position = positionY;
//		position = positionY - 1;
//		transform.Translate(positionY, 0, 0);
//		print("POSICION en Y del 1: "+positionY);
//	}
//	
//	if (GUI.RepeatButton (Rect (170,Screen.height - 100,50,40), " 2"))
//	{
//		//position = positionY;
//		position = positionY + 1;
//		transform.Translate(positionY, 0, 0);		
//		print("POSICION en Y del 2: "+positionY);
//	}
//
//	if (GUI.RepeatButton (Rect (100,Screen.height - 50,50,40), " 3"))
//	{
//		//position = positionX;
//		positionX = positionX - 1; 
//		transform.Translate(0, positionX, 0);
//		print("POSICION en Y del 3: "+positionX);
//	}
//		
//	if (GUI.RepeatButton (Rect (100,Screen.height - 150,50,40), " 4"))
//	{
//		//position = positionX;
//		position = positionX + 1;
//		transform.Translate(0,position ,0);
//		print("POSICION en Y del 4: "+positionX);
//	}
//	
//
//
//	if (GUI.Button (Rect (Screen.width -200,Screen.height - 75,50,40), " 5")) {
//		
//	}
//	if (GUI.Button (Rect (Screen.width -100,Screen.height - 75,50,40), " 6")) {
//		
//	}
}