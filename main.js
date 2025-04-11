import * as THREE from './node_modules/three';
import {OrbitControls} from './node_modules/three/examples/jsm/controls/OrbitControls'
//#region scene , camera, Renderer,OrbitControls 
// creating a scene 
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x000000);

// camera 
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 4000);
camera.position.set(0, 0, 500);


// renderer 
let renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);


// orbit controls
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
//#endregion

let earthSphere;

//#region  All task Function 

function task1() {
    clearScene();

    // Plane Geometry
    const planeGeometry = new THREE.PlaneGeometry(300, 300);
    const planematerial = new THREE.MeshBasicMaterial({
        color: 0x006400,
        side: THREE.DoubleSide
    });
    const plane = new THREE.Mesh(planeGeometry, planematerial);
    plane.rotateX(Math.PI / 2);
    scene.add(plane);


    // Box Geometry
    const boxWidth = 100, boxHeight = 100, boxDepth = 100;
    const boxGeometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth);
    const material = new THREE.MeshBasicMaterial({
        color: 0x116ffc
    });

    const cube = new THREE.Mesh(boxGeometry, material);
    cube.position.y = boxHeight;
    scene.add(cube);

}
function task2() {
    clearScene();
    function getGeometry(geometry) {
        let Geometry;
        switch (geometry) {

            case "Plane":
                Geometry = new THREE.PlaneGeometry(200, 200);
                break;
            case "Box":
                let height = 10, width = 10, depth = 10;
                Geometry = new THREE.BoxGeometry(width, height, depth);
                break;
            case "Capsule":
                Geometry = new THREE.CapsuleGeometry(10, 15, 32, 32);
                break;
            case "Sphere":
                Geometry = new THREE.SphereGeometry(15, 32, 32);
                break;
            case "Cone":
                Geometry = new THREE.ConeGeometry(5, 20, 32);
                break;
            case "Cylinder":
                Geometry = new THREE.CylinderGeometry(15, 32, 32);
                break;
            case "Dodecahedron":
                Geometry = new THREE.DodecahedronGeometry(10, 5);
                break;
            case "Ring":
                Geometry = new THREE.RingGeometry(1, 5, 32);
                break;
            case "Tetrahedron":
                Geometry = new THREE.TetrahedronGeometry(10, 0);
                break;
            case "Torus":
                Geometry = new THREE.TorusGeometry(10, 3, 16, 100);
                break;
            case "TorusKnot":
                Geometry = new THREE.TorusKnotGeometry(10, 3, 100, 16);
                break;
            default:
                console.log("Enter Valid input as Geometry name ");
                return null;

        }

        return Geometry;
    }

    // creating function for material
    function getMaterial(material) {
        let selectedMaterial;

        switch (material) {
            case "LineBasic":
                selectedMaterial = new THREE.LineBasicMaterial({
                    color: 0xffffff,
                    linewidth: 1
                });
                break;
            case "LineDashed":
                selectedMaterial = new THREE.LineDashedMaterial({
                    color: 0xffffff,
                    linewidth: 1,
                    scale: 1,
                    dashSize: 3,
                    gapSize: 1,
                });
                break;
            case "MeshBasic":
                selectedMaterial = new THREE.MeshBasicMaterial({
                    color: 0xffffff
                });
                break;
            case "MeshDepth":
                selectedMaterial = new THREE.MeshDepthMaterial(); // No color property
                break;
            case "MeshDistance":
                selectedMaterial = new THREE.MeshDistanceMaterial();
                break;
            case "MeshLambert":
                selectedMaterial = new THREE.MeshLambertMaterial({
                    color: 0xffffff
                });
                break;
            case "MeshMatcap":
                selectedMaterial = new THREE.MeshMatcapMaterial({
                    color: 0xffffff
                });
                break;
            case "MeshNormal":
                selectedMaterial = new THREE.MeshNormalMaterial();
                break;
            case "MeshPhong":
                selectedMaterial = new THREE.MeshPhongMaterial({
                    color: 0xffffff
                });
                break;
            case "MeshPhysical":
                selectedMaterial = new THREE.MeshPhysicalMaterial({
                    color: 0xffffff
                });
                break;
            case "MeshStandard":
                selectedMaterial = new THREE.MeshStandardMaterial({
                    color: 0xffffff
                });
                break;
            case "MeshToon":
                selectedMaterial = new THREE.MeshToonMaterial({
                    color: 0xffffff
                });
                break;
            case "Points":
                selectedMaterial = new THREE.PointsMaterial({
                    color: 0xffffff
                });
                break;
            default:
                console.log("Enter a valid material name / No such material available");
                return null;
        }

        return selectedMaterial;
    }

    // adding light function
    function getLight(lightType, scene) {
        let selectedLight;

        switch (lightType) {
            case "Ambient":
                selectedLight = new THREE.AmbientLight(0x404040);
                break;
            case "Directional":
                selectedLight = new THREE.DirectionalLight(0xffffff, 0.5);
                break;
            case "Hemisphere":
                selectedLight = new THREE.HemisphereLight(0xffffbb, 0x080820, 1);
                break;
            case "Point":
                selectedLight = new THREE.PointLight(0xff0000, 1, 100);
                selectedLight.position.set(50, 50, 50);
                break;
            case "Spot":
                selectedLight = new THREE.SpotLight(0xffffff);
                selectedLight.position.set(100, 1000, 100);
                break;
            default:
                console.log("Invalid light type. Try a valid one.");
                return null;
        }


        if (selectedLight) {
            scene.add(selectedLight);
        }

        return selectedLight;
    }

    function first() {
        const cube = new THREE.Mesh(getGeometry("Box"), getMaterial("MeshBasic"));
        scene.add(cube);
        getLight(AmbientLight);
    }
    first();
}

