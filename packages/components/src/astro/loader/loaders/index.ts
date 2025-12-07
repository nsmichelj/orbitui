import DotsScaleRotate12 from "./12-dots-scale-rotate.svg";
import RingWithBg180 from "./180-ring-with-bg.svg";
import Ring180 from "./180-ring.svg";
import RingWithBg270 from "./270-ring-with-bg.svg";
import Ring270 from "./270-ring.svg";
import DotsBounce3 from "./3-dots-bounce.svg";
import DotsFade3 from "./3-dots-fade.svg";
import DotsMove3 from "./3-dots-move.svg";
import DotsRotate3 from "./3-dots-rotate.svg";
import DotsScaleMiddle3 from "./3-dots-scale-middle.svg";
import DotsScale3 from "./3-dots-scale.svg";
import DotsRotate6 from "./6-dots-rotate.svg";
import DotsScaleMiddle6 from "./6-dots-scale-middle.svg";
import DotsScale6 from "./6-dots-scale.svg";
import DotsRotate8 from "./8-dots-rotate.svg";
import RingWithBg90 from "./90-ring-with-bg.svg";
import Ring90 from "./90-ring.svg";
import BarsFade from "./bars-fade.svg";
import BarsRotateFade from "./bars-rotate-fade.svg";
import BarsScaleFade from "./bars-scale-fade.svg";
import BarsScaleMiddle from "./bars-scale-middle.svg";
import BarsScale from "./bars-scale.svg";
import BlocksScale from "./blocks-scale.svg";
import BlocksShuffle2 from "./blocks-shuffle-2.svg";
import BlocksShuffle3 from "./blocks-shuffle-3.svg";
import BlocksWave from "./blocks-wave.svg";
import BouncingBall from "./bouncing-ball.svg";
import Clock from "./clock.svg";
import DotRevolve from "./dot-revolve.svg";
import EclipseHalf from "./eclipse-half.svg";
import Eclipse from "./eclipse.svg";
import GooeyBalls1 from "./gooey-balls-1.svg";
import GooeyBalls2 from "./gooey-balls-2.svg";
import Pulse2 from "./pulse-2.svg";
import Pulse3 from "./pulse-3.svg";
import PulseMultiple from "./pulse-multiple.svg";
import PulseRing from "./pulse-ring.svg";
import PulseRings2 from "./pulse-rings-2.svg";
import PulseRings3 from "./pulse-rings-3.svg";
import PulseRingsMultiple from "./pulse-rings-multiple.svg";
import Pulse from "./pulse.svg";
import RingResize from "./ring-resize.svg";
import Tadpole from "./tadpole.svg";
import WifiFade from "./wifi-fade.svg";
import Wifi from "./wifi.svg";
import WindToy from "./wind-toy.svg";

const loaders = {
  "12-dots-scale-rotate": DotsScaleRotate12,
  "180-ring-with-bg": RingWithBg180,
  "180-ring": Ring180,
  "270-ring-with-bg": RingWithBg270,
  "270-ring": Ring270,
  "3-dots-bounce": DotsBounce3,
  "3-dots-fade": DotsFade3,
  "3-dots-move": DotsMove3,
  "3-dots-rotate": DotsRotate3,
  "3-dots-scale-middle": DotsScaleMiddle3,
  "3-dots-scale": DotsScale3,
  "6-dots-rotate": DotsRotate6,
  "6-dots-scale-middle": DotsScaleMiddle6,
  "6-dots-scale": DotsScale6,
  "8-dots-rotate": DotsRotate8,
  "90-ring-with-bg": RingWithBg90,
  "90-ring": Ring90,
  "bars-fade": BarsFade,
  "bars-rotate-fade": BarsRotateFade,
  "bars-scale-fade": BarsScaleFade,
  "bars-scale-middle": BarsScaleMiddle,
  "bars-scale": BarsScale,
  "blocks-scale": BlocksScale,
  "blocks-shuffle-2": BlocksShuffle2,
  "blocks-shuffle-3": BlocksShuffle3,
  "blocks-wave": BlocksWave,
  "bouncing-ball": BouncingBall,
  clock: Clock,
  "dot-revolve": DotRevolve,
  "eclipse-half": EclipseHalf,
  eclipse: Eclipse,
  "gooey-balls-1": GooeyBalls1,
  "gooey-balls-2": GooeyBalls2,
  "pulse-2": Pulse2,
  "pulse-3": Pulse3,
  "pulse-multiple": PulseMultiple,
  "pulse-ring": PulseRing,
  "pulse-rings-2": PulseRings2,
  "pulse-rings-3": PulseRings3,
  "pulse-rings-multiple": PulseRingsMultiple,
  pulse: Pulse,
  "ring-resize": RingResize,
  tadpole: Tadpole,
  "wifi-fade": WifiFade,
  wifi: Wifi,
  "wind-toy": WindToy,
};

export { loaders };

export type LoaderType = keyof typeof loaders;
