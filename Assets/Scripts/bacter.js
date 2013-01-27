#pragma strict
/*
*  Script for the bacteria, this script search the ship
*  and determine if have a clear view, then launch the bacteria against the ship.
*/
var player : Transform;
var speed : float = 10;
private var rayDirection = Vector3.zero;


function Start () {

}

function Update () {
	if(CanSeePlayer()){
		launch();
	}

}

function CanSeePlayer() : boolean
{
     var hit : RaycastHit;
    var rayDirection = player.transform.position - transform.position;
 
    if (Physics.Raycast (transform.position, rayDirection, hit)) {
 
        if (hit.transform.name == "Ship" || hit.transform.name == "GGJ-ship") {
            Debug.Log("Can see player");
            return true;
        }else{
            Debug.Log("Can not see player");
            return false;
        }
    }
}

function launch (){
	transform.position = Vector3.MoveTowards(transform.position, player.position, speed);
	//transform.rigidbody.AddForce
}

function OnCollisionEnter (){
	Destroy(gameObject);
}