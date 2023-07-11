/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 public/models/pine_tree_low_poly.glb
Author: Wersaus33 (https://sketchfab.com/wersaus33)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/pine-tree-ps1-low-poly-d71ceeb303644e649d09fe8038aa5e47
Title: Pine Tree - PS1 Low Poly
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function PineTree(props) {
  const { nodes, materials } = useGLTF('/models/pine_tree_low_poly.glb')
  return (
    <group {...props} dispose={null}>
      <group scale={0.005}>
        <mesh geometry={nodes.Plane037_Tree_tex_0.geometry} material={materials.Tree_tex} position={[-8.31, 1175.91, -3.4]} rotation={[-1.7, -0.64, -0.05]} scale={[17.08, 17.91, 15.93]} />
      </group>
    </group>
  )
}

useGLTF.preload('/models/pine_tree_low_poly.glb')
