/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: Bmercado (https://sketchfab.com/Bmercado)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/trouble-board-game-955be38f06d048a897b8a1cffa2fcee1
Title: Trouble Board Game
*/

import React, { useRef, useEffect } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'
import { a } from '@react-spring/three'

import boardScene from '../assets/3d/trouble_board_game.glb';

const Board = ({isRotating, setIsRotating, setCurrentStage, ...props}) => {
    const boardRef = useRef();
    const {gl, viewport} = useThree();
  const { nodes, materials } = useGLTF(boardScene);

  const lastX = useRef(0);
  const rotationSpeed = useRef(0);
  const dampingFactor = 0.95;

  const handlePointerDown = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setIsRotating(true);

    const clientX = e.touches ? e.touches[0].clientX : e.clientX;

    lastX.current = clientX;
  }
  const handlePointerUp = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setIsRotating(false);
  }
  const handlePointerMove = (e) => {
    e.stopPropagation();
    e.preventDefault();

    if(isRotating) {
       
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;

    const delta = (clientX - lastX.current) / viewport.width;
    boardRef.current.rotation.y += delta * 0.01 * Math.PI;

    lastX.current = clientX;

    rotationSpeed.current = delta * 0.01 * Math.PI;
    }
  }

  const handleKeyDown = (e) => {
    if(e.key === 'ArrowLeft') {
        if(!isRotating) setIsRotating(true);
        boardRef.current.rotation.y += 0.01 * Math.PI;
        rotationSpeed.current = 0.025;
    } else if(e.key === 'ArrowRight') {
        if(!isRotating) setIsRotating(true);
        boardRef.current.rotation.y -= 0.01 * Math.PI;
        rotationSpeed.current = -0.025;
    }
    }

    const handleKeyUp = (e) => {
        if(e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
            setIsRotating(false);
        }
    }

    useFrame(() => {
        if(!isRotating) {
            rotationSpeed.current *= dampingFactor;

            if(Math.abs(rotationSpeed.current) < 0.0001) {
                rotationSpeed.current = 0;
            }
            boardRef.current.rotation.y += rotationSpeed.current;
        } else {
            const rotation = boardRef.current.rotation.y;
            const normalizedRotation =
        ((rotation % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);

      // Set the current stage based on the island's orientation
      switch (true) {
        case normalizedRotation >= 5.2 && normalizedRotation <= 5.6:
          setCurrentStage(4);
          break;
        case normalizedRotation >= 3.6 && normalizedRotation <= 4.0:
          setCurrentStage(3);
          break;
        case normalizedRotation >= 2.0 && normalizedRotation <= 2.4:
          setCurrentStage(2);
          break;
        case normalizedRotation >= 0.4 && normalizedRotation <= 0.8:
          setCurrentStage(1);
          break;
        default:
          setCurrentStage(null);
      }
    }
  });

  useEffect(() => {
    const canvas = gl.domElement;
    canvas.addEventListener('pointerdown', handlePointerDown);
    canvas.addEventListener('pointerup', handlePointerUp);
    canvas.addEventListener('pointermove', handlePointerMove);
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('keyup', handleKeyUp);

    return () => {
        canvas.removeEventListener('pointerdown', handlePointerDown);
        canvas.removeEventListener('pointerup', handlePointerUp);
        canvas.removeEventListener('pointermove', handlePointerMove);
        document.removeEventListener('keydown', handleKeyDown);
        document.removeEventListener('keyup', handleKeyUp);
    }

  }, [gl, handlePointerDown, handlePointerUp, handlePointerMove])

  return (
    <a. group ref={boardRef} {...props} >
        <mesh
          
          geometry={nodes.Trouble_BoardGame_CardBoard_TroubleBoard_CardBoard_MAT_0.geometry}
          material={materials.TroubleBoard_CardBoard_MAT}
          position={[-0.001, -0.058, 0]}
          scale={1.02}
        />
        <mesh

          geometry={nodes.Trouble_BoardGame_Plastic_GEO_TroubleBoard_Plastic_MAT_0.geometry}
          material={materials.TroubleBoard_Plastic_MAT}
        />
        <mesh

          geometry={nodes.Trouble_BoardGame_Tumbler_GEO_TroubleBoard_Tumbler_MAT_0.geometry}
          material={materials.TroubleBoard_Tumbler_MAT}
          position={[-0.043, 1.968, -0.043]}
          rotation={[-0.001, -Math.PI / 4, 0]}
          scale={[6.183, 0.531, 6.183]}
        />
        <mesh

          geometry={nodes.Trouble_BoardGame_Piece_Red_GEO_TroubleBoard_Peg_RED_MAT_0.geometry}
          material={materials.TroubleBoard_Peg_RED_MAT}
          position={[7.049, 2.646, 10.763]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={[0.571, 1.17, 0.571]}
        />
        <mesh
          
          
          geometry={nodes.Trouble_BoardGame_Piece_Green_GEO_TroubleBoard_Peg_GREEN_MAT_0.geometry}
          material={materials.TroubleBoard_Peg_GREEN_MAT}
          position={[-10.568, 2.606, 7.322]}
          scale={[0.571, 1.17, 0.571]}
        />
        <mesh
          
          
          geometry={nodes.Trouble_BoardGame_Piece_Blue_GEO_TroubleBoard_Peg_BLUE_MAT_0.geometry}
          material={materials.TroubleBoard_Peg_BLUE_MAT}
          position={[10.569, 2.61, -7.398]}
          scale={[0.571, 1.17, 0.571]}
        />
        <mesh

          geometry={nodes.Trouble_BoardGame_Piece_YellowGEO_TroubleBoard_Peg_YELLOW_MAT_0.geometry}
          material={materials.TroubleBoard_Peg_YELLOW_MAT}
          position={[-7.017, 2.632, -10.811]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={[0.571, 1.17, 0.571]}
        />
        <mesh
          geometry={nodes.Trouble_BoardGame_Piece_Red_GEO1_TroubleBoard_Peg_RED_MAT_0.geometry}
          material={materials.TroubleBoard_Peg_RED_MAT}
          position={[8.474, 2.597, 10.046]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={[0.571, 1.17, 0.571]}
        />
        <mesh

          geometry={nodes.Trouble_BoardGame_Piece_Red_GEO2_TroubleBoard_Peg_RED_MAT_0.geometry}
          material={materials.TroubleBoard_Peg_RED_MAT}
          position={[9.82, 2.649, 8.806]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={[0.571, 1.17, 0.571]}
        />
        <mesh

          geometry={nodes.Trouble_BoardGame_Piece_Red_GEO3_TroubleBoard_Peg_RED_MAT_0.geometry}
          material={materials.TroubleBoard_Peg_RED_MAT}
          position={[10.597, 2.651, 7.32]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={[0.571, 1.17, 0.571]}
        />
        <mesh
          geometry={nodes.Trouble_BoardGame_Piece_Green_GEO1_TroubleBoard_Peg_GREEN_MAT_0.geometry}
          material={materials.TroubleBoard_Peg_GREEN_MAT}
          position={[-9.851, 2.651, 8.801]}
          scale={[0.571, 1.17, 0.571]}
        />
        <mesh

          geometry={nodes.Trouble_BoardGame_Piece_Green_GEO2_TroubleBoard_Peg_GREEN_MAT_0.geometry}
          material={materials.TroubleBoard_Peg_GREEN_MAT}
          position={[-8.531, 2.65, 10.051]}
          scale={[0.571, 1.17, 0.571]}
        />
        <mesh
          geometry={nodes.Trouble_BoardGame_Piece_Green_GEO3_TroubleBoard_Peg_GREEN_MAT_0.geometry}
          material={materials.TroubleBoard_Peg_GREEN_MAT}
          position={[-7.063, 2.648, 10.759]}
          scale={[0.571, 1.17, 0.571]}
        />
        <mesh
 
          geometry={nodes.Trouble_BoardGame_Piece_YellowGEO1_TroubleBoard_Peg_YELLOW_MAT_0.geometry}
          material={materials.TroubleBoard_Peg_YELLOW_MAT}
          position={[-8.538, 2.644, -10.165]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={[0.571, 1.17, 0.571]}
        />
        <mesh

          geometry={nodes.Trouble_BoardGame_Piece_YellowGEO2_TroubleBoard_Peg_YELLOW_MAT_0.geometry}
          material={materials.TroubleBoard_Peg_YELLOW_MAT}
          position={[-9.828, 2.643, -8.878]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={[0.571, 1.17, 0.571]}
        />
        <mesh

          geometry={nodes.Trouble_BoardGame_Piece_YellowGEO3_TroubleBoard_Peg_YELLOW_MAT_0.geometry}
          material={materials.TroubleBoard_Peg_YELLOW_MAT}
          position={[-10.565, 2.539, -7.454]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={[0.571, 1.17, 0.571]}
        />
        <mesh
          
          
          geometry={nodes.Trouble_BoardGame_Piece_Blue_GEO1_TroubleBoard_Peg_BLUE_MAT_0.geometry}
          material={materials.TroubleBoard_Peg_BLUE_MAT}
          position={[9.836, 2.65, -8.863]}
          scale={[0.571, 1.17, 0.571]}
        />
        <mesh
          
          
          geometry={nodes.Trouble_BoardGame_Piece_Blue_GEO2_TroubleBoard_Peg_BLUE_MAT_0.geometry}
          material={materials.TroubleBoard_Peg_BLUE_MAT}
          position={[8.527, 2.651, -10.14]}
          scale={[0.571, 1.17, 0.571]}
        />
        <mesh
          
          
          geometry={nodes.Trouble_BoardGame_Piece_Blue_GEO3_TroubleBoard_Peg_BLUE_MAT_0.geometry}
          material={materials.TroubleBoard_Peg_BLUE_MAT}
          position={[7.038, 2.653, -10.837]}
          scale={[0.571, 1.17, 0.571]}
        />
        <mesh
          
          
          geometry={nodes.Dice_GEO_REF_Dice_MAT_0.geometry}
          material={materials.Dice_MAT}
          position={[0, 2.498, 0]}
          scale={1.091}
        />
    </a. group>
  );
}


export default Board