/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 public/models/dragon_animation_running.glb
Author: Al-Deezel (https://sketchfab.com/Al-dezel)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/high-detailed-dragon-animation-running-49eeaefbe9ae45bb9f997421983a92df
Title: High detailed Dragon Animation running
*/

import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export function DragonRunning(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/models/dragon_animation_running.glb");
  const { actions, mixer } = useAnimations(animations, group);

  useEffect(() => {
    actions["running"].play();
    mixer.timeScale = 1;
  }, [actions, mixer]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]} scale={9.32}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group name="RootNode0_0" scale={0.01}>
                <group name="skeletal3_3">
                  <group name="GLTF_created_0">
                    <primitive object={nodes.GLTF_created_0_rootJoint} />
                    <group name="dragon_wings22_2_correction">
                      <group name="dragon_wings22_2" />
                    </group>
                    <skinnedMesh name="Object_228" geometry={nodes.Object_228.geometry} material={materials.material_0} skeleton={nodes.Object_228.skeleton} />
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/models/dragon_animation_running.glb");