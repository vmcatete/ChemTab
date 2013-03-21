var objName : String = "Put your object name here";
var nickname : String ="?";
var objIcon : Texture;
var textureName : String; 

var atomicNumber : int;
var atomicMass : float;
var atomicSize : float;
var generalProp : String;
var description : String;

var periTab : PeriTabGUI; 

private var click : boolean; 
private var decr : boolean;

function Awake() {
	if (periTab == null && GameObject.Find("Main Camera")!= null )
	{
		periTab = GameObject.Find("Main Camera").GetComponent("PeriTabGUI");
	}
}

function Start() {
	decr = false;	
	objIcon = Resources.LoadAssetAtPath("Assets/Assets/Icons/"+textureName, Texture2D);
}

function OnMouseOver() {
	
	if(Input.GetMouseButtonDown(0)) {
		click = true;
		renderer.material.color.a = 1;
		periTab.SaveObjectInElements(transform.gameObject);
	}
	ToggleAlpha(0.3, 1);
}

function OnMouseExit() {
	renderer.material.color.a = 1;
}

function ToggleAlpha(minV : float, maxV : float) {
	if(renderer.material.color.a > minV && decr) {
		renderer.material.color.a -= 1*Time.deltaTime;
	} else {
		renderer.material.color.a += Time.deltaTime;
	}
	
	if(renderer.material.color.a > maxV) {
		decr = true;
	} else if(renderer.material.color.a < minV) {
		decr = false;
	}
}

function GetObjName() : String{	return objName;}
function SetObjName(s :String) { objName = s; }

function GetNickname() : String{ return nickname;}
function SetNickname(s :String) { nickname = s; }

function GetObjIcon() : Texture{ return objIcon; }
function SetObjIcon(t : Texture) { objIcon = t; }

function GetTextureName() : String { return textureName; }
function SetTextureName(s :String) { textureName = s; }

function GetAtomicMass() : float{ return atomicMass; }
function SetAtomicMass(d : float){ atomicMass = d; }

function GetAtomicNumber() : int{ return atomicNumber; }
function SetAtomicNumber(i : int){ atomicNumber = i; }

function GetAtomicSize() : float{ return atomicSize; }
function SetAtomicSize(d : float){ atomicSize = d; }

function GetDescription() : String{ return description;}
function SetDescription(s :String) { description = s; }

function GetGeneralProp() : String{ return generalProp;}
function SetGeneralProp(i :String) { generalProp = i; }