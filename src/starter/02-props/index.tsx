// type ComponentProps = { name: string; id: number };
// function Component(props: ComponentProps) {
//   return (
//     <div>
//       <h1>Name:{props.name}</h1>
//       <h1>ID:{props.id}</h1>
//     </div>
//   );
// }
// export default Component;
//*------------------------------------
// function Component({ name, id }: { name: string; id: number }) {
//   return (
//     <div>
//       <h1>Name:{name}</h1>
//       <h1>ID:{id}</h1>
//     </div>
//   );
// }
// export default Component;
//*--------------------------------
// type ComponentProps = { name: string; id: number; children?: React.ReactNode };
// function Component({ name, id, children }: ComponentProps) {
//   return (
//     <div>
//       <h1>Name:{name}</h1>
//       <h1>ID:{id}</h1>
//       {children}
//     </div>
//   );
// }
// export default Component;
//*------------------------------------
import { type PropsWithChildren } from "react";
type ComponentProps = PropsWithChildren<{ name: string; id: number }>;
function Component({ name, id, children }: ComponentProps) {
  return (
    <div>
      <h1>Name:{name}</h1>
      <h1>ID:{id}</h1>
      {children}
    </div>
  );
}
export default Component;
