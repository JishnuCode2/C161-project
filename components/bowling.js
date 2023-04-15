AFRAME.registerComponent("shoot",{
    init: function(){
        this.s()
    },
    s: function(){
        window.addEventListener("keydown", (e)=>{
            if( e.key === "z"){
                var bullet = document.createElement("a-entity")

                bullet.setAttribute("gltf-model", "./models/models/bowling_ball/scene.gltf")

                var cam = document.querySelector("#camera");

                var pos = cam.getAttribute("position")
                bullet.setAttribute("position", {x:pos.x, y: 0, z: (pos.z - 0.7)});

                var camera = document.querySelector("#camera").object3D

                var scene = document.querySelector("#scene")
            
                var direction = new THREE.Vector3()
                camera.getWorldDirection(direction);

                bullet.setAttribute("velocity", direction.multiplyScalar(-1))

                scene.appendChild(bullet)

                
            }
        })
    }  
})