function task3() {
    clearScene();
    // adding light 
    const amblight = new THREE.AmbientLight(0xffffff, 2);
    scene.add(amblight);

    const width = 800, height = 700;
    const holeRadius = 50;

    const recShape = new THREE.Shape();

    recShape.moveTo(-width / 2, -height / 2);
    recShape.lineTo(width / 2, -height / 2);
    recShape.lineTo(width / 2, height / 2);
    recShape.lineTo(-width / 2, height / 2);
    recShape.closePath();


    // Function to create a hole
    function createHole(x, y, radius) {
        const holePath = new THREE.Path();
        holePath.absarc(x, y, 50, 0, Math.PI * 2, false);
        return holePath;
    }

    //Adding holes correctly
    recShape.holes.push(createHole(width / 4, height / 4, holeRadius));
    recShape.holes.push(createHole(0, height / 4, holeRadius));
    recShape.holes.push(createHole(-width / 4, height / 4, holeRadius));
    recShape.holes.push(createHole(-width / 4, -height / 4, holeRadius));
    recShape.holes.push(createHole(0, -height / 4, holeRadius));
    recShape.holes.push(createHole(width / 4, -height / 4, holeRadius));

    const extrudeSettings = {
        depth: 2,
        bevelEnabled: false
    };

    const recgeometry = new THREE.ExtrudeGeometry(recShape, extrudeSettings);

    const recmesh = new THREE.Mesh(recgeometry, new THREE.MeshStandardMaterial({
        color: 0xfe00ff,
        side: THREE.DoubleSide,
        wireframe: false,
        metalness: 0.5,
        roughness: 0.6,
    }));
    scene.add(recmesh);

}
function task4() {
    clearScene();
    const light = new THREE.AmbientLight(0xffffff, 2);
    scene.add(light);


    // shape 
    const width = 100, height = 200;
    const shape = new THREE.Shape();
    shape.moveTo(-width / 2, -height / 2);
    shape.lineTo(width / 2, -height / 2);
    shape.lineTo(width / 2, height / 2);
    shape.lineTo(-width / 2, height / 2);
    shape.lineTo(-width / 2, -height / 2);

    //extrusion path
    const path = new THREE.CatmullRomCurve3([
        new THREE.Vector3(0, 0, 0),
        new THREE.Vector3(50, 100, 0),
        new THREE.Vector3(100, 0, 0),
        new THREE.Vector3(900, 0, 0),
        new THREE.Vector3(950, 100, 0),
        new THREE.Vector3(1000, 0, 0)
    ]);

    // Extrude settings
    const extrudeSettings = {
        bevelEnabled: false,
        extrudePath: path
    };

    // extruded geometry
    const geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
    const material = new THREE.MeshStandardMaterial({ color: "red", side: THREE.DoubleSide, wireframe: false });
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    // edges light
    const edges = new THREE.EdgesGeometry(geometry);
    const edgeMaterial = new THREE.LineBasicMaterial({ color: 0xffffff });
    const edgeMesh = new THREE.LineSegments(edges, edgeMaterial);
    scene.add(edgeMesh);
}
function task5() {
    clearScene();
    // Lighting
    const light = new THREE.AmbientLight(0xffffff, 2);
    scene.add(light);

    // shape 
    const width = 100, height = 100;
    const angle = 45;
    const l = height / Math.tan(angle);
    const origin = new THREE.Vector2(0, 0);
    const shape = new THREE.Shape();
    shape.moveTo(-width / 2 + origin.x, -height / 2 + origin.y);
    shape.lineTo(origin.x, -height / 2 + origin.y);
    shape.lineTo(origin.x, -height + origin.y);
    shape.lineTo(width / 4 + origin.x, -height + origin.y);
    shape.lineTo(width / 4 + origin.x, -height / 2 + origin.y);
    shape.lineTo(width / 2 + origin.x, -height / 2 + origin.y);
    shape.lineTo(width / 2 + origin.x, origin.y);
    shape.lineTo(width + origin.x, origin.y);
    shape.lineTo(width + origin.x, height / 4 + origin.y);
    shape.lineTo(width / 2 + origin.x, height / 4 + origin.y);
    shape.lineTo(width / 2 + origin.x, height / 2 + origin.y);
    shape.lineTo(origin.x, height / 2 + origin.y);
    shape.lineTo(origin.x, height + origin.y);
    shape.lineTo(origin.x - width / 4, origin.y + height);
    shape.lineTo(origin.x - width / 4, origin.y + height / 2);
    shape.lineTo(-width / 2 + origin.x, height / 2 + origin.y);
    shape.lineTo(-width / 2 + origin.x, origin.y);
    shape.lineTo(-width + origin.x, origin.y);
    shape.lineTo(-width + origin.x, origin.y - height / 4);
    shape.lineTo(-width / 2 + origin.x, origin.y - height / 4);
    shape.lineTo(-width / 2 + origin.x, -height / 2 + origin.y);

    //extrusion path
    let extrudeLength = 350;

    //#region for extude along the direction of axis
    function axis(value) {
        let pathvalue;
        if (value == "x") {
            pathvalue = new THREE.CatmullRomCurve3([
                new THREE.Vector3(0, 0, 0),
                new THREE.Vector3(extrudeLength, 0, 0),
                new THREE.Vector3(extrudeLength * 2, 0, 0)
            ]);
        } else if (value == "y") {
            pathvalue = new THREE.CatmullRomCurve3([
                new THREE.Vector3(0, 0, 0),
                new THREE.Vector3(0, extrudeLength, 0),
                new THREE.Vector3(0, extrudeLength * 2, 0)
            ]);
        } else {
            pathvalue = new THREE.CatmullRomCurve3([
                new THREE.Vector3(0, 0, 0),
                new THREE.Vector3(extrudeLength, extrudeLength, 0),
                new THREE.Vector3(extrudeLength * 2, extrudeLength * 2, 0)
            ]);
        }
        return pathvalue;

    }
    //#endregion

    let startPoint = new THREE.Vector3(0, 0, 0);
    let endPoint = new THREE.Vector3(extrudeLength, 0, 0);
    const curve = new THREE.LineCurve3(startPoint, endPoint);


    // Extrude settings
    const extrudeSettings = {
        bevelEnabled: false,
        // extrudePath: axis("x")
        extrudePath: curve
    };

    // extruded geometry
    const geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
    const material = new THREE.MeshStandardMaterial({ color: "red", side: THREE.DoubleSide, wireframe: false });
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);


    var vertex = new THREE.Vector3();
    var positionAttribute = geometry.attributes.position;
    console.log(positionAttribute);
    var i = geometry.index;
    for (i = 0; i < positionAttribute.count; i++) {

        const l = (positionAttribute.getY(i));
        const d = positionAttribute.getX(i)

        vertex.fromBufferAttribute(positionAttribute, i);
        console.log("x: ", positionAttribute.getX(i));
        console.log("Y: ", positionAttribute.getY(i));
        console.log("z: ", positionAttribute.getZ(i));

        if (vertex.x == 0) {
            vertex.x = vertex.x + l;
        } else if (vertex.x == width / 4) {
            vertex.x = vertex.x - l;
        } else if (vertex.x == -width / 4) {
            vertex.x = vertex.x + l;
        } else if (vertex.x == -width / 2) {
            vertex.x = vertex.x + l;
        } else if (vertex.x == width / 2) {
            vertex.x = vertex.x - l;
        } else if (vertex.x == extrudeLength) {
            vertex.x = vertex.x - l;
        }

        positionAttribute.setXYZ(i, vertex.x, vertex.y, vertex.z);

    }

    // edges light
    const edges = new THREE.EdgesGeometry(geometry);
    const edgeMaterial = new THREE.LineBasicMaterial({ color: 0xffffff });
    const edgeMesh = new THREE.LineSegments(edges, edgeMaterial);
    scene.add(edgeMesh);

}
function task6() {
    clearScene();
    const light = new THREE.AmbientLight(0xffffff, 2);
    scene.add(light);

    const width = 400, height = 600;
    const w = 60, m = 15;
    const origin = new THREE.Vector2(0, 0);
    const shape = new THREE.Shape();

    //1 
    shape.moveTo(origin.x + m, origin.y);
    shape.lineTo(origin.x + width - m, origin.y);
    shape.bezierCurveTo(origin.x + width - m, origin.y, origin.x + width, origin.y, origin.x + width, origin.y + m);
    //2 
    shape.lineTo(origin.x + width, origin.y + height / 3 - m);
    shape.bezierCurveTo(origin.x + width, origin.y + height / 3 - m, origin.x + width - w / 2, origin.y + height / 3, origin.x + width - w, origin.y + height / 3 - m); // add other curve here 
    // // // 3

    shape.lineTo(origin.x + width - w, origin.y + w + m);
    shape.bezierCurveTo(origin.x + width - w, origin.y + w + m, origin.x + width - w, origin.y + w, origin.x + width - w - m, origin.y + w);
    // //4
    shape.lineTo(origin.x + w + m, origin.y + w);
    shape.bezierCurveTo(origin.x + w + m, origin.y + w, origin.x + w, origin.y + w, origin.x + w, origin.y + w + m);

    //  shape.lineTo(origin.x+w,  origin.y+height-w-m);
    shape.lineTo(origin.x + w, origin.y + 2 * height / 3);
    //  shape.bezierCurveTo(origin.x+w,  origin.y+height-w-m, origin.x+w,  origin.y+height-w,origin.x+w+m,  origin.y+height-w );
    shape.bezierCurveTo(origin.x + w, origin.y + 2 * height / 3, origin.x + width / 4, origin.y + height - w, origin.x + width / 2 - w, origin.y + 2 * height / 3 + m);

    //  shape.lineTo(origin.x+width/2-w-m,  origin.y+height-w); // original
    //  shape.bezierCurveTo(origin.x+width/2-w-m,  origin.y+height-w, origin.x+width/2-w,  origin.y+height-w,origin.x+width/2-w,  origin.y+height-w-m );

    //  shape.lineTo(origin.x+width/2-w,  origin.y+2*height/3+m); // edited
    shape.bezierCurveTo(origin.x + width / 2 - w, origin.y + 2 * height / 3 + m, origin.x + width / 2 - w / 2, origin.y + 2 * height / 3, origin.x + width / 2, origin.y + 2 * height / 3 + m);

    //  shape.lineTo(origin.x+width/2,  origin.y+height-m);
    //  shape.bezierCurveTo(origin.x+width/2,  origin.y+height-m, origin.x+width/2,  origin.y+height,origin.x+width/2- m,  origin.y+height);
    shape.lineTo(origin.x + width / 2, origin.y + height - w);
    shape.bezierCurveTo(origin.x + width / 2, origin.y + height - w, origin.x + width / 4, origin.y + height, origin.x, origin.y + height - w);

    //  shape.lineTo(origin.x+m,  origin.y+height);
    //  shape.bezierCurveTo(origin.x+m,  origin.y+height, origin.x,  origin.y+height,origin.x,  origin.y+height-m);

    //  shape.lineTo(origin.x,  origin.y+m);
    //  shape.bezierCurveTo(origin.x,  origin.y+m, origin.x,  origin.y,origin.x+m,  origin.y);


    // creating the hole
    const radius = 15;
    function createHole(x, y, radius) {
        const holePath = new THREE.Path();
        holePath.absarc(x, y, radius, 0, Math.PI * 2, false);
        return holePath;
    }

    shape.holes.push(createHole(width - w / 2, height / 3 - w / 2, radius));
    shape.holes.push(createHole(width / 2 - w / 2, 2 * height / 3 + w / 2, radius));

    let l = 50
    let startPoint = new THREE.Vector3(0, 0, 0);
    let endPoint = new THREE.Vector3(l, 0, 0);
    const curve = new THREE.LineCurve3(startPoint, endPoint);
    const extrudeSettings = {
        depth: 30,
        bevelEnabled: false,

    };
    const geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
    const material = new THREE.MeshStandardMaterial({ color: "red", side: THREE.DoubleSide, wireframe: false });
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    const edges = new THREE.EdgesGeometry(geometry);
    const edgeMaterial = new THREE.LineBasicMaterial({ color: 0xffffff });
    const edgeMesh = new THREE.LineSegments(edges, edgeMaterial);
    scene.add(edgeMesh);

}
function task7() {
    clearScene();
    const light = new THREE.AmbientLight(0xffffff, 2);
    scene.add(light);

    let width = 300, height = 300; // these are not to change only change the new width and new height value

    let newWidth = 200, newHeight = 200; // change the value to accurate as your choice 

    const w = 18, m = 15;
    if (newWidth <= w * 3) {
        width = width
    } else {
        width = newWidth;
    }
    if (newHeight <= 3 * w) {
        height = height;
    } else {
        height = newHeight;
    }
    const origin = new THREE.Vector2(-100, -100);
    const shape = new THREE.Shape();

    shape.moveTo(origin.x + width, origin.y + w / 2); //origin 
    shape.lineTo(origin.x + width, origin.y + height - w - m); // next step goes along y-axis(+ve)
    shape.bezierCurveTo(origin.x + width, origin.y + height - w - m, origin.x + width, origin.y + height - w / 2, origin.x + width - m, origin.y + height - w / 2); // next the bezierCurve is added
    shape.lineTo(origin.x + 3 * w / 2, origin.y + height - w / 2); // line along x axis direction towards y-axis  
    shape.absarc(origin.x + w, origin.y + height - w / 2, w / 2, 0, Math.PI);
    shape.absarc(origin.x + w / 2, origin.y + height - w, w / 2, Math.PI / 2, 3 * Math.PI / 2);
    shape.absarc(origin.x + w, origin.y + height - 3 * w / 2, w / 2, Math.PI, 2 * Math.PI);
    shape.lineTo(origin.x + width - w - m, origin.y + height - 3 * w / 2);
    shape.bezierCurveTo(origin.x + width - w - m, origin.y + height - 3 * w / 2, origin.x + width - w, origin.y + height - 3 * w / 2, origin.x + width - w, origin.y + height - 3 * w / 2 - m);
    shape.lineTo(origin.x + width - w, origin.y + w / 2);
    shape.absarc(origin.x + width - w / 2, origin.y + w / 2, w / 2, Math.PI, 2 * Math.PI);


    let diameter = 50;
    if (diameter >= w) {
        diameter = w;
    }
    function createHole(x, y, radius) {
        const holePath = new THREE.Path();
        holePath.absarc(x, y, radius, 0, Math.PI * 2, false);
        return holePath;
    }

    shape.holes.push(createHole(origin.x + w, origin.y + height - w, diameter / 2));


    const extrudeSettings = {
        depth: 30,
        bevelEnabled: false,


    };

    const geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
    const material = new THREE.MeshStandardMaterial({ color: "red", side: THREE.DoubleSide, wireframe: false });
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    const edges = new THREE.EdgesGeometry(geometry);
    const edgeMaterial = new THREE.LineBasicMaterial({ color: 0xffffff });
    const edgeMesh = new THREE.LineSegments(edges, edgeMaterial);
    scene.add(edgeMesh);

}
function task8() {
    clearScene();
    const light = new THREE.AmbientLight(0xffffff, 2);
    scene.add(light);

    // here alll the variable declared
    let width = 200, height = 500; // width and height of the shape 
    let d = height / 4, l = height / 6, w = 60; // here the required variable for creating the  shape

    // updating the Height and length for avoid the bad shape 
    let newWidth = 300, newHeight = 600;


    const origin = new THREE.Vector2(0, 0);
    const shape = new THREE.Shape();
    shape.moveTo(origin.x + width, origin.y + w / 2); // here the origin point then going to upward direction 
    shape.lineTo(origin.x + width, origin.y + height - l);
    shape.quadraticCurveTo(origin.x + width, origin.y + height, origin.x + width - w / 2, origin.y + height - 15);
    shape.lineTo(origin.x, origin.y + height - l);
    shape.lineTo(origin.x, origin.y + height - l - d);
    shape.quadraticCurveTo(origin.x + width - w, origin.y + height - d, origin.x + width - w, origin.y + height - d - l);
    shape.lineTo(origin.x + width - w, origin.y + w / 2);
    shape.absarc(origin.x + width - w / 2, origin.y + w / 2, w / 2, Math.PI, 0, false); // here the last of geometry 

    // creating the hole
    let diameter = 50;
    // updating diameter with respect to ht height 
    if (diameter > height / 4) {
        diameter = height / 8;
    }
    function createHole(x, y, radius) {
        const holePath = new THREE.Path();
        holePath.absarc(x, y, radius, 0, Math.PI * 2, false);
        return holePath;
    }

    shape.holes.push(createHole(origin.x + width / 2, height - d / 2 - l / 2, diameter / 2));

    const extrudeSetting = {
        depth: 10,
        bevelEnabled: false
    };

    const geometry = new THREE.ExtrudeGeometry(shape, extrudeSetting);
    const material = new THREE.MeshBasicMaterial({
        color: 'green',
        side: THREE.DoubleSide,
        wireframe: false
    });
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);
}
function task9() {
    clearScene();
    // here the ambient light 
    const light = new THREE.AmbientLight(0xffffff, 2);
    scene.add(light);


    let rectangleWidth = 300, rectangleHeight = 80; // declaring the width and  height of rectangular shape

    const origin = new THREE.Vector2(0, 0); // initialising the origin 

    // creating the shape using shape geometry with width and height 
    let squareWidth = 100, squareHeight = 300;

    const squareShape = new THREE.Shape();
    squareShape.moveTo(origin.x, origin.y);
    squareShape.lineTo(origin.x + squareWidth, origin.y);
    squareShape.lineTo(origin.x + squareWidth, origin.y + squareHeight);
    squareShape.lineTo(origin.x, origin.y + squareHeight);
    squareShape.lineTo(origin.x, origin.y);


    // creating a hole along with the  square shape 
    let diameter = 50;
    if (diameter > rectangleHeight) {
        diameter = rectangleHeight;
    }
    function createHole(x, y, radius) {
        const holePath = new THREE.Path();
        holePath.absarc(x, y, radius, 0, Math.PI * 2);
        return holePath;
    }
    squareShape.holes.push(createHole(origin.x + 10 + diameter / 2, origin.y + squareHeight / 2, diameter / 2));
    let dep = 20 // creating for the depth 
    const extrudeSetting = {
        depth: dep,
        bevelEnabled: false
    }

    const squareGeometry = new THREE.ExtrudeGeometry(squareShape, extrudeSetting); // geometry of square shape
    const squareMaterial = new THREE.MeshBasicMaterial({
        color: 'red',
        side: THREE.DoubleSide,
        wireframe: false
    });  // here the material of the geometry with some basic property 

    const square = new THREE.Mesh(squareGeometry, squareMaterial);
    scene.add(square);

    // creating the rectangle shape handle shape using shape geometry with width and height 

    const rectangleShape = new THREE.Shape();
    rectangleShape.moveTo(origin.x + 20 + diameter, origin.y + squareHeight / 2 - rectangleHeight / 2);
    rectangleShape.lineTo(origin.x + 20 + diameter, origin.y + squareHeight / 2 + rectangleHeight / 2);
    rectangleShape.lineTo(origin.x - rectangleWidth + 20 + diameter, origin.y + squareHeight / 2 + rectangleHeight / 2);
    rectangleShape.lineTo(origin.x - rectangleWidth + 20 + diameter, origin.y + squareHeight / 2 - rectangleHeight / 2);
    rectangleShape.holes.push(createHole(origin.x + 10 + diameter / 2, origin.y + squareHeight / 2, diameter / 2));

    const rectangleGeometry = new THREE.ExtrudeGeometry(rectangleShape, extrudeSetting); // geometry of rectangle shape
    const rectangleMaterial = new THREE.MeshBasicMaterial({
        color: 'blue',
        side: THREE.DoubleSide,
        wireframe: false
    });  // here the material of the geometry with some basic property 

    const rectangle = new THREE.Mesh(rectangleGeometry, rectangleMaterial);
    rectangle.position.set(0, 0, dep);
    scene.add(rectangle);


    const edges = new THREE.EdgesGeometry(squareGeometry);
    const edgeMaterial = new THREE.LineBasicMaterial({ color: 0xffffff });
    const edgeMesh = new THREE.LineSegments(edges, edgeMaterial);
    square.add(edgeMesh);
    const edges1 = new THREE.EdgesGeometry(rectangleGeometry);
    const edgeMaterial1 = new THREE.LineBasicMaterial({ color: 0xffffff });
    const edgeMesh1 = new THREE.LineSegments(edges1, edgeMaterial1);
    rectangle.add(edgeMesh1);
}
function task10() {
    clearScene();
    // here the ambient light 
    const light = new THREE.AmbientLight(0xffffff, 2);
    scene.add(light);
    const origin = new THREE.Vector2(0, 0); // initialising the origin 

    let rectangleWidth = 200, rectangleHeight = 100; // declaring the width and  height of rectangular shape
    let r = 10 // Distance from the square shape edge to perimeter of hole  
    // creating the shape using shape geometry with width and height 
    let squareWidth = 300, squareHeight = 300;

    const squareShape = new THREE.Shape();
    squareShape.moveTo(origin.x, origin.y);
    squareShape.lineTo(origin.x + squareWidth, origin.y);
    squareShape.lineTo(origin.x + squareWidth, origin.y + squareHeight);
    squareShape.lineTo(origin.x, origin.y + squareHeight);
    squareShape.lineTo(origin.x, origin.y);


    // creating a hole along with the  square shape 
    let diameter = 50;
    if (diameter > rectangleHeight) {
        diameter = rectangleHeight;
    }
    function createHole(x, y, radius) {
        const holePath = new THREE.Path();
        holePath.absarc(x, y, radius, 0, Math.PI * 2);
        return holePath;
    }
    squareShape.holes.push(createHole(origin.x + 10 + diameter / 2, origin.y + squareHeight / 2, diameter / 2));
    squareShape.holes.push(createHole(origin.x + squareWidth / 2, origin.y + r + diameter / 2, diameter / 2));
    squareShape.holes.push(createHole(origin.x + squareWidth - r - diameter / 2, origin.y + squareHeight / 2, diameter / 2));
    squareShape.holes.push(createHole(origin.x + squareWidth / 2, origin.y + squareHeight - r - diameter / 2, diameter / 2));


    let dep = 30 // creating for the depth 
    const extrudeSetting = {
        depth: dep,
        bevelEnabled: false
    }

    const squareGeometry = new THREE.ExtrudeGeometry(squareShape, extrudeSetting); // geometry of square shape
    const squareMaterial = new THREE.MeshBasicMaterial({
        color: 'red',
        side: THREE.DoubleSide,
        wireframe: false
    });  // here the material of the geometry with some basic property 

    const square = new THREE.Mesh(squareGeometry, squareMaterial);
    // square.position.set(-1000, 0, 0)
    scene.add(square);

    // creating the rectangle shape handle shape using shape geometry with width and height  (left side )
    const rectangleShape = new THREE.Shape();
    rectangleShape.moveTo(origin.x + 2 * r + diameter, origin.y + squareHeight / 2 - rectangleHeight / 2);
    rectangleShape.lineTo(origin.x + 2 * r + diameter, origin.y + squareHeight / 2 + rectangleHeight / 2);
    rectangleShape.lineTo(origin.x - rectangleWidth + 2 * r + diameter, origin.y + squareHeight / 2 + rectangleHeight / 2);
    rectangleShape.lineTo(origin.x - rectangleWidth + 2 * r + diameter, origin.y + squareHeight / 2 - rectangleHeight / 2);
    rectangleShape.holes.push(createHole(origin.x + r + diameter / 2, origin.y + squareHeight / 2, diameter / 2));

    const rectangleGeometry = new THREE.ExtrudeGeometry(rectangleShape, extrudeSetting); // geometry of rectangle shape
    const rectangleMaterial = new THREE.MeshBasicMaterial({
        color: 'blue',
        side: THREE.DoubleSide,
        wireframe: false
    });  // here the material of the geometry with some basic property 

    const rectangle = new THREE.Mesh(rectangleGeometry, rectangleMaterial);
    rectangle.position.set(0, 0, dep);
    scene.add(rectangle);

    //  2nd rectangle (buttom) 
    const rectangleShape2 = new THREE.Shape();
    rectangleShape2.moveTo(origin.x + squareWidth / 2 - rectangleHeight / 2, origin.y + 2 * r + diameter);
    rectangleShape2.lineTo(origin.x + squareWidth / 2 - rectangleHeight / 2, origin.y - rectangleWidth + 2 * r + diameter);
    rectangleShape2.lineTo(origin.x + squareWidth / 2 + rectangleHeight / 2, origin.y - rectangleWidth + 2 * r + diameter);
    rectangleShape2.lineTo(origin.x + squareWidth / 2 + rectangleHeight / 2, origin.y + 2 * r + diameter);
    rectangleShape2.holes.push(createHole(origin.x + squareWidth / 2, origin.y + r + diameter / 2, diameter / 2));

    const rectangleGeometry2 = new THREE.ExtrudeGeometry(rectangleShape2, extrudeSetting); // geometry of rectangle shape 2
    const rectangleMaterial2 = new THREE.MeshBasicMaterial({
        color: 'blue',
        side: THREE.DoubleSide,
        wireframe: false
    });  // here the material of the geometry with some basic property 

    const rectangle2 = new THREE.Mesh(rectangleGeometry2, rectangleMaterial2);
    rectangle2.position.set(0, 0, dep);
    scene.add(rectangle2);


    //  (right side )
    const rectangleShape3 = new THREE.Shape();
    rectangleShape3.moveTo(origin.x + squareWidth - 2 * r - diameter, origin.y + squareHeight / 2 + rectangleHeight / 2);
    rectangleShape3.lineTo(origin.x + squareWidth - 2 * r - diameter, origin.y + squareHeight / 2 - rectangleHeight / 2);
    rectangleShape3.lineTo(origin.x + squareWidth + rectangleWidth - 2 * r - diameter, origin.y + squareHeight / 2 - rectangleHeight / 2);
    rectangleShape3.lineTo(origin.x + squareWidth + rectangleWidth - 2 * r - diameter, origin.y + squareHeight / 2 + rectangleHeight / 2);
    rectangleShape3.holes.push(createHole(origin.x + squareWidth - r - diameter / 2, origin.y + squareHeight / 2, diameter / 2));

    const rectangleGeometry3 = new THREE.ExtrudeGeometry(rectangleShape3, extrudeSetting); // geometry of rectangle shape
    const rectangleMaterial3 = new THREE.MeshBasicMaterial({
        color: 'blue',
        side: THREE.DoubleSide,
        wireframe: false
    });  // here the material of the geometry with some basic property 

    const rectangle3 = new THREE.Mesh(rectangleGeometry3, rectangleMaterial3);
    rectangle3.position.set(0, 0, dep);
    scene.add(rectangle3);

    //  4th rectangle (TOP) 
    const rectangleShape4 = new THREE.Shape();
    rectangleShape4.moveTo(origin.x + squareWidth / 2 - rectangleHeight / 2, origin.y + squareHeight - 2 * r - diameter);
    rectangleShape4.lineTo(origin.x + squareWidth / 2 + rectangleHeight / 2, origin.y + squareHeight - 2 * r - diameter);
    rectangleShape4.lineTo(origin.x + squareWidth / 2 + rectangleHeight / 2, origin.y + squareHeight + rectangleWidth - 2 * r - diameter);
    rectangleShape4.lineTo(origin.x + squareWidth / 2 - rectangleHeight / 2, origin.y + squareHeight + rectangleWidth - 2 * r - diameter);
    rectangleShape4.holes.push(createHole(origin.x + squareWidth / 2, origin.y + squareHeight - r - diameter / 2, diameter / 2));

    const rectangleGeometry4 = new THREE.ExtrudeGeometry(rectangleShape4, extrudeSetting); // geometry of rectangle shape 2
    const rectangleMaterial4 = new THREE.MeshBasicMaterial({
        color: 'blue',
        side: THREE.DoubleSide,
        wireframe: false
    });  // here the material of the geometry with some basic property 

    const rectangle4 = new THREE.Mesh(rectangleGeometry4, rectangleMaterial4);
    rectangle4.position.set(0, 0, dep);
    scene.add(rectangle4);

}
function task11() {
    clearScene();
    // here the ambient light 
    const light = new THREE.AmbientLight(0xffffff, 2);
    scene.add(light);


    let rectangleWidth = 300, rectangleHeight = 80; // declaring the width and  height of rectangular shape

    const origin = new THREE.Vector2(0, 0); // initialising the origin 

    // creating the shape using shape geometry with width and height 
    let squareWidth = 300, squareHeight = 300;

    const squareShape = new THREE.Shape();
    squareShape.moveTo(origin.x, origin.y);
    squareShape.lineTo(origin.x + squareWidth, origin.y);
    squareShape.lineTo(origin.x + squareWidth, origin.y + squareHeight);
    squareShape.lineTo(origin.x, origin.y + squareHeight);
    squareShape.lineTo(origin.x, origin.y);


    // creating a hole along with the  square shape 
    let diameter = 50;
    if (diameter > rectangleHeight) {
        diameter = rectangleHeight;
    }
    function createHole(x, y, radius) {
        const holePath = new THREE.Path();
        holePath.absarc(x, y, radius, 0, Math.PI * 2);
        return holePath;
    }
    squareShape.holes.push(createHole(origin.x + 10 + diameter / 2, origin.y + squareHeight / 2, diameter / 2));
    let dep = 20 // creating for the depth 
    const extrudeSetting = {
        depth: dep,
        bevelEnabled: false
    }

    const squareGeometry = new THREE.ExtrudeGeometry(squareShape, extrudeSetting); // geometry of square shape
    const squareMaterial = new THREE.MeshBasicMaterial({
        color: 'red',
        side: THREE.DoubleSide,
        wireframe: false
    });  // here the material of the geometry with some basic property 

    const square = new THREE.Mesh(squareGeometry, squareMaterial);
    square.position.set(100, 200, 60)


    // creating the rectangle shape handle shape using shape geometry with width and height 

    const rectangleShape = new THREE.Shape();
    rectangleShape.moveTo(origin.x + 20 + diameter, origin.y + squareHeight / 2 - rectangleHeight / 2);
    rectangleShape.lineTo(origin.x + 20 + diameter, origin.y + squareHeight / 2 + rectangleHeight / 2);
    rectangleShape.lineTo(origin.x - rectangleWidth + 20 + diameter, origin.y + squareHeight / 2 + rectangleHeight / 2);
    rectangleShape.lineTo(origin.x - rectangleWidth + 20 + diameter, origin.y + squareHeight / 2 - rectangleHeight / 2);
    rectangleShape.holes.push(createHole(origin.x + 10 + diameter / 2, origin.y + squareHeight / 2, diameter / 2));

    const rectangleGeometry = new THREE.ExtrudeGeometry(rectangleShape, extrudeSetting); // geometry of rectangle shape
    const rectangleMaterial = new THREE.MeshBasicMaterial({
        color: 'blue',
        side: THREE.DoubleSide,
        wireframe: false
    });  // here the material of the geometry with some basic property 

    const rectangle = new THREE.Mesh(rectangleGeometry, rectangleMaterial);
    rectangle.position.set(0, 0, dep);
    square.add(rectangle);
    scene.add(square);


    const edges = new THREE.EdgesGeometry(squareGeometry);
    const edgeMaterial = new THREE.LineBasicMaterial({ color: 0xffffff });
    const edgeMesh = new THREE.LineSegments(edges, edgeMaterial);
    square.add(edgeMesh);
    const edges1 = new THREE.EdgesGeometry(rectangleGeometry);
    const edgeMaterial1 = new THREE.LineBasicMaterial({ color: 0xffffff });
    const edgeMesh1 = new THREE.LineSegments(edges1, edgeMaterial1);
    rectangle.add(edgeMesh1);
}
function task12() {
    clearScene();
    // here the ambient light 
    const light = new THREE.AmbientLight(0xffffff, 2);
    scene.add(light);
    const origin = new THREE.Vector2(0, 0); // initialising the origin 

    let rectangleWidth = 200, rectangleHeight = 100; // declaring the width and  height of rectangular shape
    let r = 10 // Distance from the square shape edge to perimeter of hole  
    // creating the shape using shape geometry with width and height 
    let squareWidth = 300, squareHeight = 300;

    const squareShape = new THREE.Shape();
    squareShape.moveTo(origin.x, origin.y);
    squareShape.lineTo(origin.x + squareWidth, origin.y);
    squareShape.lineTo(origin.x + squareWidth, origin.y + squareHeight);
    squareShape.lineTo(origin.x, origin.y + squareHeight);
    squareShape.lineTo(origin.x, origin.y);


    // creating a hole along with the  square shape 
    let diameter = 50;
    if (diameter > rectangleHeight) {
        diameter = rectangleHeight;
    }
    function createHole(x, y, radius) {
        const holePath = new THREE.Path();
        holePath.absarc(x, y, radius, 0, Math.PI * 2);
        return holePath;
    }
    squareShape.holes.push(createHole(origin.x + 10 + diameter / 2, origin.y + squareHeight / 2, diameter / 2));
    squareShape.holes.push(createHole(origin.x + squareWidth / 2, origin.y + r + diameter / 2, diameter / 2));
    squareShape.holes.push(createHole(origin.x + squareWidth - r - diameter / 2, origin.y + squareHeight / 2, diameter / 2));
    squareShape.holes.push(createHole(origin.x + squareWidth / 2, origin.y + squareHeight - r - diameter / 2, diameter / 2));


    let dep = 30 // creating for the depth 
    const extrudeSetting = {
        depth: dep,
        bevelEnabled: false
    }

    const squareGeometry = new THREE.ExtrudeGeometry(squareShape, extrudeSetting); // geometry of square shape
    const squareMaterial = new THREE.MeshBasicMaterial({
        color: 'red',
        side: THREE.DoubleSide,
        wireframe: false
    });  // here the material of the geometry with some basic property 
    const square = new THREE.Mesh(squareGeometry, squareMaterial);


    // creating the rectangle shape handle shape using shape geometry with width and height  (left side )
    const rectangleShape = new THREE.Shape();
    rectangleShape.moveTo(origin.x + 2 * r + diameter, origin.y + squareHeight / 2 - rectangleHeight / 2);
    rectangleShape.lineTo(origin.x + 2 * r + diameter, origin.y + squareHeight / 2 + rectangleHeight / 2);
    rectangleShape.lineTo(origin.x - rectangleWidth + 2 * r + diameter, origin.y + squareHeight / 2 + rectangleHeight / 2);
    rectangleShape.lineTo(origin.x - rectangleWidth + 2 * r + diameter, origin.y + squareHeight / 2 - rectangleHeight / 2);
    rectangleShape.holes.push(createHole(origin.x + r + diameter / 2, origin.y + squareHeight / 2, diameter / 2));

    const rectangleGeometry = new THREE.ExtrudeGeometry(rectangleShape, extrudeSetting); // geometry of rectangle shape
    const rectangleMaterial = new THREE.MeshBasicMaterial({
        color: 'blue',
        side: THREE.DoubleSide,
        wireframe: false
    });  // here the material of the geometry with some basic property 

    const rectangle = new THREE.Mesh(rectangleGeometry, rectangleMaterial);
    rectangle.position.set(0, 0, dep);
    square.add(rectangle);

    //  2nd rectangle (buttom) 
    const rectangleShape2 = new THREE.Shape();
    rectangleShape2.moveTo(origin.x + squareWidth / 2 - rectangleHeight / 2, origin.y + 2 * r + diameter);
    rectangleShape2.lineTo(origin.x + squareWidth / 2 - rectangleHeight / 2, origin.y - rectangleWidth + 2 * r + diameter);
    rectangleShape2.lineTo(origin.x + squareWidth / 2 + rectangleHeight / 2, origin.y - rectangleWidth + 2 * r + diameter);
    rectangleShape2.lineTo(origin.x + squareWidth / 2 + rectangleHeight / 2, origin.y + 2 * r + diameter);
    rectangleShape2.holes.push(createHole(origin.x + squareWidth / 2, origin.y + r + diameter / 2, diameter / 2));

    const rectangleGeometry2 = new THREE.ExtrudeGeometry(rectangleShape2, extrudeSetting); // geometry of rectangle shape 2
    const rectangleMaterial2 = new THREE.MeshBasicMaterial({
        color: 'blue',
        side: THREE.DoubleSide,
        wireframe: false
    });  // here the material of the geometry with some basic property 

    const rectangle2 = new THREE.Mesh(rectangleGeometry2, rectangleMaterial2);
    rectangle2.position.set(0, 0, dep);
    square.add(rectangle2);


    //  (right side )
    const rectangleShape3 = new THREE.Shape();
    rectangleShape3.moveTo(origin.x + squareWidth - 2 * r - diameter, origin.y + squareHeight / 2 + rectangleHeight / 2);
    rectangleShape3.lineTo(origin.x + squareWidth - 2 * r - diameter, origin.y + squareHeight / 2 - rectangleHeight / 2);
    rectangleShape3.lineTo(origin.x + squareWidth + rectangleWidth - 2 * r - diameter, origin.y + squareHeight / 2 - rectangleHeight / 2);
    rectangleShape3.lineTo(origin.x + squareWidth + rectangleWidth - 2 * r - diameter, origin.y + squareHeight / 2 + rectangleHeight / 2);
    rectangleShape3.holes.push(createHole(origin.x + squareWidth - r - diameter / 2, origin.y + squareHeight / 2, diameter / 2));

    const rectangleGeometry3 = new THREE.ExtrudeGeometry(rectangleShape3, extrudeSetting); // geometry of rectangle shape
    const rectangleMaterial3 = new THREE.MeshBasicMaterial({
        color: 'blue',
        side: THREE.DoubleSide,
        wireframe: false
    });  // here the material of the geometry with some basic property 

    const rectangle3 = new THREE.Mesh(rectangleGeometry3, rectangleMaterial3);
    rectangle3.position.set(0, 0, dep);
    square.add(rectangle3);

    //  4th rectangle (TOP) 
    const rectangleShape4 = new THREE.Shape();
    rectangleShape4.moveTo(origin.x + squareWidth / 2 - rectangleHeight / 2, origin.y + squareHeight - 2 * r - diameter);
    rectangleShape4.lineTo(origin.x + squareWidth / 2 + rectangleHeight / 2, origin.y + squareHeight - 2 * r - diameter);
    rectangleShape4.lineTo(origin.x + squareWidth / 2 + rectangleHeight / 2, origin.y + squareHeight + rectangleWidth - 2 * r - diameter);
    rectangleShape4.lineTo(origin.x + squareWidth / 2 - rectangleHeight / 2, origin.y + squareHeight + rectangleWidth - 2 * r - diameter);
    rectangleShape4.holes.push(createHole(origin.x + squareWidth / 2, origin.y + squareHeight - r - diameter / 2, diameter / 2));

    const rectangleGeometry4 = new THREE.ExtrudeGeometry(rectangleShape4, extrudeSetting); // geometry of rectangle shape 2
    const rectangleMaterial4 = new THREE.MeshBasicMaterial({
        color: 'blue',
        side: THREE.DoubleSide,
        wireframe: false
    });  // here the material of the geometry with some basic property 

    const rectangle4 = new THREE.Mesh(rectangleGeometry4, rectangleMaterial4);
    rectangle4.position.set(0, 0, dep);
    square.add(rectangle4);

    // square.position.set(0, 0, 0);
    scene.add(square);

}
function task13() {
    clearScene();
    const light = new THREE.AmbientLight(0xffffff, 2);
    scene.add(light);

    // Initializing the vector2D as origin 
    const origin = new THREE.Vector2(0, 0);

    // declaring the height and width odf the rectangle 
    let rectangleHeight = 80, rectangleWidth = 200;
    let r = 20; // minimum gap between the edges of rectangle and hole prrimeter 


    // Declaring the height and width of square geometry
    let squareWidth = 300, squareHeight = 300;
    let m = 20; // used to define thr point for bezier curve at corner

    // Declaring the square shape
    const squareShape = new THREE.Shape();
    squareShape.moveTo(origin.x + m, origin.y); // origin 
    squareShape.lineTo(origin.x + squareWidth - m, origin.y);
    squareShape.bezierCurveTo(origin.x + squareWidth - m, origin.y, origin.x + squareWidth, origin.y, origin.x + squareWidth, origin.y + m);
    squareShape.lineTo(origin.x + squareWidth, origin.y + squareHeight - m);
    squareShape.bezierCurveTo(origin.x + squareWidth, origin.y + squareHeight - m, origin.x + squareWidth, origin.y + squareHeight, origin.x + squareWidth - m, origin.y + squareHeight);
    squareShape.lineTo(origin.x + m, origin.y + squareHeight);
    squareShape.bezierCurveTo(origin.x + m, origin.y + squareHeight, origin.x, origin.y + squareHeight, origin.x, origin.y + squareHeight - m);
    squareShape.lineTo(origin.x, origin.y + m);
    squareShape.bezierCurveTo(origin.x, origin.y + m, origin.x, origin.y, origin.x + m, origin.y);

    // here the details about the holes in the shape 
    let diameter = 50; // diameter of hole
    function createHole(x, y, radius) {
        const holePath = new THREE.Path();
        holePath.absarc(x, y, radius, 0, Math.PI * 2);
        return holePath;
    }

    squareShape.holes.push(createHole(origin.x + r + diameter / 2, origin.y + squareHeight - r - diameter / 2, diameter / 2));// pushing the hole to the square shape

    // creating rectangle geometry 
    const rectangleShape = new THREE.Shape();
    rectangleShape.moveTo(origin.x + m, origin.y);
    rectangleShape.lineTo(origin.x + rectangleWidth - m, origin.y);
    rectangleShape.bezierCurveTo(origin.x + rectangleWidth - m, origin.y, origin.x + rectangleWidth, origin.y, origin.x + rectangleWidth, origin.y + m);
    rectangleShape.lineTo(origin.x + rectangleWidth, origin.y + rectangleHeight - m);
    rectangleShape.bezierCurveTo(origin.x + rectangleWidth, origin.y + rectangleHeight - m, origin.x + rectangleWidth, origin.y + rectangleHeight, origin.x + rectangleWidth - m, origin.y + rectangleHeight);
    rectangleShape.lineTo(origin.x + m, origin.y + rectangleHeight);
    rectangleShape.bezierCurveTo(origin.x + m, origin.y + rectangleHeight, origin.x, origin.y + rectangleHeight, origin.x, origin.y + rectangleHeight - m);
    rectangleShape.lineTo(origin.x, origin.y + m);
    rectangleShape.bezierCurveTo(origin.x, origin.y + m, origin.x, origin.y, origin.x + m, origin.y);

    rectangleShape.holes.push(createHole(origin.x + r + diameter / 2, origin.y + rectangleHeight - r - diameter / 2, diameter / 2)); // pushing hole to the rectangle 

    let dep = 40; // used for giving the depth of geometry
    const extrudeSetting = {
        depth: dep,
        bevelEnabled: false
    };

    const squareGeometry = new THREE.ExtrudeGeometry(squareShape, extrudeSetting);
    const squareMaterial = new THREE.MeshBasicMaterial({
        color: 'aqua',
        side: THREE.DoubleSide,
        wireframe: false
    });
    const square = new THREE.Mesh(squareGeometry, squareMaterial);



    const rectangleGeometry = new THREE.ExtrudeGeometry(rectangleShape, extrudeSetting);
    const rectangleMaterial = new THREE.MeshBasicMaterial({
        color: 0xff3456,
        side: THREE.DoubleSide,
        wireframe: false
    });
    const rectangle = new THREE.Mesh(rectangleGeometry, rectangleMaterial);
    rectangle.position.set(origin.x + 2.5 * r + diameter, origin.y + squareHeight - 2.75 * r, dep);
    rectangle.rotateZ(Math.PI / 4 * 3)
    square.add(rectangle);
    scene.add(square);
}
function task14() {
    clearScene();
    // here the ambient light 
    const light = new THREE.AmbientLight(0xffffff, 2);
    scene.add(light);
    const origin = new THREE.Vector2(0, 0); // initialising the origin 

    let rectangleWidth = 200, rectangleHeight = 100; // declaring the width and  height of rectangular shape
    let r = 10 // Distance from the square shape edge to perimeter of hole  
    // creating the shape using shape geometry with width and height 
    let squareWidth = 300, squareHeight = 300;
    let m = 20;
    const squareShape = new THREE.Shape();
    squareShape.moveTo(origin.x, origin.y);
    squareShape.lineTo(origin.x + squareWidth, origin.y);
    squareShape.lineTo(origin.x + squareWidth, origin.y + squareHeight);
    squareShape.lineTo(origin.x, origin.y + squareHeight);
    squareShape.lineTo(origin.x, origin.y);


    // creating a hole along with the  square shape 
    let diameter = 50;
    if (diameter > rectangleHeight) {
        diameter = rectangleHeight;
    }
    function createHole(x, y, radius) {
        const holePath = new THREE.Path();
        holePath.absarc(x, y, radius, 0, Math.PI * 2);
        return holePath;
    }

    squareShape.holes.push(createHole(origin.x + squareWidth / 2, origin.y + r + diameter / 2, diameter / 2));
    squareShape.holes.push(createHole(origin.x + squareWidth - r - diameter / 2, origin.y + squareHeight / 2, diameter / 2));
    squareShape.holes.push(createHole(origin.x + 2 * r + diameter / 2, origin.y + squareHeight - 2 * r - diameter / 2, diameter / 2))


    let dep = 30 // creating for the depth 
    const extrudeSetting = {
        depth: dep,
        bevelEnabled: false
    }

    const squareGeometry = new THREE.ExtrudeGeometry(squareShape, extrudeSetting); // geometry of square shape
    const squareMaterial = new THREE.MeshBasicMaterial({
        color: 'red',
        side: THREE.DoubleSide,
        wireframe: false
    });  // here the material of the geometry with some basic property 
    const square = new THREE.Mesh(squareGeometry, squareMaterial);


    // creating rectangle geometry 
    const rectangleShape = new THREE.Shape();
    rectangleShape.moveTo(origin.x + m, origin.y);
    rectangleShape.lineTo(origin.x + rectangleWidth - m, origin.y);
    rectangleShape.bezierCurveTo(origin.x + rectangleWidth - m, origin.y, origin.x + rectangleWidth, origin.y, origin.x + rectangleWidth, origin.y + m);
    rectangleShape.lineTo(origin.x + rectangleWidth, origin.y + rectangleHeight - m);
    rectangleShape.bezierCurveTo(origin.x + rectangleWidth, origin.y + rectangleHeight - m, origin.x + rectangleWidth, origin.y + rectangleHeight, origin.x + rectangleWidth - m, origin.y + rectangleHeight);
    rectangleShape.lineTo(origin.x + m, origin.y + rectangleHeight);
    rectangleShape.bezierCurveTo(origin.x + m, origin.y + rectangleHeight, origin.x, origin.y + rectangleHeight, origin.x, origin.y + rectangleHeight - m);
    rectangleShape.lineTo(origin.x, origin.y + m);
    rectangleShape.bezierCurveTo(origin.x, origin.y + m, origin.x, origin.y, origin.x + m, origin.y);

    rectangleShape.holes.push(createHole(origin.x + r + diameter / 2, origin.y + rectangleHeight - 2 * r - diameter / 2, diameter / 2)); // pushing hole to the rectangle 

    const rectangleGeometry = new THREE.ExtrudeGeometry(rectangleShape, extrudeSetting);
    const rectangleMaterial = new THREE.MeshBasicMaterial({
        color: 'blue',
        side: THREE.DoubleSide,
        wireframe: false
    });
    const rectangle = new THREE.Mesh(rectangleGeometry, rectangleMaterial);
    rectangle.position.set(origin.x + 2.5 * r + diameter + 30, origin.y + squareHeight - 3 * r, dep);
    rectangle.rotateZ(Math.PI / 4 * 3)
    square.add(rectangle);


    //  2nd rectangle (buttom) 
    const rectangleShape2 = new THREE.Shape();
    rectangleShape2.moveTo(origin.x + squareWidth / 2 - rectangleHeight / 2, origin.y + 2 * r + diameter);
    rectangleShape2.lineTo(origin.x + squareWidth / 2 - rectangleHeight / 2, origin.y - rectangleWidth + 2 * r + diameter);
    rectangleShape2.lineTo(origin.x + squareWidth / 2 + rectangleHeight / 2, origin.y - rectangleWidth + 2 * r + diameter);
    rectangleShape2.lineTo(origin.x + squareWidth / 2 + rectangleHeight / 2, origin.y + 2 * r + diameter);
    rectangleShape2.holes.push(createHole(origin.x + squareWidth / 2, origin.y + r + diameter / 2, diameter / 2));

    const rectangleGeometry2 = new THREE.ExtrudeGeometry(rectangleShape2, extrudeSetting); // geometry of rectangle shape 2
    const rectangleMaterial2 = new THREE.MeshBasicMaterial({
        color: 'blue',
        side: THREE.DoubleSide,
        wireframe: false
    });  // here the material of the geometry with some basic property 

    const rectangle2 = new THREE.Mesh(rectangleGeometry2, rectangleMaterial2);
    rectangle2.position.set(0, 0, dep);
    square.add(rectangle2);


    //  (right side )
    const rectangleShape3 = new THREE.Shape();
    rectangleShape3.moveTo(origin.x + squareWidth - 2 * r - diameter, origin.y + squareHeight / 2 + rectangleHeight / 2);
    rectangleShape3.lineTo(origin.x + squareWidth - 2 * r - diameter, origin.y + squareHeight / 2 - rectangleHeight / 2);
    rectangleShape3.lineTo(origin.x + squareWidth + rectangleWidth - 2 * r - diameter, origin.y + squareHeight / 2 - rectangleHeight / 2);
    rectangleShape3.lineTo(origin.x + squareWidth + rectangleWidth - 2 * r - diameter, origin.y + squareHeight / 2 + rectangleHeight / 2);
    rectangleShape3.holes.push(createHole(origin.x + squareWidth - r - diameter / 2, origin.y + squareHeight / 2, diameter / 2));

    const rectangleGeometry3 = new THREE.ExtrudeGeometry(rectangleShape3, extrudeSetting); // geometry of rectangle shape
    const rectangleMaterial3 = new THREE.MeshBasicMaterial({
        color: 'blue',
        side: THREE.DoubleSide,
        wireframe: false
    });  // here the material of the geometry with some basic property 

    const rectangle3 = new THREE.Mesh(rectangleGeometry3, rectangleMaterial3);
    rectangle3.position.set(0, 0, dep);
    square.add(rectangle3);


    // square.position.set(0, 0, 0);
    scene.add(square);
}
function task15() {
    clearScene();
    function handleBaseWidth() {
        return 60;
    }
    function handleBaseHeight() {
        return 600;
    }
    function keyHoleHeight() {
        return 150;
    }
    function depth() {
        return 20;
    }
    function circleDepth() {
        return 10;
    }
    // initiazing the origin 
    const origin = new THREE.Vector2(0, 0);

    let radius = 25 // used in circle radius and the positining

    // here the declared for dynamically use in R shape geometry and For positioning the Handle Hold Shape
    let h = 100, w = 80, space = 40;

    function handleBase() {
        const light = new THREE.DirectionalLight(0x909090, 0.1);
        light.position.set(100, 200, 500);
        scene.add(light);


        // creating function for hole
        function createHole(x, y, radius) {
            const holePath = new THREE.Path();
            holePath.absarc(x, y, radius, 0, Math.PI * 2);
            return holePath;
        }

        // craeting the handle base
        const handleBaseShape = new THREE.Shape();
        handleBaseShape.moveTo(origin.x, origin.y + handleBaseWidth() / 2);
        handleBaseShape.absarc(origin.x + handleBaseWidth() / 2, origin.y + handleBaseWidth() / 2, handleBaseWidth() / 2, Math.PI, 0);
        handleBaseShape.lineTo(origin.x + handleBaseWidth(), origin.y + handleBaseHeight() - handleBaseWidth() / 2);
        handleBaseShape.absarc(origin.x + handleBaseWidth() / 2, origin.y + handleBaseHeight() - handleBaseWidth() / 2, handleBaseWidth() / 2, 0, Math.PI);
        handleBaseShape.lineTo(origin.x, origin.y + handleBaseWidth() / 2);

        // keyhole here 
        const keyHolePath = new THREE.Path();
        const keyHoleRadius = 10;
        const r = 5;
        keyHolePath.moveTo(origin.x + handleBaseWidth() / 2 - r, origin.y + keyHoleHeight() - keyHoleRadius * 2);
        keyHolePath.lineTo(origin.x + handleBaseWidth() / 2 - r, origin.y + handleBaseWidth() / 2 + 50);
        keyHolePath.absarc(origin.x + handleBaseWidth() / 2, origin.y + handleBaseWidth() / 2 + 50, r, Math.PI, 2 * Math.PI);
        keyHolePath.lineTo(origin.x + handleBaseWidth() / 2 + r, origin.y + keyHoleHeight() - keyHoleRadius * 2);
        keyHolePath.absarc(origin.x + handleBaseWidth() / 2, origin.y + keyHoleHeight() - keyHoleRadius, keyHoleRadius, 5 * Math.PI / 3, 4 * Math.PI / 3);

        //pushing keyHole 
        handleBaseShape.holes.push(keyHolePath);

        // pushing the holes in the Handle Base 
        let screwHoleDiameter = 13;
        handleBaseShape.holes.push(createHole(origin.x + handleBaseWidth() / 2, origin.y + handleBaseWidth() / 2, screwHoleDiameter / 2));
        handleBaseShape.holes.push(createHole(origin.x + handleBaseWidth() / 2, origin.y + handleBaseHeight() - handleBaseWidth() / 2, screwHoleDiameter / 2));



        let dep = 5;
        const extrudeSetting = {
            depth: depth(),
            bevelEnabled: false
        }

        const handleBaseGeometry = new THREE.ExtrudeGeometry(handleBaseShape, extrudeSetting);
        const handleBaseMaterial = new THREE.MeshStandardMaterial({
            color: 0xffffff,
            side: THREE.DoubleSide,
            wireframe: false,
            roughness: 1,
            metalness: 0.2
        });
        const handleBase = new THREE.Mesh(handleBaseGeometry, handleBaseMaterial);

        function screw() {
            const screw = new THREE.Mesh(new THREE.CircleGeometry(20, 32), new THREE.Material({ color: 0xffffff }));
            screw.position.set(0, 0, 0)
            scene.add(screw);
        }


        function circle() {

            const circleShape = new THREE.Shape();
            circleShape.absarc(origin.x + radius, origin.y + radius, radius, 0, Math.PI * 2);

            const extrudeSettings = {
                depth: circleDepth(),
                bevelEnabled: false,
            };
            const circleGeometry = new THREE.ExtrudeGeometry(circleShape, extrudeSettings);
            const circleMaterial = new THREE.MeshBasicMaterial({ color: 0xbf8452, side: THREE.DoubleSide });
            const circle = new THREE.Mesh(circleGeometry, circleMaterial);
            circle.position.set(handleBaseWidth() / 2 - radius, handleBaseHeight() / 2)
            circle.position.z = depth();
            // scene.add( circle );

            return circle;
        }
        handleBase.add(circle());


        function R() {

            const RShape = new THREE.Shape();
            RShape.moveTo(origin.x + space, origin.y);
            RShape.lineTo(origin.x + w, origin.y);
            RShape.lineTo(origin.x + w, origin.y + depth());
            RShape.quadraticCurveTo(origin.x + space, origin.y + space, origin.x + space, origin.y + h);
            RShape.lineTo(origin.x, origin.y + h);
            RShape.lineTo(origin.x + space / 4, origin.y + space / 2);
            RShape.quadraticCurveTo(origin.x + space / 2, origin.y, origin.x + space, origin.y);

            let d = 40;
            const extrudeSetting1 = {
                depth: d,
                bevelEnabled: false
            }

            const RGeometry = new THREE.ExtrudeGeometry(RShape, extrudeSetting1);
            const RMaterial = new THREE.MeshPhysicalMaterial({ color: 0xCFE9DA, side: THREE.DoubleSide, wireframe: false });
            const R = new THREE.Mesh(RGeometry, RMaterial);
            R.position.set(origin.x + handleBaseWidth() / 2 - 20, origin.y + handleBaseHeight() / 2 + 5, circleDepth() + h + 20);
            R.rotateX(-Math.PI / 2)
            return R;
        }
        handleBase.add(R());

        function handleHold() {
            let height = 40, width = 200;
            const handleHoldShape = new THREE.Shape();
            // handleHoldShape.moveTo(origin.x, origin.y+height/2);
            // handleHoldShape.bezierCurveTo(origin.x, origin.y+height/2,origin.x+width/2, origin.y+height,origin.x+width, origin.y+height/2);
            // handleHoldShape.bezierCurveTo(origin.x+width, origin.y+height/2,origin.x+width/2, origin.y,origin.x, origin.y+height/2);


            // new path handle 
            handleHoldShape.moveTo(origin.x + height / 2, origin.y + height); // origin 
            handleHoldShape.bezierCurveTo(origin.x, origin.y + height, origin.x + width / 2, origin.y + height + 15, origin.x + width, origin.y + height);
            handleHoldShape.lineTo(origin.x + width, origin.y);
            handleHoldShape.bezierCurveTo(origin.x + width, origin.y, origin.x + width / 2, origin.y - 15, origin.x, origin.y);
            handleHoldShape.lineTo(origin.x, origin.y + height);
            const extrudeSettings = {
                depth: depth(),
                bevelEnabled: false,
            };
            const handleHoldGeometry = new THREE.ExtrudeGeometry(handleHoldShape, extrudeSettings);
            const handleHoldMaterial = new THREE.MeshPhysicalMaterial({ color: 0xCFE9DA, side: THREE.DoubleSide });
            const handleHold = new THREE.Mesh(handleHoldGeometry, handleHoldMaterial);
            handleHold.position.set(handleBaseWidth() / 2 - height / 2 + w, handleBaseHeight() / 2 + 5, circleDepth() + h);
            // scene.add(handleHold);

            return handleHold;
        }
        handleBase.add(handleHold());

        // handleBase. position.set(1000, 0, 0)

        // here the edges of handle Base geometry
        const edges = new THREE.Mesh(new THREE.EdgesGeometry(handleBaseGeometry), new THREE.LineBasicMaterial({ color: 0xffffff }));
        // handleBase.add(edges);

        return handleBase;

    }

    function handleBase2() {
        const light = new THREE.DirectionalLight(0xffffff, 1);
        light.position.set(0, 0, 500);
        scene.add(light);


        // creating function for hole
        function createHole(x, y, radius) {
            const holePath = new THREE.Path();
            holePath.absarc(x, y, radius, 0, Math.PI * 2);
            return holePath;
        }

        // craeting the handle base
        const handleBaseShape = new THREE.Shape();
        handleBaseShape.moveTo(origin.x, origin.y + handleBaseWidth() / 2);
        handleBaseShape.absarc(origin.x + handleBaseWidth() / 2, origin.y + handleBaseWidth() / 2, handleBaseWidth() / 2, Math.PI, 0);
        handleBaseShape.lineTo(origin.x + handleBaseWidth(), origin.y + handleBaseHeight() - handleBaseWidth() / 2);
        handleBaseShape.absarc(origin.x + handleBaseWidth() / 2, origin.y + handleBaseHeight() - handleBaseWidth() / 2, handleBaseWidth() / 2, 0, Math.PI);
        handleBaseShape.lineTo(origin.x, origin.y + handleBaseWidth() / 2);

        // keyhole here 
        const keyHolePath = new THREE.Path();
        const keyHoleRadius = 10;
        const r = 5;
        keyHolePath.moveTo(origin.x + handleBaseWidth() / 2 - r, origin.y + keyHoleHeight() - keyHoleRadius * 2);
        keyHolePath.lineTo(origin.x + handleBaseWidth() / 2 - r, origin.y + handleBaseWidth() / 2 + 50);
        keyHolePath.absarc(origin.x + handleBaseWidth() / 2, origin.y + handleBaseWidth() / 2 + 50, r, Math.PI, 2 * Math.PI);
        keyHolePath.lineTo(origin.x + handleBaseWidth() / 2 + r, origin.y + keyHoleHeight() - keyHoleRadius * 2);
        keyHolePath.absarc(origin.x + handleBaseWidth() / 2, origin.y + keyHoleHeight() - keyHoleRadius, keyHoleRadius, 5 * Math.PI / 3, 4 * Math.PI / 3);

        //pushing keyHole 
        handleBaseShape.holes.push(keyHolePath);

        // pushing the holes in the Handle Base 
        let screwHoleDiameter = 13;
        handleBaseShape.holes.push(createHole(origin.x + handleBaseWidth() / 2, origin.y + handleBaseWidth() / 2, screwHoleDiameter / 2));
        handleBaseShape.holes.push(createHole(origin.x + handleBaseWidth() / 2, origin.y + handleBaseHeight() - handleBaseWidth() / 2, screwHoleDiameter / 2));

        const extrudeSetting = {
            depth: depth(),
            bevelEnabled: false
        }

        const handleBaseGeometry = new THREE.ExtrudeGeometry(handleBaseShape, extrudeSetting);
        const handleBaseMaterial = new THREE.MeshPhysicalMaterial({
            color: 0xffffff,
            side: THREE.DoubleSide,
            wireframe: false
        });
        const handleBase = new THREE.Mesh(handleBaseGeometry, handleBaseMaterial);

        // here tge screw shape of handle base 
        function screw() {
            const screwShape = new THREE.Shape();
            screwShape.moveTo(origin.x, origin.y);
            screwShape.absarc(origin.x, origin.y, 4, 0, Math.PI / 2);
            screwShape.absarc(origin.x, origin.y, 4, 0, Math.PI);
            const extrudeSetting = {
                // depth: depth(),
                bevelEnabled: false
            }

            const screwGeometry = new THREE.ExtrudeGeometry(screwShape, extrudeSetting);
            const screwMaterial = new THREE.MeshBasicMaterial({
                color: 0xffffff,
                side: THREE.DoubleSide,
                wireframe: false
            });
            const screw = new THREE.Mesh(screwGeometry, screwMaterial);
            screw.position.set(150, 0, 0);
        }
        handleBase.add(screw());

        function circle() {

            const circleShape = new THREE.Shape();
            circleShape.absarc(origin.x + radius, origin.y + radius, radius, 0, Math.PI * 2);

            const extrudeSettings = {
                depth: circleDepth(),
                bevelEnabled: false,
            };
            const circleGeometry = new THREE.ExtrudeGeometry(circleShape, extrudeSettings);
            const circleMaterial = new THREE.MeshStandardMaterial({ color: 0xbf8452, side: THREE.DoubleSide });
            const circle = new THREE.Mesh(circleGeometry, circleMaterial);
            circle.position.set(handleBaseWidth() / 2 - radius, handleBaseHeight() / 2)
            circle.position.z = depth();
            return circle;
        }
        handleBase.add(circle());


        function R() {    // create for the handle banding  position 

            const RShape = new THREE.Shape();
            RShape.moveTo(origin.x + space, origin.y);
            RShape.lineTo(origin.x + w, origin.y);
            RShape.lineTo(origin.x + w, origin.y + depth());
            RShape.quadraticCurveTo(origin.x + space, origin.y + space, origin.x + space, origin.y + h);
            RShape.lineTo(origin.x, origin.y + h);
            RShape.lineTo(origin.x + space / 4, origin.y + space / 2);
            RShape.quadraticCurveTo(origin.x + space / 2, origin.y, origin.x + space, origin.y);

            let d = 40;
            const extrudeSetting1 = {
                depth: d,
                bevelEnabled: false
            }

            const RGeometry = new THREE.ExtrudeGeometry(RShape, extrudeSetting1);
            const RMaterial = new THREE.MeshStandardMaterial({ color: 0xbf8452, side: THREE.DoubleSide, wireframe: false });
            const R = new THREE.Mesh(RGeometry, RMaterial);
            R.position.set(origin.x + handleBaseWidth() / 2 + 20, origin.y + handleBaseHeight() / 2 + 45, circleDepth() + h + 20);
            R.rotateX(3 * Math.PI / 2);
            R.rotateY(Math.PI)
            // R.rotateZ(Math.PI/24)
            return R;
        }
        handleBase.add(R());

        function handleHold() {
            let height = 40, width = 200;
            const handleHoldShape = new THREE.Shape();
            // handleHoldShape.moveTo(origin.x, origin.y+height/2);
            // handleHoldShape.bezierCurveTo(origin.x, origin.y+height/2,origin.x+width/2, origin.y+height,origin.x+width, origin.y+height/2);
            // handleHoldShape.bezierCurveTo(origin.x+width, origin.y+height/2,origin.x+width/2, origin.y,origin.x, origin.y+height/2);

            // new path handle  
            handleHoldShape.moveTo(origin.x + height / 2, origin.y + height); // origin 
            handleHoldShape.bezierCurveTo(origin.x, origin.y + height, origin.x + width / 2, origin.y + height + 15, origin.x + width, origin.y + height);
            handleHoldShape.lineTo(origin.x + width, origin.y);
            handleHoldShape.bezierCurveTo(origin.x + width, origin.y, origin.x + width / 2, origin.y - 15, origin.x, origin.y);
            handleHoldShape.lineTo(origin.x, origin.y + height);
            const extrudeSettings = {
                depth: depth(),
                bevelEnabled: false,
            };
            const handleHoldGeometry = new THREE.ExtrudeGeometry(handleHoldShape, extrudeSettings);
            const handleHoldMaterial = new THREE.MeshStandardMaterial({ color: 0xbf8452, side: THREE.DoubleSide });
            const handleHold = new THREE.Mesh(handleHoldGeometry, handleHoldMaterial);
            handleHold.position.set(-handleBaseWidth() / 2 + height / 2 - 10, handleBaseHeight() / 2 + 5, circleDepth() + h + 20);
            handleHold.rotateY(Math.PI);
            return handleHold;
        }
        handleBase.add(handleHold());

        handleBase.position.set(-100, 0, 0);

        // here the edges of handle Base geometry
        const edges = new THREE.Mesh(new THREE.EdgesGeometry(handleBaseGeometry), new THREE.LineBasicMaterial({ color: 0xffffff }));
        // handleBase.add(edges);

        return handleBase;

    }

    const group = new THREE.Group();
    group.add(handleBase());
    group.add(handleBase2());
    scene.add(group);

}
function task16() {
    clearScene();

    function ProjectTwo() {
        // Light for material 
        const light = new THREE.AmbientLight(0xffffff, 2);
        scene.add(light);

        function basePlateHeight() {  // Declaring the bas ePlate Height 
            return 150;
        }
        function basePlateWidth() { // Base Plate width 
            return 100;
        }
        function depth() { // depth of geometry 
            return 15;
        }
        function handleHoldHeight() {
            return 200;
        }
        function handleHoldWidth() {
            return 46;
        }

        // Initializing the origin for positioning 
        const origin = new THREE.Vector2(0, 0);


        function basePlate() {
            const basePlateShape = new THREE.Shape();
            basePlateShape.moveTo(origin.x, origin.y);
            basePlateShape.lineTo(origin.x + basePlateWidth() / 3, origin.y);
            basePlateShape.lineTo(origin.x + basePlateWidth() / 3, origin.y + basePlateHeight() / 6);
            // basePlateShape.bezierCurveTo(origin.x+basePlateWidth()/3,  origin.y+basePlateHeight()/6, origin.x+basePlateWidth(),  origin.y+basePlateHeight()/2, origin.x+basePlateWidth()/3,  origin.y+5*basePlateHeight()/6 );
            basePlateShape.absarc(origin.x + basePlateWidth() / 3, origin.y + basePlateHeight() / 2, 1.8 * basePlateHeight() / 6, 3 * Math.PI / 2, Math.PI / 2)
            basePlateShape.lineTo(origin.x + basePlateWidth() / 3, origin.y + basePlateHeight());
            basePlateShape.lineTo(origin.x, origin.y + basePlateHeight());

            // function for creating the hole 
            function createHole(x, y, radius) {
                const holePath = new THREE.Path();
                holePath.absarc(x, y, radius, 0, Math.PI * 2);
                return holePath;
            }
            basePlateShape.holes.push(createHole(origin.x + basePlateWidth() / 6, origin.y + basePlateHeight() / 6, 6));
            basePlateShape.holes.push(createHole(origin.x + basePlateWidth() / 6, origin.y + 5 * basePlateHeight() / 6, 6));


            const extrudeSetting = {
                depth: depth(),
                bevelEnabled: false
            }

            const basePlate = new THREE.Mesh(new THREE.ExtrudeGeometry(basePlateShape, extrudeSetting), new THREE.MeshPhysicalMaterial({ color: 0xffffff, side: THREE.DoubleSide, wireframe: false }));
            basePlate.add(fun());

            const c1 = circle();
            const s1 = screw();
            c1.add(s1)
            c1.position.set(origin.x + basePlateWidth() / 6, origin.y + basePlateHeight() / 6, depth() + 0.1)
            basePlate.add(c1);
            const c2 = circle();
            const s2 = screw();
            c2.add(s2);
            c2.position.set(origin.x + basePlateWidth() / 6, origin.y + 5 * basePlateHeight() / 6, depth() + 0.1);
            basePlate.add(c2);

            // ading the edge geometry
            const edges = new THREE.Mesh(new THREE.EdgesGeometry(new THREE.ExtrudeGeometry(basePlateShape, extrudeSetting)), new THREE.LineBasicMaterial({ color: 0xffffff }));
            basePlate.add(edges);
            // basePlate.position.set(300, 500,0);
            scene.add(basePlate);


        }
        function screw() {
            const r = 3
            const shape = new THREE.Shape();
            shape.absarc(origin.x + r, origin.y, r, 3 * Math.PI / 2, Math.PI / 2);
            shape.absarc(origin.x, origin.y + r, r, 0, Math.PI);
            shape.absarc(origin.x - r, origin.y, r, Math.PI / 2, 3 * Math.PI / 2);
            shape.absarc(origin.x, origin.y - r, r, Math.PI, 0);
            const extrudeSetting = {
                depth: 0.3,
                bevelEnabled: false
            }
            const screw = new THREE.Mesh(new THREE.ExtrudeGeometry(shape, extrudeSetting), new THREE.MeshPhysicalMaterial({ color: 'black', side: THREE.DoubleSide, wireframe: false }));

            return screw;
        }
        function circle() {
            const geometry = new THREE.CircleGeometry(10, 32);
            const material = new THREE.MeshBasicMaterial({ color: 0xffffff });
            const circle = new THREE.Mesh(geometry, material);
            return circle;
        }
        function fun() {

            const shape = new THREE.Shape();
            shape.moveTo(origin.x, origin.y + 4 * basePlateHeight() / 6);
            shape.bezierCurveTo(origin.x, origin.y + 4 * basePlateHeight() / 6, origin.x - 90, origin.y + 3 * basePlateHeight() / 6, origin.x, origin.y + 2 * basePlateHeight() / 6); // here some constant is used for adjust the shape 
            shape.quadraticCurveTo(origin.x + 10, origin.y + 2 * basePlateHeight() / 6, origin.x + basePlateWidth() / 3, origin.y + 2 * basePlateHeight() / 6 - 10);
            shape.quadraticCurveTo(origin.x + basePlateWidth() / 3, origin.y + 1.5 * basePlateHeight() / 6, origin.x + 2 * basePlateWidth() / 3, origin.y + 2 * basePlateHeight() / 6 - 10);
            shape.lineTo(origin.x + basePlateWidth() - 21, origin.y + 2 * basePlateHeight() / 6 - 10)
            shape.bezierCurveTo(origin.x + basePlateWidth() - 21, origin.y + 2 * basePlateHeight() / 6 - 20, origin.x + basePlateWidth() - 10, origin.y + 5 * basePlateHeight() / 6 + 30, origin.x, origin.y + 4 * basePlateHeight() / 6);

            const extrudeSetting = {
                depth: depth(),
                bevelEnabled: false
            }

            const shapeMesh = new THREE.Mesh(new THREE.ExtrudeGeometry(shape, extrudeSetting), new THREE.MeshPhysicalMaterial({ color: 0xffffff, side: THREE.DoubleSide, wireframe: false }));

            // ading the edge geometry
            const edges = new THREE.Mesh(new THREE.EdgesGeometry(new THREE.ExtrudeGeometry(shape, extrudeSetting)), new THREE.LineBasicMaterial({ color: 0xffffff }));
            shapeMesh.add(edges);

            // scene.add(shapeMesh);
            shapeMesh.position.set(0, 0, depth())
            shapeMesh.add(curve());
            shapeMesh.add(Hemisphere());
            return shapeMesh;
        }

        function Hemisphere() {
            const geometry = new THREE.SphereGeometry(15, 32, 16);
            const material = new THREE.MeshPhysicalMaterial({ color: 0x9f9c98 });
            const sphere = new THREE.Mesh(geometry, material); scene.add(sphere);
            sphere.position.set(origin.x + basePlateWidth() / 3, origin.y + basePlateHeight() / 2, 12)
            return sphere;
        }
        var w = 15, h = 30;
        function curve() {

            // depth    
            const curveShape = new THREE.Shape();
            curveShape.moveTo(origin.x, origin.y + h);
            curveShape.bezierCurveTo(origin.x, origin.y + h, origin.x + 5, origin.y + 3 * h / 4, origin.x - w / 2, origin.y + h / 2);
            curveShape.bezierCurveTo(origin.x - w / 2, origin.y + h / 2, origin.x - w, origin.y + h / 4, origin.x - w, origin.y);
            curveShape.lineTo(origin.x, origin.y);
            curveShape.bezierCurveTo(origin.x, origin.y, origin.x - 5, origin.y + h / 4, origin.x + 10, origin.y + h / 2);
            curveShape.bezierCurveTo(origin.x + 10, origin.y + h / 2, origin.x + w, origin.y + 3 * h / 4, origin.x + w, origin.y + h);


            const extrudeSetting = {
                depth: handleHoldWidth(),
                bevelEnabled: false,
                // extrudePath: path
            }
            const curve = new THREE.Mesh(new THREE.ExtrudeGeometry(curveShape, extrudeSetting), new THREE.MeshPhysicalMaterial({ color: 0x9f9c98, side: THREE.DoubleSide, wireframe: false }));
            curve.rotateY(Math.PI / 2)
            curve.position.set(origin.x + basePlateWidth() / 3, origin.y + 10, depth())
            const edges = new THREE.Mesh(new THREE.EdgesGeometry(new THREE.ExtrudeGeometry(curveShape, extrudeSetting)), new THREE.LineBasicMaterial({ color: 0xffffff }));
            // curve.add(edges);
            curve.add(hold());
            return curve;

        }
        function hold() {
            const holdShape = new THREE.Shape();
            holdShape.moveTo(origin.x, origin.y);
            holdShape.lineTo(origin.x, origin.y - handleHoldHeight() + handleHoldWidth() / 2);
            holdShape.absarc(origin.x + handleHoldWidth() / 2, origin.y - handleHoldHeight() + handleHoldWidth() / 2, handleHoldWidth() / 2, Math.PI, 2 * Math.PI);
            holdShape.lineTo(origin.x + handleHoldWidth(), origin.y);


            const extrudeSetting = {
                depth: w,
                bevelEnabled: false
            }
            const hold = new THREE.Mesh(new THREE.ExtrudeGeometry(holdShape, extrudeSetting), new THREE.MeshStandardMaterial({ color: 0x9f9c98, side: THREE.DoubleSide, wireframe: false }));
            hold.rotateY(-Math.PI / 2);
            const edges = new THREE.Mesh(new THREE.EdgesGeometry(new THREE.ExtrudeGeometry(holdShape, extrudeSetting)), new THREE.LineBasicMaterial({ color: 0xffffff }));
            // hold.add(edges);
            return hold;
        }

        basePlate();
        // fun();
        // Hemisphere();
        // hold();
        // scene.add(curve());
    }
    ProjectTwo();

    function Project2() {
        // Light for material 
        //#region [ Helpers ]
        const light = new THREE.AmbientLight(0xffffff, 2);
        scene.add(light);

        const isRight = false;

        function basePlateHeight() {  // Declaring the bas ePlate Height 
            return 200;
        }
        function basePlateWidth() { // Base Plate width 
            return 90;
        }
        function depth() { // depth of geometry 
            return 10;
        }

        function getHandleHeight() {
            return 200;
        }
        function handleWidth() {
            return 80;
        }
        function handleHoldHeight() {
            return 2 * getHandleHeight() / 3 - getHandleHeight() / 6;
        }
        function handleHoldWidth() {
            return handleWidth() / 3;
        }
        //#endregion


        // Initializing the origin for positioning 
        const origin = new THREE.Vector2(0, 0);


        function basePlate() {
            const basePlateShape = new THREE.Shape();
            basePlateShape.moveTo(origin.x, origin.y);
            basePlateShape.lineTo(origin.x + basePlateWidth() / 3, origin.y);
            basePlateShape.lineTo(origin.x + basePlateWidth() / 3, origin.y + basePlateHeight() / 6);
            // basePlateShape.bezierCurveTo(origin.x+basePlateWidth()/3,  origin.y+basePlateHeight()/6, origin.x+basePlateWidth(),  origin.y+basePlateHeight()/2, origin.x+basePlateWidth()/3,  origin.y+5*basePlateHeight()/6 );
            basePlateShape.absarc(origin.x + basePlateWidth() / 3, origin.y + basePlateHeight() / 2, basePlateWidth() / 3, 3 * Math.PI / 2, Math.PI / 2)
            basePlateShape.lineTo(origin.x + basePlateWidth() / 3, origin.y + basePlateHeight());
            basePlateShape.lineTo(origin.x, origin.y + basePlateHeight());
            basePlateShape.lineTo(origin.x, origin.y);

            // function for creating the hole 
            function createHole(x, y, radius) {
                const holePath = new THREE.Path();
                holePath.absarc(x, y, radius, 0, Math.PI * 2);
                return holePath;
            }
            basePlateShape.holes.push(createHole(origin.x + basePlateWidth() / 6, origin.y + basePlateHeight() / 10, basePlateWidth() / 20));
            basePlateShape.holes.push(createHole(origin.x + basePlateWidth() / 6, origin.y + 9 * basePlateHeight() / 10, basePlateWidth() / 20));


            const extrudeSetting = {
                depth: depth(),
                bevelEnabled: false
            }

            const basePlate = new THREE.Mesh(new THREE.ExtrudeGeometry(basePlateShape, extrudeSetting), new THREE.MeshPhysicalMaterial({ color: 0xffffff, side: THREE.DoubleSide }));   // Mesh of base plate 

            const mesh1 = fun();
            // Add safety checks before adding any mesh:
            if (mesh1) basePlate.add(mesh1);

            const c1 = circle();
            const s1 = screw();
            c1.add(s1)
            c1.position.set(origin.x + basePlateWidth() / 6, origin.y + basePlateHeight() / 10, depth() + 0.1)
            basePlate.add(c1);
            const c2 = circle();
            const s2 = screw();
            c2.add(s2);
            c2.position.set(origin.x + basePlateWidth() / 6, origin.y + 9 * basePlateHeight() / 10, depth() + 0.1);
            basePlate.add(c2);

            // ading the edge geometry
            const edges = new THREE.Mesh(new THREE.EdgesGeometry(new THREE.ExtrudeGeometry(basePlateShape, extrudeSetting)), new THREE.LineBasicMaterial({ color: 0xffffff }));
            // basePlate.add(edges);
            // basePlate.position.set(300, 500,0);
            scene.add(basePlate);


            if (isRight) {
                basePlate.rotateY(Math.PI);
                c1.position.set(origin.x + basePlateWidth() / 6, origin.y + basePlateHeight() / 10, - 0.1);
                c2.position.set(origin.x + basePlateWidth() / 6, origin.y + 9 * basePlateHeight() / 10, - 0.1);

                mesh1.position.set(origin.x + basePlateWidth() / 3 - 2 * handleWidth() / 3, origin.y + basePlateHeight() / 2 - getHandleHeight() / 6, -depth())
            }

        }

        function screw() {
            const r = basePlateWidth() / 60;
            const shape = new THREE.Shape();
            shape.absarc(origin.x + r, origin.y, r, 3 * Math.PI / 2, Math.PI / 2);
            shape.absarc(origin.x, origin.y + r, r, 0, Math.PI);
            shape.absarc(origin.x - r, origin.y, r, Math.PI / 2, 3 * Math.PI / 2);
            shape.absarc(origin.x, origin.y - r, r, Math.PI, 0);
            const extrudeSetting = {
                depth: 0.3,
                bevelEnabled: false
            }
            const screw = new THREE.Mesh(new THREE.ExtrudeGeometry(shape, extrudeSetting), new THREE.MeshPhysicalMaterial({ color: 'black', side: THREE.DoubleSide, wireframe: false }));

            return screw;
        }
        function circle() {
            const geometry = new THREE.CircleGeometry(basePlateWidth() / 20, 32);
            const material = new THREE.MeshBasicMaterial({ color: 0xffffff, side: THREE.DoubleSide });
            const circle = new THREE.Mesh(geometry, material);

            return circle;
        }
        function fun() {
            let h = getHandleHeight() / 3, w = handleWidth();
            const shape = new THREE.Shape();
            shape.moveTo(origin.x + 2 * w / 3, origin.y);
            shape.lineTo(origin.x + w, origin.y)
            shape.bezierCurveTo(origin.x + w, origin.y, origin.x + w - w / 30, origin.y + h / 4, origin.x + w, origin.y + h / 2);
            shape.bezierCurveTo(origin.x + w, origin.y + h / 2, origin.x + w + w / 30, origin.y + 3 * h / 4, origin.x + 5 * w / 6, origin.y + h - h / 50);
            shape.bezierCurveTo(origin.x + 5 * w / 6, origin.y + h - h / 50, origin.x + 2 * w / 3, origin.y + h + h / 50, origin.x + w / 2, origin.y + h);
            shape.bezierCurveTo(origin.x + w / 2, origin.y + h, origin.x + w / 3, origin.y + 3 * h / 4, origin.x + w / 6, origin.y + 3 * h / 4);
            shape.bezierCurveTo(origin.x + w / 6, origin.y + 3 * h / 4, origin.x, origin.y + h / 2, origin.x + w / 6, origin.y + h / 2);
            shape.bezierCurveTo(origin.x + w / 6, origin.y + h / 2, origin.x + w / 2, origin.y + h / 4, origin.x + 2 * w / 3, origin.y + h / 4);
            shape.bezierCurveTo(origin.x + 2 * w / 3, origin.y + h / 4, origin.x + 2 * w / 3, origin.y + h / 12, origin.x + 2 * w / 3, origin.y);
            const extrudeSetting = {
                depth: depth(),
                bevelEnabled: false
            }

            const shapeMesh = new THREE.Mesh(new THREE.ExtrudeGeometry(shape, extrudeSetting), new THREE.MeshPhysicalMaterial({ color: 0xdbdbd4, side: THREE.DoubleSide, wireframe: false }));

            // ading the edge geometry
            const edges = new THREE.Mesh(new THREE.EdgesGeometry(new THREE.ExtrudeGeometry(shape, extrudeSetting)), new THREE.LineBasicMaterial({ color: 0xffffff }));
            // shapeMesh.add(edges);

            shapeMesh.position.set(origin.x + basePlateWidth() / 3 - 2 * handleWidth() / 3, origin.y + basePlateHeight() / 2 - getHandleHeight() / 6, depth());
            const curve1 = curve()
            shapeMesh.add(curve1);
            shapeMesh.add(Hemisphere());

            if (isRight) {
                curve1.rotateY(Math.PI);
                curve1.position.set(80, -30, 0)
            }

            return shapeMesh;
        }
        function Hemisphere() {
            const geometry = new THREE.SphereGeometry(getHandleHeight() / 15, 32, 16);
            const material = new THREE.MeshPhysicalMaterial({ color: 0x9f9c98 });
            const sphere = new THREE.Mesh(geometry, material);
            sphere.position.set(origin.x + 2 * handleWidth() / 3, origin.y + getHandleHeight() / 5, depth());
            return sphere;
        }

        function curve() {
            var w = depth(), h = getHandleHeight() / 6;
            // depth    
            const curveShape = new THREE.Shape();
            curveShape.moveTo(origin.x, origin.y + h);
            curveShape.bezierCurveTo(origin.x, origin.y + h, origin.x + 5, origin.y + 3 * h / 4, origin.x - w / 2, origin.y + h / 2);
            curveShape.bezierCurveTo(origin.x - w / 2, origin.y + h / 2, origin.x - w, origin.y + h / 4, origin.x - w, origin.y);
            curveShape.lineTo(origin.x, origin.y);
            curveShape.bezierCurveTo(origin.x, origin.y, origin.x - 5, origin.y + h / 4, origin.x + 10, origin.y + h / 2);   // w becomes 10
            curveShape.bezierCurveTo(origin.x + 10, origin.y + h / 2, origin.x + w, origin.y + 3 * h / 4, origin.x + w, origin.y + h); // w becomes 10


            const extrudeSetting = {
                depth: handleWidth() / 3,
                bevelEnabled: false,
                // extrudePath: path
            }
            const curve = new THREE.Mesh(new THREE.ExtrudeGeometry(curveShape, extrudeSetting), new THREE.MeshPhysicalMaterial({ color: 0xdbdbd4, side: THREE.DoubleSide, wireframe: false }));
            curve.rotateY(Math.PI / 2)
            curve.position.set(origin.x + 2 * handleWidth() / 3, origin.y - getHandleHeight() / 6, depth())
            const edges = new THREE.Mesh(new THREE.EdgesGeometry(new THREE.ExtrudeGeometry(curveShape, extrudeSetting)), new THREE.LineBasicMaterial({ color: 'black' }));
            curve.add(hold())
            return curve;
        }

        function hold() {
            const holdShape = new THREE.Shape();
            holdShape.moveTo(origin.x, origin.y);
            holdShape.lineTo(origin.x, origin.y - handleHoldHeight() + handleHoldWidth() / 2);
            holdShape.absarc(origin.x + handleHoldWidth() / 2, origin.y - handleHoldHeight() + handleHoldWidth() / 2, handleHoldWidth() / 2, Math.PI, 2 * Math.PI);
            holdShape.lineTo(origin.x + handleHoldWidth(), origin.y);


            const extrudeSetting = {
                depth: depth(),
                bevelEnabled: false
            }
            const hold = new THREE.Mesh(new THREE.ExtrudeGeometry(holdShape, extrudeSetting), new THREE.MeshStandardMaterial({ color: 0xdbdbd4, side: THREE.DoubleSide, wireframe: false }));
            hold.rotateY(-Math.PI / 2);
            const edges = new THREE.Mesh(new THREE.EdgesGeometry(new THREE.ExtrudeGeometry(holdShape, extrudeSetting)), new THREE.LineBasicMaterial({ color: 0xdbdbd4 }));
            // hold.add(edges);
            return hold;
        }

        basePlate();
    }
    // Project2();
}
function task17() {
    clearScene();
    //#region  here the helper funtion 
    function getBasePlateHeight() {
        return 500;
    }

    function getBasePlateWidth() {
        return 80;
    }

    function getHandleWidth() {
        return 100;
    }
    function keyHolePositionFromButtom() {
        return 100;
    }

    // test failed
    function knobPositionFromButtom() {
        return 250;
    }

    function light() {
        const light = new THREE.AmbientLight(0xffffff, 4);
        return light;
    }

    //#endregion


    //#region helper function value store in the variable to use  
    let handleWidth = getHandleWidth(), handleHeight = getBasePlateHeight() - getBasePlateWidth(); // here the handle width and height 
    let heightFromBasePlate = 50 // height of handle from the base plate 
    let basePlateWidth = getBasePlateWidth(), basePlateHeight = getBasePlateHeight();  // handle width and handle height 
    let keyHoleDiameter = 20; // 
    let keyHoleHeight = 100; // Height of the key hole 
    let depth = 10; // depth of geometry 
    let knobWidth = basePlateWidth / 2, knobHeight = 100; // width and height of the knob 

    let distance = 100; // Distance between two base plate

    let originXValue = 0; // declaring the origin X value 
    let originYValue = 0; // declaring the origin y value 
    const origin = new THREE.Vector2(originXValue, originYValue);
    //#endregion

    const l1 = light();
    l1.position.set(0, 0, 40);
    scene.add(l1);

    function basePlate() {
        const basePlateShape = new THREE.Shape();
        basePlateShape.moveTo(origin.x, origin.y + basePlateWidth / 2);
        basePlateShape.absarc(origin.x + basePlateWidth / 2, origin.y + basePlateWidth / 2, basePlateWidth / 2, Math.PI, 2 * Math.PI);
        basePlateShape.lineTo(origin.x + basePlateWidth, origin.y + basePlateHeight - basePlateWidth / 2);
        basePlateShape.absarc(origin.x + basePlateWidth / 2, origin.y + basePlateHeight - basePlateWidth / 2, basePlateWidth / 2, 0, Math.PI);
        basePlateShape.lineTo(origin.x, origin.y + basePlateWidth / 2);

        // adding key hole to the base Plate 
        let keyPos = keyHolePositionFromButtom();
        const keyHolePath = new THREE.Path();
        let keyHoleRadius = keyHoleDiameter / 2;

        keyHolePath.moveTo(origin.x + basePlateWidth / 2 - keyHoleRadius, origin.y + keyHoleRadius / 2 + keyPos);
        keyHolePath.absarc(origin.x + keyHoleRadius + basePlateWidth / 2 - keyHoleRadius, origin.y + keyHoleRadius / 2 + keyPos, keyHoleRadius / 2, Math.PI, 2 * Math.PI);
        keyHolePath.lineTo(origin.x + keyHoleRadius / 2 + basePlateWidth / 2, origin.y + keyHoleHeight - keyHoleDiameter - keyHoleRadius + keyPos);
        keyHolePath.absarc(origin.x + keyHoleRadius + basePlateWidth / 2 - keyHoleRadius, origin.y + keyHoleHeight - keyHoleDiameter + keyPos, keyHoleRadius, 5 * Math.PI / 3, 4 * Math.PI / 3);
        keyHolePath.lineTo(origin.x + keyHoleRadius / 2 + basePlateWidth / 2 - keyHoleRadius, origin.y + keyHoleRadius / 2 + keyPos);
        basePlateShape.holes.push(keyHolePath); // pushing the kyhole in base plate

        const extrudeSetting = {
            depth: depth,
            bevelEnabled: false
        }
        const basePlate = new THREE.Mesh(new THREE.ExtrudeGeometry(basePlateShape, extrudeSetting), new THREE.MeshLambertMaterial({ color: 0xffffff, side: THREE.DoubleSide }));

        const edges = new THREE.Mesh(new THREE.EdgesGeometry(new THREE.ExtrudeGeometry(basePlateShape, extrudeSetting)), new THREE.LineBasicMaterial({ color: 0xffffff }));
        basePlate.add(edges);

        return basePlate;
        // scene.add(basePlate)
    }
    function knob() {

        const knobShape = new THREE.Shape();
        knobShape.moveTo(origin.x + knobWidth / 4, origin.y + knobWidth / 4);
        knobShape.absarc(origin.x + knobWidth / 2, origin.y + knobWidth / 4, knobWidth / 4, Math.PI, 2 * Math.PI);
        knobShape.lineTo(origin.x + knobWidth, origin.y + knobHeight - knobWidth / 2);
        knobShape.absarc(origin.x + knobWidth / 2, origin.y + knobHeight - knobWidth / 2, knobWidth / 2, 0, Math.PI);
        knobShape.lineTo(origin.x + knobWidth / 4, origin.y + knobWidth / 4);

        const extrudeSetting = {
            depth: depth,
            bevelEnabled: false
        }

        const knob = new THREE.Mesh(new THREE.ExtrudeGeometry(knobShape, extrudeSetting), new THREE.MeshPhongMaterial({ color: 0xffff, side: THREE.DoubleSide }));
        knob.position.set(basePlateWidth / 2 - knobWidth / 2, knobPositionFromButtom(), depth);
        return knob;
    }
    function circle() {
        const shape = new THREE.Shape();
        shape.absarc(origin.x, origin.y, keyHoleDiameter / 2, 0, 2 * Math.PI);

        let keyLockHeight = keyHoleDiameter;
        let keyLockWidth = keyHoleDiameter / 5;
        const path = new THREE.Path();
        path.moveTo(origin.x, origin.y);
        path.lineTo(origin.x + keyLockWidth, origin.y);
        path.lineTo(origin.x + keyLockWidth, origin.y + keyLockHeight / 5);
        path.absarc(origin.x + keyLockWidth, origin.y + keyLockHeight / 5 + keyLockHeight / 10, keyLockHeight / 10, 3 * Math.PI / 2, Math.PI / 2);
        path.lineTo(origin.x + keyLockWidth, origin.y + 3 * keyLockHeight / 5);
        path.absarc(origin.x + keyLockWidth, origin.y + 3 * keyLockHeight / 5 + keyLockHeight / 10, keyLockHeight / 10, Math.PI / 2, 3 * Math.PI / 2);
        path.lineTo(origin.x + keyLockWidth, origin.y + keyLockHeight);
        path.lineTo(origin.x, origin.y + keyLockHeight);
        path.lineTo(origin.x, origin.y + 4 * keyLockHeight / 5);
        path.absarc(origin.x, origin.y + 3 * keyLockHeight / 5 + keyLockHeight / 10, keyLockHeight / 10, Math.PI / 2, 3 * Math.PI / 2);
        path.lineTo(origin.x, origin.y + 2 * keyLockHeight / 5);
        path.absarc(origin.x, origin.y + keyLockHeight / 5 + keyLockHeight / 10, keyLockHeight / 10, 3 * Math.PI / 2, Math.PI / 2);
        path.lineTo(origin.x, origin.y);

        const extrudeSetting = {
            bevelEnabled: false,
            extrudePath: path
        }



    }

    function handle() {

        const handlePath = new THREE.CatmullRomCurve3([
            new THREE.Vector3(origin.x + handleWidth, origin.y + handleHeight, 0),
            new THREE.Vector3(origin.x + handleWidth, origin.y + handleHeight, heightFromBasePlate),
            new THREE.Vector3(origin.x, origin.y + handleHeight, heightFromBasePlate),
            new THREE.Vector3(origin.x, origin.y, heightFromBasePlate),
            new THREE.Vector3(origin.x + handleWidth, origin.y, heightFromBasePlate),
            new THREE.Vector3(origin.x + handleWidth, origin.y, 0),
        ]);

        const hadnleGeometry = new THREE.TubeGeometry(handlePath, 100, basePlateWidth / 6, 8, false);
        const handleMaterial = new THREE.MeshPhongMaterial({ color: 0xffff, side: THREE.DoubleSide });
        const handle = new THREE.Mesh(hadnleGeometry, handleMaterial);

        return handle;

    }
    function main() {
        const parentObject = new THREE.Object3D();
        // left handle 
        const leftHandleBackPlate = basePlate();
        const leftHandleKnob = knob();
        leftHandleBackPlate.add(leftHandleKnob);
        const leftHandle = handle();
        leftHandle.position.set(basePlateWidth / 2 - handleWidth, basePlateWidth / 2, depth)
        leftHandleBackPlate.add(leftHandle);
        leftHandleBackPlate.position.set(0, 0, 0);

        // right handle
        const rightHandleBackPlate = basePlate();
        const rightHandleKnob = knob();
        rightHandleBackPlate.add(rightHandleKnob);
        const rightHandle = handle();
        rightHandle.rotateZ(Math.PI);
        /* here the position of the right handle is adjust on the basis of originXvale and OriginYvalue (two variable).Because when the origin value changed with respect to the x and y value all mesh are move according to the origin but right haandle not moved properly . when the origin value is (0, 0) it work properly and attach with required position , when origin value change it(right handle) does not move according to the origin.There may have another mehod(value) that can positioning the right handle(handle2) */
        rightHandle.position.set(basePlateWidth / 2 + handleWidth + originXValue * 2, basePlateHeight - basePlateWidth / 2 + originYValue * 2, depth);
        rightHandleBackPlate.add(rightHandle);
        rightHandleBackPlate.position.set(basePlateWidth + distance, 0, 0);

        parentObject.add(leftHandleBackPlate);
        parentObject.add(rightHandleBackPlate);
        return parentObject;
    }
    const call = main();
    scene.add(call);
}
function task18() {
    clearScene();
    const light = new THREE.AmbientLight();
    scene.add(light);
    //#region Helper function for task7 
    function getShapeWidth() {
        return 100;
    }

    function getShapeHeight() {
        return 150;
    }

    function getInnerOffset() {
        return 5;
    }

    function getExtrudeLength() {
        return 400;
    }

    function getCutLength() {
        let length = 50;
        //    if(length> getExtrudeLength()/2){
        //        length =  getExtrudeLength()/2;
        //    }
        return length;
    }
    //#endregion

    //#region all variables required for task7
    let shapeWidth = getShapeWidth(), shapeHeight = getShapeHeight();
    let innerOffset = getInnerOffset();
    let extrudeLength = getExtrudeLength();
    let cutLength = getCutLength();
    let origin = new THREE.Vector2(0, 0);
    //#endregion

    function rectangleHollowCutting() {
        const shape = new THREE.Shape();
        shape.moveTo(origin.x, origin.y);
        shape.lineTo(origin.x + shapeWidth / 2, origin.y);
        shape.lineTo(origin.x + shapeWidth, origin.y);
        shape.lineTo(origin.x + shapeWidth, origin.y + shapeHeight / 2);
        shape.lineTo(origin.x + shapeWidth, origin.y + shapeHeight);
        shape.lineTo(origin.x + shapeWidth / 2, origin.y + shapeHeight);
        shape.lineTo(origin.x, origin.y + shapeHeight);
        shape.lineTo(origin.x, origin.y + shapeHeight / 2);
        shape.lineTo(origin.x, origin.y);
        shape.moveTo(origin.x + innerOffset, origin.y + innerOffset);
        shape.lineTo(origin.x + innerOffset, origin.y + shapeHeight / 2 - innerOffset);
        shape.lineTo(origin.x + innerOffset, origin.y + shapeHeight - innerOffset);
        shape.lineTo(origin.x + shapeWidth / 2 - innerOffset, origin.y + shapeHeight - innerOffset);
        shape.lineTo(origin.x + shapeWidth - innerOffset, origin.y + shapeHeight - innerOffset);
        shape.lineTo(origin.x + shapeWidth - innerOffset, origin.y + shapeHeight / 2 - innerOffset);
        shape.lineTo(origin.x + shapeWidth - innerOffset, origin.y + innerOffset);
        shape.lineTo(origin.x + shapeWidth / 2 - innerOffset, origin.y + innerOffset);
        shape.lineTo(origin.x + innerOffset, origin.y + innerOffset);


        // extrude Path along x-axis 
        let startPoint = new THREE.Vector3(0, 0, 0);
        let endPoint = new THREE.Vector3(extrudeLength, 0, 0);
        const curve = new THREE.LineCurve3(startPoint, endPoint);

        const extrudeSetting = {
            bevelEnabled: false,
            extrudePath: curve
        }
        const geometry = new THREE.ExtrudeGeometry(shape, extrudeSetting);
        const material = new THREE.MeshBasicMaterial({ color: 0xffff, side: THREE.DoubleSide, roughness: 1, metalness: 0.5 });
        const rectangleHollow = new THREE.Mesh(geometry, material);
        scene.add(rectangleHollow);


        var vertex = new THREE.Vector3();
        var positionAttribute = geometry.attributes.position;
        console.log(positionAttribute);
        var i = geometry.index;
        let cutHeight = 10;
        for (i = 0; i < positionAttribute.count; i++) {
            let x = positionAttribute.getX(i);
            let y = positionAttribute.getY(i);
            let z = positionAttribute.getZ(i);

            vertex.fromBufferAttribute(positionAttribute, i);

            // Condition for cut (it cuts yhe shape from the middle of height)

            if (x == extrudeLength && y < shapeHeight / 2) {
                positionAttribute.setX(i, x - cutLength);
            } else if (x == extrudeLength && y > shapeHeight / 2) {
                positionAttribute.setX(i, x - cutLength);
            } else if (x == extrudeLength && y == innerOffset) {
                positionAttribute.setX(i, x - cutLength);
            }

            // positionAttribute.setXYZ(i,vertex.x, vertex.y, vertex.z); 
        }

        const edges = new THREE.EdgesGeometry(geometry);
        const line = new THREE.LineSegments(edges, new THREE.LineBasicMaterial({ color: 0xffffff }));
        rectangleHollow.add(line);
    }
    function rectangleHollowCuttingTwo() {
        const shape = new THREE.Shape();

        // outer shape lines
        shape.moveTo(origin.x, origin.y);
        for (let i = 1; i <= shapeWidth; i++) {
            shape.lineTo(origin.x + i, origin.y);
        }
        for (let i = 1; i <= shapeHeight; i++) {
            shape.lineTo(origin.x + shapeWidth, origin.y + i);
        }
        for (let i = shapeWidth - 1; i >= 0; i--) {
            shape.lineTo(origin.x + i, origin.y + shapeHeight);
        }
        for (let i = shapeHeight - 1; i >= 0; i--) {
            shape.lineTo(origin.x, origin.y + i);
        }
        // inner shape lines 
        shape.moveTo(origin.x + innerOffset, origin.y + innerOffset);
        for (let i = 1; i <= shapeHeight - innerOffset; i++) {
            shape.lineTo(origin.x + innerOffset, origin.y + i);
        }
        for (let i = 1; i <= shapeWidth - innerOffset; i++) {
            shape.lineTo(origin.x + i, origin.y + shapeHeight - innerOffset);
        }
        for (let i = shapeHeight - 1 - innerOffset; i >= 0; i--) {
            shape.lineTo(origin.x + shapeWidth - innerOffset, origin.y + i + innerOffset);
        }
        for (let i = shapeWidth - 1 - innerOffset; i >= 0; i--) {
            shape.lineTo(origin.x + i, origin.y + innerOffset);
        }

        // extrude Path along x-axis 
        let startPoint = new THREE.Vector3(0, 0, 0);
        let endPoint = new THREE.Vector3(extrudeLength, 0, 0);
        const curve = new THREE.LineCurve3(startPoint, endPoint);

        const extrudeSetting = {
            bevelEnabled: false,
            extrudePath: curve
        }
        const geometry = new THREE.ExtrudeGeometry(shape, extrudeSetting);
        const material = new THREE.MeshBasicMaterial({ color: 0xff00, side: THREE.DoubleSide, wireframe: false });
        const rectangleHollow = new THREE.Mesh(geometry, material);
        scene.add(rectangleHollow);

        const edges = new THREE.EdgesGeometry(geometry);
        const line = new THREE.LineSegments(edges, new THREE.LineBasicMaterial({ color: "0xffffff" }));
        rectangleHollow.add(line);

        var vertex = new THREE.Vector3();
        var positionAttribute = geometry.attributes.position;
        console.log(positionAttribute);
        var i = geometry.index;
        let cutHeight = 20;


        for (i = 0; i <= positionAttribute.count; i++) {
            let x = positionAttribute.getX(i);
            let y = positionAttribute.getY(i);
            let z = positionAttribute.getZ(i);

            vertex.fromBufferAttribute(positionAttribute, i);

            // Condition for cut (it cuts yhe shape from the middle of height)

            if (x == extrudeLength && y < cutHeight) {
                positionAttribute.setX(i, x - cutLength);
            }

            if (x == extrudeLength && y > cutHeight) {
                positionAttribute.setX(i, x - cutLength);
            }


        }

    }
    function rectangleHollowCuttingByLine() {
        const shape = new THREE.Shape();

        shape.moveTo(origin.x, origin.y);
        shape.lineTo(origin.x + shapeWidth, origin.y);
        shape.lineTo(origin.x + shapeWidth, origin.y + shapeHeight / 2);
        shape.lineTo(origin.x + shapeWidth, origin.y + shapeHeight);
        shape.lineTo(origin.x, origin.y + shapeHeight);
        shape.lineTo(origin.x, origin.y + shapeHeight / 2);
        shape.lineTo(origin.x, origin.y);
        shape.moveTo(origin.x + innerOffset, origin.y + innerOffset);
        shape.lineTo(origin.x + innerOffset, origin.y + shapeHeight / 2 - innerOffset);
        shape.lineTo(origin.x + innerOffset, origin.y + shapeHeight - innerOffset);
        shape.lineTo(origin.x + shapeWidth - innerOffset, origin.y + shapeHeight - innerOffset);
        shape.lineTo(origin.x + shapeWidth - innerOffset, origin.y + shapeHeight / 2 - innerOffset);
        shape.lineTo(origin.x + shapeWidth - innerOffset, origin.y + innerOffset);
        shape.lineTo(origin.x + innerOffset, origin.y + innerOffset);

        // extrude path using line curve3 
        let startPoint = new THREE.Vector3(0, 0, 0);
        let endPoint = new THREE.Vector3(extrudeLength, 0, 0);
        const curve = new THREE.LineCurve3(startPoint, endPoint);
        let curvepoints = curve.getPoints(extrudeLength);

        const extrudeSetting = {
            bevelEnabled: false,
            extrudePath: curve
        }

        const geometry = new THREE.ExtrudeGeometry(shape, extrudeSetting);
        const material = new THREE.MeshPhysicalMaterial({ color: 0xff00f0, side: THREE.DoubleSide, wireframe: false });
        const mesh = new THREE.Mesh(geometry, material);
        scene.add(mesh);

        const leftLine = {
            start: { x: 0, y: 0 },
            end: { x: 100, y: shapeHeight }
        };
        const rightLine = {
            start: { x: extrudeLength, y: 0 },
            end: { x: extrudeLength - 150, y: shapeHeight }
        };

        //#region finding the intersection points 
        // finding intersection point for line 1
        const lineCurve1 = new THREE.LineCurve3(new THREE.Vector3(leftLine.start.x, leftLine.start.y, 0), new THREE.Vector3(leftLine.end.x, leftLine.end.y, 0));
        let points1 = lineCurve1.getPoints(Math.abs(leftLine.end.y - leftLine.start.y));
        let lowerPoint1 = null, upperPoint1 = null, leftPoint1 = null, rightPoint1 = null, middlePoint1 = null;
        for (let i = 0; i < points1.length; i++) {
            if (points1[i].y == 0) {
                lowerPoint1 = points1[i].x;
            } else if (points1[i].y == shapeHeight) {
                upperPoint1 = points1[i].x;
            } else if (points1[i].x == 0) {
                leftPoint1 = points1[i].y;
            } else if (points1[i].x == extrudeLength) {
                rightPoint1 = points1[i].y;
            } else if (points1[i].y == shapeHeight / 2) {
                middlePoint1 = points1[i].x;
            }
        }
        console.log("lowerpoint :- " + lowerPoint1 + "  " + "upperPoint :- " + upperPoint1);
        console.log("leftPoint :- " + leftPoint1 + " " + "rightPoint2:-" + rightPoint1);
        // finding intersection point for line 2
        const lineCurve2 = new THREE.LineCurve3(new THREE.Vector3(rightLine.start.x, rightLine.start.y, 0), new THREE.Vector3(rightLine.end.x, rightLine.end.y, 0));
        let points2 = lineCurve2.getPoints(Math.abs(rightLine.end.y - rightLine.start.y));
        let lowerCutPoint2 = null, upperCutPoint2 = null, leftCutPoint2 = null, rightCutPoint2 = null, middleCutPoint2 = null;
        for (let i = 0; i < points2.length; i++) {
            if (points2[i].y == 0) {
                lowerCutPoint2 = points2[i].x;
            } else if (points2[i].y == shapeHeight) {
                upperCutPoint2 = points2[i].x;
            } else if (points2[i].x == 0) {
                leftCutPoint2 = points2[i].y;
            } else if (points2[i].x == extrudeLength) {
                rightCutPoint2 = points2[i].y;
            } else if (points2[i].y == shapeHeight / 2) {
                middleCutPoint2 = points2[i].x;
            }
        }
        console.log("lowerpoint :- " + lowerCutPoint2 + "  " + "upperPoint :- " + upperCutPoint2);
        console.log("leftPoint :- " + leftCutPoint2 + " " + "rightPoint2:-" + rightCutPoint2);
        //#endregion
        var vertex = new THREE.Vector3();
        var positionAttribute = geometry.attributes.position;
        // console.log(positionAttribute);
        var i = geometry.index;

        for (i = 0; i <= positionAttribute.count; i++) {
            let x = positionAttribute.getX(i);
            let y = positionAttribute.getY(i);
            let z = positionAttribute.getZ(i);

            vertex.fromBufferAttribute(positionAttribute, i);

            //#region  cut by 4 point logic

            // // logic for cut by line 1 
            // if ((x == 0 && y == 0 && leftPoint1 == null)) {
            //     positionAttribute.setX(i, x + Math.max(lowerPoint1, x));
            // } else if (x == 0 && y == shapeHeight) {
            //     positionAttribute.setX(i, x + Math.max(upperPoint1, x));
            // }
            // else if ((x == 0 && y == innerOffset)) {
            //     positionAttribute.setX(i, x + Math.max(lowerPoint1, x));
            // } else if (x == 0 && y == shapeHeight - innerOffset) {
            //     positionAttribute.setX(i, x + Math.max(upperPoint1, x));
            // }else if(x== 0 && y == shapeHeight/2){
            //     positionAttribute.setX(i, x);
            // }


            // // logic for cut by line curve 2 

            // if (x == extrudeLength && y == 0) {
            //     positionAttribute.setX(i, Math.min(lowerPoint2, x));
            // } else if (x == extrudeLength && y == shapeHeight) {
            //     positionAttribute.setX(i, Math.min(upperPoint2, x));
            // } else if (x == extrudeLength && y == innerOffset) {
            //     positionAttribute.setX(i, Math.min(lowerPoint2, x));
            // } else if (x == extrudeLength && y == shapeHeight - innerOffset) {
            //     positionAttribute.setX(i, Math.min(upperPoint2, x));
            // }else if(x== extrudeLength && y== shapeHeight/2){
            //     positionAttribute.setX(i, x);
            // }

            //#endregion

            // Logic Along 6 points 
            //#region  cut by line 1 (logic) 
            if (leftPoint1 != null && upperPoint1 != null) {
                if (x == 0 && y == shapeHeight) {
                    positionAttribute.setX(i, x + Math.max(x, upperPoint1));
                } else if (x == 0 && y == shapeHeight - innerOffset) {
                    positionAttribute.setX(i, x + Math.max(x, upperPoint1));
                } else if (x == 0 && y == shapeHeight / 2) {
                    positionAttribute.setY(i, leftPoint1);
                } else if (x == 0 && y == shapeHeight / 2 - innerOffset) {
                    positionAttribute.setY(i, leftPoint1);
                }
            } else if (leftPoint1 != null && lowerPoint1 != null) {
                if (x == 0 && y == 0) {
                    positionAttribute.setX(i, x + Math.max(lowerPoint1, x));
                } else if (x == 0 && y == innerOffset) {
                    positionAttribute.setX(i, x + Math.max(lowerPoint1, x));
                } else if (x == 0 && y == shapeHeight / 2) {
                    positionAttribute.setY(i, leftPoint1);
                } else if (x == 0 && y == shapeHeight / 2 - innerOffset);
            } else if (lowerPoint1 != null && upperPoint1 != null) {
                if (x == 0 && y == 0) {
                    positionAttribute.setX(i, x + Math.max(lowerPoint1, x));
                } else if (x == 0 && y == innerOffset) {
                    positionAttribute.setX(i, Math.max(lowerPoint1, x));
                } else if (x == 0 && y == shapeHeight / 2) {
                    positionAttribute.setX(i, x + Math.max(middlePoint1, x));
                } else if (x == 0 && y == shapeHeight / 2 - innerOffset) {
                    positionAttribute.setX(i, x + Math.max(middlePoint1, x));
                } else if (x == 0 && y == shapeHeight) {
                    positionAttribute.setX(i, x + Math.max(x, upperPoint1));
                } else if (x == 0 && y == shapeHeight - innerOffset) {
                    positionAttribute.setX(i, x + Math.max(x, upperPoint1));
                }
            } else if (lowerPoint1 != null && rightPoint1 != null) {
                if (x == extrudeLength && y == 0) {
                    positionAttribute.setX(i, Math.min(x, lowerPoint1));
                } else if (x == extrudeLength && y == innerOffset) {
                    positionAttribute.setX(i, Math.min(x, lowerPoint1));
                } else if (x == extrudeLength && y == shapeHeight / 2) {
                    positionAttribute.setY(i, rightPoint1);
                } else if (x == extrudeLength && y == shapeHeight / 2 - innerOffset) {
                    positionAttribute.setY(i, rightPoint1);
                }
            } else if (rightPoint1 != null && upperPoint1 != null) {
                if (x == extrudeLength && y == shapeHeight) {
                    positionAttribute.setX(i, Math.min(upperPoint1, x));
                } else if (x == extrudeLength && y == shapeHeight - innerOffset) {
                    positionAttribute.setX(i, Math.min(upperPoint1, x));
                } else if (x == extrudeLength && y == shapeHeight / 2 - innerOffset) {
                    positionAttribute.setY(i, rightPoint1);
                } else if (x == extrudeLength && y == shapeHeight) {
                    positionAttribute.setY(i, rightPoint1);
                }
            } else if (rightPoint1 != null && leftPoint1 != null) {
                if (x == 0 && y == shapeHeight / 2) {
                    positionAttribute.setY(i, leftPoint1);
                } else if (x == 0 && y == shapeHeight / 2 - innerOffset) {
                    positionAttribute.setY(i, leftPoint1);
                } else if (x == extrudeLength && y == shapeHeight / 2) {
                    positionAttribute.setY(i, rightPoint1);
                } else if (x == extrudeLength && y == shapeHeight / 2 - innerOffset) {
                    positionAttribute.setY(i, rightPoint1);
                }
            }
            //#endregion

            //#region cut by line 2 (logic)

            if (leftCutPoint2 != null && upperCutPoint2 != null) {
                if (x == 0 && y == shapeHeight) {
                    positionAttribute.setX(i, x + Math.max(x, upperCutPoint2));
                } else if (x == 0 && y == shapeHeight - innerOffset) {
                    positionAttribute.setX(i, x + Math.max(x, upperCutPoint2));
                } else if (x == 0 && y == shapeHeight / 2) {
                    positionAttribute.setY(i, leftCutPoint2);
                } else if (x == 0 && y == shapeHeight / 2 - innerOffset) {
                    positionAttribute.setY(i, leftCutPoint2);
                }
            } else if (leftCutPoint2 != null && lowerCutPoint2 != null) {
                if (x == 0 && y == 0) {
                    positionAttribute.setX(i, x + Math.max(lowerCutPoint2, x));
                } else if (x == 0 && y == innerOffset) {
                    positionAttribute.setX(i, x + Math.max(lowerCutPoint2, x));
                } else if (x == 0 && y == shapeHeight / 2) {
                    positionAttribute.setY(i, leftCutPoint2);
                } else if (x == 0 && y == shapeHeight / 2 - innerOffset) {
                    positionAttribute.setY(i, leftCutPoint2);
                }
            } else if (lowerCutPoint2 != null && upperCutPoint2 != null && rightCutPoint2 == null) {
                if (x == extrudeLength && y == 0) {
                    positionAttribute.setX(i, Math.min(lowerCutPoint2, x));
                } else if (x == extrudeLength && y == innerOffset) {
                    positionAttribute.setX(i, Math.min(lowerCutPoint2, x));
                } else if (x == extrudeLength && y == shapeHeight / 2) {
                    positionAttribute.setX(i, Math.min(middleCutPoint2, x));
                } else if (x == extrudeLength && y == shapeHeight / 2 - innerOffset) {
                    positionAttribute.setX(i, Math.min(middleCutPoint2, x));
                } else if (x == extrudeLength && y == shapeHeight) {
                    positionAttribute.setX(i, Math.min(x, upperCutPoint2));
                } else if (x == extrudeLength && y == shapeHeight - innerOffset) {
                    positionAttribute.setX(i, Math.min(x, upperCutPoint2));
                }
            } else if (lowerCutPoint2 != null && rightCutPoint2 != null) {
                if (x == extrudeLength && y == 0) {
                    positionAttribute.setX(i, Math.min(x, lowerCutPoint2));
                } else if (x == extrudeLength && y == innerOffset) {
                    positionAttribute.setX(i, Math.min(x, lowerCutPoint2));
                } else if (x == extrudeLength && y == shapeHeight / 2) {
                    positionAttribute.setY(i, rightCutPoint2);
                } else if (x == extrudeLength && y == shapeHeight / 2 - innerOffset) {
                    positionAttribute.setY(i, rightCutPoint2);
                }
            } else if (rightCutPoint2 != null && upperCutPoint2 != null && lowerCutPoint2 == null) {
                if (x == extrudeLength && y == shapeHeight) {
                    positionAttribute.setX(i, Math.min(upperCutPoint2, x));
                } else if (x == extrudeLength && y == shapeHeight - innerOffset) {
                    positionAttribute.setX(i, Math.min(upperCutPoint2, x));
                } else if (x == extrudeLength && y == shapeHeight / 2 - innerOffset) {
                    positionAttribute.setY(i, rightCutPoint2);
                } else if (x == extrudeLength && y == shapeHeight / 2) {
                    positionAttribute.setY(i, rightCutPoint2);
                }
            } else if (rightCutPoint2 != null && leftCutPoint2 != null) {
                if (x == 0 && y == shapeHeight / 2) {
                    positionAttribute.setY(i, leftCutPoint2);
                } else if (x == 0 && y == shapeHeight / 2 - innerOffset) {
                    positionAttribute.setY(i, leftCutPoint2);
                } else if (x == extrudeLength && y == shapeHeight / 2) {
                    positionAttribute.setY(i, rightCutPoint2);
                } else if (x == extrudeLength && y == shapeHeight / 2 - innerOffset) {
                    positionAttribute.setY(i, rightCutPoint2);
                }
            }
            //#endregion


        }
        const edges = new THREE.EdgesGeometry(geometry);
        const line = new THREE.LineSegments(edges, new THREE.LineBasicMaterial({ color: 0xffffff }));
        mesh.add(line);

    }
    //    rectangleHollowCutting();
    //    rectangleHollowCuttingTwo();
    rectangleHollowCuttingByLine();
}

