/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 public/models/terrain.glb 
Author: Kris Teper (https://sketchfab.com/tepcio)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/free-quick-terrain-test-b0ad92e85bf242d9bf24009a40b4e4d2
Title: *Free* Quick terrain test
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Terrain(props) {
  const { nodes, materials } = useGLTF('/models/terrain.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Object_2.geometry} material={materials.diffuse_1SG} rotation={[-Math.PI / 2, 0, 0]} />
    </group>
  )
}

useGLTF.preload('/models/terrain.glb')
