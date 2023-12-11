/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.15 public/models/pc_spider_1k.glb 
Author: Pascal Chaumette (https://sketchfab.com/pakagames)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/pc-spider-88f519a508ff42889deea7d17e652c23
Title: PC Spider
*/

import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export function PcSpider({ props, position, scale, rotation }) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/models/pc_spider_1k.glb");
  const { actions, mixer } = useAnimations(animations, group);

  useEffect(() => {
    actions["Take 001"].play();
    mixer.timeScale = 1;
  }, [actions, mixer]);

  return (
    <group
      ref={group}
      {...props}
      dispose={null}
      position={position}
      scale={scale}
      rotation={rotation}
    >
      <group name="Sketchfab_Scene">
        <group
          name="Sketchfab_model"
          position={[0, -8.933, -4.306]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.5}
        >
          <group
            name="e962672f4fbd46c684dc52c88af452b0fbx"
            rotation={[-Math.PI, 0, 0]}
          >
            <group name="Object_2">
              <group name="RootNode">
                <group name="Object_4">
                  <group
                    name="mesh-reduced_0-retopo_004"
                    position={[-51.848, 0, 16.758]}
                    rotation={[Math.PI / 2, 0, 0]}
                    scale={0.394}
                  />
                  <primitive object={nodes._rootJoint} />
                  <group
                    name="Object_6"
                    position={[-51.875, 1.068, 15.866]}
                    rotation={[Math.PI / 2, 0, 0]}
                    scale={0.394}
                  />
                  <skinnedMesh
                    name="Object_7"
                    geometry={nodes.Object_7.geometry}
                    material={materials["14_-_Default"]}
                    skeleton={nodes.Object_7.skeleton}
                  />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/models/pc_spider_1k.glb");