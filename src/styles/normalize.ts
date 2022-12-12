import { css } from 'styled-components';

export const normalize = css`
  html,
  body {
    margin: 0;
    font-family: 'Uniform', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
      Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
      sans-serif;
    padding: 0;
  }

  .no-js * {
    opacity: 1 !important;
    transform: translateY(0) !important;
  }

  h1 {
    font-size: 2em;
    margin: 0;
  }

  hr {
    box-sizing: content-box;
    height: 0;
    overflow: visible;
  }

  pre {
    font-family: monospace, monospace;
    font-size: 1em;
  }

  a {
    background-color: transparent;

    -webkit-tap-highlight-color: transparent;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  abbr[title] {
    border-bottom: none;
    text-decoration: underline;
    text-decoration: underline dotted;
  }

  b,
  strong {
    font-weight: bolder;
  }

  code,
  kbd,
  samp {
    font-family: monospace, monospace;
    font-size: 1em;
  }
  small {
    font-size: 80%;
  }

  sub,
  sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }
  sub {
    bottom: -0.25em;
  }
  sup {
    top: -0.5em;
  }
  img {
    border-style: none;
  }
  button,
  input,
  optgroup,
  select,
  textarea {
    font-family: inherit;
    font-size: 100%;
    line-height: 1.15;
    margin: 0;
  }
  button,
  input {
    overflow: visible;
  }
  button,
  select {
    text-transform: none;
  }
  button,
  [type='button'],
  [type='reset'],
  [type='submit'] {
    -webkit-appearance: button;
  }
  button::-moz-focus-inner,
  [type='button']::-moz-focus-inner,
  [type='reset']::-moz-focus-inner,
  [type='submit']::-moz-focus-inner {
    border-style: none;
    padding: 0;
  }
  button:-moz-focusring,
  [type='button']:-moz-focusring,
  [type='reset']:-moz-focusring,
  [type='submit']:-moz-focusring {
    outline: 1px dotted ButtonText;
  }
  fieldset {
    padding: 0.35em 0.75em 0.625em;
  }
  legend {
    box-sizing: border-box;
    color: inherit;
    display: table;
    max-width: 100%;
    padding: 0;
    white-space: normal;
  }
  progress {
    vertical-align: baseline;
  }
  textarea {
    overflow: auto;
    white-space: normal;
  }
  * {
    box-sizing: border-box;
  }
  [type='checkbox'],
  [type='radio'] {
    box-sizing: border-box;
    padding: 0;
  }
  [type='number']::-webkit-inner-spin-button,
  [type='number']::-webkit-outer-spin-button {
    height: auto;
  }
  [type='search'] {
    -webkit-appearance: textfield;
    outline-offset: -2px;
  }
  [type='search']::-webkit-search-decoration {
    -webkit-appearance: none;
  }
  ::-webkit-file-upload-button {
    -webkit-appearance: button;
    font: inherit;
  }
  details {
    display: block;
  }
  summary {
    display: list-item;
  }
  template {
    display: none;
  }
  [hidden] {
    display: none;
  }

  ::-webkit-scrollbar {
    display: none;
  }

  .changer-container span.active {
    animation: slide-down-in 0.6s forwards;
  }

  .changer-container span.inactive {
    animation: slide-down-out 0.6s forwards;
  }

  #firstLine {
    // justify-content: flex-start;
    flex-direction: row;
  }

  .changer-container {
    height: 70px;
    display: flex;
    position: relative;
    width: 100%;
    overflow: hidden;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-bottom: 10px;
    color: #fff;
  }

  .changer-container > span {
    position: absolute;
    top: 0;
    opacity: 0;
    display: flex;
    align-items: center;
  }

  #moneyLine {
    margin-top: 20px;
    height: 140px;
    text-align: center;
  }

  .textChanger {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 80px 0 50px 0;
  }

  // Maps result items styling
  .pac-container {
    width: 344px !important;
    left: 20px !important;
    border-top: none !important;
  }

  @keyframes slide-up-in {
    0% {
      opacity: 0;
      -webkit-transform: translateX(10%);
      transform: translateX(10%);
    }
    60% {
      opacity: 1;
      -webkit-transform: translateX(0%);
      transform: translateX(0%);
    }
    to {
      opacity: 1;
      -webkit-transform: translateX(0);
      transform: translateX(0);
    }
  }

  @keyframes slide-down-in {
    0% {
      opacity: 0;
      -webkit-transform: translateY(-100%);
      transform: translateY(-100%);
    }
    60% {
      opacity: 1;
      -webkit-transform: translateY(20%);
      transform: translateY(20%);
    }
    to {
      opacity: 1;
      -webkit-transform: translateY(0);
      transform: translateY(0);
    }
  }

  @keyframes slide-down-out {
    0% {
      opacity: 1;
      -webkit-transform: translateY(0);
      transform: translateY(0);
    }
    60% {
      opacity: 0;
      -webkit-transform: translateY(120%);
      transform: translateY(120%);
    }
    to {
      opacity: 0;
      -webkit-transform: translateY(100%);
      transform: translateY(100%);
    }
  }

  @keyframes shake-little {
    2% {
      transform: translate3d(0px, 0px 1px) rotate(0.5deg);
    }
    4% {
      transform: translate3d(0px, 0px, 1px) rotate(0.5deg);
    }
    6% {
      transform: translate3d(1px, 0px, 1px) rotate(0.5deg);
    }
    8% {
      transform: translate3d(0px, 0px, 0px) rotate(0.5deg);
    }
    10% {
      transform: translate3d(1px, 0px, 0px) rotate(0.5deg);
    }
    12% {
      transform: translate3d(1px, 0px, 1px) rotate(0.5deg);
    }
    14% {
      transform: translate3d(0px, 0px, 0px) rotate(0.5deg);
    }
    16% {
      transform: translate3d(1px, 0px, 0px) rotate(0.5deg);
    }
    18% {
      transform: translate3d(0px, 0px, 1px) rotate(0.5deg);
    }
    20% {
      transform: translate3d(0px, 0px, 1px) rotate(0.5deg);
    }
    22% {
      transform: translate3d(1px, 0px, 1px) rotate(0.5deg);
    }
    24% {
      transform: translate3d(0px, 0px, 1px) rotate(0.5deg);
    }
    26% {
      transform: translate3d(0px, 0px, 0px) rotate(0.5deg);
    }
    28% {
      transform: translate3d(1px, 0px, 0px) rotate(0.5deg);
    }
    30% {
      transform: translate3d(1px, 0px, 0px) rotate(0.5deg);
    }
    32% {
      transform: translate3d(0px, 0px, 1px) rotate(0.5deg);
    }
    34% {
      transform: translate3d(0px, 0px, 1px) rotate(0.5deg);
    }
    36% {
      transform: translate3d(0px, 0px, 0px) rotate(0.5deg);
    }
    38% {
      transform: translate3d(1px, 0px, 1px) rotate(0.5deg);
    }
    40% {
      transform: translate3d(1px, 0px, 0px) rotate(0.5deg);
    }
    42% {
      transform: translate3d(0px, 0px, 1px) rotate(0.5deg);
    }
    44% {
      transform: translate3d(0px, 0px, 1px) rotate(0.5deg);
    }
    46% {
      transform: translate3d(0px, 0px, 0px) rotate(0.5deg);
    }
    48% {
      transform: translate3d(0px, 0px, 1px) rotate(0.5deg);
    }
    50% {
      transform: translate3d(0px, 0px, 1px) rotate(0.5deg);
    }
    52% {
      transform: translate3d(1px, 0px, 1px) rotate(0.5deg);
    }
    54% {
      transform: translate3d(0px, 0px, 0px) rotate(0.5deg);
    }
    56% {
      transform: translate3d(0px, 0px, 0px) rotate(0.5deg);
    }
    58% {
      transform: translate3d(0px, 0px, 0px) rotate(0.5deg);
    }
    60% {
      transform: translate3d(0px, 0px, 1px) rotate(0.5deg);
    }
    62% {
      transform: translate3d(0px, 0px, 0px) rotate(0.5deg);
    }
    64% {
      transform: translate3d(1px, 0px, 0px) rotate(0.5deg);
    }
    66% {
      transform: translate3d(0px, 0px, 1px) rotate(0.5deg);
    }
    68% {
      transform: translate3d(0px, 0px, 0px) rotate(0.5deg);
    }
    70% {
      transform: translate3d(1px, 0px, 1px) rotate(0.5deg);
    }
    72% {
      transform: translate3d(1px, 0px, 0px) rotate(0.5deg);
    }
    74% {
      transform: translate3d(0px, 0px, 1px) rotate(0.5deg);
    }
    76% {
      transform: translate3d(0px, 0px, 1px) rotate(0.5deg);
    }
    78% {
      transform: translate3d(1px, 0px, 0px) rotate(0.5deg);
    }
    80% {
      transform: translate3d(1px, 0px, 0px) rotate(0.5deg);
    }
    82% {
      transform: translate3d(0px, 0px, 0px) rotate(0.5deg);
    }
    84% {
      transform: translate3d(1px, 0px, 0px) rotate(0.5deg);
    }
    86% {
      transform: translate3d(0px, 0px, 0px) rotate(0.5deg);
    }
    88% {
      transform: translate3d(0px, 0px, 0px) rotate(0.5deg);
    }
    90% {
      transform: translate3d(1px, 0px, 1px) rotate(0.5deg);
    }
    92% {
      transform: translate3d(1px, 0px, 1px) rotate(0.5deg);
    }
    94% {
      transform: translate3d(1px, 0px, 0px) rotate(0.5deg);
    }
    96% {
      transform: translate3d(1px, 0px, 0px) rotate(0.5deg);
    }
    98% {
      transform: translate3d(0px, 0px, 0px) rotate(0.5deg);
    }
    0%,
    100% {
      transform: translate3d(0, 0, 0) rotate(0);
    }
  }
`;

export default normalize;