function task19() {
    clearScene();
    // instantiate a loader

    const loader = new THREE.TextureLoader();
    const t16 = loader.load("./TextureImages/freepik__the-style-is-candid-image-photography-with-natural__84397.png");
    const t26 = loader.load("./TextureImages/background-made-from-bricks.jpg");
    const t35 = loader.load("./TextureImages/textureCode35.avif");
    const t40 = loader.load("./TextureImages/textureCode40.avif");
    const t62 = loader.load("./TextureImages/textureCode62.avif");
    const t67 = loader.load("./TextureImages/textureCode67.avif");
    const t1 = loader.load("./TextureImages/textureCode1.avif");
    const t2 = loader.load("./TextureImages/textureCode2.avif");
    const t3 = loader.load("./TextureImages/textureCode3.avif");
    const t4 = loader.load("./TextureImages/textureCode4.avif");

    function textureMap(texture) {
        const geometry = new THREE.BoxGeometry(100, 100, 10);
        const material = new THREE.MeshBasicMaterial({
            map: texture,
            side: THREE.DoubleSide
        });
        const cube = new THREE.Mesh(geometry, material);
        scene.add(cube);

    }

    window.addEventListener('keyup', (event) => {

        controls.update();
        switch (true) {
            case event.key == "1":
                textureMap(t16);
                break;
            case event.key == "2":
                textureMap(t26);
                break;
            case event.key == "3":
                textureMap(t35);
                break;
            case event.key == "4":
                textureMap(t40);
                break;

            case event.key == "5":
                textureMap(t62);
                break;
            case event.key == "6":
                textureMap(t67);
                break;
            case event.key == "7":
                textureMap(t1);
                break;
            case event.key == "8":
                textureMap(t2);
                break;

            case event.key == "9":
                textureMap(t3);
                break;
            case event.key == "0":
                textureMap(t4);

                break;
        }
    });
}
function task20() {
    clearScene();
    //#region variable required for the texture task 2
    let shapeHeight = 100, shapeWidth = 100;

    //#endregion

    const light = new THREE.AmbientLight(0xfffffff);
    scene.add(light);
    function getShapeGeometry(texture) {
        const shape = new THREE.Shape();
        shape.moveTo(0, 0);
        shape.lineTo(shapeWidth, 0);
        shape.lineTo(shapeWidth, shapeHeight);
        shape.lineTo(0, shapeHeight);
        shape.lineTo(0, 0);

        const extrudeSettings = {
            // step: 100,
            depth: -100,
            bevelEnabled: false
        }

        const geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
        const material = new THREE.MeshStandardMaterial({
            color: 0xe09999,
            side: THREE.DoubleSide,
            map: texture
        });

        const mesh = new THREE.Mesh(geometry, material);
        return mesh;
    }
    function textureTask2() {

        // adding the texture here 
        const loader = new THREE.TextureLoader();
        const texture1 = loader.load("./TextureImages/background-made-from-bricks.jpg");
        texture1.repeat.set(1 / 100, 1 / 100);
        texture1.wrapS = THREE.RepeatWrapping;
        texture1.wrapT = THREE.RepeatWrapping;

        // console.log(texture1.uuid);

        const texture2 = loader.load("./TextureImages/background-made-from-bricks.jpg");
        texture2.wrapS = THREE.RepeatWrapping; 2
        texture2.wrapT = THREE.RepeatWrapping;
        texture2.repeat.set(1 / 10, 1 / 10);

        // streached mesh
        const strechMesh = getShapeGeometry(texture2);
        strechMesh.position.set(shapeWidth, 0, 0);
        scene.add(strechMesh);

        // mesh wraped 
        const wrapedMesh = getShapeGeometry(texture1);
        wrapedMesh.position.set(-25, 0, 0);
        scene.add(wrapedMesh);

    }
    textureTask2();
}
function task21() {
    clearScene();
    // const light = new THREE.DirectionalLight(0xffffffff,5);
    const light = new THREE.HemisphereLight(0xffffff, 0x080820, 5);

    const PointLight = new THREE.DirectionalLight(0xfffffff, 10);
    PointLight.position.set(0, -201, 20);
    const loader = new THREE.TextureLoader();
    const texture1 = loader.load("./TextureImages/earth_daymap.jpg");
    texture1.repeat.set(1, 1);
    texture1.wrapS = THREE.RepeatWrapping;
    texture1.wrapT = THREE.RepeatWrapping;

    const geometry = new THREE.IcosahedronGeometry(150, 102);
    const material = new THREE.MeshLambertMaterial({ map: texture1, flatShading: true });
    earthSphere = new THREE.Mesh(geometry, material);
    earthSphere.add(light);
    // renderer.add(PointLight);
    scene.add(earthSphere);

}

