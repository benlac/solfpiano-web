import * as React from 'react';
import { downkeyY } from '../helpers/levels';
import { useStore } from '../store/store';

interface Props {
  upKey: Array<number>;
  downKey: Array<number>;
}

const SheetMusic = (props: Props) => {
  const [{ game }] = useStore();
  const { upKey, downKey } = props;

  React.useEffect(() => {
    console.log('count', game.count);
  }, [game.count]);

  const calculX = () => {
    let res = 82;
    if (game.count % 2 === 1) {
      res = res + 22;
    }
    return res;
  };

  React.useEffect(() => {
    calculX();
  }, [game.count]);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="210mm"
      height="60mm"
      id="svg2"
    >
      <defs id="defs4">
        <filter id="e">
          <feGaussianBlur id="feGaussianBlur3098" stdDeviation={15.17} />
        </filter>
        <style id="style6" type="text/css">
          {'.str1{stroke:#131516;stroke-width:3}.fil1{fill:#131516}'}
        </style>
      </defs>
      <g id="layer1">
        <g id="g3451" transform="translate(0 55.714)">
          <path
            style={{
              fill: '#131516',
              stroke: '#131516',
              strokeWidth: 0.04558944,
            }}
            id="path19"
            d="M22.36 125.874c2.308-1.692 4.031-2.973 5.141-3.858 1.11-.87 2.278-1.961 3.476-3.258A19.03 19.03 0 0 0 34 114.362c.643-1.202 1.198-2.593 1.65-4.174.453-1.566.687-3.084.73-4.523 0-1.344-.16-2.625-.496-3.827-.321-1.217-.876-2.213-1.665-3.02-.789-.79-1.81-1.186-3.081-1.186-1.227 0-2.38.269-3.462.79-1.066.538-1.825 1.392-2.249 2.594 0 .11-.058.253-.146.459.03.253.146.442.365.585.22.142.41.205.585.205.087 0 .336-.047.715-.142.395-.095.716-.158.979-.158.774 0 1.46.3 2.088.885.613.585.92 1.297.92 2.135 0 .601-.16 1.17-.467 1.692a3.35 3.35 0 0 1-1.27 1.25c-.541.316-1.14.458-1.782.458-1.169 0-2.162-.38-2.98-1.154-.803-.791-1.212-1.787-1.212-3.037 0-1.597.453-2.972 1.344-4.143a8.308 8.308 0 0 1 3.446-2.624c1.388-.601 2.79-.886 4.22-.886 1.564 0 3.053.427 4.44 1.297 1.403.854 2.498 2.04 3.316 3.51a9.738 9.738 0 0 1 1.241 4.776c0 3.036-.935 5.85-2.804 8.46-1.87 2.609-4.177 4.87-6.937 6.8-1.84 1.312-4.82 3.083-8.923 5.312l-.204-.822zm20.286-24.463c0-.569.19-1.043.57-1.423a1.767 1.767 0 0 1 1.357-.585c.468 0 .906.222 1.3.648.394.412.584.902.584 1.44 0 .569-.204 1.059-.584 1.454-.409.38-.862.57-1.373.57-.54 0-.978-.19-1.329-.617-.35-.411-.525-.902-.525-1.487zm0 8.286c0-.569.19-1.06.54-1.439.365-.395.818-.585 1.387-.585.468 0 .891.206 1.3.633.38.427.584.885.584 1.391 0 .617-.19 1.107-.555 1.503-.38.395-.818.6-1.329.6a1.84 1.84 0 0 1-1.387-.585c-.35-.38-.54-.885-.54-1.518z"
            className="fil1 str1"
          />
          <g transform="matrix(.98465 0 0 1.0261 6.789 -6.54)" id="g3213">
            <g id="g3210">
              <path
                d="M26.016 76.029c.012 3.973 10.084 3.467 10.05-3.083.014-6.385-9.621-42.107-9.73-48.94-.112-5.42 3.282-11.498 6.19-11.432 2.303.066 4.468 4.632 4.456 10.315.175 18.38-18.21 17.191-18.21 29.75 0 8.118 7.697 10.262 11.546 10.262 13.033-.075 10.846-13.785 2.537-13.785-4.9-.153-9.185 5.667-2.712 10.492-10.934-4.212-5.073-14.397 3.586-14.473 11.546.076 13.558 18.606-3.411 18.686-10.147.075-14.433-7.736-14.345-13.862 0-11.793 19.855-18.609 19.593-28.564 0-6.28-7.435-3.446-7.61 6.663.175 6.279 9.447 39.436 9.36 44.569 0 10.566-15.483 7.122-15.483 1.76.088-7.657 9.097-2.22 6.298-1.99-2.187 3.369-2.115 3.632-2.115 3.632z"
                style={{
                  fill: '#000',
                  stroke: '#000',
                  strokeWidth: 0.50142539,
                }}
                id="path26"
              />
            </g>
            <path
              id="path28"
              style={{
                fill: '#000',
                stroke: '#000',
                strokeWidth: 0.50142539,
              }}
              d="M30.211 72.697c0 1.779-1.694 3.224-3.78 3.224s-3.78-1.445-3.78-3.224c0-1.778 1.694-3.218 3.78-3.218s3.78 1.44 3.78 3.218z"
            />
          </g>
          <g
            id="b"
            transform="matrix(.0885 0 0 .23144 2.832 15.315)"
            style={{
              fill: '#000',
            }}
          >
            <path
              id="a"
              d="M4 265v-4c26-6 37-33 37-71V90c0-30 5-51 15-64S87 7 117 6v8C81 24 81 65 81 86v100c0 39-6 64-37 77"
              style={{
                fill: '#000',
              }}
            />
            <use
              xlinkHref="#a"
              transform="matrix(1 0 0 -1 0 526)"
              id="use3106"
              x={0}
              y={0}
              width={740}
              height={560}
              style={{
                fill: '#000',
              }}
            />
          </g>
          <path
            id="path3380"
            d="M20 18.362h710"
            style={{
              fill: 'none',
              stroke: '#000',
              strokeWidth: 1,
              strokeLinecap: 'butt',
              strokeLinejoin: 'miter',
              strokeOpacity: 1,
            }}
          />
          <path
            id="path3380-1"
            d="M20 28.362h710"
            style={{
              fill: 'none',
              stroke: '#000',
              strokeWidth: 1,
              strokeLinecap: 'butt',
              strokeLinejoin: 'miter',
              strokeOpacity: 1,
            }}
          />
          <path
            id="path3380-4"
            d="M20 38.362h710"
            style={{
              fill: 'none',
              stroke: '#000',
              strokeWidth: 1,
              strokeLinecap: 'butt',
              strokeLinejoin: 'miter',
              strokeOpacity: 1,
            }}
          />
          <path
            id="path3380-2"
            d="M20 48.362h710"
            style={{
              fill: 'none',
              stroke: '#000',
              strokeWidth: 1,
              strokeLinecap: 'butt',
              strokeLinejoin: 'miter',
              strokeOpacity: 1,
            }}
          />
          <path
            id="path3380-3"
            d="M20 58.362h710"
            style={{
              fill: 'none',
              stroke: '#000',
              strokeWidth: 1,
              strokeLinecap: 'butt',
              strokeLinejoin: 'miter',
              strokeOpacity: 1,
            }}
          />
          <path
            id="path3380-22"
            d="M20.536 95.684h710"
            style={{
              fill: 'none',
              stroke: '#000',
              strokeWidth: 1,
              strokeLinecap: 'butt',
              strokeLinejoin: 'miter',
              strokeOpacity: 1,
            }}
          />
          <path
            id="path3380-1-1"
            d="M20.536 105.684h710"
            style={{
              fill: 'none',
              stroke: '#000',
              strokeWidth: 1,
              strokeLinecap: 'butt',
              strokeLinejoin: 'miter',
              strokeOpacity: 1,
            }}
          />
          <path
            id="path3380-4-6"
            d="M20.536 115.684h710"
            style={{
              fill: 'none',
              stroke: '#000',
              strokeWidth: 1,
              strokeLinecap: 'butt',
              strokeLinejoin: 'miter',
              strokeOpacity: 1,
            }}
          />
          <path
            id="path3380-2-8"
            d="M20.536 125.684h710"
            style={{
              fill: 'none',
              stroke: '#000',
              strokeWidth: 1,
              strokeLinecap: 'butt',
              strokeLinejoin: 'miter',
              strokeOpacity: 1,
            }}
          />
          <path
            id="path3380-3-5"
            d="M20.536 135.684h710"
            style={{
              fill: 'none',
              stroke: '#000',
              strokeWidth: 1,
              strokeLinecap: 'butt',
              strokeLinejoin: 'miter',
              strokeOpacity: 1,
            }}
          />
          {/* <line
            x1="80"
            x2="80"
            y1="200"
            y2="0"
            style={{
              fill: 'none',
              stroke: '#000',
              strokeWidth: 1,
              strokeLinecap: 'butt',
              strokeLinejoin: 'miter',
              strokeOpacity: 1,
            }}
          ></line> */}
          <line
            x1={`${82 + game.count * 22}`}
            x2={`${82 + game.count * 22}`}
            y1="200"
            y2="0"
            style={{
              fill: 'none',
              stroke: '#000',
              strokeWidth: 1,
              strokeLinecap: 'butt',
              strokeLinejoin: 'miter',
              strokeOpacity: 1,
            }}
          ></line>
          {upKey.map((el, i) => (
            <>
              <path
                d="M303.137 299.651c-3.396 1.82-5.205 5.115-4.092 7.593 1.187 2.644 5.267 3.39 9.107 1.665 3.84-1.724 5.992-5.269 4.804-7.913-1.187-2.643-5.267-3.39-9.106-1.665-.24.108-.486.199-.713.32z"
                transform={`rotate(180 ${194 + i * 11} ${el})`}
                opacity={0.9}
                fill="#000"
                fillOpacity={1}
                fillRule="evenodd"
                stroke="none"
                strokeWidth={0.2}
                strokeMiterlimit={4}
                strokeDashoffset={0}
                strokeOpacity={1}
              />
              <path
                d="M299.505 305.984v33.588"
                transform={`rotate(180 ${194 + i * 11} ${el})`}
                fill="none"
                fillOpacity={0.75}
                fillRule="evenodd"
                stroke="#000"
                strokeWidth={1.5}
                strokeLinecap="butt"
                strokeLinejoin="miter"
                strokeMiterlimit={4}
                strokeDasharray="none"
                strokeOpacity={1}
              />
            </>
          ))}
          {downKey.map((el, i) => (
            <>
              <path
                d="M303.137 299.651c-3.396 1.82-5.205 5.115-4.092 7.593 1.187 2.644 5.267 3.39 9.107 1.665 3.84-1.724 5.992-5.269 4.804-7.913-1.187-2.643-5.267-3.39-9.106-1.665-.24.108-.486.199-.713.32z"
                transform={`rotate(180 ${194 + i * 11} ${el})`}
                opacity={0.9}
                fill="#000"
                fillOpacity={1}
                fillRule="evenodd"
                stroke="none"
                strokeWidth={0.2}
                strokeMiterlimit={4}
                strokeDashoffset={0}
                strokeOpacity={1}
              />
              <path
                d="M299.505 305.984v33.588"
                transform={`rotate(180 ${194 + i * 11} ${el})`}
                fill="none"
                fillOpacity={0.75}
                fillRule="evenodd"
                stroke="#000"
                strokeWidth={1.5}
                strokeLinecap="butt"
                strokeLinejoin="miter"
                strokeMiterlimit={4}
                strokeDasharray="none"
                strokeOpacity={1}
              />
            </>
          ))}
        </g>
      </g>
    </svg>
  );
};

export default SheetMusic;
