// ArrowSVGInline.tsx
import { forwardRef, Ref } from "react";
import { useTPACKStore } from "../../stores/useTPACKStore";

const TPACKSVG = forwardRef<SVGSVGElement>((props, ref: Ref<SVGSVGElement>) => {
  const { selectedPath, selectPath } = useTPACKStore();

  const handlePathClick = (pathId: string) => {
    switch (pathId) {
      case "path1":
        selectPath(
          pathId,
          "New Headline for Path 1",
          "Description for Path 1."
        );
        break;
      case "path2":
        selectPath(
          pathId,
          "New Headline for Path 2",
          "Description for Path 2."
        );
        break;
      case "path3":
        selectPath(
          pathId,
          "New Headline for Path 3",
          "Description for Path 3."
        );
        break;
      case "path4":
        selectPath(
          pathId,
          "Technologisches Pädagogisches Inhaltswissen",
          "Dies ist das zentrale Konzept des TPACK-Rahmenmodells und beschreibt das optimale Zusammenspiel von Technologie (TK), Pädagogik (PK) und Fachwissen (CK) in der Unterrichtspraxis."
        );
        break;
      case "path5":
        selectPath(
          pathId,
          "New Headline for Path 5",
          "Description for Path 5."
        );
        break;
      case "path6":
        selectPath(
          pathId,
          "New Headline for Path 6",
          "Description for Path 6."
        );
        break;
      case "path7":
        selectPath(
          pathId,
          "New Headline for Path 7",
          "Description for Path 7."
        );
        break;
      case "path8":
        selectPath(
          pathId,
          "New Headline for Path 8",
          "Description for Path 8."
        );
        break;
    }
  };
  return (
    <svg
      ref={ref}
      viewBox="0 0 540 540"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M404.162 179.906C404.162 186.796 403.641 193.565 402.636 200.176C388.288 194.889 372.785 192.003 356.61 192.003C323.582 192.003 293.355 204.035 270.049 223.969C246.743 204.035 216.517 192.003 183.489 192.003C167.313 192.003 151.808 194.889 137.46 200.176C136.455 193.566 135.934 186.797 135.934 179.906C135.934 105.952 195.979 46 270.048 46C344.117 46 404.162 105.952 404.162 179.906Z"
        fill={selectedPath === "path1" ? "#AAFE83" : "#8691DA"}
        onClick={() => handlePathClick("path1")}
      />
      <text
        x="270"
        y="150"
        textAnchor="middle"
        fill={selectedPath === "path1" ? "#0D0D0D" : "#F2F2F2"}
        fontSize="16px"
        fontFamily="Blatant"
        onClick={() => handlePathClick("path1")}
        style={{ cursor: "pointer" }}
      >
        TK
      </text>
      <path
        d="M270.047 427.849C298.764 403.288 316.975 366.732 316.975 325.909C316.975 319.118 316.471 312.445 315.499 305.925C361.058 289.542 395.173 249.229 402.633 200.176C453.679 218.984 490.096 268.18 490.096 325.909C490.096 399.863 430.331 459.815 356.607 459.815C323.58 459.815 293.353 447.782 270.047 427.849Z"
        fill={selectedPath === "path2" ? "#AAFE83" : "#8691DA"}
        onClick={() => handlePathClick("path2")}
      />
      <text
        x="390"
        y="350"
        textAnchor="middle"
        fill={selectedPath === "path2" ? "#0D0D0D" : "#F2F2F2"}
        fontSize="16px"
        fontFamily="Blatant"
        onClick={() => handlePathClick("path2")}
        style={{ cursor: "pointer" }}
      >
        CK
      </text>
      <path
        d="M137.46 200.176C86.4155 218.986 50 268.181 50 325.909C50 399.863 109.765 459.815 183.489 459.815C216.517 459.815 246.743 447.782 270.049 427.849C241.332 403.288 223.121 366.732 223.121 325.909C223.121 319.118 223.625 312.445 224.597 305.926C179.037 289.543 144.921 249.23 137.46 200.176Z"
        fill={selectedPath === "path3" ? "#AAFE83" : "#8691DA"}
        onClick={() => handlePathClick("path3")}
      />
      <text
        x="140"
        y="350"
        textAnchor="middle"
        fill={selectedPath === "path3" ? "#0D0D0D" : "#F2F2F2"}
        fontSize="16px"
        fontFamily="Blatant"
        onClick={() => handlePathClick("path3")}
        style={{ cursor: "pointer" }}
      >
        PK
      </text>
      <path
        d="M224.598 305.926C229.471 273.256 246.109 244.444 270.049 223.969C293.989 244.444 310.628 273.255 315.501 305.925C301.307 311.03 286.003 313.811 270.048 313.811C254.094 313.811 238.791 311.03 224.598 305.926Z"
        fill={selectedPath === "path4" ? "#AAFE83" : "#182EC0"}
        onClick={() => handlePathClick("path4")}
      />
      <text
        x="270"
        y="285"
        textAnchor="middle"
        fill={selectedPath === "path4" ? "#0D0D0D" : "#F2F2F2"}
        fontSize="16px"
        fontFamily="Blatant"
        onClick={() => handlePathClick("path4")}
        style={{ cursor: "pointer" }}
      >
        TPACK
      </text>
      <path
        d="M315.501 305.925C301.307 311.03 286.003 313.811 270.048 313.811C254.094 313.811 238.79 311.03 224.597 305.926C223.625 312.445 223.121 319.118 223.121 325.909C223.121 366.732 241.332 403.288 270.049 427.849C298.766 403.288 316.977 366.732 316.977 325.909C316.977 319.118 316.473 312.445 315.501 305.925Z"
        fill={selectedPath === "path5" ? "#AAFE83" : "#4F60CD"}
        onClick={() => handlePathClick("path5")}
      />
      <text
        x="270"
        y="360"
        textAnchor="middle"
        fill={selectedPath === "path5" ? "#0D0D0D" : "#F2F2F2"}
        fontSize="16px"
        fontFamily="Blatant"
        onClick={() => handlePathClick("path5")}
        style={{ cursor: "pointer" }}
      >
        PCK
      </text>
      <path
        d="M315.502 305.926C361.062 289.542 395.177 249.229 402.637 200.176C388.29 194.889 372.787 192.003 356.611 192.003C323.583 192.003 293.357 204.035 270.051 223.969C293.991 244.444 310.629 273.255 315.502 305.926Z"
        fill={selectedPath === "path6" ? "#AAFE83" : "#4F60CD"}
        onClick={() => handlePathClick("path6")}
      />
      <text
        x="340"
        y="244"
        textAnchor="middle"
        fill={selectedPath === "path6" ? "#0D0D0D" : "#F2F2F2"}
        fontSize="16px"
        fontFamily="Blatant"
        onClick={() => handlePathClick("path6")}
        style={{ cursor: "pointer" }}
      >
        TCK
      </text>
      <path
        d="M183.489 192.003C167.313 192.003 151.809 194.889 137.461 200.176C144.922 249.23 179.038 289.543 224.597 305.926C229.471 273.255 246.109 244.444 270.049 223.968C246.743 204.035 216.517 192.003 183.489 192.003Z"
        fill={selectedPath === "path7" ? "#AAFE83" : "#4F60CD"}
        onClick={() => handlePathClick("path7")}
      />
      <text
        x="200"
        y="244"
        textAnchor="middle"
        fill={selectedPath === "path7" ? "#0D0D0D" : "#F2F2F2"}
        fontSize="16px"
        fontFamily="Blatant"
        onClick={() => handlePathClick("path7")}
        style={{ cursor: "pointer" }}
      >
        TPK
      </text>
      <ellipse
        cx="270"
        cy="270"
        rx="268"
        ry="268"
        stroke="#182EC0"
        strokeWidth="3"
        strokeDasharray="6 6"
      />
    </svg>
  );
});

export default TPACKSVG;
