<script lang="ts">
  import { onMount } from "svelte";
  import * as THREE from "three";
  import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
  import { scaleLinear } from "d3-scale";
  import { scroll } from "motion";

  onMount(() => {
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x18181b);

    const aspect = 1;
    const d = 11;
    const camera = new THREE.OrthographicCamera(
      -d * aspect,
      d * aspect,
      d,
      -d,
      1,
      100000
    );
    camera.position.z = 15;
    camera.lookAt(scene.position);

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(250, 250);
    renderer.domElement.classList.add(
      "geo-canvas",
      "mx-auto",
      "md:mx-0",
      "aspect-square",
      "!h-auto",
      "!w-full",
      "md:!w-[300px]",
      "lg:!w-[500px]"
    );
    document.getElementById("3d")!.appendChild(renderer.domElement);

    let loader = new GLTFLoader();
    let platonicSolids: any | undefined;
    const material = new THREE.MeshBasicMaterial({ color: 0xe34234, wireframe: true });

    loader.load("/model/geo.glb", function (gltf) {
      const model = gltf.scene;
      platonicSolids = model.children[0];

      platonicSolids.material = material;
      platonicSolids.scale.x = 10;
      platonicSolids.scale.y = 10;
      platonicSolids.scale.z = 10;

      if (window.matchMedia("(min-width: 768px)").matches) {
        updateMorphProgress(
          window.scrollY /
            (document.documentElement.offsetHeight -
              document.documentElement.clientHeight)
        );
      } else {
        updateMorphProgress(Math.floor(Math.random() * 5) / 4);
      }

      scene.add(model);
    });

    function animate() {
      requestAnimationFrame(animate);

      if (platonicSolids) {
        platonicSolids.rotation.x += 0.01;
        platonicSolids.rotation.y += 0.01;
      }

      renderer.render(scene, camera);
    }

    animate();

    const morph1Scalar = scaleLinear().domain([0, 0.25]).range([1, 0]).clamp(true);
    const morph2Scalar = scaleLinear()
      .domain([0, 0.25, 0.5])
      .range([0, 1, 0])
      .clamp(true);
    const morph3Scalar = scaleLinear()
      .domain([0.25, 0.5, 0.75])
      .range([0, 1, 0])
      .clamp(true);
    const morph4Scalar = scaleLinear()
      .domain([0.5, 0.75, 1])
      .range([0, 1, 0])
      .clamp(true);

    const updateMorphProgress = (progress: number) => {
      if (platonicSolids) {
        platonicSolids.morphTargetInfluences[0] = morph1Scalar(progress);
        platonicSolids.morphTargetInfluences[1] = morph2Scalar(progress);
        platonicSolids.morphTargetInfluences[2] = morph3Scalar(progress);
        platonicSolids.morphTargetInfluences[3] = morph4Scalar(progress);
      }
    };

    if (window.matchMedia("(min-width: 768px)").matches) {
      scroll(({ y }) => {
        updateMorphProgress(y.progress);
      });
    }
  });
</script>

<div id="3d" class="min-h-0 w-full" />
