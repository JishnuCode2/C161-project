AFRAME.registerComponent("shoot",{
    init: function(){
        this.shoot()
    },
    shoot: function(){
        window.addEventListener("keydown", (e)=>{
            if( e.key === "z"){
                var ball = document.createElement("a-entity")

                ball.setAttribute("gltf-model", "./models/models/bowling_ball/scene.gltf")

                var cam = document.querySelector("#camera");

                var pos = cam.getAttribute("position")
                ball.setAttribute("position", {x:pos.x, y: 0, z: (pos.z - 0.7)});

                var camera = document.querySelector("#camera").object3D

                var scene = document.querySelector("#scene")
            
                var direction = new THREE.Vector3()
                camera.getWorldDirection(direction);

                ball.setAttribute("velocity", direction.multiplyScalar(-1))

                scene.appendChild(ball)

                
            }
        })
    }  
})
