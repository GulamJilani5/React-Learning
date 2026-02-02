; There is a simple technique to improve the performance of your React app...
; It's complementary to using others, such as memo or useMemo.

export default function App(){
const[color, setColor] = useState("blue");

    return (
        <div>
           <input value={color} onChange={(e)=>setColor(e.target.value)}/>
           <SlowComponent/>
        </div>
    )

}

The problem is that the app will re-render <SlowComponent /> whenever the color changes.

instead of that⬆️... do this⬇️

1. // Main App component
   export default function App() {
   return (
   <div>
   {/_ Separate the color selector logic into its own component _/}
   <ColorSelector>
   {/_ SlowComponent is passed as a child, preventing unnecessary re-renders _/}
   <SlowComponent />
   </ColorSelector>
   </div>
   );
   }

2. // ColorSelector component handles color state and rendering
   function ColorSelector({ children }) {
   const [color, setColor] = useState("blue");

return (
<div style={{ color: color }}>
<input
type="text"
value={color}
onChange={(e) => setColor(e.target.value)}
placeholder="Enter a color"
/>
{/_ Render children without causing re-renders on color change (i.e <SlowComponent/> )_/}
{children}
</div>
);
}

3.  function SlowComponent() {
    // Slow component logic here
    return <div>I'm a slow component!</div>;
    }