function task22() {
    clearScene();
    //#region Raycast
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();
    const polygonVertices = [];
    const vectorAngles = [];
    const vertexAngles = [];
    const extrudeStartPoints = [];
    const extrudeEndPoints = [];
    const cuttingLines = [];
    const extrudeDirectionsByEdge = [];
    const extrusionHeight = 10;

    const planeGeometry = new THREE.PlaneGeometry(500, 500);
    const planeMaterial = new THREE.MeshBasicMaterial({
        visible: true,
        color: "white",
        side: THREE.DoubleSide,
    });
    const drawingPlane = new THREE.Mesh(planeGeometry, planeMaterial);
    // drawingPlane.scale.set(0.1, 0.1, 0.1);
    drawingPlane.position.set(0, 0, 0);
    scene.add(drawingPlane);

    
    //#endregion

    function drawCircleAt(point) {
        const circle = new THREE.Mesh(
            new THREE.CircleGeometry(10),
            new THREE.MeshBasicMaterial({ color: 0xff0000 })
        );
        circle.position.copy(point);
        scene.add(circle);
    }

    function extrudeFaceBetween(startPoint, endPoint) {
        const shape = new THREE.Shape();
        const depth = 0;
        const height = extrusionHeight;
        shape.moveTo(0, 0);
        shape.lineTo(depth, 0);
        shape.lineTo(depth, height);
        shape.lineTo(0, height);
        shape.lineTo(0, 0);

        const path = new THREE.LineCurve3(startPoint, endPoint);
        const extrudeSettings = {
            steps: 1,
            bevelEnabled: false,
            extrudePath: path,
        };

        const geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
        const material = new THREE.MeshBasicMaterial({
            color: 0x00ff00,
            wireframe: false,
        });
        const mesh = new THREE.Mesh(geometry, material);

        const direction = new THREE.Vector3().subVectors(endPoint, startPoint);
        let dominantAxis;
        if (Math.abs(direction.x) > Math.abs(direction.y)) {
            dominantAxis = direction.x > 0 ? "x" : "-x";
        } else if (Math.abs(direction.y) > Math.abs(direction.x)) {
            dominantAxis = direction.y > 0 ? "y" : "-y";
        }

        extrudeDirectionsByEdge.push(dominantAxis);

        const positionAttribute = geometry.attributes.position;
        const uniqueVerticesSet = new Set();
        const uniqueVertices = [];
        for (let i = 0; i < positionAttribute.count; i++) {
            const x = positionAttribute.getX(i);
            const y = positionAttribute.getY(i);
            const z = positionAttribute.getZ(i);
            const vertex = JSON.stringify([x, y, z]);
            if (!uniqueVerticesSet.has(vertex)) {
                uniqueVerticesSet.add(vertex);
                uniqueVertices.push([x, y, z]);
            }
        }

        extrudeStartPoints.push(uniqueVertices[2]);
        extrudeEndPoints.push(uniqueVertices[0]);

        scene.add(mesh);
    }

    function calculateAngles() {
        if (polygonVertices.length < 3) return;
        for (let i = 1; i < polygonVertices.length; i++) {
            if (i == polygonVertices.length - 1) {
                polygonVertices[0] = polygonVertices[1];
            }
            const prevVertex =
                polygonVertices[
                (i - 1 + polygonVertices.length) % polygonVertices.length
                ];
            const currentVertex = polygonVertices[i];
            const nextVertex = polygonVertices[(i + 1) % polygonVertices.length];

            // This is the point where the angle is calculated using th side of the rectangle shape
            const pointLeft = new THREE.Vector3(...extrudeStartPoints[i - 1]);
            const commonPoint = new THREE.Vector3(...polygonVertices[i]);
            const pointRight = new THREE.Vector3(
                ...extrudeEndPoints[i % extrudeEndPoints.length]
            );
            // drawCircleAt(pointLeft);
            // drawCircleAt(pointRight);
            // drawCircleAt(commonPoint);
            const vectorAvertexAngle = new THREE.Vector3().subVectors(
                pointLeft,
                commonPoint
            );
            const vectorBvertexAngle = new THREE.Vector3().subVectors(
                pointRight,
                commonPoint
            );
            const vertexAngle = vectorAvertexAngle.angleTo(vectorBvertexAngle);
            vertexAngles.push(vertexAngle);
            // Ends here

            const vectorA = new THREE.Vector3().subVectors(prevVertex, currentVertex);
            const vectorB = new THREE.Vector3().subVectors(nextVertex, currentVertex);
            const angle = vectorA.angleTo(vectorB);
            vectorAngles.push(angle);
            console.log(prevVertex, currentVertex, nextVertex);

            const canvas = document.createElement("canvas");
            canvas.width = 128;
            canvas.height = 64;
            const context = canvas.getContext("2d");
            context.fillStyle = "rgb(255, 255, 255)";
            context.fillRect(0, 0, canvas.width, canvas.height);
            context.font = "24px Arial";
            context.fillStyle = "white";
            context.textAlign = "center";
            context.fillText(
                (vertexAngle * (180 / Math.PI)).toFixed(1) + "°",
                canvas.width / 2,
                canvas.height / 2 + 8
            );

            const texture = new THREE.CanvasTexture(canvas);
            const spriteMaterial = new THREE.SpriteMaterial({ map: texture });
            const sprite = new THREE.Sprite(spriteMaterial);
            sprite.position.copy(currentVertex);
            sprite.scale.set(0.5, 0.25, 1);
            sprite.userData.isAngleLabel = true;
            // scene.add(sprite);

            const bisector = new THREE.Vector3()
                .addVectors(vectorA.normalize(), vectorB.normalize())
                .normalize();

            const arrowLength = extrusionHeight * 1.2;
            const arrowColor = 0xffffff;
            const arrowEnd = new THREE.Vector3().addVectors(
                currentVertex,
                bisector.multiplyScalar(arrowLength)
            );
            cuttingLines.push(arrowEnd);
            const arrowLineGeometry = new THREE.BufferGeometry().setFromPoints([
                currentVertex,
                arrowEnd,
            ]);
            const arrowLineMaterial = new THREE.LineBasicMaterial({
                color: arrowColor,
            });
            const arrowLine = new THREE.Line(arrowLineGeometry, arrowLineMaterial);
            scene.add(arrowLine);
        }
    }

    function findExtrudePath() {
        for (let i = 0; i < polygonVertices.length - 1; i++) {
            extrudeFaceBetween(polygonVertices[i], polygonVertices[i + 1]);
        }
    }

    function stepFinal() {
        vectorAngles.forEach((angle) => {
            console.log(angle * (180 / Math.PI));
        });
        vertexAngles.forEach((angle) => {
            console.log(angle * (180 / Math.PI));
        });

        let faceIndex = 0;
        scene.traverse((child) => {
            if (child.isMesh && child.geometry instanceof THREE.ExtrudeGeometry) {
                const geometry = child.geometry;
                const positionAttribute = geometry.attributes.position;
                for (let i = 0; i < positionAttribute.count; i++) {
                    const x = positionAttribute.getX(i);
                    const y = positionAttribute.getY(i);
                    const z = positionAttribute.getZ(i);

                    const start = extrudeStartPoints[faceIndex];
                    const end = extrudeEndPoints[faceIndex];
                    if (x === start[0] && y === start[1] && z === start[2]) {
                        positionAttribute.setXYZ(
                            i,
                            cuttingLines[faceIndex].x,
                            cuttingLines[faceIndex].y,
                            z
                        );
                    }

                    if (x === end[0] && y === end[1] && z === end[2]) {
                        positionAttribute.setXYZ(
                            i,
                            cuttingLines[
                                (cuttingLines.length - 1 + faceIndex) % cuttingLines.length
                            ].x,
                            cuttingLines[
                                (cuttingLines.length - 1 + faceIndex) % cuttingLines.length
                            ].y,
                            z
                        );
                    }
                }
                faceIndex++;
            }
        });

        // console.log(extrudeStartPoints);
    }
    let isToStop = false;
    function ch() {
        function onClick(event) {
           
            const canvas = document.getElementById('myCanvas');

            const rect = canvas.getBoundingClientRect();
            mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
            mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

            raycaster.setFromCamera(mouse, camera);
            const intersects = raycaster.intersectObject(drawingPlane);
            console.log(intersects);
            
            if (intersects.length > 0) {
                const clickedPoint = intersects[0].point;
                const clickedVec = new THREE.Vector3(clickedPoint.x, clickedPoint.y, 5);
                polygonVertices.push(clickedVec);
                
                // Check if the shape is closed (clicked near the first point)
                const firstPoint = polygonVertices[0];
                console.log(polygonVertices, clickedPoint);

                const isClosed =
                    polygonVertices.length > 1 &&
                    parseFloat(clickedPoint.x.toFixed(0)) ===
                    parseFloat(polygonVertices[0].x.toFixed(0)) &&
                    parseFloat(clickedPoint.y.toFixed(0)) ===
                    parseFloat(polygonVertices[0].y.toFixed(0)) &&
                    parseFloat(clickedPoint.z.toFixed(0)) ===
                    parseFloat(polygonVertices[0].z.toFixed(0));

                console.log(isClosed);


                if (isClosed) {
                    isToStop = true;
                    console.log("Got the starting point. Polygon closed.");
                    polygonVertices[polygonVertices.length - 1] = firstPoint.clone(); // ensure closure

                    findExtrudePath();
                    calculateAngles();
                    stepFinal();
                }

                if (!isToStop) {
                    drawCircleAt(clickedVec);
                }
            }

            animate(() => { });
        }
        window.addEventListener("click", onClick);
    }

    setTimeout(ch, 100);
}
//#endregion


