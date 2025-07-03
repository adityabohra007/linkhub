// import Image from "next/image";

// import { ReactFlow } from "@xyflow/react";
// import "@xyflow/react/dist/style.css";
import Link from "next/link";
export default function Home() {
  const initialNodes = [
    { id: "1", position: { x: 0, y: 0 }, data: { label: "1" } },
    { id: "2", position: { x: 0, y: 100 }, data: { label: "2" } },
  ];
  const initialEdges = [{ id: "e1-2", source: "1", target: "2" }];

  return (
    <>
      <div style={{ width: "100vw", height: "100vh" }}>
        <div>LinkHanger Home</div>
        {/* <Link href="/login">Login</Link> */}
      </div>
      {/* <ReactFlow nodes={initialNodes} edges={initialEdges} /> */}
    </>
  );
}
