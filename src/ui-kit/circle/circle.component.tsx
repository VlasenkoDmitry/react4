import { FC } from "react";
import { CircleProps } from "./circle.types";

// TODO: Rename file. Circle.tsx -> circle.component.tsx. Open API.
// TODO: Add props interface. Add Circle function type. 


const Circle: FC<CircleProps> = ({ color }) => {
  return (
    <svg
      width="38"
      height="38"
      viewBox="0 0 38 38"
      xmlns="http://www.w3.org/2000/svg"
      fill={color}
    >
      <g filter="url(#filter0_d_511_4647)">
        <circle cx="19" cy="17" r="15" />
        <circle cx="19" cy="17" r="14" stroke="white" strokeWidth="2" />
      </g>
      <defs>
        <filter
          id="filter0_d_511_4647"
          x="0"
          y="0"
          width="38"
          height="38"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="2" />
          <feGaussianBlur stdDeviation="2" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_511_4647"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_511_4647"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}

export default Circle;

// export default function Circle({ color }) {
//   return (
//     <svg
//       width="38"
//       height="38"
//       viewBox="0 0 38 38"
//       xmlns="http://www.w3.org/2000/svg"
//       fill={color}
//     >
//       <g filter="url(#filter0_d_511_4647)">
//         <circle cx="19" cy="17" r="15" />
//         <circle cx="19" cy="17" r="14" stroke="white" strokeWidth="2" />
//       </g>
//       <defs>
//         <filter
//           id="filter0_d_511_4647"
//           x="0"
//           y="0"
//           width="38"
//           height="38"
//           filterUnits="userSpaceOnUse"
//           colorInterpolationFilters="sRGB"
//         >
//           <feFlood floodOpacity="0" result="BackgroundImageFix" />
//           <feColorMatrix
//             in="SourceAlpha"
//             type="matrix"
//             values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
//             result="hardAlpha"
//           />
//           <feOffset dy="2" />
//           <feGaussianBlur stdDeviation="2" />
//           <feColorMatrix
//             type="matrix"
//             values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
//           />
//           <feBlend
//             mode="normal"
//             in2="BackgroundImageFix"
//             result="effect1_dropShadow_511_4647"
//           />
//           <feBlend
//             mode="normal"
//             in="SourceGraphic"
//             in2="effect1_dropShadow_511_4647"
//             result="shape"
//           />
//         </filter>
//       </defs>
//     </svg>
//   );
// }
