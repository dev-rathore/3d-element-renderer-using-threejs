import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function Tank(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/model.gltf')
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="blockbench_export">
        <group>
          <group name="bone10" position={nodes.bone10.position}>
            <mesh name="cuboid_1" geometry={nodes.cuboid_1.geometry} material={nodes.cuboid_1.material} position={nodes.cuboid_1.position} rotation={nodes.cuboid_1.rotation} />
          </group>
          <group name="bone12" position={[-0.085, 1.771, -0.672]} rotation={[3.098, 0, 0]}>
            <mesh name="cuboid_2" geometry={nodes.cuboid_2.geometry} material={nodes.cuboid_2.material} position={[0.045, -0.145, -0.203]} rotation={[-Math.PI / 2, 0, 0]} />
            <mesh name="cylinder" geometry={nodes.cylinder.geometry} material={nodes.cylinder.material} position={[0.022, -0.015, -0.016]} rotation={[1.614, 0, -Math.PI / 2]} />
            <mesh name="cylinder_1" geometry={nodes.cylinder_1.geometry} material={nodes.cylinder_1.material} position={[0.022, -0.015, -0.016]} rotation={[1.614, 0, -Math.PI / 2]} />
            <mesh name="cuboid_3" geometry={nodes.cuboid_3.geometry} material={nodes.cuboid_3.material} position={[0.022, -0.015, -0.016]} rotation={[1.614, 0, 0]} />
            <mesh name="cuboid_4" geometry={nodes.cuboid_4.geometry} material={nodes.cuboid_4.material} position={[0.022, -0.015, -0.016]} rotation={[-3.098, 0, 0]} />
            <mesh name="cylinder_2" geometry={nodes.cylinder_2.geometry} material={nodes.cylinder_2.material} position={[0.022, -0.015, -0.016]} rotation={[-3.098, 0, -Math.PI / 2]} />
          </group>
          <group name="bone13" position={[0.313, 1.813, -0.688]}>
            <group name="bone14" position={[-0.013, 0.009, -0.005]}>
              <mesh name="cylinder_18" geometry={nodes.cylinder_18.geometry} material={nodes.cylinder_18.material} position={[0.012, -0.003, 0.005]} rotation={[1.614, 0, 0]} />
            </group>
            <group name="bone15" position={[-0.18, -0.582, -0.415]}>
              <mesh name="cuboid_32" geometry={nodes.cuboid_32.geometry} material={nodes.cuboid_32.material} position={[0.068, 0.598, 0.414]} rotation={[-3.133, 1.57, -1.537]} />
            </group>
            <group name="bone16" position={[0.351, -0.326, -0.535]}>
              <mesh name="cuboid_33" geometry={nodes.cuboid_33.geometry} material={nodes.cuboid_33.material} position={[-0.03, 0.505, 0.202]} rotation={[1.613, 0, -0.001]} />
            </group>
            <group name="bone23" position={[-0.019, -0.528, 0.885]}>
              <mesh name="cuboid_34" geometry={nodes.cuboid_34.geometry} material={nodes.cuboid_34.material} position={[0.019, 0.534, -0.885]} rotation={[0.044, 0, 0]} />
            </group>
            <group name="bone24" position={[0, -0.452, -0.552]}>
              <mesh name="cuboid_35" geometry={nodes.cuboid_35.geometry} material={nodes.cuboid_35.material} position={[0, 0.457, 0.552]} rotation={[-3.098, 0, 0]} />
            </group>
            <group name="bone22" position={[-0.124, -0.326, -0.409]}>
              <mesh name="cuboid_36" geometry={nodes.cuboid_36.geometry} material={nodes.cuboid_36.material} position={[0.124, 0.307, 0.408]} rotation={[1.613, 0, -0.001]} />
            </group>
            <group name="bone25" position={[0.395, -0.378, -0.405]}>
              <mesh name="cuboid_37" geometry={nodes.cuboid_37.geometry} material={nodes.cuboid_37.material} position={[0.106, 0.305, 0.404]} rotation={[-3.133, 1.57, -1.537]} />
            </group>
          </group>
          <group name="bone17" position={[-0.188, 2.355, -0.651]} />
          <group name="bone" position={[0.75, -0.125, 0]}>
            <group name="bone2" position={[0, 0.188, 0]} />
            <group name="bone4" position={[-0.063, 0.206, -2.875]}>
              <mesh name="cylinder_19" geometry={nodes.cylinder_19.geometry} material={nodes.cylinder_19.material} position={[-0.125, 0.556, -0.825]} rotation={[0, 0, -Math.PI / 2]} />
              <mesh name="cylinder_20" geometry={nodes.cylinder_20.geometry} material={nodes.cylinder_20.material} position={[-0.125, 0.444, 5.05]} rotation={[0, 0, -Math.PI / 2]} />
              <mesh name="cylinder_21" geometry={nodes.cylinder_21.geometry} material={nodes.cylinder_21.material} position={[4.813, 0.156, 0]} rotation={[0, 0, -Math.PI / 2]} />
              <mesh name="cylinder_22" geometry={nodes.cylinder_22.geometry} material={nodes.cylinder_22.material} position={[4.813, 0.156, 0]} rotation={[0, 0, -Math.PI / 2]} />
              <mesh name="cylinder_23" geometry={nodes.cylinder_23.geometry} material={nodes.cylinder_23.material} position={[4.813, 0.156, 0]} rotation={[0, 0, -Math.PI / 2]} />
              <mesh name="cylinder_24" geometry={nodes.cylinder_24.geometry} material={nodes.cylinder_24.material} position={[4.813, 0.156, 0]} rotation={[0, 0, -Math.PI / 2]} />
              <mesh name="cylinder_25" geometry={nodes.cylinder_25.geometry} material={nodes.cylinder_25.material} position={[4.813, 0.156, 0]} rotation={[0, 0, -Math.PI / 2]} />
              <mesh name="cylinder_26" geometry={nodes.cylinder_26.geometry} material={nodes.cylinder_26.material} position={[4.813, 0.156, 0]} rotation={[0, 0, -Math.PI / 2]} />
              <mesh name="cylinder_27" geometry={nodes.cylinder_27.geometry} material={nodes.cylinder_27.material} position={[4.813, 0.156, 0]} rotation={[0, 0, -Math.PI / 2]} />
              <mesh name="cylinder_28" geometry={nodes.cylinder_28.geometry} material={nodes.cylinder_28.material} position={[4.813, 0.156, 0]} rotation={[0, 0, -Math.PI / 2]} />
              <mesh name="cylinder_29" geometry={nodes.cylinder_29.geometry} material={nodes.cylinder_29.material} position={[4.813, 0.156, 0]} rotation={[0, 0, -Math.PI / 2]} />
              <mesh name="cylinder_30" geometry={nodes.cylinder_30.geometry} material={nodes.cylinder_30.material} position={[4.813, 0.156, 0]} rotation={[0, 0, -Math.PI / 2]} />
              <mesh name="cylinder_31" geometry={nodes.cylinder_31.geometry} material={nodes.cylinder_31.material} position={[1.738, 0.236, 2.531]} rotation={[0, 0, Math.PI / 2]} />
              <mesh name="cylinder_32" geometry={nodes.cylinder_32.geometry} material={nodes.cylinder_32.material} position={[1.738, 0.298, 2.531]} rotation={[0, 0, Math.PI / 2]} />
            </group>
            <group name="bone3" position={[-1.938, 0.2, -2.875]}>
              <mesh name="cylinder_33" geometry={nodes.cylinder_33.geometry} material={nodes.cylinder_33.material} position={[0.125, 0.556, -0.825]} rotation={[0, 0, Math.PI / 2]} />
              <mesh name="cylinder_34" geometry={nodes.cylinder_34.geometry} material={nodes.cylinder_34.material} position={[0.125, 0.444, 5.05]} rotation={[0, 0, Math.PI / 2]} />
              <mesh name="cylinder_35" geometry={nodes.cylinder_35.geometry} material={nodes.cylinder_35.material} position={[-1.738, 0.298, 2.531]} rotation={[0, 0, -Math.PI / 2]} />
              <mesh name="cylinder_36" geometry={nodes.cylinder_36.geometry} material={nodes.cylinder_36.material} position={[-1.738, 0.236, 2.531]} rotation={[0, 0, -Math.PI / 2]} />
              <mesh name="cylinder_37" geometry={nodes.cylinder_37.geometry} material={nodes.cylinder_37.material} position={[-4.813, 0.156, 0]} rotation={[0, 0, Math.PI / 2]} />
              <mesh name="cylinder_38" geometry={nodes.cylinder_38.geometry} material={nodes.cylinder_38.material} position={[-4.813, 0.156, 0]} rotation={[0, 0, Math.PI / 2]} />
              <mesh name="cylinder_39" geometry={nodes.cylinder_39.geometry} material={nodes.cylinder_39.material} position={[-4.813, 0.156, 0]} rotation={[0, 0, Math.PI / 2]} />
              <mesh name="cylinder_40" geometry={nodes.cylinder_40.geometry} material={nodes.cylinder_40.material} position={[-4.813, 0.156, 0]} rotation={[0, 0, Math.PI / 2]} />
              <mesh name="cylinder_41" geometry={nodes.cylinder_41.geometry} material={nodes.cylinder_41.material} position={[-4.813, 0.156, 0]} rotation={[0, 0, Math.PI / 2]} />
              <mesh name="cylinder_42" geometry={nodes.cylinder_42.geometry} material={nodes.cylinder_42.material} position={[-4.813, 0.156, 0]} rotation={[0, 0, Math.PI / 2]} />
              <mesh name="cylinder_43" geometry={nodes.cylinder_43.geometry} material={nodes.cylinder_43.material} position={[-4.813, 0.156, 0]} rotation={[0, 0, Math.PI / 2]} />
              <mesh name="cylinder_44" geometry={nodes.cylinder_44.geometry} material={nodes.cylinder_44.material} position={[-4.813, 0.156, 0]} rotation={[0, 0, Math.PI / 2]} />
              <mesh name="cylinder_45" geometry={nodes.cylinder_45.geometry} material={nodes.cylinder_45.material} position={[-4.813, 0.156, 0]} rotation={[0, 0, Math.PI / 2]} />
              <mesh name="cylinder_46" geometry={nodes.cylinder_46.geometry} material={nodes.cylinder_46.material} position={[-4.813, 0.156, 0]} rotation={[0, 0, Math.PI / 2]} />
            </group>
            <mesh name="cylinder_3" geometry={nodes.cylinder_3.geometry} material={nodes.cylinder_3.material} position={[-2, 0.25, 0.25]} rotation={[0, 0, Math.PI / 2]} />
            <mesh name="cylinder_4" geometry={nodes.cylinder_4.geometry} material={nodes.cylinder_4.material} position={[-2, 0.25, 0.25]} rotation={[0, 0, Math.PI / 2]} />
          </group>
          <group name="bone5" />
          <group name="bone6">
            <group name="bone7">
              <group name="bone8" position={[-1.933, 1.689, -1.297]}>
                <group name="bone9" position={[1.933, -1.689, 1.297]}>
                  <mesh name="cuboid_41" geometry={nodes.cuboid_41.geometry} material={nodes.cuboid_41.material} />
                  <mesh name="cuboid_42" geometry={nodes.cuboid_42.geometry} material={nodes.cuboid_42.material} />
                  <mesh name="cuboid_43" geometry={nodes.cuboid_43.geometry} material={nodes.cuboid_43.material} />
                </group>
                <mesh name="sphere_1" geometry={nodes.sphere_1.geometry} material={nodes.sphere_1.material} position={[0.939, -0.036, 1.063]} rotation={[0.043, 0.006, 0.131]} />
                <mesh name="cylinder_52" geometry={nodes.cylinder_52.geometry} material={nodes.cylinder_52.material} position={[0.938, 0.063, 0.625]} rotation={[0, 0, -1.44]} />
                <mesh name="sphere_2" geometry={nodes.sphere_2.geometry} material={nodes.sphere_2.material} position={[2.577, -0.03, 0.987]} rotation={[0.042, 0.011, 0]} />
                <mesh name="cylinder_53" geometry={nodes.cylinder_53.geometry} material={nodes.cylinder_53.material} position={[2.527, -0.043, 0.688]} rotation={[0, 0, -1.745]} />
              </group>
              <mesh name="cylinder_47" geometry={nodes.cylinder_47.geometry} material={nodes.cylinder_47.material} position={[0.063, 2.25, 0]} rotation={[-Math.PI / 2, 0, 0]} />
              <mesh name="cylinder_48" geometry={nodes.cylinder_48.geometry} material={nodes.cylinder_48.material} position={[0, 2.25, 0]} rotation={[-Math.PI / 2, 0, 0]} />
              <mesh name="cylinder_49" geometry={nodes.cylinder_49.geometry} material={nodes.cylinder_49.material} position={[-1.933, 1.689, -1.297]} rotation={[-Math.PI / 2, 0, 0]} />
              <mesh name="cylinder_50" geometry={nodes.cylinder_50.geometry} material={nodes.cylinder_50.material} position={[0, 2.25, 0]} rotation={[-Math.PI / 2, 0, 0]} />
            </group>
            <mesh name="sphere" geometry={nodes.sphere.geometry} material={nodes.sphere.material} />
          </group>
          <group name="bone11">
            <mesh name="cuboid_5" geometry={nodes.cuboid_5.geometry} material={nodes.cuboid_5.material} />
            <mesh name="cylinder_5" geometry={nodes.cylinder_5.geometry} material={nodes.cylinder_5.material} position={[0, 2.344, 0]} rotation={[0, 0, -Math.PI / 2]} />
          </group>
          <group name="bone18" position={[-0.062, 2.25, -1.595]} />
          <group name="bone19" />
          <group name="bone20">
            <mesh name="cuboid_6" geometry={nodes.cuboid_6.geometry} material={nodes.cuboid_6.material} position={[-0.438, 1.612, 0.75]} />
            <mesh name="cuboid_7" geometry={nodes.cuboid_7.geometry} material={nodes.cuboid_7.material} position={[-0.5, 1.206, -0.845]} rotation={[-Math.PI, 0, 0]} />
            <mesh name="cuboid_8" geometry={nodes.cuboid_8.geometry} material={nodes.cuboid_8.material} position={[-0.487, 1.311, 0.263]} rotation={[1.597, -1.527, -3.114]} />
            <mesh name="cylinder_6" geometry={nodes.cylinder_6.geometry} material={nodes.cylinder_6.material} position={[-0.438, 1.612, 0.75]} rotation={[-Math.PI / 2, 0, 0]} />
            <mesh name="cuboid_9" geometry={nodes.cuboid_9.geometry} material={nodes.cuboid_9.material} position={[-0.399, 1.177, 0.264]} rotation={[-1.572, 0, -0.001]} />
            <mesh name="cuboid_10" geometry={nodes.cuboid_10.geometry} material={nodes.cuboid_10.material} position={[-0.399, 1.177, 0.264]} rotation={[-1.572, 0, -0.001]} />
            <mesh name="cuboid_11" geometry={nodes.cuboid_11.geometry} material={nodes.cuboid_11.material} position={[-0.492, 1.302, 0.264]} rotation={[-0.035, 1.57, -1.537]} />
          </group>
          <group name="bone21" position={[0, 0.25, 0]}>
            <mesh name="cuboid_12" geometry={nodes.cuboid_12.geometry} material={nodes.cuboid_12.material} position={[-0.487, 1.311, 0.263]} rotation={[1.597, -1.527, -3.114]} />
            <mesh name="cylinder_7" geometry={nodes.cylinder_7.geometry} material={nodes.cylinder_7.material} position={[-0.438, 1.612, 0.75]} rotation={[-Math.PI / 2, 0, 0]} />
            <mesh name="cuboid_13" geometry={nodes.cuboid_13.geometry} material={nodes.cuboid_13.material} position={[-0.438, 1.612, 0.75]} />
            <mesh name="cuboid_14" geometry={nodes.cuboid_14.geometry} material={nodes.cuboid_14.material} position={[-0.5, 1.206, -0.845]} rotation={[-Math.PI, 0, 0]} />
            <mesh name="cuboid_15" geometry={nodes.cuboid_15.geometry} material={nodes.cuboid_15.material} position={[-0.399, 1.177, 0.264]} rotation={[-1.572, 0, -0.001]} />
            <mesh name="cuboid_16" geometry={nodes.cuboid_16.geometry} material={nodes.cuboid_16.material} position={[-0.492, 1.302, 0.264]} rotation={[-0.035, 1.57, -1.537]} />
            <mesh name="cuboid_17" geometry={nodes.cuboid_17.geometry} material={nodes.cuboid_17.material} position={[-0.399, 1.177, 0.264]} rotation={[-1.572, 0, -0.001]} />
          </group>
          <group name="bone26">
            <mesh name="cylinder_8" geometry={nodes.cylinder_8.geometry} material={nodes.cylinder_8.material} position={[0, 0.25, 3.813]} rotation={[-Math.PI / 2, 0, 0]} />
            <mesh name="cylinder_9" geometry={nodes.cylinder_9.geometry} material={nodes.cylinder_9.material} position={[0.75, 0.375, 3.7]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} />
            <mesh name="cylinder_10" geometry={nodes.cylinder_10.geometry} material={nodes.cylinder_10.material} position={[0.75, 0.375, 3.7]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} />
          </group>
          <group name="bone27" position={nodes.bone27.position}>
            <group name="bone28" position={nodes.bone28.position}>
              <mesh name="cylinder_51" geometry={nodes.cylinder_51.geometry} material={nodes.cylinder_51.material} position={[0, 0.156, 1.125]} rotation={[0, 0, -Math.PI / 2]} />
            </group>
            <mesh name="cuboid_18" geometry={nodes.cuboid_18.geometry} material={nodes.cuboid_18.material} position={[-1, 0.885, 3.224]} rotation={[Math.PI / 9, 0, 0]} />
            <mesh name="cuboid_19" geometry={nodes.cuboid_19.geometry} material={nodes.cuboid_19.material} position={[-1, 0.885, 3.224]} rotation={[Math.PI / 9, 0, 0]} />
            <mesh name="cuboid_20" geometry={nodes.cuboid_20.geometry} material={nodes.cuboid_20.material} position={[-1, 0.885, 3.224]} rotation={[Math.PI / 9, 0, 0]} />
            <mesh name="cuboid_21" geometry={nodes.cuboid_21.geometry} material={nodes.cuboid_21.material} position={[-1, 0.885, 3.224]} rotation={[Math.PI / 9, 0, 0]} />
          </group>
          <group name="bone29">
            <mesh name="cuboid_22" geometry={nodes.cuboid_22.geometry} material={nodes.cuboid_22.material} position={[-0.189, 1.221, 2.014]} rotation={[0.044, 0, 0]} />
            <mesh name="cuboid_23" geometry={nodes.cuboid_23.geometry} material={nodes.cuboid_23.material} position={[-0.189, 1.221, 2.014]} rotation={[0.044, 0, 0]} />
            <mesh name="cylinder_11" geometry={nodes.cylinder_11.geometry} material={nodes.cylinder_11.material} position={[0.375, 1.094, 2.312]} rotation={[1.745, 0, 0]} />
          </group>
          <group name="bone30" position={[-0.509, 1.219, 1.459]}>
            <mesh name="cuboid_24" geometry={nodes.cuboid_24.geometry} material={nodes.cuboid_24.material} position={[0.509, -1.219, -1.459]} />
            <mesh name="cuboid_25" geometry={nodes.cuboid_25.geometry} material={nodes.cuboid_25.material} position={[0.166, 0.062, 0.104]} rotation={[0.698, 0, 0]} />
            <mesh name="cuboid_26" geometry={nodes.cuboid_26.geometry} material={nodes.cuboid_26.material} position={[0.166, 0.062, 0.104]} rotation={[0.698, 0, 0]} />
            <mesh name="cylinder_12" geometry={nodes.cylinder_12.geometry} material={nodes.cylinder_12.material} position={[0.166, 0.062, 0.104]} rotation={[0.698, 0, Math.PI / 2]} />
            <mesh name="cylinder_13" geometry={nodes.cylinder_13.geometry} material={nodes.cylinder_13.material} position={[0.166, 0.062, 0.104]} rotation={[0.698, 0, Math.PI / 2]} />
            <mesh name="cylinder_14" geometry={nodes.cylinder_14.geometry} material={nodes.cylinder_14.material} position={[0.166, 0.062, 0.104]} rotation={[0.698, 0, Math.PI / 2]} />
          </group>
          <group name="bone31">
            <mesh name="cuboid_27" geometry={nodes.cuboid_27.geometry} material={nodes.cuboid_27.material} position={[-0.688, 1.5, 0.641]} rotation={[Math.PI / 3, 0, 0]} />
          </group>
          <group name="bone32">
            <mesh name="cuboid_28" geometry={nodes.cuboid_28.geometry} material={nodes.cuboid_28.material} />
            <mesh name="cylinder_15" geometry={nodes.cylinder_15.geometry} material={nodes.cylinder_15.material} position={[-0.1, 4.014, -3.75]} rotation={[-Math.PI / 2, 0, 0]} />
            <mesh name="cylinder_16" geometry={nodes.cylinder_16.geometry} material={nodes.cylinder_16.material} position={[-0.1, 4.014, -3.75]} rotation={[-Math.PI / 2, 0, 0]} />
            <mesh name="cuboid_29" geometry={nodes.cuboid_29.geometry} material={nodes.cuboid_29.material} />
          </group>
          <group name="bone33">
            <mesh name="cuboid_30" geometry={nodes.cuboid_30.geometry} material={nodes.cuboid_30.material} position={[-1.188, 0.613, -3.8]} rotation={[-0.654, 0, 0]} />
            <mesh name="cuboid_31" geometry={nodes.cuboid_31.geometry} material={nodes.cuboid_31.material} position={[1.188, 0.613, -3.8]} rotation={[-0.654, 0, 0]} />
          </group>
          <group name="bone34">
            <group name="bone35">
              <mesh name="cuboid_38" geometry={nodes.cuboid_38.geometry} material={nodes.cuboid_38.material} />
              <mesh name="cuboid_39" geometry={nodes.cuboid_39.geometry} material={nodes.cuboid_39.material} position={[-1.133, 1.208, -2.938]} rotation={[0, -0.305, 0]} />
              <mesh name="cuboid_40" geometry={nodes.cuboid_40.geometry} material={nodes.cuboid_40.material} position={[-1.009, 1.208, -2.899]} rotation={nodes.cuboid_40.rotation} />
            </group>
            <mesh name="cylinder_17" geometry={nodes.cylinder_17.geometry} material={nodes.cylinder_17.material} />
          </group>
          <mesh name="cuboid" geometry={nodes.cuboid.geometry} material={nodes.cuboid.material} />
        </group>
      </group>
    </group>
  )
}
