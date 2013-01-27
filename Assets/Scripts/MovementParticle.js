#pragma strict

/*
*
*	This script move the particles in the blood (red cells, white cells, bacterias, etc)
*	Also try to ignore the collision with the wall-edge of the escene
*
*/


var timeWait : float = 2;
var pushForce : float = 50;
private var lastTime : float;

function Start () {
	transform.rigidbody.AddForce(Vector3.right * pushForce);
	lastTime = Time.deltaTime;

}

function Update () {
	if(Time.deltaTime > lastTime + timeWait){
		transform.rigidbody.AddForce(Vector3.right * pushForce);
		lastTime = Time.deltaTime;
	}
}

function OnCollisionEnter(collision : Collision){
	if (collision.gameObject.name == "scene-limit")
	{
		Physics.IgnoreCollision(collision.collider, collider);
	}
}