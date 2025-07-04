"use client";

import { ToggleSwitch } from "flowbite-react";
import { useState } from "react";

export function AntSwitch() {
  const [switch1, setSwitch1] = useState(false);
  return (
    <>
      <ToggleSwitch checked={switch1}onChange={setSwitch1} />
    </>
  );
}
// export function Component() {
//   const [switch1, setSwitch1] = useState(false);
//   const [switch2, setSwitch2] = useState(true);
//   const [switch3, setSwitch3] = useState(true);

//   return (
//     <div className="flex max-w-md flex-col items-start gap-4">
//       <ToggleSwitch checked={switch1} label="Toggle me" onChange={setSwitch1} />
//       <ToggleSwitch
//         checked={switch2}
//         label="Toggle me (checked)"
//         onChange={setSwitch2}
//       />
//       <ToggleSwitch
//         checked={false}
//         disabled
//         label="Toggle me (disabled)"
//         onChange={() => undefined}
//       />
//       <ToggleSwitch
//         checked={true}
//         disabled
//         label="Toggle me (disabled)"
//         onChange={() => undefined}
//       />
//       <ToggleSwitch checked={switch3} onChange={setSwitch3} />
//     </div>
//   );
// }
