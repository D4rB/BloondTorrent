/*
 * The Laser shooter object.
 * ivan.zenteno@zentenoit.com
 * copyright 2013
 */

function Start () {
	Destroy(gameObject, 3);
}

function OnCollisionEnter(collision : Collision) {
	Destroy (gameObject);
}
