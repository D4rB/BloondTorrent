#pragma strict

/*
*
*	This script control the white cells
*
*/

var player : Transform;
var range : float = 10;
var speed : float = 10;

function Start () {

}

function Update () {
	var distance = Vector3.Distance(player.transform.position, transform.position);
	if(distance < range){
		transform.position = Vector3.Lerp(transform.position, player.transform.position, speed);
		print("target aquiered!. W");
	}
}

function OnCollisionEnter (collision : Collision){
	if(collision.gameObject.name == "Ship" || collision.gameObject.name == "GGJ-ship"){
		Destroy(gameObject);
	}
}