/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 public/models/spider_wolf_anim.glb 
Author: Dreaming In Alternation 27 (https://sketchfab.com/DreamingInAlternation27)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/wolf-spider-rigged-rabidosa-rabida-6392e4cfb64d407182fdad2cea9e0abe
Title: Wolf Spider (Rigged) - (Rabidosa rabida)
*/

import React, { useEffect, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function SpiderWolfAnim(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/models/spider_wolf_anim.glb')
  const { actions, mixer } = useAnimations(animations, group)
  
  // Wolf Spider Armature|Spider "running, walk and turn left, walk and turn right, walking, walking backword, walking fast 
  useEffect(() => {
    actions["Wolf Spider Armature|Spider running"].play();
    mixer.timeScale = 1;
  });

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="0740ae42397844d88fb8abf43d6705effbx" rotation={[Math.PI / 2, 0, 0]} scale={0.1}>
            <group name="Object_2">
              <group name="RootNode">
                <group name="Wolf_Spider_Rigged" position={[0, 0.593, 1.026]} rotation={[-Math.PI / 2, 0, 0]} scale={0.327} />
                <group name="Wolf_Spider_Armature" position={[0, 0.593, 1.026]} rotation={[-Math.PI / 2, 0, 0]} scale={0.327}>
                  <group name="Object_6">
                    <primitive object={nodes._rootJoint} />
                    <group name="Object_8" position={[0, 0.593, 1.026]} rotation={[-Math.PI / 2, 0, 0]} scale={0.327} />
                    <skinnedMesh name="Object_9" geometry={nodes.Object_9.geometry} material={materials.Wolf_Spider_Material} skeleton={nodes.Object_9.skeleton} />
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/spider_wolf_anim.glb')