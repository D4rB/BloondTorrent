#pragma strict

/*
*
*	This script move the ship and the camera at the same time to simulate the travel
*
*/

var speed : float = 10;
function Start () {

}

function Update () {
	transform.Translate(Vector3.right * Time.deltaTime * speed);
}