function clearScene() {
    while (scene.children.length > 0) {
        scene.remove(scene.children[0]);
    }
}

//#region Event Listeners for Buttons
const infoBox = document.getElementById("info-box");

document.getElementById('task1-btn').addEventListener('click', function () {
    task1();
});

// document.getElementById('task2-btn').addEventListener('click', function () {
//     task2();
// });

document.getElementById('task3-btn').addEventListener('click', function () {
    task3();
});

document.getElementById('task4-btn').addEventListener('click', function () {
    task4();
});
document.getElementById('task5-btn').addEventListener('click', function () {
    task5();
});

document.getElementById('task6-btn').addEventListener('click', function () {
    task6();
});

document.getElementById('task7-btn').addEventListener('click', function () {
    task7();
});

document.getElementById('task8-btn').addEventListener('click', function () {
    task8();
});
document.getElementById('task9-btn').addEventListener('click', function () {
    task9();
});
document.getElementById('task10-btn').addEventListener('click', function () {
    task10();
});
document.getElementById('task11-btn').addEventListener('click', function () {
    task11();
    infoBox.innerHTML = `<p><strong>Task to do hole at  middle of edge:</strong> </p>`;
});

document.getElementById('task12-btn').addEventListener('click', function () {
    task12();
    infoBox.innerHTML = `<p><strong>Task to do hole at middle of edge: </strong> </p>`;
});

