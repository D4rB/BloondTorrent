#pragma strict

/*
*
*	This script ignore the collisiones between the collider wall and the blood particles
*
*/

function Start () {

}

function Update () {

}

function OnCollisionEnter(collision : Collision){
	if (collision.gameObject.tag == "blood-particles")
	{
		Physics.IgnoreCollision(collision.collider, collider);
	}
}