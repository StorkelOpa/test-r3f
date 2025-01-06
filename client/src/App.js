import { Canvas } from '@react-three/fiber';
import { 
  useGLTF, 
  Stage, 
  OrbitControls,
  Environment,
  Html
} from "@react-three/drei";
import { Suspense, useRef } from 'react';

function Model(props) {
  const { scene } = useGLTF("/testbake.glb");
  return <primitive object={scene} {...props} />;
}

function LoadingScreen() {
  return (
    <Html center>
      <div style={{ color: 'white', fontSize: '1.5rem' }}>
        Lade Modell...
      </div>
    </Html>
  );
}

function App() {
  const controlsRef = useRef();

  const handleReset = () => {
    if (controlsRef.current) {
      controlsRef.current.reset();
    }
  };

  return (
    <div style={{ height: '100vh', width: '100%', position: 'relative' }}>
      <Canvas 
        dpr={[1, 2]} 
        camera={{ fov: 45, position: [0, 0, 5] }}
        shadows
      >
        <Suspense fallback={<LoadingScreen />}>
          <color attach="background" args={["#1a1a1a"]} />
          
          <OrbitControls
            ref={controlsRef}
            enableZoom={true}
            enablePan={true}
            minPolarAngle={Math.PI / 4}
            maxPolarAngle={Math.PI - Math.PI / 4}
          />

          <Stage environment="city" intensity={0.5}>
            <Model scale={0.01} />
          </Stage>

          <Environment preset="sunset" />
        </Suspense>
      </Canvas>

      <button 
        onClick={handleReset}
        style={{
          position: 'absolute',
          top: '1rem',
          right: '1rem',
          padding: '0.5rem 1rem',
          backgroundColor: '#3b82f6',
          color: 'white',
          border: 'none',
          borderRadius: '0.25rem',
          cursor: 'pointer'
        }}
      >
        Reset View
      </button>
      
      <div style={{
        position: 'absolute',
        top: '1rem',
        left: '1rem',
        color: 'white'
      }}>
        <p>Nutzen Sie die Maus zum Zoomen und Schwenken</p>
      </div>
    </div>
  );
}

export default App;