document.getElementById('task13-btn').addEventListener('click', function () {
    task13();
    infoBox.innerHTML = `<p><strong>Task to do hole at corner : </strong> </p>`;
});

document.getElementById('task14-btn').addEventListener('click', function () {
    task14();
    infoBox.innerHTML = `<p><strong>Task to do hole at corner : </strong> </p>`;
});
document.getElementById('task15-btn').addEventListener('click', function () {
    task15();
    infoBox.innerHTML = `<p><strong>Task to do lift and slide handle : </strong> </p>`;
});

document.getElementById('task16-btn').addEventListener('click', function () {
    task16();
    infoBox.innerHTML = `<p><strong>Task to do cockspur handle : </strong> </p>`;
});

document.getElementById('task17-btn').addEventListener('click', function () {
    task17();
    infoBox.innerHTML = `<p><strong>Task to do patio handle : </strong> </p>`;
});

document.getElementById('task18-btn').addEventListener('click', function () {
    task18();
    infoBox.innerHTML = `<p><strong>Task To cut Geometry by two line: </strong> To cut a geometry by two lines, you first define the geometry that you want to modify, such as a plane or a 3D shape. Next, you need to calculate the intersection points between the geometry and the two lines. These lines act as cutting planes or boundaries that will split the geometry. To do this, you can use geometric algorithms or libraries (such as Three.js or computational geometry tools) to find where the lines intersect with the geometry. Once the intersection points are determined, you create two new sections of the geometry by removing or modifying the parts that lie outside the defined lines. This can involve splitting the original geometry along the lines, either by subdividing it into smaller meshes or by adjusting the vertices to form new shapes. After cutting, you can render the two resulting sections of the geometry separately or apply further transformations to each piece. The result is a geometry that has been sliced by two lines, creating distinct, separated portions.</p>`;
});
document.getElementById('task19-btn').addEventListener('click', function () {
    task19();
    infoBox.innerHTML = `<p><strong>Task To appying texture in Box Geometry: </strong> In this project, the goal is to load multiple textures onto a box geometry and interactively switch between them using event listeners. First, you create the basic box geometry, which acts as the container for the textures. Next, you load multiple textures using a texture loader, ensuring that each texture is ready to be applied. You can then map each texture to specific faces of the box geometry, either by manually assigning them to individual faces or using a material that supports multiple textures. After applying the textures, you set up event listeners on the different textures, such as click or mouseover events, so that when the user interacts with the box, they can switch or cycle through the different textures. Each event listener triggers a change in the texture of the box, allowing users to see the different textures dynamically applied. This method enables an interactive experience where multiple textures are loaded and can be easily swapped or toggled based on user input.</p>`;
});
document.getElementById('task20-btn').addEventListener('click', function () {
    task20();
    infoBox.innerHTML = `<p><strong>Task To appying texture in extrude Geometry: </strong> In this project, the goal is to create a cube using shape geometry and extrusion techniques, followed by adding textures and customizing the wrapping of the geometry. First, you define the cube's base using the shape geometry method, where you specify the dimensions of the cube. Then, you apply the extrusion technique to create the 3D geometry by stretching the base shape along the third axis. Next, to enhance the appearance, you add a texture to the extruded geometry. This is achieved by mapping the texture onto the geometry’s surface. Following this, you focus on customizing the wrapping behavior. For one extruded geometry, you apply a wrapping method using wraps.wrap to seamlessly apply the texture, adjusting the wrap behavior with wrap.repeat.set(x, y) to control how the texture is tiled across the surface. For the second extruded geometry, you fix the texture wrap to a specific length, ensuring that the texture is applied uniformly over a predetermined distance. This approach allows for two different wrapping methods—one flexible and the other fixed—to create distinct visual effects on the cube’s extruded surfaces.</p>`;
});
document.getElementById('task21-btn').addEventListener('click', function () {
    task21();
    infoBox.innerHTML = `<p><strong>Task  To create a 3D Earth model using Three.js: </strong> start by setting up a basic Three.js scene with a camera, renderer, and light. Then, create a sphere geometry using THREE.SphereGeometry, which will represent the shape of the Earth. Next, load an Earth texture image (usually a JPEG or PNG showing the Earth's surface) using THREE.TextureLoader. Apply this texture to a THREE.MeshStandardMaterial and use it to create a mesh by combining it with the sphere geometry. Add the mesh to your scene so the Earth becomes visible. You can also add lighting (like a DirectionalLight) to simulate sunlight, and use OrbitControls so users can rotate and zoom around the Earth. Finally, animate the scene using a render loop to make the Earth spin slowly for a realistic effect.</p>`;
});
document.getElementById('task22-btn').addEventListener('click', function () {
    task22();
});

// JavaScript to handle the refresh button click
document.getElementById("refresh-btn").addEventListener("click", function () {
    window.location.reload();  // Reloads the page
});
//#endregion

// Animation loop
function animate() {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);


    if (earthSphere) {
        earthSphere.rotateY(0.001)
    }
}
animate();
