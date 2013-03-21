var prefab : GameObject[];

function Start() {
		yield LoadXML("Elements.xml");
}

function LoadXML(filename : String){

	var parser : XMLParser = new XMLParser();

	var sr = System.IO.File.ReadAllText("Assets/Assets/Level/Elements.xml");
	var node : XMLNode = parser.Parse(sr);

	var elementList = node["PERIODIC_TABLE"][0];
	var count = 0;
	for (var atom in elementList["ATOM"])
	{
		var tempObject : GameObject = GameObject.Find(atom["NAME"][0]["_text"]);
		if(tempObject != null)
		{
			//attach ObjectInfo
			var information = tempObject.GetComponent("ObjectInfo") as ObjectInfo;
			information.SetObjName(atom["NAME"][0]["_text"]);
			information.SetNickname(atom["SYMBOL"][0]["_text"]);
			information.SetTextureName(atom["IMG"][0]["_text"]);
			information.SetAtomicMass(parseFloat(atom["ATOMIC_WEIGHT"][0]["_text"]));
			information.SetAtomicNumber(parseInt(atom["ATOMIC_NUMBER"][0]["_text"]));
			information.SetAtomicSize(parseFloat(atom["ATOMIC_RADIUS"][0]["_text"]));
			information.SetDescription(atom["DESC"][0]["_text"]);
			information.SetGeneralProp(atom["PHYSICAL_PROPERTIES"][0]["_text"]);
			count++;
		}
	}
	Debug.Log(count + " elements loaded into the game");
	return 0;
}










