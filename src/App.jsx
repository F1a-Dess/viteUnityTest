import "./App.css";
import Unity, { UnityContext } from "react-unity-webgl";

const unityContext = new UnityContext({

  loaderUrl: "/asset/build.loader.js",
  dataUrl: "/asset/build.data.unityweb",
  frameworkUrl: "/asset/build.framework.js.unityweb",
  codeUrl: "/asset/build.wasm.unityweb"
});


function App() {

  return (
    <div>
      <Unity
        style={{
          width: "100%",

          justifySelf:"center",
          alignSelf:"center"
        }}
        unityContext={unityContext}
        />
    </div>
  );
}

export default App
