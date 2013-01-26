var missile : Rigidbody;
//var fi : Texture2D;
var reloadTime : float = 0.6;
var shootspeed : int = 100;
private var lastShot = -10.0;
private var readyForFire : boolean = true;
var laserSound: AudioClip;

function Update () {
	if (Time.time > reloadTime + lastShot){
		readyForFire = true;
	}
}

function OnGUI (){
	if(GUI.Button(Rect(Screen.width - 220, Screen.height - 220, 200, 200),"Shoot!"))
	{
		fire();
	}
}

function fire(){
	var position : Vector3 = new Vector3(0, 0, 0) * 10.0;
	position = transform.TransformPoint (position);
	var thisMissile : Rigidbody = Instantiate (missile, transform.position, transform.rotation);
	thisMissile.rigidbody.AddForce(transform.forward * shootspeed);
	lastShot = Time.time;
	audio.Play();
	yield WaitForSeconds(0.6);
	audio.Stop();
	readyForFire = false;
}